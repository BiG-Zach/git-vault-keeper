#!/usr/bin/env node

/**
 * Phase 5 Performance Validation Script
 * Validates the performance improvements after Roocode's optimizations
 */

import puppeteer from 'puppeteer';

const LOCAL_URL = 'http://localhost:8082';

class Phase5PerformanceValidator {
  constructor() {
    this.browser = null;
    this.results = {};
  }

  async init() {
    console.log('🚀 Phase 5 Performance Validation Starting...\n');
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
    const icons = { pass: '✅', fail: '❌', info: 'ℹ️', warn: '⚠️', success: '🎯' };
    console.log(`${icons[type] || '•'} ${message}`);
  }

  async validatePerformance() {
    const page = await this.browser.newPage();
    
    try {
      // Set desktop viewport for performance testing
      await page.setViewport({ width: 1920, height: 1080 });
      
      // Enable performance monitoring
      await page.setCacheEnabled(false); // Test without cache for accurate measurement
      
      console.log('📊 Measuring Homepage Performance...');
      
      const startTime = Date.now();
      
      // Navigate and measure load time
      const response = await page.goto(`${LOCAL_URL}/`, { 
        waitUntil: 'networkidle0', 
        timeout: 30000 
      });
      
      const loadTime = Date.now() - startTime;
      
      // Wait for React hydration and lazy loading
      await page.waitForTimeout(2000);
      
      // Measure Core Web Vitals
      const vitals = await page.evaluate(() => {
        return new Promise((resolve) => {
          const vitals = {};
          
          // Measure performance metrics
          const navigation = performance.getEntriesByType('navigation')[0];
          if (navigation) {
            vitals.totalLoadTime = navigation.loadEventEnd - navigation.fetchStart;
            vitals.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
            vitals.timeToInteractive = navigation.domInteractive - navigation.fetchStart;
          }
          
          // Count resources
          const resources = performance.getEntriesByType('resource');
          vitals.resourceCount = resources.length;
          vitals.imageCount = resources.filter(r => r.initiatorType === 'img').length;
          vitals.scriptCount = resources.filter(r => r.initiatorType === 'script').length;
          vitals.cssCount = resources.filter(r => r.initiatorType === 'link' && r.name.includes('.css')).length;
          
          // Calculate total transfer size
          vitals.totalSize = resources.reduce((total, resource) => {
            return total + (resource.transferSize || 0);
          }, 0);
          
          setTimeout(() => resolve(vitals), 1000);
        });
      });
      
      // Check for lazy loading implementation
      const lazyLoadingCheck = await page.evaluate(() => {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const webpImages = document.querySelectorAll('img[src*=".webp"]');
        const suspenseComponents = document.querySelectorAll('[data-testid*="loading"], .animate-pulse');
        
        return {
          lazyImagesCount: lazyImages.length,
          webpImagesCount: webpImages.length,
          suspenseComponentsFound: suspenseComponents.length > 0
        };
      });
      
      // Validate chunk splitting
      const chunkAnalysis = await page.evaluate(() => {
        const scripts = Array.from(document.querySelectorAll('script[src]'));
        const chunks = scripts.filter(script => 
          script.src.includes('-') && script.src.includes('.js')
        );
        
        return {
          totalScripts: scripts.length,
          chunkCount: chunks.length,
          vendorChunks: chunks.filter(script => 
            script.src.includes('vendor') || script.src.includes('react')
          ).length
        };
      });
      
      // Store results
      this.results = {
        response: {
          status: response.status(),
          loadTime: loadTime
        },
        vitals,
        lazyLoading: lazyLoadingCheck,
        chunks: chunkAnalysis,
        timestamp: new Date().toISOString()
      };
      
      return this.results;
      
    } catch (error) {
      console.error('Performance validation failed:', error.message);
      return { error: error.message };
    } finally {
      await page.close();
    }
  }

  async validateH1Structure() {
    const page = await this.browser.newPage();
    try {
      await page.setViewport({ width: 1920, height: 1080 });
      await page.goto(`${LOCAL_URL}/`, { waitUntil: 'networkidle0' });
      await page.waitForTimeout(2000);

      const h1Analysis = await page.evaluate(() => {
        const h1s = Array.from(document.querySelectorAll('h1'));
        const h2s = Array.from(document.querySelectorAll('h2'));
        
        return {
          h1Count: h1s.length,
          h1Text: h1s.length > 0 ? h1s[0].textContent.trim() : '',
          h2Count: h2s.length,
          headingStructure: 'valid'
        };
      });

      return h1Analysis;
    } finally {
      await page.close();
    }
  }

