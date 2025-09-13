import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://bradfordinformedguidance.com';

function loadRouteMeta() {
  const metaPath = path.join(__dirname, 'route-meta.json');
  const raw = fs.readFileSync(metaPath, 'utf-8');
  return JSON.parse(raw);
}

function getPriority(routePath) {
  if (routePath === '/') return '1.0';
  if (routePath.startsWith('/services/')) return '0.9';
  if (routePath.startsWith('/blog/')) return '0.8';
  if (['/about','/contact','/quote','/carriers'].includes(routePath)) return '0.9';
  if (['/privacy-policy','/terms'].includes(routePath)) return '0.3';
  return '0.8';
}

function getChangefreq(routePath) {
  if (routePath === '/') return 'weekly';
  if (routePath.startsWith('/blog/')) return 'monthly';
  if (['/privacy-policy','/terms'].includes(routePath)) return 'yearly';
  return 'monthly';
}

function generateSitemapPages(routes) {
  const urls = routes.map(r => {
    const loc = `${BASE_URL}${r.path}`;
    const lastmod = r.dateModified || r.datePublished || new Date().toISOString();
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${getChangefreq(r.path)}</changefreq>
    <priority>${getPriority(r.path)}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function generateSitemapImages() {
  const heroImages = [
    'hero-insurance.jpg',
    'hero-family.jpg',
    'hero-business.jpg'
  ];

  const imageUrls = heroImages.map(image => {
    return `  <url>
    <loc>${BASE_URL}/images/hero/${image}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${BASE_URL}/images/hero/${image}</image:loc>
      <image:title>Insurance Services - ${image.replace('.jpg', '').replace('-', ' ')}</image:title>
      <image:caption>Professional insurance guidance and coverage options</image:caption>
    </image:image>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageUrls}
</urlset>`;
}

function generateSitemapIndex() {
  const lastmod = new Date().toISOString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-pages.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-images.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>`;
}

function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  const meta = loadRouteMeta();
  // Use all entries from route-meta.json (assumed already filtered to indexable)
  const sitemapPages = generateSitemapPages(meta);
  const sitemapImages = generateSitemapImages();
  const sitemapIndex = generateSitemapIndex();

  fs.writeFileSync(path.join(publicDir, 'sitemap-pages.xml'), sitemapPages);
  fs.writeFileSync(path.join(publicDir, 'sitemap-images.xml'), sitemapImages);
  // Per project context, public/sitemap.xml is the sitemap index
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapIndex);

  console.log('✅ Sitemaps generated successfully!');
}

main();