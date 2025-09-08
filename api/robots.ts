/**
 * Dynamic Robots.txt API Endpoint
 * Generates SEO-optimized crawling directives for search engine domination
 */

import { generateRobotsTxt } from '../src/utils/sitemap';

export const GET = async () => {
  try {
    const baseUrl = 'https://www.bradfordinformedguidance.com';
    
    // Additional SEO-focused directives
    const customDirectives = [
      '',
      '# Insurance-specific SEO optimizations',
      'Allow: /states/*',
      'Allow: /services/*',
      'Allow: /guides/*',
      'Allow: /blog/*',
      '',
      '# Optimize crawl budget for high-value pages',
      'User-agent: *',
      'Crawl-delay: 1',
      '',
      '# Block low-value paths to preserve crawl budget',
      'Disallow: /admin/',
      'Disallow: /private/',
      'Disallow: /test/',
      'Disallow: /*?*utm_*',
      'Disallow: /*?*ref=*',
      'Disallow: /*?*source=*',
      '',
      '# Allow social media crawlers for Open Graph',
      'User-agent: facebookexternalhit',
      'Allow: /',
      '',
      'User-agent: Twitterbot',
      'Allow: /',
      '',
      'User-agent: LinkedInBot',
      'Allow: /',
      '',
      '# Insurance industry crawlers',
      'User-agent: *bot*',
      'Crawl-delay: 2',
      '',
      '# Performance optimization',
      'Request-rate: 1/1s',
      'Visit-time: 0600-2300',
      '',
      '# Additional metadata',
      `# Last updated: ${new Date().toISOString().split('T')[0]}`,
      '# Contact: seo@bradfordinformedguidance.com'
    ];
    
    const robotsTxt = generateRobotsTxt(baseUrl, customDirectives);
    
    return new Response(robotsTxt, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
        'X-Generated': new Date().toISOString(),
        'X-Purpose': 'SEO Optimization'
      }
    });
    
  } catch (error) {
    console.error('Robots.txt generation error:', error);
    
    // Fallback robots.txt
    const fallback = `User-agent: *
Allow: /

Sitemap: https://www.bradfordinformedguidance.com/sitemap.xml`;
    
    return new Response(fallback, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  }
};

// Generate robots.txt at build time
export const prerender = false;