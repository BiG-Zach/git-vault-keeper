#!/usr/bin/env node

/**
 * Monitoring Dashboard
 * Displays real-time monitoring results and indexing progress
 */

const fs = require('fs');
const path = require('path');

class MonitoringDashboard {
  constructor() {
    this.reportsDir = 'scripts/monitoring-reports';
    this.logsDir = 'scripts/monitoring-logs';
  }

  getLatestReport() {
    if (!fs.existsSync(this.reportsDir)) {
      return null;
    }

    const reports = fs.readdirSync(this.reportsDir)
      .filter(file => file.startsWith('monitoring-') && file.endsWith('.json'))
      .map(file => ({
        file,
        timestamp: fs.statSync(path.join(this.reportsDir, file)).mtime
      }))
      .sort((a, b) => b.timestamp - a.timestamp);

    if (reports.length === 0) {
      return null;
    }

    const latestFile = path.join(this.reportsDir, reports[0].file);
    return JSON.parse(fs.readFileSync(latestFile, 'utf8'));
  }

  displayProgress() {
    console.log('🎯 INDEXING PROGRESS DASHBOARD');
    console.log('==============================');
    console.log(`📅 Updated: ${new Date().toLocaleString()}\n`);

    const report = this.getLatestReport();
    
    if (!report) {
      console.log('❌ No monitoring reports found yet');
      console.log('Run: node scripts/post-submission-monitor.cjs');
      return;
    }

    const { summary } = report;
    console.log('📊 CURRENT STATUS OVERVIEW');
    console.log('===========================');
    console.log(`⏰ Hours since submission: ${summary.hoursElapsed}`);
    console.log(`✅ URLs ready for indexing: ${summary.readyUrls}/${report.urlStatuses.length}`);
    console.log(`🌐 URLs accessible: ${summary.accessibleUrls}/${report.urlStatuses.length}`);
    console.log(`📈 Average SEO score: ${summary.avgScore}/100`);
    console.log(`⚡ Average load time: ${summary.avgLoadTime}ms\n`);

    const progressPercent = (summary.readyUrls / report.urlStatuses.length) * 100;
    const progressBar = '█'.repeat(Math.floor(progressPercent / 5)) + 
                       '░'.repeat(20 - Math.floor(progressPercent / 5));
    console.log(`🎯 INDEXING READINESS: ${Math.round(progressPercent)}%`);
    console.log(`[${progressBar}]\n`);

    console.log('🔍 URL-BY-URL STATUS');
    console.log('====================');
    report.urlStatuses.forEach((url) => {
      const status = url.indexingReady ? '✅' : '⚠️';
      const score = url.indexingScore || 0;
      const load = url.loadTime ? `${url.loadTime}ms` : 'N/A';
      
      console.log(`${status} ${url.priority} (Score: ${score}/100)`);
      console.log(`   └── Load: ${load} | H1s: ${url.seo?.h1Count || 'N/A'} | Words: ${url.seo?.wordCount || 'N/A'}`);
      console.log(`   └── ${url.url}`);
      
      if (url.recommendations && url.recommendations.length > 0) {
        console.log(`   └── Issues: ${url.recommendations.slice(0, 3).join(', ')}`);
      }
      console.log('');
    });

    this.showTimelineGuidance(summary.hoursElapsed);
    this.showGSCTips(summary.hoursElapsed);
  }

  showTimelineGuidance(hoursElapsed) {
    console.log('⏰ WHAT TO EXPECT NEXT');
    console.log('======================');
    
    if (hoursElapsed < 6) {
      console.log('📍 Phase: Initial Processing (0-6 hours)');
      console.log('├── Google is processing your indexing requests');
      console.log('├── Check GSC for "Indexing requested" confirmations');
      console.log('└── No search visibility expected yet (normal)\n');
      
      console.log('🎯 NEXT MILESTONE: 6-12 hours');
      console.log('├── First URLs may appear in Google index');
      console.log('└── GSC "Pages" report should show activity\n');
      
    } else if (hoursElapsed < 24) {
      console.log('📍 Phase: Early Indexing (6-24 hours)');
      console.log('├── 2-3 URLs should start appearing in search results');
      console.log('├── GSC "Pages" count should increase from 2 pages');
      console.log('└── URL Inspection may show "URL is on Google"\n');
      
      console.log('🎯 NEXT MILESTONE: 24-48 hours');
      console.log('├── Most/all submitted URLs should be indexed');
      console.log('├── First search impressions in GSC Performance');
      console.log('└── Ready to submit next batch of 3 URLs\n');
      
    } else if (hoursElapsed < 48) {
      console.log('📍 Phase: Active Indexing (24-48 hours)');
      console.log('├── All 4 submitted URLs should be indexed');
      console.log('├── Search performance data becoming available');
      console.log('└── Time to submit next batch!\n');
      
      console.log('🚀 SUBMIT THESE 3 URLS NOW:');
      console.log('├── https://bradfordinformedguidance.com/states/florida');
      console.log('├── https://bradfordinformedguidance.com/blog/term-vs-whole-life-insurance-2024');
      console.log('└── https://bradfordinformedguidance.com/blog/florida-health-insurance-guide-2024\n');
      
    } else {
      console.log('📍 Phase: Optimization & Growth (48+ hours)');
      console.log('├── Focus on keyword performance analysis');
      console.log('├── Monitor Core Web Vitals (needs 28 days data)');
      console.log('├── Plan content expansion based on search queries');
      console.log('└── Track ranking improvements for target keywords\n');
    }
  }

  showGSCTips(hoursElapsed) {
    console.log('📋 GOOGLE SEARCH CONSOLE MONITORING');
    console.log('===================================');
    
    if (hoursElapsed < 12) {
      console.log('🔍 Check these GSC sections every 6 hours:');
      console.log('├── URL Inspection: Look for "Indexing requested" → "URL is on Google"');
      console.log('├── Pages Report: Watch for index count increase (currently 2 pages)');
      console.log('└── Coverage Report: Ensure no "Excluded" or "Error" statuses\n');
      
    } else if (hoursElapsed < 48) {
      console.log('📊 Check these GSC sections daily:');
      console.log('├── Pages Report: Should show 4-6 indexed pages');
      console.log('├── Performance: First search impressions for target keywords');
      console.log('├── URL Inspection: All submitted URLs should show "URL is on Google"');
      console.log('└── Enhancements: Check for any Mobile Usability issues\n');
      
    } else {
      console.log('📈 Weekly GSC monitoring routine:');
      console.log('├── Performance: Analyze top search queries and CTR');
      console.log('├── Pages: Monitor index coverage and growth trends');
      console.log('├── Core Web Vitals: Track loading performance (28+ days data)');
      console.log('├── Links: Monitor internal and external link growth');
      console.log('└── Manual Actions: Ensure no penalties (should remain clean)\n');
    }
  }
}

function main() {
  const dashboard = new MonitoringDashboard();
  const command = process.argv[2];

  switch (command) {
    case 'status':
    case 'show':
    default:
      dashboard.displayProgress();
      break;
    
    case 'help':
      console.log('📊 Monitoring Dashboard Commands');
      console.log('================================');
      console.log('node scripts/monitoring-dashboard.cjs [command]');
      console.log('');
      console.log('Commands:');
      console.log('  status   - Show current indexing progress (default)');
      console.log('  help     - Show this help message');
      break;
  }
}

main();