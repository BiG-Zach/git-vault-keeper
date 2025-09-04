#!/usr/bin/env node

/**
 * Phase 3 SEO Verification Script
 * Validates canonical URLs, meta tags, and sitemap implementation
 */

import puppeteer from 'puppeteer';
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Configuration
const BASE_URL = process.env.TEST_URL || 'http://localhost:8080';
const PRODUCTION_URL = 'https://bradfordinformedguidance.com';
const EXPECTED_CANONICAL_DOMAIN = 'bradfordinformedguidance.com';

// Test pages
const TEST_PAGES = [
  { path: '/', title: 'Bradford Informed Guidance' },
  { path: '/services/health-insurance', title: 'Best Health Insurance Plans' },
  { path: '/services/life-insurance', title: 'Life Insurance Plans' },
  { path: '/services/iul-insurance', title: 'Indexed Universal Life Insurance' },
  { path: '/services/ppo-networks', title: 'PPO Health Insurance Plans' },
  { path: '/states/florida', title: 'Florida Health Insurance' },
  { path: '/about', title: 'About Bradford Informed Guidance' }
];

class SEOVerifier {
  constructor() {
    this.browser = null;
    this.results = {
      passed: 0,
      failed: 0,
      errors: []
    };
  }

  async init() {
    console.log('🚀 Starting Phase 3 SEO Verification...\n');
    this.browser = await puppeteer.launch({ 
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  log(type, message) {
    const icons = { pass: '✅', fail: '❌', info: 'ℹ️', warn: '⚠️' };
    console.log(`${icons[type] || '•'} ${message}`);
  }

  async testPage(url, expectedTitle) {
    const page = await this.browser.newPage();
    try {
      // Set user agent to mimic Google bot
      await page.setUserAgent('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');
      
      // Navigate and wait for content
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Wait for React to render
      await page.waitForTimeout(2000);

      const results = await page.evaluate(() => {
        return {
          title: document.title,
          canonical: document.querySelector('link[rel="canonical"]')?.href,
          description: document.querySelector('meta[name="description"]')?.content,
          robots: document.querySelector('meta[name="robots"]')?.content,
          ogTitle: document.querySelector('meta[property="og:title"]')?.content,
          ogDescription: document.querySelector('meta[property="og:description"]')?.content,
          ogImage: document.querySelector('meta[property="og:image"]')?.content,
          h1: document.querySelector('h1')?.textContent?.trim(),
          structuredData: Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
            .map(script => {
              try { return JSON.parse(script.innerHTML); } 
              catch { return null; }
            }).filter(Boolean)
        };
      });

      return results;
    } catch (error) {
      throw new Error(`Failed to test ${url}: ${error.message}`);
    } finally {
      await page.close();
    }
  }

  async verifyCanonicalURL(canonical, path) {
    if (!canonical) {
      this.log('fail', `Missing canonical URL for ${path}`);
      this.results.failed++;
      return false;
    }

    const expectedCanonical = `https://${EXPECTED_CANONICAL_DOMAIN}${path}`;
    if (canonical !== expectedCanonical) {
      this.log('fail', `Wrong canonical URL for ${path}: expected ${expectedCanonical}, got ${canonical}`);
      this.results.failed++;
      return false;
    }

    this.log('pass', `Canonical URL correct: ${canonical}`);
    this.results.passed++;
    return true;
  }

  async verifyMetaTags(results, path) {
    let allGood = true;

    // Title check
    if (!results.title || results.title.length < 10) {
      this.log('fail', `${path}: Title too short or missing`);
      allGood = false;
    } else {
      this.log('pass', `${path}: Title OK (${results.title.length} chars)`);
    }

    // Description check
    if (!results.description || results.description.length < 50) {
      this.log('fail', `${path}: Meta description too short or missing`);
      allGood = false;
    } else {
      this.log('pass', `${path}: Meta description OK (${results.description.length} chars)`);
    }

    // H1 check
    if (!results.h1) {
      this.log('fail', `${path}: Missing H1 tag`);
      allGood = false;
    } else {
      this.log('pass', `${path}: H1 present: "${results.h1}"`);
    }

    // Structured data check
    if (!results.structuredData || results.structuredData.length === 0) {
      this.log('warn', `${path}: No structured data found`);
    } else {
      this.log('pass', `${path}: Found ${results.structuredData.length} structured data blocks`);
    }

    if (allGood) this.results.passed++;
    else this.results.failed++;

    return allGood;
  }

  async verifySitemaps() {
    console.log('\n📄 Verifying Sitemaps...');
    
    // Check local build files
    const distPath = join(projectRoot, 'dist');
    const sitemapFiles = [
      'sitemap_index.xml',
      'sitemap-pages.xml', 
      'sitemap-images.xml',
      'robots.txt'
    ];

    for (const file of sitemapFiles) {
      const filePath = join(distPath, file);
      if (existsSync(filePath)) {
        const content = readFileSync(filePath, 'utf-8');
        
        if (file === 'robots.txt') {
          if (content.includes(`Sitemap: https://${EXPECTED_CANONICAL_DOMAIN}/sitemap_index.xml`)) {
            this.log('pass', `${file}: Correct sitemap reference`);
            this.results.passed++;
          } else {
            this.log('fail', `${file}: Wrong sitemap domain`);
            this.results.failed++;
          }
        } else if (file.includes('sitemap')) {
          if (content.includes(`https://${EXPECTED_CANONICAL_DOMAIN}/`)) {
            this.log('pass', `${file}: Using correct canonical domain`);
            this.results.passed++;
          } else {
            this.log('fail', `${file}: Wrong domain in sitemap URLs`);
            this.results.failed++;
          }
        }
      } else {
        this.log('fail', `${file}: File not found in dist folder`);
        this.results.failed++;
      }
    }
  }

  async runVerification() {
    try {
      await this.init();

      console.log('🧪 Testing Service Pages...');
      
      for (const testPage of TEST_PAGES) {
        const url = `${BASE_URL}${testPage.path}`;
        console.log(`\nTesting: ${url}`);
        
        try {
          const results = await this.testPage(url, testPage.title);
          
          // Verify canonical URL
          await this.verifyCanonicalURL(results.canonical, testPage.path);
          
          // Verify meta tags
          await this.verifyMetaTags(results, testPage.path);
          
        } catch (error) {
          this.log('fail', `Error testing ${testPage.path}: ${error.message}`);
          this.results.failed++;
        }
      }

      // Verify sitemaps
      await this.verifySitemaps();

      // Print summary
      console.log('\n📊 Verification Summary:');
      console.log(`✅ Passed: ${this.results.passed}`);
      console.log(`❌ Failed: ${this.results.failed}`);
      console.log(`📈 Success Rate: ${Math.round((this.results.passed / (this.results.passed + this.results.failed)) * 100)}%`);

      if (this.results.failed === 0) {
        console.log('\n🎉 All SEO verifications passed! Phase 3 complete.');
        return true;
      } else {
        console.log('\n⚠️  Some verifications failed. Check the issues above.');
        return false;
      }

    } catch (error) {
      console.error('💥 Verification failed:', error.message);
      return false;
    } finally {
      await this.cleanup();
    }
  }
}

// Run verification
const verifier = new SEOVerifier();
verifier.runVerification().then(success => {
  process.exit(success ? 0 : 1);
}).catch(error => {
  console.error('💥 Script failed:', error);
  process.exit(1);
});