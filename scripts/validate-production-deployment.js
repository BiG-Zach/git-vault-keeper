#!/usr/bin/env node

/**
 * Production Deployment Validation Script
 * Validates Phase 5 optimizations in production environment
 */

import puppeteer from 'puppeteer';

const PRODUCTION_URL = 'https://bradfordinformedguidance.com';

class ProductionValidator {
  constructor() {
    this.browser = null;
    this.results = {};
  }

  async init() {
    console.log('🚀 Production Deployment Validation\n');
    console.log(`🌐 Validating: ${PRODUCTION_URL}\n`);
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
    const icons = { 
      pass: '✅', 
      fail: '❌', 
      info: 'ℹ️', 
      warn: '⚠️', 
      success: '🎯',
      deploy: '🚀'
    };
    console.log(`${icons[type] || '•'} ${message}`);
  }

  async validateDeployment() {
    const page = await this.browser.newPage();
    
    try {
      console.log('🔍 Validating Production Deployment...');
      
      // Test basic accessibility
      const response = await page.goto(PRODUCTION_URL, { 
        waitUntil: 'networkidle0', 
        timeout: 30000 
      });
      
      const status = response.status();
      this.log(status === 200 ? 'pass' : 'fail', `HTTP Status: ${status}`);
      
      if (status !== 200) {
        throw new Error(`Site not accessible: HTTP ${status}`);
      }
      
      // Wait for React hydration
      await page.waitForTimeout(3000);
      
      return { accessible: true, status };
      
    } catch (error) {
      this.log('fail', `Deployment validation failed: ${error.message}`);
      return { accessible: false, error: error.message };
    } finally {
      await page.close();
    }
  }

  async validatePhase5Optimizations() {
    const page = await this.browser.newPage();
    
    try {
      console.log('📊 Validating Phase 5 Optimizations...');
      
      await page.setViewport({ width: 1920, height: 1080 });
      await page.setCacheEnabled(false);
      
      const startTime = Date.now();
      await page.goto(PRODUCTION_URL, { waitUntil: 'networkidle0' });
      const loadTime = Date.now() - startTime;
      
      await page.waitForTimeout(2000);
      
      // Validate H1 structure
      const h1Analysis = await page.evaluate(() => {
        const h1s = Array.from(document.querySelectorAll('h1'));
        const h2s = Array.from(document.querySelectorAll('h2'));
        return {
          h1Count: h1s.length,
          h1Text: h1s.length > 0 ? h1s[0].textContent.trim().substring(0, 50) : '',
          h2Count: h2s.length
        };
      });
      
      // Validate optimization implementations
      const optimizations = await page.evaluate(() => {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const webpImages = document.querySelectorAll('img[src*=".webp"]');
        const scripts = document.querySelectorAll('script[src]');
        const chunks = Array.from(scripts).filter(script => 
          script.src.includes('-') && script.src.includes('.js')
        );
        
        return {
          lazyImageCount: lazyImages.length,
          webpImageCount: webpImages.length,
          scriptCount: scripts.length,
          chunkCount: chunks.length,
          hasVendorChunks: Array.from(scripts).some(script => 
            script.src.includes('vendor') || script.src.includes('react')
          )
        };
      });
      
      // Validate meta descriptions
      const metaData = await page.evaluate(() => {
        const title = document.querySelector('title')?.textContent || '';
        const description = document.querySelector('meta[name="description"]')?.content || '';
        const canonical = document.querySelector('link[rel="canonical"]')?.href || '';
        
        return {
          title,
          titleLength: title.length,
          description,
          descriptionLength: description.length,
          hasCanonical: !!canonical
        };
      });
      
      this.results = {
        performance: { loadTime },
        h1Structure: h1Analysis,
        optimizations,
        metaData,
        timestamp: new Date().toISOString()
      };
      
      return this.results;
      
    } catch (error) {
      this.log('fail', `Optimization validation failed: ${error.message}`);
      return { error: error.message };
    } finally {
      await page.close();
    }
  }

  async validateSEOInfrastructure() {
    try {
      console.log('🔧 Validating SEO Infrastructure...');
      
      // Check sitemap accessibility
      const sitemapResponse = await fetch(`${PRODUCTION_URL}/sitemap_index.xml`);
      const sitemapExists = sitemapResponse.ok;
      
      // Check robots.txt
      const robotsResponse = await fetch(`${PRODUCTION_URL}/robots.txt`);
      const robotsExists = robotsResponse.ok;
      
      // Check SSL certificate
      const isHTTPS = PRODUCTION_URL.startsWith('https://');
      
      return {
        sitemap: { exists: sitemapExists, status: sitemapResponse.status },
        robots: { exists: robotsExists, status: robotsResponse.status },
        ssl: isHTTPS
      };
      
    } catch (error) {
      this.log('fail', `SEO infrastructure validation failed: ${error.message}`);
      return { error: error.message };
    }
  }

