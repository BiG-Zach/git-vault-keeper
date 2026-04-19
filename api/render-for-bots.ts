/**
 * Vercel Serverless Function — render-for-bots
 *
 * Intercepts bot requests and uses the central SSR renderer for absolute
 * consistency in JSON-LD, E-E-A-T signals, and layout.
 */

import { renderUrl } from '../src/ssr/render';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const path = url.searchParams.get('path') ?? '/';
  
  // Render using the master SSR engine
  const { html, head } = renderUrl(path);

  // Inject head into the base template
  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ${head}
</head>
<body>
  <div id="root">${html}</div>
</body>
</html>`;

  return new Response(fullHtml, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
      'X-Bot-Render': '1',
    },
  });
}
