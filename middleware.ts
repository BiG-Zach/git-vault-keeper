/**
 * Vercel Edge Middleware — Bot-Aware Rendering for Blog Routes
 *
 * For non-Next.js Vercel projects, the middleware file MUST live at the
 * project root as `middleware.ts`. Placing it in a subdirectory will not
 * be picked up by Vercel's build system.
 *
 * Intercepts requests to /blog/* paths from known AI/search bot User-Agents
 * and proxies them to /api/render-for-bots, which returns pre-rendered HTML
 * with proper meta tags and JSON-LD schemas — without changing the URL.
 *
 * All other requests pass through unchanged to the Vite SPA.
 */

const BOT_PATTERN =
  /GPTBot|ClaudeBot|PerplexityBot|Bingbot|GoogleOther|OAI-SearchBot|Googlebot/i;

export default async function middleware(request: Request): Promise<Response | void> {
  const ua = request.headers.get('user-agent') ?? '';
  const url = new URL(request.url);

  // Only intercept /blog/* paths from known bots
  if (!BOT_PATTERN.test(ua) || !url.pathname.startsWith('/blog/')) {
    // Pass through — Vercel continues to the next handler (SPA rewrite)
    return;
  }

  // Proxy the request to the render-for-bots serverless function.
  // The bot sees the original /blog/:slug URL; the response comes from the API.
  const apiUrl = new URL('/api/render-for-bots', url.origin);
  apiUrl.searchParams.set('path', url.pathname);

  return fetch(apiUrl.toString(), {
    headers: {
      'x-forwarded-host': url.host,
      'user-agent': ua,
    },
  });
}

export const config = {
  matcher: ['/blog/:path*'],
};
