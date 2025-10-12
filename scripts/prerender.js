import { mkdir, rm, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distRoot = path.resolve(projectRoot, 'dist');
const templatePath = path.resolve(projectRoot, 'index.html');

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
    } = await vite.ssrLoadModule('/src/utils/seoRoutes.ts');

    const routes = getSeoRoutePaths().filter(
      (route) => !REDIRECT_ROUTES.includes(route) && route !== THANK_YOU_ROUTE,
    );

    const { renderUrl } = await vite.ssrLoadModule('/src/ssr/render.ts');

    await mkdir(distRoot, { recursive: true });

    const template = await readFile(templatePath, 'utf8');

    for (const route of routes) {
      console.log(`Pre-rendering ${route}`);
      const result = renderUrl(route);
      const html = injectIntoTemplate(template, result.html, result.head, result.seo.lang);
      const segments = route === '/' ? [] : route.replace(/^\//, '').split('/');
      const targetDir = path.join(distRoot, ...segments);
      const outputPath = path.join(targetDir, 'index.html');
      if (route !== '/') {
        await rm(targetDir, { recursive: true, force: true });
      }
      await mkdir(targetDir, { recursive: true });
      await writeFile(outputPath, html, 'utf8');
    }

    console.log(`Pre-rendered ${routes.length} routes to ${distRoot}`);
  } finally {
    await vite.close();
  }
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
