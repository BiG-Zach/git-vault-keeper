#!/usr/bin/env node

/**
 * Quick H1 Analysis Script - Test Local Development Server
 * Verifies that we fixed the multiple H1 tags issue
 */

import puppeteer from 'puppeteer';

// Test our local development server
const LOCAL_URL = 'http://localhost:8082';

class H1Analyzer {
  constructor() {
    this.browser = null;
  }

  async init() {
    console.log('🔍 Testing H1 Tags Fix on Local Development Server...\n');
    console.log(`🌐 Testing: ${LOCAL_URL}\n`);
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

  async analyzeH1Tags(url) {
    const page = await this.browser.newPage();
    try {
      // Set realistic viewport for desktop analysis
      await page.setViewport({ width: 1920, height: 1080 });
      
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Wait for React to render
      await page.waitForTimeout(3000);

      const h1Analysis = await page.evaluate(() => {
        const h1s = Array.from(document.querySelectorAll('h1'));
        const h2s = Array.from(document.querySelectorAll('h2'));
        
        return {
          h1Count: h1s.length,
          h1Texts: h1s.map(h1 => ({
            text: h1.textContent.trim().substring(0, 100),
            className: h1.className,
            tagName: h1.tagName
          })),
          h2Count: h2s.length,
          h2Texts: h2s.map(h2 => ({
            text: h2.textContent.trim().substring(0, 60),
            className: h2.className
          })).slice(0, 5) // Show first 5 H2s
        };
      });

      return h1Analysis;
      
    } catch (error) {
      return { error: error.message };
    } finally {
      await page.close();
    }
  }

  async testMobile() {
    const page = await this.browser.newPage();
    try {
      // Set mobile viewport
      await page.setViewport({ width: 375, height: 667 });
      
      await page.goto(`${LOCAL_URL}/`, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Wait for React to render
      await page.waitForTimeout(3000);

      const mobileH1Analysis = await page.evaluate(() => {
        const h1s = Array.from(document.querySelectorAll('h1'));
        const h2s = Array.from(document.querySelectorAll('h2'));
        
        return {
          h1Count: h1s.length,
          h1Texts: h1s.map(h1 => ({
            text: h1.textContent.trim().substring(0, 100),
            className: h1.className,
            tagName: h1.tagName
          })),
          h2Count: h2s.length
        };
      });

      return mobileH1Analysis;
      
    } catch (error) {
      return { error: error.message };
    } finally {
      await page.close();
    }
  }

  async testTablet() {
    const page = await this.browser.newPage();
    try {
      // Set tablet viewport
      await page.setViewport({ width: 768, height: 1024 });
      
      await page.goto(`${LOCAL_URL}/`, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Wait for React to render
      await page.waitForTimeout(3000);

      const tabletH1Analysis = await page.evaluate(() => {
        const h1s = Array.from(document.querySelectorAll('h1'));
        const h2s = Array.from(document.querySelectorAll('h2'));
        
        return {
          h1Count: h1s.length,
          h1Texts: h1s.map(h1 => ({
            text: h1.textContent.trim().substring(0, 100),
            className: h1.className,
            tagName: h1.tagName
          })),
          h2Count: h2s.length
        };
      });

      return tabletH1Analysis;
      
    } catch (error) {
      return { error: error.message };
    } finally {
      await page.close();
    }
  }

  async runH1Test() {
    try {
      await this.init();

      console.log('📱 Testing Desktop View (1920x1080)');
      const desktopResults = await this.analyzeH1Tags(`${LOCAL_URL}/`);
      
      if (desktopResults.h1Count === 1) {
        this.log('pass', `Desktop H1 count: ${desktopResults.h1Count} (Perfect!)`);
      } else {
        this.log('fail', `Desktop H1 count: ${desktopResults.h1Count} (Should be 1)`);
      }

      if (desktopResults.h1Texts) {
        console.log('   H1 found:', desktopResults.h1Texts[0]?.text || 'None');
        console.log('   H2 count:', desktopResults.h2Count);
      }

      console.log('\n📱 Testing Tablet View (768x1024)');
      const tabletResults = await this.testTablet();
      
      if (tabletResults.h1Count === 1) {
        this.log('pass', `Tablet H1 count: ${tabletResults.h1Count} (Perfect!)`);
      } else {
        this.log('fail', `Tablet H1 count: ${tabletResults.h1Count} (Should be 1)`);
      }

      if (tabletResults.h1Texts) {
        console.log('   H1 found:', tabletResults.h1Texts[0]?.text || 'None');
        console.log('   H2 count:', tabletResults.h2Count);
      }

      console.log('\n📱 Testing Mobile View (375x667)');
      const mobileResults = await this.testMobile();
      
      if (mobileResults.h1Count === 1) {
        this.log('pass', `Mobile H1 count: ${mobileResults.h1Count} (Perfect!)`);
      } else {
        this.log('fail', `Mobile H1 count: ${mobileResults.h1Count} (Should be 1)`);
      }

      if (mobileResults.h1Texts) {
        console.log('   H1 found:', mobileResults.h1Texts[0]?.text || 'None');
        console.log('   H2 count:', mobileResults.h2Count);
      }

      // Summary
      const totalH1s = desktopResults.h1Count + tabletResults.h1Count + mobileResults.h1Count;
      console.log('\n📊 H1 Fix Verification Summary:');
      
      if (desktopResults.h1Count === 1 && tabletResults.h1Count === 1 && mobileResults.h1Count === 1) {
        this.log('pass', 'All responsive breakpoints have exactly 1 H1 tag!');
        this.log('pass', 'Multiple H1 issue has been successfully resolved!');
        return true;
      } else {
        this.log('fail', 'Some breakpoints still have multiple H1 tags');
        console.log(`   Desktop: ${desktopResults.h1Count} H1s`);
        console.log(`   Tablet: ${tabletResults.h1Count} H1s`);
        console.log(`   Mobile: ${mobileResults.h1Count} H1s`);
        return false;
      }

    } catch (error) {
      console.error('💥 H1 analysis failed:', error.message);
      return false;
    } finally {
      await this.cleanup();
    }
  }
}

// Run the H1 test
const analyzer = new H1Analyzer();
analyzer.runH1Test().then(success => {
  if (success) {
    console.log('\n✅ H1 fix verification complete! Ready to move to next optimization.');
    process.exit(0);
  } else {
    console.log('\n❌ H1 issues still exist. Please review the components.');
    process.exit(1);
  }
}).catch(error => {
  console.error('💥 Script failed:', error);
  process.exit(1);
});