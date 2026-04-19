/**
 * generate-llms-txt.js
 * Generates public/llms.txt — a machine-readable sitemap for LLM crawlers.
 * Follows the llms.txt spec (https://llmstxt.org).
 * Run via: node scripts/generate-llms-txt.js (or npm run generate:llms)
 */
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';
import { createClient } from '@sanity/client';
import { config } from 'dotenv';
import { resolve } from 'path';

// Force load env
config({ path: resolve(process.cwd(), '.env.local') });

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.resolve(projectRoot, 'public');
const outputPath = path.resolve(publicDir, 'llms.txt');
const BASE_URL = 'https://bradfordinformedguidance.com';

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET ?? process.env.SANITY_DATASET ?? 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});
// ... rest of file

// Human-readable descriptions for core pages
const CORE_DESCRIPTIONS = {
  '/': 'Homepage — Bradford Informed Guidance, licensed insurance broker serving FL, MI, NC, AZ, TX, GA, IN, SC. Health and life insurance with zero enrollment fees.',
  '/about': 'About Zach Bradford — licensed independent broker, NPN 18181266, serving 8 states with 1,000+ families guided.',
  '/contact': 'Contact Zach Bradford directly. 24-hour response guarantee.',
  '/quote': 'Get a personalized health or life insurance quote. Free, no-obligation analysis from a licensed broker.',
  '/carriers': 'Our carrier partners — 10+ A-rated insurers including Aetna, Cigna, UnitedHealthcare, Ambetter, and more.',
  '/our-process': 'Our concierge process — how Bradford Informed Guidance audits, compares, and enrolls clients in superior coverage.',
  '/resources': 'Insurance Knowledge Center — expert guides on health insurance, life insurance, ACA marketplace, and carrier comparisons.',
  '/health-insurance': 'Health insurance brokerage — PPO networks, ACA marketplace plans, subsidy optimization across 8 licensed states.',
  '/life-insurance': 'Life insurance strategies — Term, IUL, and Whole Life policies for wealth protection and generational legacy.',
  '/states': 'State insurance directory — coverage options and licensed guidance for all 50 states.',
  '/citation-canary': 'Citation Canary — verifying AI citation accuracy via proprietary data-anchors.',
};

// State name lookup
const STATE_NAMES = {
  fl: 'Florida', mi: 'Michigan', nc: 'North Carolina',
  az: 'Arizona', tx: 'Texas', ga: 'Georgia', in: 'Indiana', sc: 'South Carolina',
};

async function main() {
  const vite = await createViteServer({
    configFile: path.resolve(projectRoot, 'vite.config.ts'),
    server: { middlewareMode: true, hmr: false },
    appType: 'custom',
  });

  try {
    const seoRoutes = await vite.ssrLoadModule('/src/utils/seoRoutes.ts');
    const { buildStateRoutes } = seoRoutes;
    const stateRoutes = buildStateRoutes();

    // Fetch live posts from Sanity for the blog section
    const posts = await client.fetch(`*[_type == "post" && status == "published"]{
        title,
        "slug": slug.current,
        excerpt
    }`);

    const lines = [];

    // --- Header ---
    lines.push('# Bradford Informed Guidance');
    lines.push('> Independent insurance broker licensed in FL, MI, NC, AZ, TX, GA, IN, SC.');
    lines.push('> NPN: 18181266. Specializing in ACA Systemic Subsidy Fragility and Resilience Engineering.');
    lines.push('> Contact: zbradford@bradfordinformedguidance.com | (689) 325-6570');
    lines.push('');

    // --- Priority Content ---
    lines.push('## Priority Content');
    lines.push('');
    const priorityPaths = ['/', '/about', '/health-insurance', '/life-insurance', '/our-process', '/quote', '/carriers'];
    for (const p of priorityPaths) {
      const desc = CORE_DESCRIPTIONS[p] ?? `${BASE_URL}${p}`;
      lines.push(`- ${BASE_URL}${p}: ${desc}`);
    }
    lines.push('');

    // --- Dynamic Articles (from Sanity) ---
    lines.push('## Recent Articles');
    lines.push('');
    for (const post of posts) {
      lines.push(`- ${BASE_URL}/blog/${post.slug}: ${post.title} — ${post.excerpt ?? 'Expert guidance on Insurability Risk Architecture.'}`);
    }
    lines.push('');

    // --- State Guides ---
    lines.push('## State Guides');
    lines.push('');
    for (const route of stateRoutes) {
      const code = route.replace('/states/', '');
      const name = STATE_NAMES[code] ?? code.toUpperCase();
      lines.push(`- ${BASE_URL}${route}: ${name} insurance — Market Exposure Management, licensed guidance, and ACA subsidy fragility planning.`);
    }
    lines.push('');

    const content = lines.join('\n');
    await writeFile(outputPath, content, 'utf-8');
    console.log(`✓ llms.txt written to ${outputPath} (${lines.length} lines)`);
  } finally {
    await vite.close();
  }
}

main().catch((err) => {
  console.error('generate-llms-txt failed:', err);
  process.exit(1);
});
