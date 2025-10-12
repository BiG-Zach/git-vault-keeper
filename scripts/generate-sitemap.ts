import { mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  BLOG_ROUTES,
  CORE_ROUTES,
  REDIRECT_ROUTES,
  ROUTE_COMPONENT_MAP,
  STATE_COMPONENT_PATH,
  THANK_YOU_ROUTE,
  buildStateRoutes,
  getSeoRoutePaths,
} from '../src/utils/seoRoutes.ts';
import { canonicalFor, SITE } from '../src/utils/seo.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.resolve(projectRoot, 'public');
const outputPath = path.resolve(publicDir, 'sitemap.xml');

const routes = getSeoRoutePaths().filter(
  (route) => !REDIRECT_ROUTES.includes(route) && route !== THANK_YOU_ROUTE,
);

async function main() {
  await mkdir(publicDir, { recursive: true });

  const urls = await Promise.all(routes.map(buildEntry));
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.filter(Boolean),
    '</urlset>',
    '',
  ].join('\n');

  await writeFile(outputPath, sitemap, 'utf8');
  console.log(`Generated sitemap with ${urls.length} URLs at ${outputPath}`);
  console.log(`Sitemap URL configured in robots.txt: ${SITE.url}/sitemap.xml`);
}

async function buildEntry(route: string) {
  const loc = canonicalFor(route);
  const changefreq = getChangeFrequency(route);
  const priority = getPriority(route);
  const lastmod = await getLastModified(route);

  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    changefreq ? `    <changefreq>${changefreq}</changefreq>` : null,
    priority ? `    <priority>${priority.toFixed(1)}</priority>` : null,
    '  </url>',
  ]
    .filter(Boolean)
    .join('\n');
}

function getChangeFrequency(route: string) {
  if (route === '/') return 'weekly';
  if (CORE_ROUTES.includes(route)) return 'weekly';
  if (BLOG_ROUTES.includes(route)) return 'monthly';
  if (route.startsWith('/states/')) return 'monthly';
  return undefined;
}

function getPriority(route: string) {
  if (route === '/') return 1.0;
  if (CORE_ROUTES.includes(route)) return 0.8;
  if (BLOG_ROUTES.includes(route)) return 0.6;
  if (route.startsWith('/states/')) return 0.5;
  return 0.4;
}

async function getLastModified(route: string) {
  const filePath = resolveComponentPath(route);
  if (!filePath) return undefined;
  try {
    const fileStat = await stat(path.resolve(projectRoot, filePath));
    return new Date(fileStat.mtime).toISOString();
  } catch {
    return undefined;
  }
}

function resolveComponentPath(route: string) {
  if (route.startsWith('/states/')) {
    return STATE_COMPONENT_PATH;
  }
  return ROUTE_COMPONENT_MAP[route];
}

await main();