  generateReport() {
    const results = this.results;
    
    console.log('\n🎯 Phase 5 Performance Validation Report\n');
    console.log('═'.repeat(60));
    
    // Performance Metrics
    console.log('\n📊 Performance Metrics:');
    const loadTime = results.response?.loadTime || 0;
    const target = 2000; // 2 second target
    
    if (loadTime < target) {
      this.log('pass', `Load Time: ${loadTime}ms (Target: <${target}ms) - EXCELLENT!`);
    } else if (loadTime < target * 1.5) {
      this.log('warn', `Load Time: ${loadTime}ms (Target: <${target}ms) - GOOD, but can improve`);
    } else {
      this.log('fail', `Load Time: ${loadTime}ms (Target: <${target}ms) - NEEDS WORK`);
    }
    
    // Resource Analysis
    if (results.vitals) {
      console.log(`   DOM Content Loaded: ${Math.round(results.vitals.domContentLoaded)}ms`);
      console.log(`   Time to Interactive: ${Math.round(results.vitals.timeToInteractive)}ms`);
      console.log(`   Total Resources: ${results.vitals.resourceCount}`);
      console.log(`   Images: ${results.vitals.imageCount}`);
      console.log(`   Scripts: ${results.vitals.scriptCount}`);
      console.log(`   Total Size: ${Math.round(results.vitals.totalSize / 1024)}KB`);
    }
    
    // Optimization Validation
    console.log('\n🔧 Optimization Implementation:');
    
    if (results.lazyLoading) {
      if (results.lazyLoading.lazyImagesCount > 0) {
        this.log('pass', `Lazy Loading: ${results.lazyLoading.lazyImagesCount} images using data-src`);
      } else {
        this.log('warn', 'Lazy Loading: No lazy images detected');
      }
      
      if (results.lazyLoading.webpImagesCount > 0) {
        this.log('pass', `WebP Images: ${results.lazyLoading.webpImagesCount} images optimized`);
      } else {
        this.log('warn', 'WebP Images: No WebP images detected');
      }
      
      if (results.lazyLoading.suspenseComponentsFound) {
        this.log('pass', 'Component Lazy Loading: Suspense fallbacks detected');
      } else {
        this.log('info', 'Component Lazy Loading: No Suspense components visible');
      }
    }
    
    // Chunk Analysis
    if (results.chunks) {
      console.log('\n📦 Bundle Analysis:');
      this.log('info', `Total Scripts: ${results.chunks.totalScripts}`);
      this.log('info', `Code Chunks: ${results.chunks.chunkCount}`);
      this.log('info', `Vendor Chunks: ${results.chunks.vendorChunks}`);
      
      if (results.chunks.chunkCount > 5) {
        this.log('pass', 'Code Splitting: Multiple chunks detected - Good optimization!');
      } else {
        this.log('warn', 'Code Splitting: Limited chunking detected');
      }
    }
    
    // Overall Assessment
    console.log('\n🎯 Phase 5 Assessment:');
    const isUnder2s = loadTime < 2000;
    const hasOptimizations = results.lazyLoading?.lazyImagesCount > 0 || results.chunks?.chunkCount > 5;
    
    if (isUnder2s && hasOptimizations) {
      this.log('success', 'PHASE 5 SUCCESS: Performance optimizations are working!');
      this.log('success', 'Ready for 96+ SEO score achievement!');
    } else if (isUnder2s) {
      this.log('pass', 'Good performance, verify optimization implementation');
    } else {
      this.log('warn', 'Performance target not yet achieved - continue optimization');
    }
    
    console.log('\n═'.repeat(60));
    return isUnder2s && hasOptimizations;
  }

  async run() {
    try {
      await this.init();
      
      // Validate H1 structure first
      console.log('🔍 Validating H1 Structure...');
      const h1Results = await this.validateH1Structure();
      
      if (h1Results.h1Count === 1) {
        this.log('pass', `H1 Structure: Perfect! (${h1Results.h1Count} H1, ${h1Results.h2Count} H2s)`);
      } else {
        this.log('fail', `H1 Structure: ${h1Results.h1Count} H1 tags found (should be 1)`);
      }
      
      // Run performance validation
      await this.validatePerformance();
      
      // Generate comprehensive report
      const success = this.generateReport();
      
      return success;
      
    } catch (error) {
      console.error('💥 Validation failed:', error.message);
      return false;
    } finally {
      await this.cleanup();
    }
  }
}

// Run the validation
const validator = new Phase5PerformanceValidator();
validator.run().then(success => {
  if (success) {
    console.log('\n✅ Phase 5 validation complete - Optimizations successful!');
    process.exit(0);
  } else {
    console.log('\n⚠️  Phase 5 validation complete - Some areas need attention');
    process.exit(1);
  }
}).catch(error => {
  console.error('💥 Script failed:', error);
  process.exit(1);
});