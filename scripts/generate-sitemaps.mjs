import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes from src/utils/routes.tsx - hardcoded for now since parsing TSX is complex
const ROUTES = [
  "/",
  "/about",
  "/contact",
  "/quote",
  "/carriers",
  "/our-process",
  "/resources",
  "/services/health-insurance",
  "/services/life-insurance",
  "/services/iul-insurance",
  "/services/ppo-networks",
  "/states/florida",
  "/states/michigan",
  "/states/north-carolina",
  "/florida",
  "/michigan",
  "/north-carolina",
  "/referral",
  "/checklist",
  "/privacy-policy",
  "/terms",
  "/blog/term-vs-whole-life-insurance-2024",
  "/blog/florida-health-insurance-guide-2024",
  "/blog/life-insurance-young-adults-guide",
  "/blog/how-much-life-insurance-calculator",
  "/blog/life-insurance-pre-existing-conditions",
  "/blog/ppo-hmo-epo-plan-comparison",
  "/blog/health-insurance-deductibles-guide",
  "/blog/health-insurance-open-enrollment-checklist",
  "/blog/tampa-bay-insurance-broker-guide",
  "/blog/michigan-insurance-laws",
  "/blog/north-carolina-best-health-insurance",
  "/blog/florida-hurricane-insurance-protection",
  "/blog/aetna-cigna-united-comparison",
  "/blog/am-best-insurance-ratings-explained",
  "/blog/florida-small-business-health-insurance",
  "/blog/life-insurance-companies-financial-strength"
];

const BASE_URL = 'https://bradfordinformedguidance.com';
const LASTMOD = new Date().toISOString();

function getPriority(path) {
  if (path === '/') return '1.0';
  if (path.startsWith('/services/')) return '0.9';
  if (path.startsWith('/blog/')) return '0.8';
  if (path === '/about' || path === '/contact' || path === '/quote' || path === '/carriers') return '0.9';
  if (path === '/privacy-policy' || path === '/terms') return '0.3';
  return '0.8';
}

function getChangefreq(path) {
  if (path === '/') return 'weekly';
  if (path.startsWith('/blog/')) return 'monthly';
  if (path === '/privacy-policy' || path === '/terms') return 'yearly';
  return 'monthly';
}

function generateSitemapPages() {
  const urls = ROUTES.map(route => {
    return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${getChangefreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function generateSitemapImages() {
  // Hero images - assuming they exist in public/images/hero/
  const heroImages = [
    'hero-insurance.jpg',
    'hero-family.jpg',
    'hero-business.jpg'
  ];

  const imageUrls = heroImages.map(image => {
    return `  <url>
    <loc>${BASE_URL}/images/hero/${image}</loc>
    <lastmod>${LASTMOD}</lastmod>
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
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-pages.xml</loc>
    <lastmod>${LASTMOD}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-images.xml</loc>
    <lastmod>${LASTMOD}</lastmod>
  </sitemap>
</sitemapindex>`;
}

function main() {
  const publicDir = path.join(__dirname, '..', 'public');

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Generate sitemaps
  const sitemapIndex = generateSitemapIndex();
  const sitemapPages = generateSitemapPages();
  const sitemapImages = generateSitemapImages();

  // Write files
  fs.writeFileSync(path.join(publicDir, 'sitemap_index.xml'), sitemapIndex);
  fs.writeFileSync(path.join(publicDir, 'sitemap-pages.xml'), sitemapPages);
  fs.writeFileSync(path.join(publicDir, 'sitemap-images.xml'), sitemapImages);

  console.log('✅ Sitemaps generated successfully!');
  console.log(`📄 sitemap_index.xml - ${sitemapIndex.split('\n').length} lines`);
  console.log(`📄 sitemap-pages.xml - ${sitemapPages.split('\n').length} lines`);
  console.log(`📄 sitemap-images.xml - ${sitemapImages.split('\n').length} lines`);
}

main();