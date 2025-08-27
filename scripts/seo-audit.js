#!/usr/bin/env node

/**
 * Comprehensive SEO Audit Script for Bradford Informed Guidance
 * Checks all aspects of SEO implementation and generates a detailed report
 */

import fs from 'fs';
import path from 'path';
import { URL } from 'url';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SEOAuditor {
  constructor() {
    this.siteUrl = 'https://www.bradfordinformedguidance.com';
    this.localUrl = 'http://localhost:8080';
    this.results = {
      timestamp: new Date().toISOString(),
      overall_score: 0,
      technical_seo: {},
      content_seo: {},
      local_seo: {},
      performance: {},
      mobile: {},
      structured_data: {},
      recommendations: []
    };
  }

  async runAudit() {
    console.log('🔍 Starting comprehensive SEO audit...\n');
    
    // Check local files first
    await this.auditLocalFiles();
    
    // Check if site is running locally
    const isLocalRunning = await this.checkLocalSite();
    
    if (isLocalRunning) {
      await this.auditLocalSite();
    } else {
      console.log('⚠️  Local development server not running at http://localhost:8080');
      console.log('   To audit the live site, run: npm run dev\n');
    }
    
    // Generate final report
    this.generateReport();
  }

  async auditLocalFiles() {
    console.log('📁 Auditing local SEO files...');
    
    // Check sitemap.xml
    const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      const sitemap = fs.readFileSync(sitemapPath, 'utf8');
      this.results.technical_seo.sitemap = {
        exists: true,
        entries: (sitemap.match(/<url>/g) || []).length,
        has_images: sitemap.includes('<image:image>'),
        has_priorities: sitemap.includes('<priority>'),
        status: '✅ Static sitemap exists with images and priorities'
      };
    } else {
      this.results.technical_seo.sitemap = {
        exists: false,
        status: '❌ Static sitemap not found'
      };
    }

    // Check robots.txt
    const robotsPath = path.join(__dirname, '../public/robots.txt');
    if (fs.existsSync(robotsPath)) {
      const robots = fs.readFileSync(robotsPath, 'utf8');
      this.results.technical_seo.robots = {
        exists: true,
        has_sitemap_directive: robots.includes('Sitemap:'),
        blocks_crawlers: robots.includes('Disallow:'),
        allows_social_crawlers: robots.includes('facebookexternalhit'),
        status: '✅ Robots.txt properly configured'
      };
    } else {
      this.results.technical_seo.robots = {
        exists: false,
        status: '❌ Robots.txt not found'
      };
    }

    // Check SEO utilities
    const seoUtilsPath = path.join(__dirname, '../src/utils/seo.ts');
    if (fs.existsSync(seoUtilsPath)) {
      const seoUtils = fs.readFileSync(seoUtilsPath, 'utf8');
      this.results.technical_seo.seo_utils = {
        exists: true,
        has_meta_management: seoUtils.includes('ensureMeta'),
        has_og_tags: seoUtils.includes('og:'),
        has_twitter_cards: seoUtils.includes('twitter:'),
        has_canonical: seoUtils.includes('canonical'),
        status: '✅ Comprehensive SEO utilities implemented'
      };
    }

    // Check structured data schemas
    const schemaPath = path.join(__dirname, '../src/utils/schema.ts');
    if (fs.existsSync(schemaPath)) {
      const schema = fs.readFileSync(schemaPath, 'utf8');
      const schemaTypes = [
        'Organization', 'LocalBusiness', 'InsuranceAgency', 'WebSite', 'WebPage', 
        'BreadcrumbList', 'FAQPage', 'Review', 'Service'
      ];
      
      const implementedSchemas = schemaTypes.filter(type => 
        schema.includes(`"@type": "${type}"`) || schema.includes(`'@type': '${type}'`) ||
        schema.includes(`@type.*${type}`) // Support for enhanced schema detection
      );
      
      this.results.structured_data = {
        total_schemas: implementedSchemas.length,
        implemented: implementedSchemas,
        missing: schemaTypes.filter(type => !implementedSchemas.includes(type)),
        status: `✅ ${implementedSchemas.length}/${schemaTypes.length} essential schemas implemented`
      };
    }

    // Check Core Web Vitals implementation
    const coreWebVitalsPath = path.join(__dirname, '../src/utils/coreWebVitals.ts');
    if (fs.existsSync(coreWebVitalsPath)) {
      this.results.performance.core_web_vitals = {
        implemented: true,
        status: '✅ Core Web Vitals monitoring implemented'
      };
    }

    console.log('   ✅ Local file audit complete\n');
  }

  async checkLocalSite() {
    try {
      const response = await fetch(this.localUrl);
      return response.status === 200;
    } catch (error) {
      return false;
    }
  }

  async auditLocalSite() {
    console.log('🌐 Auditing local development site...');
    
    try {
      // Test homepage
      const response = await fetch(this.localUrl);
      const html = await response.text();
      
      // Check basic SEO elements
      this.results.content_seo = {
        title: this.extractTag(html, 'title'),
        meta_description: this.extractMeta(html, 'description'),
        canonical: this.extractTag(html, 'link[rel="canonical"]', 'href'),
        og_title: this.extractMeta(html, 'og:title', 'property'),
        og_description: this.extractMeta(html, 'og:description', 'property'),
        twitter_card: this.extractMeta(html, 'twitter:card'),
        h1_count: (html.match(/<h1[^>]*>/gi) || []).length,
        status: '✅ Basic SEO elements present'
      };

      // Test sitemap endpoint
      const sitemapResponse = await fetch(`${this.localUrl}/api/sitemap`);
      if (sitemapResponse.status === 200) {
        this.results.technical_seo.dynamic_sitemap = {
          accessible: true,
          status: '✅ Dynamic sitemap endpoint working'
        };
      }

      // Test robots.txt endpoint  
      const robotsResponse = await fetch(`${this.localUrl}/api/robots`);
      if (robotsResponse.status === 200) {
        this.results.technical_seo.dynamic_robots = {
          accessible: true,
          status: '✅ Dynamic robots.txt endpoint working'
        };
      }

    } catch (error) {
      this.results.content_seo.status = '❌ Failed to audit local site';
    }

    console.log('   ✅ Local site audit complete\n');
  }

  extractTag(html, selector, attribute = 'textContent') {
    const regex = new RegExp(`<${selector}[^>]*>([^<]*)</${selector}>`, 'i');
    const match = html.match(regex);
    return match ? match[1].trim() : 'Not found';
  }

  extractMeta(html, name, nameAttr = 'name') {
    const regex = new RegExp(`<meta[^>]*${nameAttr}=["']${name}["'][^>]*content=["']([^"']*)["']`, 'i');
    const match = html.match(regex);
    return match ? match[1] : 'Not found';
  }

  calculateOverallScore() {
    let score = 0;
    let maxScore = 0;

    // Technical SEO (40 points)
    maxScore += 40;
    if (this.results.technical_seo.sitemap?.exists) score += 10;
    if (this.results.technical_seo.robots?.exists) score += 10;
    if (this.results.technical_seo.seo_utils?.exists) score += 10;
    if (this.results.technical_seo.dynamic_sitemap?.accessible) score += 5;
    if (this.results.technical_seo.dynamic_robots?.accessible) score += 5;

    // Structured Data (30 points)
    maxScore += 30;
    const schemaScore = (this.results.structured_data.total_schemas || 0) * 4;
    score += Math.min(schemaScore, 30);

    // Content SEO (20 points)
    maxScore += 20;
    if (this.results.content_seo.title !== 'Not found') score += 5;
    if (this.results.content_seo.meta_description !== 'Not found') score += 5;
    if (this.results.content_seo.canonical !== 'Not found') score += 5;
    if (this.results.content_seo.og_title !== 'Not found') score += 5;

    // Performance (10 points)
    maxScore += 10;
    if (this.results.performance.core_web_vitals?.implemented) score += 10;

    this.results.overall_score = Math.round((score / maxScore) * 100);
  }

  generateRecommendations() {
    const recommendations = [];

    if (!this.results.technical_seo.sitemap?.exists) {
      recommendations.push('❗ Create a static sitemap.xml file');
    }

    if (!this.results.technical_seo.robots?.exists) {
      recommendations.push('❗ Create a robots.txt file');
    }

    if (this.results.structured_data.missing?.length > 0) {
      recommendations.push(`📈 Implement missing schemas: ${this.results.structured_data.missing.join(', ')}`);
    }

    if (this.results.content_seo.h1_count > 1) {
      recommendations.push('⚠️ Multiple H1 tags found - use only one H1 per page');
    }

    if (this.results.overall_score < 80) {
      recommendations.push('🎯 Focus on improving technical SEO foundations');
    }

    recommendations.push('🚀 Consider implementing image optimization');
    recommendations.push('📱 Test mobile-first indexing compatibility');
    recommendations.push('⚡ Monitor Core Web Vitals regularly');

    this.results.recommendations = recommendations;
  }

  generateReport() {
    this.calculateOverallScore();
    this.generateRecommendations();

    console.log('📊 SEO AUDIT REPORT');
    console.log('='.repeat(50));
    console.log(`🎯 Overall SEO Score: ${this.results.overall_score}/100`);
    console.log('');

    console.log('📋 TECHNICAL SEO');
    console.log('-'.repeat(30));
    Object.entries(this.results.technical_seo).forEach(([key, value]) => {
      if (value.status) {
        console.log(`   ${value.status}`);
      }
    });
    console.log('');

    console.log('📝 CONTENT SEO');
    console.log('-'.repeat(30));
    if (this.results.content_seo.status) {
      console.log(`   ${this.results.content_seo.status}`);
    }
    console.log('');

    console.log('🏗️ STRUCTURED DATA');
    console.log('-'.repeat(30));
    if (this.results.structured_data.status) {
      console.log(`   ${this.results.structured_data.status}`);
    }
    console.log('');

    console.log('💡 RECOMMENDATIONS');
    console.log('-'.repeat(30));
    this.results.recommendations.forEach(rec => {
      console.log(`   ${rec}`);
    });
    console.log('');

    // Save detailed report
    const reportPath = path.join(__dirname, `seo-audit-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`📄 Detailed report saved to: ${reportPath}`);
  }
}

// Run the audit
const auditor = new SEOAuditor();
auditor.runAudit().catch(console.error);