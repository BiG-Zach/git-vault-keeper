import fs from 'fs';
import path from 'path';

const root = process.cwd();
const sitemapPath = path.join(root, 'public', 'sitemap-pages.xml');
const statesPath = path.join(root, 'scripts', 'states.json');

function readFileSafe(p) {
  try { return fs.readFileSync(p, 'utf-8'); } catch { return null; }
}

function main() {
  const xml = readFileSafe(sitemapPath);
  if (!xml) {
    console.error('[verify-sitemap] ❌ public/sitemap-pages.xml not found');
    process.exit(1);
  }
  const statesRaw = readFileSafe(statesPath);
  if (!statesRaw) {
    console.error('[verify-sitemap] ❌ scripts/states.json not found');
    process.exit(1);
  }
  const states = JSON.parse(statesRaw);
  const base = 'https://bradfordinformedguidance.com';

  const missing = [];
  const present = [];

  for (const code of Object.keys(states)) {
    const loc = `${base}/states/${code}`;
    const found = xml.includes(`<loc>${loc}</loc>`);
    if (!found) missing.push(loc); else present.push(loc);
  }

  console.log(`[verify-sitemap] States present: ${present.length}`);
  if (missing.length) {
    console.error(`[verify-sitemap] ❌ Missing ${missing.length} state URLs in sitemap-pages.xml`);
    for (const m of missing) console.error('  - ' + m);
    process.exit(2);
  }
  console.log('[verify-sitemap] ✅ All state URLs found in sitemap-pages.xml');
}

main();
