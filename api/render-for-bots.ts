/**
 * Vercel Serverless Function — render-for-bots
 *
 * Called by Edge Middleware when a known AI/search bot requests a /blog/* URL.
 * Fetches the post from Sanity CMS and returns a complete HTML document with:
 *   - <title> and <meta description> from the post's SEO fields
 *   - <link rel="canonical"> pointing to the correct URL
 *   - Article JSON-LD schema
 *   - InsuranceAgency JSON-LD schema
 *   - Semantic <article> HTML with the post title and excerpt
 *
 * Uses its own Sanity client (process.env) since import.meta.env is Vite-only.
 */

import { createClient } from '@sanity/client';

export const config = {
  runtime: 'edge',
};

const SITE_ORIGIN = 'https://bradfordinformedguidance.com';

interface SanityPost {
  title: string | null;
  excerpt: string | null;
  publishedAt: string | null;
  seo: {
    metaTitle: string | null;
    metaDescription: string | null;
  } | null;
}

function buildSanityClient() {
  const projectId = process.env.VITE_SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID;
  const dataset = process.env.VITE_SANITY_DATASET ?? process.env.SANITY_DATASET ?? 'production';

  if (!projectId) {
    throw new Error('Sanity project ID not configured (VITE_SANITY_PROJECT_ID or SANITY_PROJECT_ID)');
  }

  return createClient({
    projectId,
    dataset,
    useCdn: true,
    apiVersion: '2024-01-01',
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildHtml(post: SanityPost, canonicalPath: string): string {
  const title = escapeHtml(post.seo?.metaTitle ?? post.title ?? 'Bradford Informed Guidance Blog');
  const description = escapeHtml(
    post.seo?.metaDescription ??
      post.excerpt ??
      'Expert insurance guidance from Bradford Informed Guidance.',
  );
  const headline = escapeHtml(post.title ?? title);
  const excerpt = escapeHtml(post.excerpt ?? '');
  const canonicalUrl = `${SITE_ORIGIN}${canonicalPath}`;
  const publishedAt = post.publishedAt ?? new Date().toISOString();

  const articleSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title ?? title,
    description: post.excerpt ?? description,
    datePublished: publishedAt,
    author: {
      '@type': 'Person',
      name: 'Zach Bradford',
      url: `${SITE_ORIGIN}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bradford Informed Guidance',
      url: SITE_ORIGIN,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  });

  const agencySchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: 'Bradford Informed Guidance',
    url: SITE_ORIGIN,
    telephone: '+1-689-325-6570',
    areaServed: ['FL', 'MI', 'NC', 'AZ', 'TX', 'GA', 'IN'],
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonicalUrl}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:type" content="article" />
  <script type="application/ld+json">${articleSchema}</script>
  <script type="application/ld+json">${agencySchema}</script>
</head>
<body>
  <header>
    <a href="${SITE_ORIGIN}">Bradford Informed Guidance</a>
  </header>
  <main>
    <article>
      <h1>${headline}</h1>
      ${excerpt ? `<p>${excerpt}</p>` : ''}
      <p>
        <a href="${canonicalUrl}">Read the full article on our website</a>
      </p>
    </article>
  </main>
  <footer>
    <p>&copy; Bradford Informed Guidance &mdash; Licensed Insurance Broker</p>
  </footer>
</body>
</html>`;
}

export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const path = url.searchParams.get('path') ?? '';

  // Extract slug from /blog/:slug
  const slugMatch = path.match(/^\/blog\/([^/]+)/);
  if (!slugMatch) {
    return new Response('Not Found', { status: 404, headers: { 'Content-Type': 'text/plain' } });
  }

  const slug = slugMatch[1];

  let client;
  try {
    client = buildSanityClient();
  } catch (err) {
    console.error('[render-for-bots] Sanity client init failed:', err);
    return new Response('Service Unavailable', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  let post: SanityPost | null = null;
  try {
    post = await client.fetch<SanityPost | null>(
      `*[_type == "post" && slug.current == $slug && status == "published"][0]{
        title,
        excerpt,
        publishedAt,
        "seo": seo{ metaTitle, metaDescription }
      }`,
      { slug },
    );
  } catch (err) {
    console.error('[render-for-bots] Sanity fetch failed:', err);
    return new Response('Service Unavailable', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  if (!post) {
    return new Response('Not Found', { status: 404, headers: { 'Content-Type': 'text/plain' } });
  }

  const html = buildHtml(post, path);

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
      'X-Bot-Render': '1',
    },
  });
}
