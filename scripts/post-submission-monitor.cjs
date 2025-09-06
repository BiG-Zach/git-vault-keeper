#!/usr/bin/env node

/**
 * Post-Submission Automated Monitoring System
 * Tracks Google indexing progress for manually submitted URLs
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const SUBMITTED_URLS = [
  { 
    url: 'https://bradfordinformedguidance.com/', 
    submitted: new Date().toISOString(),
    priority: 'Homepage',
    expectedKeywords: ['florida insurance', 'health insurance quotes', 'life insurance florida']
  },
  { 
    url: 'https://bradfordinformedguidance.com/services/health-insurance', 
    submitted: new Date().toISOString(),
    priority: 'High-value service',
    expectedKeywords: ['florida health insurance', 'best health insurance florida', 'health insurance plans']
  },
  { 
    url: 'https://bradfordinformedguidance.com/services/life-insurance', 
    submitted: new Date().toISOString(),
    priority: 'High-value service',
    expectedKeywords: ['florida life insurance', 'term life insurance', 'whole life insurance']
  },
  { 
    url: 'https://bradfordinformedguidance.com/about', 
    submitted: new Date().toISOString(),
    priority: 'Brand authority',
    expectedKeywords: ['bradford informed guidance', 'florida insurance agency', 'insurance experts']
  }
];

class PostSubmissionMonitor {
  constructor() {
    this.browser = null;
    this.monitoringStartTime = new Date();
    this.reportDirectory = 'scripts/monitoring-reports';
    this.results = {
      timestamp: new Date().toISOString(),
      monitoringSession: `session-${Date.now()}`,
      submissionCompleted: true,
      hoursElapsed: 0,
      urlStatuses: [],
      recommendations: []
    };
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportDirectory)) {
      fs.mkdirSync(this.reportDirectory, { recursive: true });
    }
  }

  async init() {
    console.log('🔍 Initializing Post-Submission Monitoring System...\n');
    console.log(`📊 Monitoring ${SUBMITTED_URLS.length} submitted URLs`);
    console.log(`⏰ Started: ${this.monitoringStartTime.toLocaleString()}\n`);
    
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
      monitor: '📊',
      time: '⏰',
      search: '🔍'
    };
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${icons[type] || '•'} ${message}`);
  }

  async checkUrlIndexability(urlData) {
    const page = await this.browser.newPage();
    
    try {
      this.log('search', `Checking: ${urlData.priority} - ${urlData.url}`);
      
      await page.setUserAgent('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');
      
      const startTime = Date.now();
      const response = await page.goto(urlData.url, { 
        waitUntil: 'networkidle0',
        timeout: 15000 
      });
      const loadTime = Date.now() - startTime;
      
      await page.waitForTimeout(2000);
      
      const seoData = await page.evaluate(() => {
        const getStructuredData = () => {
          try {
            const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
            return scripts.map(script => {
              const data = JSON.parse(script.innerHTML);
              return { type: data['@type'], context: data['@context'] };
            });
          } catch { return []; }
        };

        return {
          title: document.title || '',
          titleLength: (document.title || '').length,
          description: document.querySelector('meta[name="description"]')?.content || '',
          descriptionLength: (document.querySelector('meta[name="description"]')?.content || '').length,
          h1: document.querySelector('h1')?.textContent?.trim() || '',
          h1Count: document.querySelectorAll('h1').length,
          canonical: document.querySelector('link[rel="canonical"]')?.href || '',
          robots: document.querySelector('meta[name="robots"]')?.content || 'index,follow',
          wordCount: document.body?.textContent?.trim().split(/\s+/).length || 0,
          imageCount: document.querySelectorAll('img').length,
          structuredData: getStructuredData()
        };
      });

      await page.close();

      const indexingScore = this.calculateIndexingScore(seoData, response.status(), loadTime);
      
      const result = {
        ...urlData,
        status: response.status(),
        loadTime,
        accessible: response.status() === 200,
        seo: seoData,
        indexingScore,
        indexingReady: indexingScore >= 85,
        lastChecked: new Date().toISOString(),
        recommendations: this.generateRecommendations(seoData, loadTime)
      };

      if (result.indexingReady) {
        this.log('pass', `EXCELLENT - Score: ${indexingScore}/100`);
        this.log('info', `  Load: ${loadTime}ms | H1s: ${seoData.h1Count} | Words: ${seoData.wordCount}`);
      } else {
        this.log('warn', `NEEDS IMPROVEMENT - Score: ${indexingScore}/100`);
        this.log('info', `  Issues found - see recommendations`);
      }

      return result;
      
    } catch (error) {
      this.log('fail', `Error checking ${urlData.url}: ${error.message}`);
      return {
        ...urlData,
        error: error.message,
        accessible: false,
        indexingReady: false,
        indexingScore: 0,
        lastChecked: new Date().toISOString()
      };
    }
  }

  calculateIndexingScore(seo, statusCode, loadTime) {
    let score = 0;
    
    if (statusCode === 200) score += 20;
    if (loadTime < 2000) score += 15;
    else if (loadTime < 3000) score += 10;
    
    if (seo.titleLength >= 30 && seo.titleLength <= 60) score += 15;
    else if (seo.titleLength > 0) score += 5;
    
    if (seo.descriptionLength >= 120 && seo.descriptionLength <= 160) score += 15;
    else if (seo.descriptionLength > 0) score += 5;
    
    if (seo.h1Count === 1) score += 10;
    if (seo.wordCount >= 300) score += 10;
    if (seo.canonical) score += 5;
    if (seo.structuredData.length > 0) score += 5;
    
    return Math.min(score, 100);
  }

  generateRecommendations(seo, loadTime) {
    const recommendations = [];
    
    if (seo.h1Count !== 1) {
      recommendations.push(`Fix H1 structure: Found ${seo.h1Count} H1 tags, should be exactly 1`);
    }
    if (seo.titleLength < 30 || seo.titleLength > 60) {
      recommendations.push(`Optimize title length: ${seo.titleLength} chars (ideal: 30-60)`);
    }
    if (seo.descriptionLength < 120 || seo.descriptionLength > 160) {
      recommendations.push(`Optimize meta description: ${seo.descriptionLength} chars (ideal: 120-160)`);
    }
    if (loadTime > 3000) {
      recommendations.push(`Improve load time: ${loadTime}ms (target: <2000ms)`);
    }
    
    return recommendations;
  }

  async generateProgressReport() {
    const hoursElapsed = (new Date() - this.monitoringStartTime) / (1000 * 60 * 60);
    this.results.hoursElapsed = Math.round(hoursElapsed * 10) / 10;
    
    console.log('\n📊 POST-SUBMISSION MONITORING REPORT');
    console.log('===================================');
    console.log(`⏰ Time elapsed: ${this.results.hoursElapsed} hours`);
    console.log(`📅 Started: ${this.monitoringStartTime.toLocaleString()}\n`);
    
    const readyUrls = this.results.urlStatuses.filter(u => u.indexingReady).length;
    const accessibleUrls = this.results.urlStatuses.filter(u => u.accessible).length;
    const avgScore = this.results.urlStatuses.reduce((sum, u) => sum + (u.indexingScore || 0), 0) / this.results.urlStatuses.length;
    const avgLoadTime = this.results.urlStatuses.filter(u => u.loadTime).reduce((sum, u) => sum + u.loadTime, 0) / accessibleUrls;
    
    console.log('📈 CURRENT STATUS SUMMARY');
    console.log('=========================');
    console.log(`✅ URLs ready for indexing: ${readyUrls}/${SUBMITTED_URLS.length}`);
    console.log(`🌐 URLs accessible: ${accessibleUrls}/${SUBMITTED_URLS.length}`);
    console.log(`📊 Average indexing score: ${Math.round(avgScore)}/100`);
    console.log(`⚡ Average load time: ${Math.round(avgLoadTime)}ms\n`);
    
    console.log('🔍 INDIVIDUAL URL STATUS');
    console.log('========================');
    this.results.urlStatuses.forEach(url => {
      const status = url.indexingReady ? '✅ READY' : '⚠️ NEEDS WORK';
      console.log(`${status} ${url.priority}`);
      console.log(`   └── Score: ${url.indexingScore || 0}/100 | Load: ${url.loadTime || 'N/A'}ms`);
      console.log(`   └── ${url.url}`);
      
      if (url.recommendations && url.recommendations.length > 0) {
        console.log(`   └── Issues: ${url.recommendations.slice(0, 2).join(', ')}`);
      }
      console.log('');
    });
    
    this.generateTimelineGuidance(hoursElapsed);
    
    const reportData = {
      ...this.results,
      summary: {
        hoursElapsed: this.results.hoursElapsed,
        readyUrls,
        accessibleUrls,
        avgScore: Math.round(avgScore),
        avgLoadTime: Math.round(avgLoadTime)
      }
    };
    
    const reportFile = path.join(this.reportDirectory, `monitoring-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(reportData, null, 2));
    this.log('info', `Detailed report saved: ${reportFile}`);
    
    return reportData;
  }

  generateTimelineGuidance(hoursElapsed) {
    console.log('⏰ EXPECTED TIMELINE & NEXT STEPS');
    console.log('==================================');
    
    if (hoursElapsed < 6) {
      console.log('📍 Current Phase: Initial submission processing');
      console.log('├── ✅ Manual submission completed');
      console.log('├── 🔄 Google processing indexing requests');
      console.log('├── ⏳ GSC should show "Indexing requested" status');
      console.log('└── 📅 Next check: Continue monitoring every 4 hours\n');
      
      console.log('🎯 IMMEDIATE ACTIONS (Next 2-6 hours):');
      console.log('├── Check GSC "URL Inspection" for each submitted URL');
      console.log('├── Look for "Indexing requested" confirmation messages');
      console.log('└── Monitor "Pages" report for any index count changes\n');
      
    } else if (hoursElapsed < 24) {
      console.log('📍 Current Phase: Early indexing period');
      console.log('├── ⏳ First URLs may start appearing in Google index');
      console.log('├── 📊 GSC "Pages" report should show activity');
      console.log('└── 🔍 URL Inspection may show "URL is on Google"\n');
      
      console.log('🎯 MONITORING ACTIONS (Next 12-24 hours):');
      console.log('├── Check GSC "Pages" report daily for index count increase');
      console.log('├── Monitor "Coverage" report for any indexing errors');
      console.log('└── Watch for first search impressions in Performance tab\n');
      
    } else {
      console.log('📍 Current Phase: Active indexing expected');
      console.log('├── 🎯 Most submitted URLs should be indexed by now');
      console.log('├── 📈 Performance data should start showing in GSC');
      console.log('└── 🚀 Ready to submit next batch of URLs\n');
      
      console.log('🚀 BATCH 2 SUBMISSION (Submit now):');
      console.log('├── https://bradfordinformedguidance.com/states/florida');
      console.log('├── https://bradfordinformedguidance.com/blog/term-vs-whole-life-insurance-2024');
      console.log('└── https://bradfordinformedguidance.com/blog/florida-health-insurance-guide-2024\n');
    }
  }

  async runMonitoringCycle() {
    try {
      await this.init();
      
      this.log('monitor', 'Starting monitoring cycle...');
      
      for (const urlData of SUBMITTED_URLS) {
        const result = await this.checkUrlIndexability(urlData);
        this.results.urlStatuses.push(result);
      }
      
      await this.generateProgressReport();
      
      this.log('success', 'Monitoring cycle completed successfully');
      
    } catch (error) {
      this.log('fail', `Monitoring cycle failed: ${error.message}`);
      console.error(error);
    } finally {
      await this.cleanup();
    }
  }
}

async function runMonitoring() {
  const monitor = new PostSubmissionMonitor();
  await monitor.runMonitoringCycle();
}

module.exports = { PostSubmissionMonitor };

if (require.main === module) {
  runMonitoring().catch(console.error);
}