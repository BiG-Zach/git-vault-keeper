#!/usr/bin/env node

/**
 * Generate static, SEO-complete HTML for all indexable routes (no headless browser)
 * Uses scripts/route-meta.json as the single source of truth.
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://bradfordinformedguidance.com';

function loadRouteMeta() {
  const metaPath = path.join(__dirname, 'route-meta.json');
  const raw = fs.readFileSync(metaPath, 'utf-8');
  const list = JSON.parse(raw);
  return list;
}

function loadStates() {
  const statesPath = path.join(__dirname, 'states.json');
  if (!fs.existsSync(statesPath)) return {};
  try {
    return JSON.parse(fs.readFileSync(statesPath, 'utf-8'));
  } catch (e) {
    console.warn('⚠️ Failed to read states.json:', e);
    return {};
  }
}

function readBuildAssets() {
  // Extract built asset tags from dist/index.html to ensure hydration works
  const indexPath = path.join(__dirname, '..', 'dist', 'index.html');
  if (!fs.existsSync(indexPath)) return { scripts: '', styles: '' };
  const html = fs.readFileSync(indexPath, 'utf-8');
  const headAssets = [];
  const assetRegex = /<(script[^>]*type="module"[^>]*><\/script>|link[^>]*rel="modulepreload"[^>]*>|link[^>]*rel="stylesheet"[^>]*>)/g;
  let m;
  while ((m = assetRegex.exec(html)) !== null) {
    headAssets.push(m[0]);
  }
  const scripts = headAssets.filter(t => t.startsWith('<script')).join('\n    ');
  const styles = headAssets.filter(t => t.startsWith('<link')).join('\n    ');
  return { scripts, styles };
}

function toCanonical(p) {
  const pathNorm = p.startsWith('/') ? p : `/${p}`;
  return `${BASE_URL}${pathNorm}`;
}

function makeBreadcrumbJsonLd(breadcrumbs, canonical) {
  const items = (breadcrumbs || []).map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    item: toCanonical(b.url || '/')
  }));
  // Ensure the current page is included as the last item if not provided
  if (!items.length || items[items.length - 1].item !== canonical) {
    items.push({ '@type': 'ListItem', position: items.length + 1, name: 'Page', item: canonical });
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  };
}

function makeWebPageJsonLd(route, canonical) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: route.title,
    description: route.description,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`
    }
  };
}

function makeArticleJsonLd(route, canonical) {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: route.title,
    description: route.description,
    author: { '@type': 'Organization', name: route.authorName || 'Bradford Informed Guidance' },
    datePublished: route.datePublished || new Date().toISOString(),
    dateModified: route.dateModified || route.datePublished || new Date().toISOString(),
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    url: canonical
  };
  if (route.image) {
    article.image = Array.isArray(route.image) ? route.image : [route.image];
  }
  article.publisher = { '@type': 'Organization', name: 'Bradford Informed Guidance' };
  return article;
}

function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function generateHTML(route, assets) {
  const canonical = toCanonical(route.path);
  const title = escapeHtml(route.title || 'Bradford Informed Guidance');
  const description = escapeHtml(route.description || '');
  const h1 = escapeHtml(route.h1 || route.title || 'Bradford Informed Guidance');
  const keywords = Array.isArray(route.keywords) ? route.keywords.join(', ') : (route.keywords || '');

  const breadcrumbJsonLd = makeBreadcrumbJsonLd(route.breadcrumbs || [], canonical);
  const webPageJsonLd = makeWebPageJsonLd(route, canonical);
  const jsonLdBlocks = [breadcrumbJsonLd, webPageJsonLd];
  if (route.type === 'blog') {
    jsonLdBlocks.push(makeArticleJsonLd(route, canonical));
  }

  return `<!doctype html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="canonical" href="${canonical}"/>
<title>${title}</title><meta name="description" content="${description}"/>${keywords ? `
<meta name=\"keywords\" content=\"${escapeHtml(keywords)}\"/>` : ''}
<meta name="robots" content="index, follow"/>
<meta property="og:title" content="${title}"/>
<meta property="og:description" content="${description}"/>
<meta property="og:url" content="${canonical}"/>
<meta property="og:type" content="website"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="${title}"/>
<meta name="twitter:description" content="${description}"/>
${assets.styles}
</head><body>
<main id="prerender">
  <header><h1>${h1}</h1></header>
  ${description ? `<section><p>${description}</p></section>` : ''}
</main>
${jsonLdBlocks.map(obj => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`).join('')}
<div id="root"></div>
${assets.scripts}
</body></html>`;
}

function generateRouteHTMLFiles() {
  console.log('🔧 Generating SEO-complete static HTML for indexable routes...');
  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    console.log('❌ dist directory not found. Run npm run build first.');
    process.exit(1);
  }

  const metaList = loadRouteMeta();
  const states = loadStates();
  const assets = readBuildAssets();
  let generated = 0;

  // Build augmented route list with all /states/:code
  const byPath = new Map();
  for (const r of metaList) byPath.set(r.path, r);
  for (const [code, name] of Object.entries(states)) {
    const p = `/states/${code}`;
    if (!byPath.has(p)) {
      byPath.set(p, {
        path: p,
        title: `${name} Private Health Insurance | Bradford Informed Guidance`,
        description: `Explore medically underwritten private health insurance options in ${name}. Get expert guidance and compare plans tailored to your needs.`,
        h1: `${name} Health Insurance Guidance`,
        keywords: [`${name} health insurance`, 'private health insurance', 'PPO options'],
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'States', url: p },
          { name: name, url: p }
        ],
        type: 'state'
      });
    }
  }
  const finalList = Array.from(byPath.values());

  for (const route of finalList) {
    const rawPath = route.path || '';
    const isRoot = rawPath === '/' || rawPath === '';
    const routePath = rawPath.replace(/^\//, '');
    const outDir = isRoot ? distDir : path.join(distDir, routePath);
    const outFile = path.join(outDir, 'index.html');
    fs.mkdirSync(outDir, { recursive: true });

    const html = generateHTML(route, assets);
    fs.writeFileSync(outFile, html);
    console.log(`✅ Generated: ${outFile}`);
    generated++;
  }

  console.log(`\n🎯 Successfully generated ${generated} SEO HTML files from route-meta.json`);
}

// Execute if run directly
if (require.main === module) {
  generateRouteHTMLFiles();
}

module.exports = { generateRouteHTMLFiles };