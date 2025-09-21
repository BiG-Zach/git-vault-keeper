import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://bradfordinformedguidance.com';
const HERO_DIR = path.join(__dirname, '..', 'public', 'images', 'hero');

function buildAbsoluteUrl(pathname) {
  return pathname === '/' ? `${BASE_URL}/` : `${BASE_URL}${pathname}`;
}

function writeFileWithTrailingNewline(filePath, contents) {
  const output = contents.endsWith('\n') ? contents : `${contents}\n`;
  fs.writeFileSync(filePath, output);
}

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

function readExistingUrlLastmodMap(filePath) {
  try {
    const xml = fs.readFileSync(filePath, 'utf-8');
    const map = new Map();
    const regex = /<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g;
    let match;
    while ((match = regex.exec(xml))) {
      const loc = match[1].trim();
      const lastmod = match[2].trim();
      map.set(loc, lastmod);
    }
    return map;
  } catch (error) {
    return new Map();
  }
}

function parseLastmod(lastmod) {
  const value = Date.parse(lastmod);
  return Number.isNaN(value) ? null : value;
}

function getHeroImages() {
  const allowedExtensions = new Set(['.webp', '.jpg', '.jpeg', '.png']);

  try {
    const files = fs.readdirSync(HERO_DIR, { withFileTypes: true });
    return files
      .filter(file => file.isFile())
      .map(file => file.name)
      .filter(file => allowedExtensions.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b));
  } catch (error) {
    console.warn('⚠️  Failed to load hero images for sitemap generation:', error);
    return [];
  }
}

function toImageTitle(filename) {
  const variantSuffixes = new Set(['desktop', 'mobile', 'retina', 'tablet', 'wide']);
  const parts = path
    .basename(filename, path.extname(filename))
    .split(/[-_]+/)
    .filter(Boolean);

  if (parts.length === 0) return 'Hero Image';

  const last = parts[parts.length - 1].toLowerCase();
  let variant = null;
  if (variantSuffixes.has(last)) {
    variant = parts.pop();
  }

  const words = parts.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  let title = words.join(' ');
  if (variant) {
    title = `${title} (${variant.charAt(0).toUpperCase()}${variant.slice(1)})`;
  }
  return title || 'Hero Image';
}

function getFileLastModified(filePath) {
  try {
    return fs.statSync(filePath).mtime.toISOString();
  } catch (error) {
    return null;
  }
}

function generateSitemapPages(routes, existingLastmodMap) {
  let latestTimestamp = null;
  const urls = routes
    .slice()
    .sort((a, b) => {
      if (a.path === '/') return -1;
      if (b.path === '/') return 1;
      return a.path.localeCompare(b.path);
    })
    .map(r => {
      const loc = buildAbsoluteUrl(r.path);
      let lastmod = r.dateModified || r.datePublished || existingLastmodMap.get(loc);
      if (!lastmod) lastmod = new Date().toISOString();

      const parsed = parseLastmod(lastmod);
      if (parsed !== null) {
        latestTimestamp = latestTimestamp === null ? parsed : Math.max(latestTimestamp, parsed);
      }

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${getChangefreq(r.path)}</changefreq>
    <priority>${getPriority(r.path)}</priority>
  </url>`;
    })
    .join('\n');

  return {
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`,
    latestLastmod: latestTimestamp ? new Date(latestTimestamp).toISOString() : null,
  };
}

function generateSitemapImages(existingLastmodMap) {
  const heroImages = getHeroImages();
  let latestTimestamp = null;

  const imageUrls = heroImages.map(image => {
    const imagePath = `/images/hero/${image}`;
    const loc = buildAbsoluteUrl(imagePath);
    let lastmod = existingLastmodMap.get(loc) || getFileLastModified(path.join(HERO_DIR, image));
    if (!lastmod) lastmod = new Date().toISOString();

    const parsed = parseLastmod(lastmod);
    if (parsed !== null) {
      latestTimestamp = latestTimestamp === null ? parsed : Math.max(latestTimestamp, parsed);
    }

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${loc}</image:loc>
      <image:title>Insurance Services - ${toImageTitle(image)}</image:title>
      <image:caption>Professional insurance guidance and coverage options</image:caption>
    </image:image>
  </url>`;
  }).join('\n');

  return {
    xml: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageUrls}
</urlset>`,
    latestLastmod: latestTimestamp ? new Date(latestTimestamp).toISOString() : null,
  };
}

function generateSitemapIndex(pagesLastmod, imagesLastmod) {
  const fallback = new Date().toISOString();
  const sitemapPagesLastmod = pagesLastmod || fallback;
  const sitemapImagesLastmod = imagesLastmod || fallback;

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-pages.xml</loc>
    <lastmod>${sitemapPagesLastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-images.xml</loc>
    <lastmod>${sitemapImagesLastmod}</lastmod>
  </sitemap>
</sitemapindex>`;
}

function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  const meta = loadRouteMeta();

  // Augment with all state routes from scripts/states.json as /states/:code
  const statesPath = path.join(__dirname, 'states.json');
  let stateRoutes = [];
  if (fs.existsSync(statesPath)) {
    try {
      const states = JSON.parse(fs.readFileSync(statesPath, 'utf-8'));
      stateRoutes = Object.keys(states).map(code => ({ path: `/states/${code}` }));
    } catch (e) {
      console.warn('⚠️ Failed to read states.json:', e);
    }
  }

  // Deduplicate by path, prefer explicit meta entries
  const byPath = new Map();
  for (const r of meta) byPath.set(r.path, r);
  for (const r of stateRoutes) if (!byPath.has(r.path)) byPath.set(r.path, r);
  const merged = Array.from(byPath.values());

  const existingPagesLastmod = readExistingUrlLastmodMap(path.join(publicDir, 'sitemap-pages.xml'));
  const existingImagesLastmod = readExistingUrlLastmodMap(path.join(publicDir, 'sitemap-images.xml'));

  const { xml: sitemapPages, latestLastmod: pagesLastmod } = generateSitemapPages(merged, existingPagesLastmod);
  const { xml: sitemapImages, latestLastmod: imagesLastmod } = generateSitemapImages(existingImagesLastmod);
  const sitemapIndex = generateSitemapIndex(pagesLastmod, imagesLastmod);

  writeFileWithTrailingNewline(path.join(publicDir, 'sitemap-pages.xml'), sitemapPages);
  writeFileWithTrailingNewline(path.join(publicDir, 'sitemap-images.xml'), sitemapImages);
  // Per project context, public/sitemap.xml is the sitemap index
  writeFileWithTrailingNewline(path.join(publicDir, 'sitemap.xml'), sitemapIndex);

  console.log('✅ Sitemaps generated successfully!');
}

main();
