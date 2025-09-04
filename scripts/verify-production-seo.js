#!/usr/bin/env node

/**
 * Production SEO Verification Script
 * Tests live production domain for SEO compliance
 */

import puppeteer from 'puppeteer';

// Configuration
const PRODUCTION_URL = 'https://bradfordinformedguidance.com';
const EXPECTED_CANONICAL_DOMAIN = 'bradfordinformedguidance.com';

// Test pages for production
const PRODUCTION_TEST_PAGES = [
  { path: '/', title: 'Bradford Informed Guidance' },
  { path: '/services/health-insurance', title: 'Best Health Insurance Plans' },
  { path: '/services/life-insurance', title: 'Life Insurance Plans' },
  { path: '/services/iul-insurance', title: 'Indexed Universal Life Insurance' },
  { path: '/services/ppo-networks', title: 'PPO Health Insurance Plans' },
  { path: '/states/florida', title: 'Florida Health Insurance' },
  { path: '/about', title: 'About Bradford Informed Guidance' }
];

class ProductionSEOVerifier {
  constructor() {
    this.browser = null;
    this.results = {
      passed: 0,
      failed: 0,
      errors: []
    };
  }

  async init() {
    console.log('🚀 Starting Production SEO Verification...\n');
    console.log(`🌐 Testing: ${PRODUCTION_URL}\n`);
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

  async testPage(url) {
    const page = await this.browser.newPage();
    try {
      // Set realistic user agent
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');
      
      // Navigate and wait for content
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Wait for React to render
      await page.waitForTimeout(3000);

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
          viewport: document.querySelector('meta[name="viewport"]')?.content,
          structuredData: Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
            .map(script => {
              try { return JSON.parse(script.innerHTML); } 
              catch { return null; }
            }).filter(Boolean),
          responseTime: performance.now()
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
      this.log('fail', `${path}: Title too short or missing (${results.title?.length || 0} chars)`);
      allGood = false;
    } else if (results.title.length > 60) {
      this.log('pass', `${path}: Title OK (${results.title.length} chars)`);
    } else {
      this.log('pass', `${path}: Title OK (${results.title.length} chars)`);
    }

    // Description check
    if (!results.description || results.description.length < 50) {
      this.log('fail', `${path}: Meta description too short or missing (${results.description?.length || 0} chars)`);
      allGood = false;
    } else if (results.description.length > 160) {
      this.log('warn', `${path}: Meta description long (${results.description.length} chars)`);
    } else {
      this.log('pass', `${path}: Meta description OK (${results.description.length} chars)`);
    }

    // H1 check
    if (!results.h1) {
      this.log('fail', `${path}: Missing H1 tag`);
      allGood = false;
    } else {
      this.log('pass', `${path}: H1 present: "${results.h1.substring(0, 50)}${results.h1.length > 50 ? '...' : ''}"`);
    }

    // Viewport check
    if (!results.viewport) {
      this.log('fail', `${path}: Missing viewport meta tag`);
      allGood = false;
    } else {
      this.log('pass', `${path}: Viewport tag present`);
    }

    // Robots check
    if (!results.robots) {
      this.log('warn', `${path}: Missing robots meta tag`);
    } else {
      this.log('pass', `${path}: Robots: ${results.robots}`);
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

  async testSitemaps() {
    console.log('\n📄 Testing Production Sitemaps...');
    
    const sitemapUrls = [
      `${PRODUCTION_URL}/sitemap_index.xml`,
      `${PRODUCTION_URL}/sitemap-pages.xml`, 
      `${PRODUCTION_URL}/sitemap-images.xml`,
      `${PRODUCTION_URL}/robots.txt`
    ];

    for (const url of sitemapUrls) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const content = await response.text();
          
          if (url.includes('robots.txt')) {
            if (content.includes(`Sitemap: https://${EXPECTED_CANONICAL_DOMAIN}/sitemap_index.xml`)) {
              this.log('pass', `robots.txt: Correct sitemap reference`);
              this.results.passed++;
            } else {
              this.log('fail', `robots.txt: Wrong or missing sitemap reference`);
              this.results.failed++;
            }
          } else if (url.includes('sitemap')) {
            if (content.includes(`https://${EXPECTED_CANONICAL_DOMAIN}/`)) {
              this.log('pass', `${url.split('/').pop()}: Using correct canonical domain`);
              this.results.passed++;
            } else {
              this.log('fail', `${url.split('/').pop()}: Wrong domain in sitemap URLs`);
              this.results.failed++;
            }
          }
        } else {
          this.log('fail', `${url.split('/').pop()}: HTTP ${response.status} ${response.statusText}`);
          this.results.failed++;
        }
      } catch (error) {
        this.log('fail', `${url.split('/').pop()}: Failed to fetch - ${error.message}`);
        this.results.failed++;
      }
    }
  }

  async runProductionVerification() {
    try {
      await this.init();

      console.log('🧪 Testing Production Pages...');
      
      for (const testPage of PRODUCTION_TEST_PAGES) {
        const url = `${PRODUCTION_URL}${testPage.path}`;
        console.log(`\nTesting: ${url}`);
        
        try {
          const results = await this.testPage(url);
          
          // Verify canonical URL
          await this.verifyCanonicalURL(results.canonical, testPage.path);
          
          // Verify meta tags
          await this.verifyMetaTags(results, testPage.path);
          
        } catch (error) {
          this.log('fail', `Error testing ${testPage.path}: ${error.message}`);
          this.results.failed++;
        }
      }

      // Test sitemaps
      await this.testSitemaps();

      // Print summary
      console.log('\n📊 Production SEO Verification Summary:');
      console.log(`✅ Passed: ${this.results.passed}`);
      console.log(`❌ Failed: ${this.results.failed}`);
      console.log(`📈 Success Rate: ${Math.round((this.results.passed / (this.results.passed + this.results.failed)) * 100)}%`);

      if (this.results.failed === 0) {
        console.log('\n🎉 All production SEO verifications passed!');
        console.log('\n📝 Next Steps:');
        console.log('1. Submit sitemap to Google Search Console');
        console.log('2. Monitor indexing status');
        console.log('3. Set up performance monitoring');
        return true;
      } else {
        console.log('\n⚠️  Some verifications failed. Production may need attention.');
        return false;
      }

    } catch (error) {
      console.error('💥 Production verification failed:', error.message);
      return false;
    } finally {
      await this.cleanup();
    }
  }
}

// Run production verification
const verifier = new ProductionSEOVerifier();
verifier.runProductionVerification().then(success => {
  process.exit(success ? 0 : 1);
}).catch(error => {
  console.error('💥 Script failed:', error);
  process.exit(1);
});