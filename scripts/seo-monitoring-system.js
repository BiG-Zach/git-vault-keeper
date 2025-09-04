#!/usr/bin/env node

/**
 * Comprehensive SEO Monitoring and Reporting System
 * Phase 5 - Final monitoring implementation for 96+ SEO score tracking
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const PRODUCTION_URL = 'https://bradfordinformedguidance.com';
const LOCAL_URL = 'http://localhost:8082';

class SEOMonitoringSystem {
  constructor(options = {}) {
    this.url = options.url || PRODUCTION_URL;
    this.browser = null;
    this.results = {
      timestamp: new Date().toISOString(),
      url: this.url,
      performance: {},
      seo: {},
      accessibility: {},
      technical: {},
      monitoring: {}
    };
  }

  async init() {
    console.log('🔍 Initializing SEO Monitoring System...\n');
    console.log(`🌐 Target URL: ${this.url}\n`);
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
      monitor: '📊'
    };
    console.log(`${icons[type] || '•'} ${message}`);
  }

  async measurePerformance() {
    const page = await this.browser.newPage();
    
    try {
      console.log('📊 Measuring Core Performance Metrics...');
      
      await page.setViewport({ width: 1920, height: 1080 });
      await page.setCacheEnabled(false);
      
      const startTime = Date.now();
      const response = await page.goto(this.url, { 
        waitUntil: 'networkidle0', 
        timeout: 30000 
      });
      const totalLoadTime = Date.now() - startTime;
      
      await page.waitForTimeout(2000);
      
      const metrics = await page.evaluate(() => {
        return new Promise((resolve) => {
          const navigation = performance.getEntriesByType('navigation')[0];
          const paintEntries = performance.getEntriesByType('paint');
          const resources = performance.getEntriesByType('resource');
          
          const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
          
          const metrics = {
            // Core Web Vitals
            loadTime: navigation ? navigation.loadEventEnd - navigation.fetchStart : 0,
            domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.fetchStart : 0,
            timeToInteractive: navigation ? navigation.domInteractive - navigation.fetchStart : 0,
            firstContentfulPaint: fcp ? fcp.startTime : 0,
            
            // Resource analysis
            totalResources: resources.length,
            imageResources: resources.filter(r => r.initiatorType === 'img').length,
            scriptResources: resources.filter(r => r.initiatorType === 'script').length,
            cssResources: resources.filter(r => r.initiatorType === 'link' && r.name.includes('.css')).length,
            totalTransferSize: resources.reduce((total, r) => total + (r.transferSize || 0), 0),
            
            // Performance score factors
            httpStatusCode: null, // Will be set from response
            compressionEnabled: resources.some(r => r.name.includes('.gz') || r.name.includes('.br')),
            httpsEnabled: window.location.protocol === 'https:'
          };
          
          setTimeout(() => resolve(metrics), 1000);
        });
      });
      
      // Add response data
      metrics.httpStatusCode = response.status();
      metrics.totalLoadTimeActual = totalLoadTime;
      
      this.results.performance = metrics;
      return metrics;
      
    } catch (error) {
      console.error('Performance measurement failed:', error.message);
      this.results.performance = { error: error.message };
      return null;
    } finally {
      await page.close();
    }
  }

  async analyzeSEOStructure() {
    const page = await this.browser.newPage();
    
    try {
      console.log('🔍 Analyzing SEO Structure...');
      
      await page.goto(this.url, { waitUntil: 'networkidle0' });
      await page.waitForTimeout(2000);
      
      const seoData = await page.evaluate(() => {
        // Heading structure analysis
        const h1s = Array.from(document.querySelectorAll('h1'));
        const h2s = Array.from(document.querySelectorAll('h2'));
        const h3s = Array.from(document.querySelectorAll('h3'));
        
        // Meta tag analysis
        const title = document.querySelector('title')?.textContent || '';
        const metaDescription = document.querySelector('meta[name="description"]')?.content || '';
        const canonical = document.querySelector('link[rel="canonical"]')?.href || '';
        
        // Image optimization analysis
        const images = Array.from(document.querySelectorAll('img'));
        const imagesWithAlt = images.filter(img => img.alt && img.alt.trim().length > 0);
        const webpImages = images.filter(img => img.src.includes('.webp'));
        const lazyImages = images.filter(img => img.dataset.src);
        
        // Schema markup detection
        const jsonLdScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
        const schemas = jsonLdScripts.map(script => {
          try {
            const data = JSON.parse(script.textContent);
            return data['@type'] || 'Unknown';
          } catch {
            return 'Invalid';
          }
        });
        
        // Internal and external links
        const links = Array.from(document.querySelectorAll('a[href]'));
        const internalLinks = links.filter(link => 
          link.href.includes(window.location.hostname) || 
          link.href.startsWith('/') || 
          link.href.startsWith('#')
        );
        const externalLinks = links.filter(link => 
          !link.href.includes(window.location.hostname) && 
          !link.href.startsWith('/') && 
          !link.href.startsWith('#')
        );
        
        return {
          headings: {
            h1Count: h1s.length,
            h1Text: h1s.length > 0 ? h1s[0].textContent.trim().substring(0, 100) : '',
            h2Count: h2s.length,
            h3Count: h3s.length,
            properHierarchy: h1s.length === 1
          },
          meta: {
            title: title,
            titleLength: title.length,
            description: metaDescription,
            descriptionLength: metaDescription.length,
            hasCanonical: !!canonical,
            canonical: canonical
          },
          images: {
            total: images.length,
            withAlt: imagesWithAlt.length,
            altOptimization: images.length > 0 ? (imagesWithAlt.length / images.length) * 100 : 0,
            webpCount: webpImages.length,
            webpOptimization: images.length > 0 ? (webpImages.length / images.length) * 100 : 0,
            lazyLoadCount: lazyImages.length,
            lazyLoadOptimization: images.length > 0 ? (lazyImages.length / images.length) * 100 : 0
          },
          schema: {
            count: schemas.length,
            types: schemas
          },
          links: {
            internal: internalLinks.length,
            external: externalLinks.length,
            total: links.length
          },
          technical: {
            hasViewport: !!document.querySelector('meta[name="viewport"]'),
            hasRobots: !!document.querySelector('meta[name="robots"]'),
            hasOgTags: !!document.querySelector('meta[property^="og:"]'),
            hasTwitterCard: !!document.querySelector('meta[name^="twitter:"]')
          }
        };
      });
      
      this.results.seo = seoData;
      return seoData;
      
    } catch (error) {
      console.error('SEO analysis failed:', error.message);
      this.results.seo = { error: error.message };
      return null;
    } finally {
      await page.close();
    }
  }

  async checkAccessibility() {
    const page = await this.browser.newPage();
    
    try {
      console.log('♿ Checking Accessibility...');
      
      await page.goto(this.url, { waitUntil: 'networkidle0' });
      await page.waitForTimeout(2000);
      
      const accessibilityData = await page.evaluate(() => {
        // Basic accessibility checks
        const imagesWithoutAlt = Array.from(document.querySelectorAll('img:not([alt])'));
        const linksWithoutText = Array.from(document.querySelectorAll('a')).filter(link => 
          !link.textContent.trim() && !link.getAttribute('aria-label')
        );
        const buttonsWithoutText = Array.from(document.querySelectorAll('button')).filter(button => 
          !button.textContent.trim() && !button.getAttribute('aria-label')
        );
        const formsWithoutLabels = Array.from(document.querySelectorAll('input, select, textarea')).filter(input => {
          const id = input.id;
          const hasLabel = id && document.querySelector(`label[for="${id}"]`);
          const hasAriaLabel = input.getAttribute('aria-label');
          return !hasLabel && !hasAriaLabel;
        });
        
        // Color contrast basic check (simplified)
        const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
        const hasSkipLinks = !!document.querySelector('a[href="#main"], a[href="#content"]');
        
        return {
          issues: {
            imagesWithoutAlt: imagesWithoutAlt.length,
            linksWithoutText: linksWithoutText.length,
            buttonsWithoutText: buttonsWithoutText.length,
            formsWithoutLabels: formsWithoutLabels.length
          },
          features: {
            headingCount: headings.length,
            hasSkipLinks: hasSkipLinks,
            hasLandmarkRoles: !!document.querySelector('[role="main"], [role="navigation"], [role="banner"]')
          },
          score: 0 // Will be calculated based on issues
        };
      });
      
      // Calculate basic accessibility score
      const totalIssues = Object.values(accessibilityData.issues).reduce((sum, count) => sum + count, 0);
      accessibilityData.score = Math.max(0, 100 - (totalIssues * 10));
      
      this.results.accessibility = accessibilityData;
      return accessibilityData;
      
    } catch (error) {
      console.error('Accessibility check failed:', error.message);
      this.results.accessibility = { error: error.message };
      return null;
    } finally {
      await page.close();
    }
  }

  async validateTechnicalSEO() {
    try {
      console.log('🔧 Validating Technical SEO...');
      
      const technicalChecks = {
        sitemap: await this.checkSitemap(),
        robots: await this.checkRobots(),
        ssl: this.url.startsWith('https://'),
        mobileFriendly: await this.checkMobileFriendly(),
        pageSpeed: this.results.performance?.totalLoadTimeActual < 3000
      };
      
      this.results.technical = technicalChecks;
      return technicalChecks;
      
    } catch (error) {
      console.error('Technical SEO validation failed:', error.message);
      this.results.technical = { error: error.message };
      return null;
    }
  }

  async checkSitemap() {
    try {
      const sitemapUrl = `${this.url}/sitemap_index.xml`;
      const response = await fetch(sitemapUrl);
      return {
        exists: response.ok,
        status: response.status,
        url: sitemapUrl
      };
    } catch {
      return { exists: false, error: 'Failed to fetch sitemap' };
    }
  }

  async checkRobots() {
    try {
      const robotsUrl = `${this.url}/robots.txt`;
      const response = await fetch(robotsUrl);
      const content = response.ok ? await response.text() : '';
      return {
        exists: response.ok,
        status: response.status,
        hasSitemap: content.includes('Sitemap:'),
        content: content.substring(0, 200)
      };
    } catch {
      return { exists: false, error: 'Failed to fetch robots.txt' };
    }
  }

  async checkMobileFriendly() {
    const page = await this.browser.newPage();
    
    try {
      await page.setViewport({ width: 375, height: 667 });
      await page.goto(this.url, { waitUntil: 'networkidle0' });
      
      const mobileData = await page.evaluate(() => {
        const viewport = document.querySelector('meta[name="viewport"]');
        const hasViewport = !!viewport;
        const viewportContent = viewport ? viewport.content : '';
        
        // Check for mobile-friendly indicators
        const hasTouchTargets = Array.from(document.querySelectorAll('button, a')).some(el => {
          const rect = el.getBoundingClientRect();
          return rect.width >= 44 && rect.height >= 44;
        });
        
        return {
          hasViewport,
          viewportContent,
          hasTouchTargets,
          isMobileFriendly: hasViewport && hasTouchTargets
        };
      });
      
      return mobileData;
      
    } catch (error) {
      return { error: error.message };
    } finally {
      await page.close();
    }
  }

  calculateSEOScore() {
    const performance = this.results.performance;
    const seo = this.results.seo;
    const accessibility = this.results.accessibility;
    const technical = this.results.technical;
    
    let score = 0;
    let maxScore = 0;
    
    // Performance scoring (30 points)
    maxScore += 30;
    if (performance && !performance.error) {
      if (performance.totalLoadTimeActual < 2000) score += 30;
      else if (performance.totalLoadTimeActual < 3000) score += 25;
      else if (performance.totalLoadTimeActual < 4000) score += 15;
      else score += 5;
    }
    
    // SEO Structure scoring (25 points)
    maxScore += 25;
    if (seo && !seo.error) {
      if (seo.headings?.properHierarchy) score += 8;
      if (seo.meta?.descriptionLength >= 120 && seo.meta?.descriptionLength <= 160) score += 8;
      if (seo.images?.altOptimization > 90) score += 5;
      if (seo.schema?.count > 0) score += 4;
    }
    
    // Technical SEO scoring (25 points)
    maxScore += 25;
    if (technical && !technical.error) {
      if (technical.sitemap?.exists) score += 8;
      if (technical.robots?.exists) score += 5;
      if (technical.ssl) score += 7;
      if (technical.mobileFriendly?.isMobileFriendly) score += 5;
    }
    
    // Accessibility scoring (20 points)
    maxScore += 20;
    if (accessibility && !accessibility.error) {
      const accessibilityScore = accessibility.score || 0;
      score += (accessibilityScore / 100) * 20;
    }
    
    const finalScore = Math.round((score / maxScore) * 100);
    
    this.results.monitoring.seoScore = finalScore;
    this.results.monitoring.breakdown = {
      performance: performance?.totalLoadTimeActual < 2000 ? 30 : 25,
      seo: seo?.headings?.properHierarchy ? 25 : 20,
      technical: technical?.ssl ? 25 : 20,
      accessibility: Math.round((accessibility?.score || 0) / 100 * 20)
    };
    
    return finalScore;
  }

  generateReport() {
    const seoScore = this.calculateSEOScore();
    
    console.log('\n🎯 SEO Monitoring Report\n');
    console.log('═'.repeat(80));
    
    // Overall Score
    console.log(`\n📊 OVERALL SEO SCORE: ${seoScore}/100`);
    if (seoScore >= 96) {
      this.log('success', 'EXCELLENT! Target 96+ score achieved! 🚀');
    } else if (seoScore >= 90) {
      this.log('pass', 'GREAT! Very close to target score');
    } else if (seoScore >= 80) {
      this.log('warn', 'GOOD! Continue optimizations for target');
    } else {
      this.log('fail', 'Needs improvement to reach target');
    }
    
    // Performance Analysis
    if (this.results.performance && !this.results.performance.error) {
      const perf = this.results.performance;
      console.log('\n🚀 Performance Metrics:');
      this.log('monitor', `Load Time: ${perf.totalLoadTimeActual}ms (Target: <2000ms)`);
      this.log('monitor', `DOM Content Loaded: ${Math.round(perf.domContentLoaded)}ms`);
      this.log('monitor', `Time to Interactive: ${Math.round(perf.timeToInteractive)}ms`);
      this.log('monitor', `First Contentful Paint: ${Math.round(perf.firstContentfulPaint)}ms`);
      this.log('monitor', `Total Resources: ${perf.totalResources}`);
      this.log('monitor', `Transfer Size: ${Math.round(perf.totalTransferSize / 1024)}KB`);
    }
    
    // SEO Structure Analysis
    if (this.results.seo && !this.results.seo.error) {
      const seo = this.results.seo;
      console.log('\n🔍 SEO Structure:');
      this.log(seo.headings.properHierarchy ? 'pass' : 'fail', 
        `H1 Structure: ${seo.headings.h1Count} H1, ${seo.headings.h2Count} H2s`);
      this.log('monitor', `Title: "${seo.meta.title}" (${seo.meta.titleLength} chars)`);
      this.log(seo.meta.descriptionLength >= 120 && seo.meta.descriptionLength <= 160 ? 'pass' : 'warn',
        `Meta Description: ${seo.meta.descriptionLength} chars`);
      this.log('monitor', `Image Alt Optimization: ${Math.round(seo.images.altOptimization)}%`);
      this.log('monitor', `WebP Optimization: ${Math.round(seo.images.webpOptimization)}%`);
      this.log('monitor', `Lazy Loading: ${Math.round(seo.images.lazyLoadOptimization)}%`);
      this.log('monitor', `Schema Types: ${seo.schema.types.join(', ')}`);
    }
    
    // Technical SEO
    if (this.results.technical && !this.results.technical.error) {
      const tech = this.results.technical;
      console.log('\n🔧 Technical SEO:');
      this.log(tech.sitemap?.exists ? 'pass' : 'fail', 'Sitemap Accessibility');
      this.log(tech.robots?.exists ? 'pass' : 'fail', 'Robots.txt');
      this.log(tech.ssl ? 'pass' : 'fail', 'HTTPS SSL');
      this.log(tech.mobileFriendly?.isMobileFriendly ? 'pass' : 'warn', 'Mobile Friendly');
      this.log(tech.pageSpeed ? 'pass' : 'warn', 'Page Speed (<3s)');
    }
    
    // Accessibility
    if (this.results.accessibility && !this.results.accessibility.error) {
      const a11y = this.results.accessibility;
      console.log('\n♿ Accessibility:');
      this.log('monitor', `Accessibility Score: ${a11y.score}/100`);
      this.log(a11y.issues.imagesWithoutAlt === 0 ? 'pass' : 'warn', 
        `Images without Alt: ${a11y.issues.imagesWithoutAlt}`);
      this.log(a11y.issues.linksWithoutText === 0 ? 'pass' : 'warn', 
        `Links without Text: ${a11y.issues.linksWithoutText}`);
    }
    
    // Recommendations
    console.log('\n📋 Recommendations:');
    if (seoScore < 96) {
      if (this.results.performance?.totalLoadTimeActual > 2000) {
        this.log('warn', 'Focus on performance optimization for higher score');
      }
      if (!this.results.seo?.headings?.properHierarchy) {
        this.log('warn', 'Fix H1 tag structure (should be 1 H1 per page)');
      }
      if (this.results.seo?.meta?.descriptionLength < 120 || this.results.seo?.meta?.descriptionLength > 160) {
        this.log('warn', 'Optimize meta description length (120-160 chars)');
      }
    } else {
      this.log('success', 'All major optimizations complete! Monitor and maintain.');
    }
    
    console.log('\n═'.repeat(80));
    return seoScore;
  }

  async saveReport() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `seo-monitoring-report-${timestamp}.json`;
    const filepath = path.join(process.cwd(), 'scripts', filename);
    
    try {
      fs.writeFileSync(filepath, JSON.stringify(this.results, null, 2));
      this.log('success', `Report saved: ${filename}`);
    } catch (error) {
      this.log('fail', `Failed to save report: ${error.message}`);
    }
  }

  async run() {
    try {
      await this.init();
      
      // Run all monitoring checks
      await this.measurePerformance();
      await this.analyzeSEOStructure();
      await this.checkAccessibility();
      await this.validateTechnicalSEO();
      
      // Generate comprehensive report
      const score = this.generateReport();
      
      // Save detailed results
      await this.saveReport();
      
      return score >= 96;
      
    } catch (error) {
      console.error('💥 SEO monitoring failed:', error.message);
      return false;
    } finally {
      await this.cleanup();
    }
  }
}

// CLI usage
const args = process.argv.slice(2);
const url = args[0] || PRODUCTION_URL;

const monitor = new SEOMonitoringSystem({ url });
monitor.run().then(success => {
  if (success) {
    console.log('\n✅ SEO monitoring complete - Target achieved!');
    process.exit(0);
  } else {
    console.log('\n📊 SEO monitoring complete - Continue optimization');
    process.exit(0); // Still successful monitoring
  }
}).catch(error => {
  console.error('💥 Monitoring script failed:', error);
  process.exit(1);
});

export { SEOMonitoringSystem };