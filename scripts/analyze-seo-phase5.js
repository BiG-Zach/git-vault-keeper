#!/usr/bin/env node

/**
 * Phase 5 Advanced SEO Analysis & Optimization
 * Identifies and implements advanced SEO improvements for 96+ score
 */

import puppeteer from 'puppeteer';
import { readFileSync, existsSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Configuration
const PRODUCTION_URL = 'https://bradfordinformedguidance.com';
const LOCAL_URL = 'http://localhost:8080';

class AdvancedSEOAnalyzer {
  constructor() {
    this.browser = null;
    this.results = {
      performance: {},
      accessibility: {},
      seo_advanced: {},
      local_seo: {},
      content_quality: {},
      technical_seo: {},
      opportunities: [],
      score_breakdown: {}
    };
  }

  async init() {
    console.log('🚀 Starting Phase 5 Advanced SEO Analysis...\n');
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
    const icons = { pass: '✅', fail: '❌', info: 'ℹ️', warn: '⚠️', optimize: '🔧' };
    console.log(`${icons[type] || '•'} ${message}`);
  }

  async analyzePagePerformance(url) {
    const page = await this.browser.newPage();
    try {
      // Enable performance monitoring
      await page.setCacheEnabled(false);
      const startTime = Date.now();
      
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      
      const loadTime = Date.now() - startTime;
      
      // Analyze Core Web Vitals
      const vitals = await page.evaluate(() => {
        return new Promise((resolve) => {
          const results = {};
          
          // LCP (Largest Contentful Paint)
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            if (entries.length > 0) {
              results.lcp = entries[entries.length - 1].startTime;
            }
          }).observe({ entryTypes: ['largest-contentful-paint'] });
          
          // FID (First Input Delay) - simulated
          results.fid = 0; // Simulated for analysis
          
          // CLS (Cumulative Layout Shift)
          new PerformanceObserver((list) => {
            let cls = 0;
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) {
                cls += entry.value;
              }
            }
            results.cls = cls;
          }).observe({ entryTypes: ['layout-shift'] });
          
          setTimeout(() => resolve(results), 2000);
        });
      });
      
      // Analyze page size and resources
      const resourceMetrics = await page.evaluate(() => {
        const resources = performance.getEntriesByType('resource');
        const images = resources.filter(r => r.name.match(/\.(jpg|jpeg|png|gif|webp)$/i));
        const scripts = resources.filter(r => r.name.match(/\.js$/i));
        const styles = resources.filter(r => r.name.match(/\.css$/i));
        
        return {
          totalResources: resources.length,
          images: images.length,
          scripts: scripts.length,
          styles: styles.length,
          totalSize: resources.reduce((sum, r) => sum + (r.transferSize || 0), 0)
        };
      });
      
      return {
        loadTime,
        vitals,
        resources: resourceMetrics,
        url: url.replace(PRODUCTION_URL, '').replace(LOCAL_URL, '') || '/'
      };
      
    } catch (error) {
      return { error: error.message, url };
    } finally {
      await page.close();
    }
  }

  async analyzeLocalSEO(url) {
    const page = await this.browser.newPage();
    try {
      await page.goto(url, { waitUntil: 'networkidle0' });
      
      const localSEOData = await page.evaluate(() => {
        // Check for local business schema
        const localBusinessSchemas = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
          .map(script => {
            try { return JSON.parse(script.innerHTML); }
            catch { return null; }
          })
          .filter(Boolean)
          .filter(schema => 
            schema['@type'] === 'LocalBusiness' || 
            (Array.isArray(schema['@graph']) && schema['@graph'].some(item => item['@type'] === 'LocalBusiness'))
          );
        
        // Check for location mentions
        const bodyText = document.body.textContent.toLowerCase();
        const statesMentioned = {
          florida: bodyText.includes('florida') || bodyText.includes('fl'),
          michigan: bodyText.includes('michigan') || bodyText.includes('mi'),
          northCarolina: bodyText.includes('north carolina') || bodyText.includes('nc')
        };
        
        // Check for contact information
        const hasPhoneNumber = !!document.querySelector('[href^="tel:"]');
        const hasAddress = bodyText.includes('address') || bodyText.includes('location');
        
        // Check for business hours
        const hasBusinessHours = bodyText.includes('hours') || bodyText.includes('open') || bodyText.includes('closed');
        
        return {
          localBusinessSchemas: localBusinessSchemas.length,
          statesMentioned,
          hasPhoneNumber,
          hasAddress,
          hasBusinessHours,
          pageTitle: document.title,
          metaDescription: document.querySelector('meta[name="description"]')?.content || ''
        };
      });
      
      return localSEOData;
      
    } catch (error) {
      return { error: error.message };
    } finally {
      await page.close();
    }
  }

  async analyzeContentQuality(url) {
    const page = await this.browser.newPage();
    try {
      await page.goto(url, { waitUntil: 'networkidle0' });
      
      const contentAnalysis = await page.evaluate(() => {
        // Heading structure analysis
        const h1s = Array.from(document.querySelectorAll('h1'));
        const h2s = Array.from(document.querySelectorAll('h2'));
        const h3s = Array.from(document.querySelectorAll('h3'));
        
        // Content length and quality
        const bodyText = document.body.textContent;
        const wordCount = bodyText.split(/\s+/).filter(word => word.length > 0).length;
        
        // Image optimization
        const images = Array.from(document.querySelectorAll('img'));
        const imagesWithAlt = images.filter(img => img.alt && img.alt.length > 0);
        const webpImages = images.filter(img => img.src.includes('.webp'));
        
        // Internal linking
        const internalLinks = Array.from(document.querySelectorAll('a[href^="/"], a[href*="bradfordinformedguidance.com"]'));
        const externalLinks = Array.from(document.querySelectorAll('a[href^="http"]'))
          .filter(link => !link.href.includes('bradfordinformedguidance.com'));
        
        // Meta tag analysis
        const metaDescription = document.querySelector('meta[name="description"]')?.content || '';
        const canonical = document.querySelector('link[rel="canonical"]')?.href || '';
        
        return {
          headings: {
            h1Count: h1s.length,
            h2Count: h2s.length,
            h3Count: h3s.length,
            h1Text: h1s.map(h => h.textContent.trim()).join(' | ')
          },
          content: {
            wordCount,
            hasEnoughContent: wordCount >= 300
          },
          images: {
            total: images.length,
            withAlt: imagesWithAlt.length,
            altOptimization: images.length > 0 ? (imagesWithAlt.length / images.length) * 100 : 100,
            webpOptimization: images.length > 0 ? (webpImages.length / images.length) * 100 : 0
          },
          links: {
            internal: internalLinks.length,
            external: externalLinks.length
          },
          meta: {
            description: metaDescription,
            descriptionLength: metaDescription.length,
            hasCanonical: !!canonical,
            canonical
          }
        };
      });
      
      return contentAnalysis;
      
    } catch (error) {
      return { error: error.message };
    } finally {
      await page.close();
    }
  }

  generateOptimizationReport() {
    const report = {
      timestamp: new Date().toISOString(),
      currentScore: 73, // From memory baseline
      targetScore: 96,
      improvements: [],
      quickWins: [],
      technicalEnhancements: [],
      longTermStrategies: []
    };
    
    // Analyze results and generate recommendations
    this.results.opportunities.forEach(opportunity => {
      if (opportunity.impact === 'high' && opportunity.effort === 'low') {
        report.quickWins.push(opportunity);
      } else if (opportunity.category === 'technical') {
        report.technicalEnhancements.push(opportunity);
      } else {
        report.longTermStrategies.push(opportunity);
      }
    });
    
    return report;
  }

  async runAdvancedAnalysis() {
    try {
      await this.init();
      
      console.log('📊 Analyzing Performance & Core Web Vitals...');
      const testPages = [
        `${PRODUCTION_URL}/`,
        `${PRODUCTION_URL}/services/health-insurance`,
        `${PRODUCTION_URL}/services/life-insurance`,
        `${PRODUCTION_URL}/about`,
        `${PRODUCTION_URL}/states/florida`
      ];
      
      for (const url of testPages) {
        const pagePath = url.replace(PRODUCTION_URL, '') || '/';
        console.log(`\nAnalyzing: ${pagePath}`);
        
        // Performance analysis
        const performance = await this.analyzePagePerformance(url);
        if (performance.loadTime) {
          this.log(performance.loadTime < 2000 ? 'pass' : 'warn', 
            `Load time: ${performance.loadTime}ms ${performance.loadTime < 2000 ? '(Good)' : '(Needs optimization)'}`);
        }
        
        // Local SEO analysis
        const localSEO = await this.analyzeLocalSEO(url);
        if (localSEO.localBusinessSchemas) {
          this.log(localSEO.localBusinessSchemas > 0 ? 'pass' : 'optimize', 
            `Local Business Schemas: ${localSEO.localBusinessSchemas}`);
        }
        
        // Content quality analysis
        const content = await this.analyzeContentQuality(url);
        if (content.headings) {
          this.log(content.headings.h1Count === 1 ? 'pass' : 'optimize', 
            `H1 count: ${content.headings.h1Count} ${content.headings.h1Count === 1 ? '(Perfect)' : '(Should be 1)'}`);
          
          this.log(content.images.altOptimization >= 90 ? 'pass' : 'optimize', 
            `Image alt optimization: ${content.images.altOptimization.toFixed(1)}%`);
          
          this.log(content.meta.descriptionLength >= 120 && content.meta.descriptionLength <= 160 ? 'pass' : 'optimize', 
            `Meta description: ${content.meta.descriptionLength} chars ${content.meta.descriptionLength >= 120 && content.meta.descriptionLength <= 160 ? '(Perfect)' : '(Optimize length)'}`);
        }
        
        // Store results for report generation
        this.results.performance[pagePath] = performance;
        this.results.local_seo[pagePath] = localSEO;
        this.results.content_quality[pagePath] = content;
        
        // Generate opportunities based on analysis
        if (performance.loadTime && performance.loadTime > 2000) {
          this.results.opportunities.push({
            page: pagePath,
            category: 'performance',
            issue: 'Slow page load time',
            impact: 'high',
            effort: 'medium',
            recommendation: 'Optimize images, minify resources, implement lazy loading'
          });
        }
        
        if (localSEO.localBusinessSchemas === 0) {
          this.results.opportunities.push({
            page: pagePath,
            category: 'local_seo',
            issue: 'Missing LocalBusiness schema',
            impact: 'high',
            effort: 'low',
            recommendation: 'Add LocalBusiness structured data for FL, MI, NC'
          });
        }
        
        if (content.meta.descriptionLength < 120 || content.meta.descriptionLength > 160) {
          this.results.opportunities.push({
            page: pagePath,
            category: 'content',
            issue: 'Suboptimal meta description length',
            impact: 'medium',
            effort: 'low',
            recommendation: 'Adjust meta description to 120-160 characters'
          });
        }
      }
      
      // Generate comprehensive report
      const optimizationReport = this.generateOptimizationReport();
      
      // Save results
      const reportPath = join(projectRoot, 'SEO_PHASE5_ANALYSIS.json');
      writeFileSync(reportPath, JSON.stringify({
        analysis: this.results,
        report: optimizationReport
      }, null, 2));
      
      console.log('\n📋 Phase 5 Analysis Summary:');
      console.log(`🎯 Current Score: ${optimizationReport.currentScore}/100`);
      console.log(`🎯 Target Score: ${optimizationReport.targetScore}/100`);
      console.log(`🔧 Quick Wins Identified: ${optimizationReport.quickWins.length}`);
      console.log(`⚙️ Technical Enhancements: ${optimizationReport.technicalEnhancements.length}`);
      console.log(`📈 Long-term Strategies: ${optimizationReport.longTermStrategies.length}`);
      
      console.log(`\n💾 Detailed analysis saved to: SEO_PHASE5_ANALYSIS.json`);
      
      return optimizationReport;
      
    } catch (error) {
      console.error('💥 Analysis failed:', error.message);
      return null;
    } finally {
      await this.cleanup();
    }
  }
}

// Run the advanced analysis
const analyzer = new AdvancedSEOAnalyzer();
analyzer.runAdvancedAnalysis().then(report => {
  if (report) {
    console.log('\n✅ Phase 5 analysis complete! Ready for optimization implementation.');
    process.exit(0);
  } else {
    console.log('\n❌ Analysis failed. Check the errors above.');
    process.exit(1);
  }
}).catch(error => {
  console.error('💥 Script failed:', error);
  process.exit(1);
});