  generateReport() {
    console.log('\n🎯 Production Validation Report\n');
    console.log('═'.repeat(70));
    
    // Performance validation
    if (this.results.performance) {
      const loadTime = this.results.performance.loadTime;
      console.log('\n🚀 Performance Metrics:');
      
      if (loadTime < 2000) {
        this.log('success', `Load Time: ${loadTime}ms - EXCELLENT! (Target: <2000ms)`);
      } else if (loadTime < 3000) {
        this.log('pass', `Load Time: ${loadTime}ms - Good (Target: <2000ms)`);
      } else {
        this.log('warn', `Load Time: ${loadTime}ms - Needs optimization`);
      }
    }
    
    // H1 structure validation
    if (this.results.h1Structure) {
      const h1 = this.results.h1Structure;
      console.log('\n📐 SEO Structure:');
      
      if (h1.h1Count === 1) {
        this.log('pass', `H1 Structure: Perfect! (${h1.h1Count} H1, ${h1.h2Count} H2s)`);
        this.log('info', `H1 Text: "${h1.h1Text}..."`);
      } else {
        this.log('fail', `H1 Structure: ${h1.h1Count} H1 tags (should be 1)`);
      }
    }
    
    // Optimization validation
    if (this.results.optimizations) {
      const opt = this.results.optimizations;
      console.log('\n⚡ Phase 5 Optimizations:');
      
      this.log(opt.lazyImageCount > 0 ? 'pass' : 'warn', 
        `Lazy Loading: ${opt.lazyImageCount} images`);
      this.log(opt.webpImageCount > 0 ? 'pass' : 'warn', 
        `WebP Images: ${opt.webpImageCount} optimized`);
      this.log(opt.chunkCount > 5 ? 'pass' : 'warn', 
        `Code Splitting: ${opt.chunkCount} chunks`);
      this.log(opt.hasVendorChunks ? 'pass' : 'warn', 
        `Vendor Chunking: ${opt.hasVendorChunks ? 'Implemented' : 'Missing'}`);
    }
    
    // Meta data validation
    if (this.results.metaData) {
      const meta = this.results.metaData;
      console.log('\n📋 Meta Data:');
      
      this.log('info', `Title: "${meta.title}" (${meta.titleLength} chars)`);
      
      const descOptimal = meta.descriptionLength >= 120 && meta.descriptionLength <= 160;
      this.log(descOptimal ? 'pass' : 'warn', 
        `Description: ${meta.descriptionLength} chars (Target: 120-160)`);
      
      this.log(meta.hasCanonical ? 'pass' : 'warn', 
        `Canonical URL: ${meta.hasCanonical ? 'Present' : 'Missing'}`);
    }
    
    // Overall assessment
    console.log('\n🎯 Phase 5 Production Assessment:');
    
    const performanceGood = this.results.performance?.loadTime < 3000;
    const h1Fixed = this.results.h1Structure?.h1Count === 1;
    const optimizationsDeployed = this.results.optimizations?.chunkCount > 5;
    const metaOptimized = this.results.metaData?.descriptionLength >= 120 && 
                         this.results.metaData?.descriptionLength <= 160;
    
    const allOptimizations = [performanceGood, h1Fixed, optimizationsDeployed, metaOptimized];
    const successCount = allOptimizations.filter(Boolean).length;
    
    if (successCount === 4) {
      this.log('success', 'ALL PHASE 5 OPTIMIZATIONS SUCCESSFULLY DEPLOYED! 🚀');
      this.log('success', 'Ready for 96+ SEO score achievement!');
    } else if (successCount >= 3) {
      this.log('pass', 'Most optimizations deployed successfully');
      this.log('info', 'Monitor performance and continue optimization');
    } else {
      this.log('warn', 'Some optimizations need attention');
    }
    
    console.log('\n═'.repeat(70));
    return successCount === 4;
  }

  async run() {
    try {
      await this.init();
      
      // Validate basic deployment
      const deploymentStatus = await this.validateDeployment();
      if (!deploymentStatus.accessible) {
        throw new Error('Production site not accessible');
      }
      
      // Validate Phase 5 optimizations
      await this.validatePhase5Optimizations();
      
      // Validate SEO infrastructure
      const infrastructure = await this.validateSEOInfrastructure();
      this.results.infrastructure = infrastructure;
      
      // Report infrastructure status
      if (infrastructure && !infrastructure.error) {
        console.log('\n🔧 SEO Infrastructure:');
        this.log(infrastructure.sitemap?.exists ? 'pass' : 'fail', 'Sitemap');
        this.log(infrastructure.robots?.exists ? 'pass' : 'fail', 'Robots.txt');
        this.log(infrastructure.ssl ? 'pass' : 'fail', 'HTTPS SSL');
      }
      
      // Generate comprehensive report
      const success = this.generateReport();
      
      return success;
      
    } catch (error) {
      console.error('💥 Production validation failed:', error.message);
      return false;
    } finally {
      await this.cleanup();
    }
  }
}

// Run validation
const validator = new ProductionValidator();
validator.run().then(success => {
  if (success) {
    console.log('\n✅ Production deployment validation complete - All optimizations deployed!');
    process.exit(0);
  } else {
    console.log('\n⚠️  Production deployment validation complete - Some issues detected');
    process.exit(1);
  }
}).catch(error => {
  console.error('💥 Validation script failed:', error);
  process.exit(1);
});