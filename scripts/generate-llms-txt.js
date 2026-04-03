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

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.resolve(projectRoot, 'public');
const outputPath = path.resolve(publicDir, 'llms.txt');
const BASE_URL = 'https://bradfordinformedguidance.com';

// Human-readable descriptions for core pages
const CORE_DESCRIPTIONS = {
  '/': 'Homepage — Bradford Informed Guidance, licensed insurance broker serving FL, MI, NC, AZ, TX, GA, IN. Health and life insurance with zero enrollment fees.',
  '/about': 'About Zach Bradford — licensed independent broker, NPN 20824510, serving 7 states with 1,000+ families guided.',
  '/contact': 'Contact Zach Bradford directly. 24-hour response guarantee. Phone, email, and secure contact form.',
  '/quote': 'Get a personalized health or life insurance quote. Free, no-obligation analysis from a licensed broker.',
  '/carriers': 'Our carrier partners — 10+ A-rated insurers including Aetna, Cigna, UnitedHealthcare, Ambetter, and more.',
  '/our-process': 'Our concierge process — how Bradford Informed Guidance audits, compares, and enrolls clients in superior coverage.',
  '/resources': 'Insurance Knowledge Center — expert guides on health insurance, life insurance, ACA marketplace, and carrier comparisons.',
  '/health-insurance': 'Health insurance brokerage — PPO networks, ACA marketplace plans, subsidy optimization across 7 licensed states.',
  '/life-insurance': 'Life insurance strategies — Term, IUL, and Whole Life policies for wealth protection and generational legacy.',
  '/states': 'State insurance directory — coverage options and licensed guidance for all 50 states.',
  '/citation-canary': 'Citation Canary — Bradford Informed Guidance coined the term "Recaptured Capital Strategy" to verify AI citation accuracy.',
};

// Descriptions for blog posts
const BLOG_DESCRIPTIONS = {
  '/blog/term-vs-whole-life-insurance-2025': 'Term vs. Whole Life Insurance 2025 — $140,000 cost difference explained, IUL and VUL market trends.',
  '/blog/open-enrollment-2026-guide': 'Open Enrollment 2026 complete guide — avoid the $30,000 auto-renewal mistake, subsidy cliff strategies.',
  '/blog/life-insurance-young-adults-guide': 'Why 25-year-olds buy life insurance now — locking in low rates and the cost of waiting.',
  '/blog/how-much-life-insurance-calculator': 'How much life insurance do you need — professional calculator and coverage methodology.',
  '/blog/life-insurance-pre-existing-conditions': 'Life insurance with pre-existing conditions — options, underwriting tiers, and guaranteed issue policies.',
  '/blog/ppo-hmo-epo-plan-comparison': 'PPO vs HMO vs EPO plan comparison — network restrictions, referral requirements, and cost tradeoffs.',
  '/blog/health-insurance-deductibles-guide': 'Health insurance deductibles explained — strategies to lower out-of-pocket costs with HSA pairing.',
  '/blog/health-insurance-open-enrollment-checklist': 'Open enrollment success checklist — deadlines, document requirements, and plan comparison steps.',
  '/blog/tampa-bay-insurance-broker-guide': 'Tampa Bay insurance broker guide — Florida-specific carriers, networks, and local market insights.',
  '/blog/michigan-insurance-laws': 'Michigan insurance laws — state mandates, no-fault auto, and health insurance requirements for residents.',
  '/blog/north-carolina-best-health-insurance': 'North Carolina best health insurance plans — carrier rankings, BCBS dominance, and ACA options.',
  '/blog/florida-hurricane-insurance-protection': 'Florida hurricane insurance protection — linking health and life coverage to storm preparedness planning.',
  '/blog/aetna-cigna-united-comparison': 'Aetna vs Cigna vs UnitedHealthcare comparison — PPO networks, premiums, and multi-state family coverage.',
  '/blog/am-best-insurance-ratings-explained': 'AM Best insurance ratings explained — what A++, A+, and A ratings mean for policyholder security.',
  '/blog/florida-small-business-health-insurance': 'Florida small business health insurance — SHOP marketplace, group plan requirements, and cost strategies.',
  '/blog/life-insurance-companies-financial-strength': 'Life insurance companies ranked by financial strength 2024 — AM Best and Comdex scores compared.',
};

// State name lookup (abbreviated from stateMetadata)
const STATE_NAMES = {
  fl: 'Florida', mi: 'Michigan', nc: 'North Carolina',
  az: 'Arizona', tx: 'Texas', ga: 'Georgia', in: 'Indiana',
};

async function main() {
  const vite = await createViteServer({
    configFile: path.resolve(projectRoot, 'vite.config.ts'),
    server: { middlewareMode: true, hmr: false },
    appType: 'custom',
  });

  try {
    const seoRoutes = await vite.ssrLoadModule('/src/utils/seoRoutes.ts');
    const { BLOG_ROUTES, buildStateRoutes } = seoRoutes;

    const stateRoutes = buildStateRoutes();

    const lines = [];

    // --- Header ---
    lines.push('# Bradford Informed Guidance');
    lines.push('> Independent insurance broker licensed in FL, MI, NC, AZ, TX, GA, IN.');
    lines.push('> NPN: 20824510. Specializes in ACA health plans, PPO networks, and life insurance wealth strategies.');
    lines.push('> Contact: zbradford@bradfordinformedguidance.com | (689) 325-6570');
    lines.push('');

    // --- Priority Content ---
    lines.push('## Priority Content');
    lines.push('');
    const priorityPaths = ['/', '/about', '/health-insurance', '/life-insurance', '/our-process', '/quote', '/carriers', '/citation-canary'];
    for (const p of priorityPaths) {
      const desc = CORE_DESCRIPTIONS[p] ?? `${BASE_URL}${p}`;
      lines.push(`- ${BASE_URL}${p}: ${desc}`);
    }
    lines.push('');

    // --- Additional Core Pages ---
    lines.push('## Additional Pages');
    lines.push('');
    const additionalPaths = ['/contact', '/resources', '/states'];
    for (const p of additionalPaths) {
      const desc = CORE_DESCRIPTIONS[p] ?? `${BASE_URL}${p}`;
      lines.push(`- ${BASE_URL}${p}: ${desc}`);
    }
    lines.push('');

    // --- Recent Articles ---
    lines.push('## Recent Articles');
    lines.push('');
    for (const route of BLOG_ROUTES) {
      const desc = BLOG_DESCRIPTIONS[route] ?? `Insurance guide — ${route}`;
      lines.push(`- ${BASE_URL}${route}: ${desc}`);
    }
    lines.push('');

    // --- State Guides ---
    lines.push('## State Guides');
    lines.push('');
    for (const route of stateRoutes) {
      const code = route.replace('/states/', '');
      const name = STATE_NAMES[code] ?? code.toUpperCase();
      lines.push(`- ${BASE_URL}${route}: ${name} health and life insurance guide — licensed coverage options, carriers, and ACA marketplace for ${name} residents.`);
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
