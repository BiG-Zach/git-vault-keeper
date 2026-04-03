import { mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.resolve(projectRoot, 'public');
const outputPath = path.resolve(publicDir, 'sitemap.xml');

async function main() {
  const vite = await createViteServer({
    configFile: path.resolve(projectRoot, 'vite.config.ts'),
    server: { middlewareMode: true, hmr: false },
    appType: 'custom',
  });

  try {
    const seoRoutes = await vite.ssrLoadModule('/src/utils/seoRoutes.ts');
    const seoUtils = await vite.ssrLoadModule('/src/utils/seo.ts');

    const {
      BLOG_ROUTES,
      CORE_ROUTES,
      REDIRECT_ROUTES,
      ROUTE_COMPONENT_MAP,
      STATE_COMPONENT_PATH,
      THANK_YOU_ROUTE,
      getSeoRoutePaths,
    } = seoRoutes;
    const { canonicalFor, SITE } = seoUtils;

    const routes = getSeoRoutePaths().filter(
      (route) => !REDIRECT_ROUTES.includes(route) && route !== THANK_YOU_ROUTE,
    );

    await mkdir(publicDir, { recursive: true });

    const entries = [];
    for (const route of routes) {
      entries.push(await buildEntry(route));
    }

    const sitemap = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...entries.filter(Boolean),
      '</urlset>',
      '',
    ].join('\n');

    await writeFile(outputPath, sitemap, 'utf8');
    console.log(`Generated sitemap with ${entries.length} URLs at ${outputPath}`);
    console.log(`Sitemap URL configured in robots.txt: ${SITE.url}/sitemap.xml`);

    async function buildEntry(route) {
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

    function getChangeFrequency(route) {
      if (route === '/') return 'weekly';
      if (CORE_ROUTES.includes(route)) return 'weekly';
      if (BLOG_ROUTES.includes(route)) return 'monthly';
      if (route.startsWith('/states/')) return 'monthly';
      return undefined;
    }

    function getPriority(route) {
      if (route === '/') return 1.0;
      if (CORE_ROUTES.includes(route)) return 0.8;
      if (BLOG_ROUTES.includes(route)) return 0.6;
      if (route.startsWith('/states/')) return 0.5;
      return 0.4;
    }

    async function getLastModified(route) {
      const filePath = resolveComponentPath(route);
      if (!filePath) return undefined;
      try {
        const fileStat = await stat(path.resolve(projectRoot, filePath));
        return new Date(fileStat.mtime).toISOString();
      } catch {
        return undefined;
      }
    }

    function resolveComponentPath(route) {
      if (route.startsWith('/states/')) {
        return STATE_COMPONENT_PATH;
      }
      return ROUTE_COMPONENT_MAP[route];
    }
  } finally {
    await vite.close();
  }
}

await main().catch((error) => {
  console.error('Sitemap generation failed:', error);
  process.exit(1);
});
