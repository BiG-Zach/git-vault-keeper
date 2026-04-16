import { mkdir, rm, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distRoot = path.resolve(projectRoot, 'dist');
const templatePath = path.resolve(distRoot, 'index.html');
const cachePath = path.resolve(projectRoot, '.sanity-cache.json');

const SANITY_PROJECT_ID = process.env.VITE_SANITY_PROJECT_ID || 'k8oe8f17';
const SANITY_DATASET = process.env.VITE_SANITY_DATASET || 'production';
const SANITY_API_VERSION = '2024-01-01';
const SIZE_WARN_BYTES = 50 * 1024;

const POST_QUERY = `*[_type == "post" && status == "published"]{
  title,
  slug,
  body,
  excerpt,
  publishedAt,
  targetState,
  contentTrack,
  bridgeType,
  "seo": seo{
    metaTitle,
    metaDescription,
    focusKeyword
  },
  targetQuery,
  gapDefeated
}`;

async function fetchPublishedPosts() {
  const client = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    apiVersion: SANITY_API_VERSION,
    useCdn: false,
  });
  return client.fetch(POST_QUERY);
}

async function loadCachedSlugCount() {
  try {
    const raw = await readFile(cachePath, 'utf8');
    const cached = JSON.parse(raw);
    return Array.isArray(cached) ? cached.length : 0;
  } catch {
    return null;
  }
}

async function main() {
  console.log('Starting prerender script');
  const vite = await createViteServer({
    configFile: path.resolve(projectRoot, 'vite.config.ts'),
    server: { middlewareMode: true, hmr: false },
    appType: 'custom',
  });

  try {
    const {
      getSeoRoutePaths,
      REDIRECT_ROUTES,
      THANK_YOU_ROUTE,
      ROUTE_COMPONENT_MAP,
    } = await vite.ssrLoadModule('/src/utils/seoRoutes.ts');

    const routes = getSeoRoutePaths().filter(
      (route) => !REDIRECT_ROUTES.includes(route) && route !== THANK_YOU_ROUTE,
    );

    // Fetch Sanity-sourced posts. Hard-fail on network/API error — silent
    // degradation is what caused the un-indexing bug this script fixes.
    let sanityPosts = [];
    try {
      sanityPosts = await fetchPublishedPosts();
    } catch (error) {
      const cachedCount = await loadCachedSlugCount();
      const apiUrl = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}`;
      console.error('');
      console.error('✗ Sanity fetch failed during prerender.');
      console.error(`  projectId: ${SANITY_PROJECT_ID}`);
      console.error(`  dataset:   ${SANITY_DATASET}`);
      console.error(`  endpoint:  ${apiUrl}`);
      console.error(
        `  verify:    curl https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/ping`,
      );
      if (cachedCount !== null) {
        console.error(
          `  last-known-good cache: ${cachedCount} post(s) in ${path.relative(projectRoot, cachePath)}`,
        );
      } else {
        console.error('  no cached slugs on disk — this is the first failed run.');
      }
      console.error('');
      throw error;
    }

    if (!Array.isArray(sanityPosts) || sanityPosts.length === 0) {
      console.warn('⚠️  Sanity returned 0 published posts — skipping dynamic blog prerender.');
      sanityPosts = [];
    }

    try {
      const cachePayload = sanityPosts.map((p) => ({
        slug: p?.slug?.current,
        publishedAt: p?.publishedAt,
      }));
      await writeFile(cachePath, JSON.stringify(cachePayload, null, 2), 'utf8');
    } catch (err) {
      console.warn('⚠️  Failed to write .sanity-cache.json (non-fatal):', err.message);
    }

    const hardcoded = new Set(Object.keys(ROUTE_COMPONENT_MAP));
    const sanityRoutes = [];
    for (const post of sanityPosts) {
      const slug = post?.slug?.current;
      if (!slug) continue;
      const route = `/blog/${slug}`;
      if (hardcoded.has(route)) {
        console.warn(
          `⚠️  Sanity post "${slug}" collides with hardcoded route — Sanity version ignored. Delete the hardcoded file or rename the Sanity slug.`,
        );
        continue;
      }
      sanityRoutes.push({ route, post });
    }

    const { renderUrl } = await vite.ssrLoadModule('/src/ssr/render.ts');

    await mkdir(distRoot, { recursive: true });
    const template = await readFile(templatePath, 'utf8');

    for (const route of routes) {
      console.log(`Pre-rendering ${route}`);
      const result = renderUrl(route);
      await writeRoute(route, template, result);
    }

    for (const { route, post } of sanityRoutes) {
      const slug = post.slug.current;
      const payloadBytes = Buffer.byteLength(JSON.stringify(post), 'utf8');
      if (payloadBytes > SIZE_WARN_BYTES) {
        console.warn(
          `⚠️  /blog/${slug} preloaded payload is ${(payloadBytes / 1024).toFixed(1)} KB (>${SIZE_WARN_BYTES / 1024} KB soft limit). Consider trimming body blocks.`,
        );
      }
      console.log(`Pre-rendering ${route} (Sanity, ${(payloadBytes / 1024).toFixed(1)} KB)`);
      const result = renderUrl(route, { slug, data: post });
      await writeRoute(route, template, result);
    }

    const totalRoutes = routes.length + sanityRoutes.length;
    console.log(
      `Pre-rendered ${totalRoutes} routes (${sanityRoutes.length} from Sanity) to ${distRoot}`,
    );
  } finally {
    await vite.close();
  }
}

async function writeRoute(route, template, result) {
  const html = injectIntoTemplate(template, result.html, result.head, result.seo.lang);
  const segments = route === '/' ? [] : route.replace(/^\//, '').split('/');
  const targetDir = path.join(distRoot, ...segments);
  const outputPath = path.join(targetDir, 'index.html');
  await mkdir(targetDir, { recursive: true });
  await rm(outputPath, { force: true });
  await writeFile(outputPath, html, 'utf8');
}

function injectIntoTemplate(template, appHtml, head, lang) {
  let html = template;
  html = html.replace(/<html\s+lang="[^"]*"/, `<html lang="${lang}"`);
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  html = html.replace('<title>Bradford Informed Guidance</title>', head);
  return html;
}

await main().catch((error) => {
  console.error('Pre-render failed:', error);
  process.exit(1);
});
