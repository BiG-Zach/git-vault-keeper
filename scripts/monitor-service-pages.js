#!/usr/bin/env node

/**
 * Service Pages SEO Monitoring Script
 * Monitors the accessibility and basic SEO health of service pages
 * Run with: node scripts/monitor-service-pages.js
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.bradfordinformedguidance.com';
const SERVICE_PAGES = [
  '/services/health-insurance',
  '/services/life-insurance', 
  '/services/iul-insurance',
  '/services/ppo-networks'
];

const OTHER_CRITICAL_PAGES = [
  '/',
  '/quote',
  '/carriers',
  '/states/florida',
  '/states/michigan', 
  '/states/north-carolina',
  '/sitemap.xml',
  '/robots.txt'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    
    const options = {
      method: 'HEAD',
      headers: {
        'User-Agent': 'SEO-Monitor/1.0 (Bradford Insurance Site Monitor)'
      }
    };

    const req = https.request(url, options, (res) => {
      const responseTime = Date.now() - startTime;
      resolve({
        url,
        status: res.statusCode,
        responseTime,
        headers: {
          contentType: res.headers['content-type'],
          lastModified: res.headers['last-modified'],
          cacheControl: res.headers['cache-control']
        }
      });
    });

    req.on('error', (err) => {
      resolve({
        url,
        status: 'ERROR',
        error: err.message,
        responseTime: Date.now() - startTime
      });
    });

    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        url,
        status: 'TIMEOUT',
        responseTime: Date.now() - startTime
      });
    });

    req.end();
  });
}

async function checkSEOHeaders(url) {
  return new Promise((resolve) => {
    const options = {
      method: 'GET',
      headers: {
        'User-Agent': 'SEO-Monitor/1.0 (Bradford Insurance Site Monitor)'
      }
    };

    let data = '';
    const req = https.request(url, options, (res) => {
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Basic SEO checks
        const hasTitle = /<title[^>]*>([^<]+)<\/title>/i.test(data);
        const hasDescription = /<meta[^>]*name="description"[^>]*content="([^"]+)"/i.test(data);
        const hasH1 = /<h1[^>]*>([^<]+)<\/h1>/i.test(data);
        const hasSchema = /application\/ld\+json/i.test(data);
        
        resolve({
          url,
          seo: {
            hasTitle,
            hasDescription, 
            hasH1,
            hasSchema,
            titleLength: hasTitle ? data.match(/<title[^>]*>([^<]+)<\/title>/i)[1].length : 0
          }
        });
      });
    });

    req.on('error', (err) => {
      resolve({
        url,
        seo: { error: err.message }
      });
    });

    req.setTimeout(15000, () => {
      req.destroy();
      resolve({
        url,
        seo: { error: 'TIMEOUT' }
      });
    });

    req.end();
  });
}

async function runMonitoring() {
  console.log('🔍 Bradford Insurance - Service Pages SEO Monitor');
  console.log('=' .repeat(60));
  console.log(`Timestamp: ${new Date().toISOString()}`);
  console.log('');

  // Check service pages status
  console.log('📋 SERVICE PAGES STATUS CHECK');
  console.log('-'.repeat(40));
  
  const serviceResults = [];
  for (const page of SERVICE_PAGES) {
    const url = BASE_URL + page;
    const result = await checkUrl(url);
    serviceResults.push(result);
    
    const status = result.status === 200 ? '✅' : '❌';
    const timing = result.responseTime ? `${result.responseTime}ms` : 'N/A';
    console.log(`${status} ${page.padEnd(30)} ${result.status} (${timing})`);
  }

  // Check critical pages
  console.log('\n🏠 CRITICAL PAGES STATUS CHECK');
  console.log('-'.repeat(40));
  
  const criticalResults = [];
  for (const page of OTHER_CRITICAL_PAGES) {
    const url = BASE_URL + page;
    const result = await checkUrl(url);
    criticalResults.push(result);
    
    const status = result.status === 200 ? '✅' : '❌';
    const timing = result.responseTime ? `${result.responseTime}ms` : 'N/A';
    console.log(`${status} ${page.padEnd(30)} ${result.status} (${timing})`);
  }

  // SEO Health Check for Service Pages
  console.log('\n🎯 SERVICE PAGES SEO HEALTH CHECK');
  console.log('-'.repeat(40));
  
  for (const page of SERVICE_PAGES) {
    const url = BASE_URL + page;
    const seoResult = await checkSEOHeaders(url);
    
    if (seoResult.seo.error) {
      console.log(`❌ ${page}: ERROR - ${seoResult.seo.error}`);
      continue;
    }

    const seo = seoResult.seo;
    const checks = [
      seo.hasTitle ? '✅ Title' : '❌ Title',
      seo.hasDescription ? '✅ Description' : '❌ Description', 
      seo.hasH1 ? '✅ H1' : '❌ H1',
      seo.hasSchema ? '✅ Schema' : '❌ Schema'
    ];
    
    console.log(`${page}:`);
    console.log(`  ${checks.join(' | ')}`);
    if (seo.titleLength) {
      console.log(`  Title Length: ${seo.titleLength} chars ${seo.titleLength > 60 ? '✅' : '⚠️'}`);
    }
  }

  // Summary
  const serviceOkCount = serviceResults.filter(r => r.status === 200).length;
  const criticalOkCount = criticalResults.filter(r => r.status === 200).length;
  
  console.log('\n📊 SUMMARY');
  console.log('-'.repeat(20));
  console.log(`Service Pages: ${serviceOkCount}/${SERVICE_PAGES.length} OK`);
  console.log(`Critical Pages: ${criticalOkCount}/${OTHER_CRITICAL_PAGES.length} OK`);
  
  const avgServiceTime = serviceResults
    .filter(r => r.responseTime)
    .reduce((acc, r) => acc + r.responseTime, 0) / serviceResults.length;
  console.log(`Avg Response Time: ${Math.round(avgServiceTime)}ms`);

  // Save results to file
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const results = {
    timestamp: new Date().toISOString(),
    servicePages: serviceResults,
    criticalPages: criticalResults,
    summary: {
      serviceOkCount,
      criticalOkCount,
      avgResponseTime: Math.round(avgServiceTime)
    }
  };

  const filename = `monitoring-results-${timestamp}.json`;
  const filepath = path.join(__dirname, filename);
  fs.writeFileSync(filepath, JSON.stringify(results, null, 2));
  console.log(`\n💾 Results saved to: scripts/${filename}`);

  // Alert for issues
  if (serviceOkCount < SERVICE_PAGES.length) {
    console.log('\n🚨 ALERT: Some service pages are not responding correctly!');
    serviceResults.filter(r => r.status !== 200).forEach(r => {
      console.log(`  ❌ ${r.url}: ${r.status} ${r.error || ''}`);
    });
  } else {
    console.log('\n✅ All service pages are responding correctly!');
  }
}

// Run the monitoring
runMonitoring().catch(console.error);