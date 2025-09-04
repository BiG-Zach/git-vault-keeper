import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  "/thank-you",
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

const BASE_URL = 'http://localhost:8082';
const DIST_DIR = path.join(__dirname, '..', 'dist');

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();

  try {
    console.log(`📄 Prerendering ${route}...`);

    // Set user agent to Googlebot for proper rendering
    await page.setUserAgent('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');

    // Navigate to the route
    const url = `${BASE_URL}${route}`;
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    // Wait for React to hydrate and render
    await page.waitForSelector('title', { timeout: 10000 });

    // Get the rendered HTML
    const html = await page.content();

    // Validate that HTML contains expected elements
    const hasTitle = html.includes('<title>');
    const hasMetaDesc = html.includes('name="description"');
    const hasH1 = html.includes('<h1');
    const hasJsonLd = html.includes('application/ld+json');

    if (!hasTitle || !hasMetaDesc || !hasH1) {
      console.warn(`⚠️  Warning: ${route} missing SEO elements (title: ${hasTitle}, meta: ${hasMetaDesc}, h1: ${hasH1})`);
    }

    // Save to dist directory maintaining route structure
    const filePath = path.join(DIST_DIR, route === '/' ? 'index.html' : `${route}/index.html`);
    const dirPath = path.dirname(filePath);

    // Ensure directory exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Write the HTML file
    fs.writeFileSync(filePath, html);

    console.log(`✅ Saved ${filePath}`);

    return { route, success: true, hasTitle, hasMetaDesc, hasH1, hasJsonLd };

  } catch (error) {
    console.error(`❌ Failed to prerender ${route}:`, error.message);
    return { route, success: false, error: error.message };
  } finally {
    await page.close();
  }
}

async function main() {
  let browser;
  let results = [];

  try {
    // Ensure dist directory exists
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR, { recursive: true });
    }

    console.log('🌐 Launching Puppeteer browser...');
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    console.log(`🚀 Prerendering ${ROUTES.length} routes from ${BASE_URL}...`);

    // Prerender all routes
    for (const route of ROUTES) {
      const result = await prerenderRoute(browser, route);
      results.push(result);
    }

    // Generate summary
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;

    console.log('\n📊 Prerendering Summary:');
    console.log(`✅ Successful: ${successful}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📄 Total routes: ${ROUTES.length}`);

    if (failed > 0) {
      console.log('\n❌ Failed routes:');
      results.filter(r => !r.success).forEach(r => {
        console.log(`  - ${r.route}: ${r.error}`);
      });
    }

    // Check SEO elements
    const missingSEO = results.filter(r => r.success && (!r.hasTitle || !r.hasMetaDesc || !r.hasH1));
    if (missingSEO.length > 0) {
      console.log('\n⚠️  Routes missing SEO elements:');
      missingSEO.forEach(r => {
        console.log(`  - ${r.route}: title=${r.hasTitle}, meta=${r.hasMetaDesc}, h1=${r.hasH1}`);
      });
    }

  } catch (error) {
    console.error('💥 Prerendering failed:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

main();