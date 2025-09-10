/**
 * Dynamic Robots.txt API Endpoint
 * Generates SEO-optimized crawling directives for search engines
 */

import { generateRobotsTxt } from '../src/utils/sitemap';

export const GET = async (req: Request) => {
  try {
    const host = (req.headers.get('host') || '').toLowerCase();

    // If preview/staging domain, disallow all crawling
    if (host.endsWith('.vercel.app')) {
      const preview = `User-agent: *\nDisallow: /\n`;
      return new Response(preview, {
        status: 200,
        headers: { 'Content-Type': 'text/plain', 'Cache-Control': 'public, max-age=86400' }
      });
    }

    const baseUrl = 'https://bradfordinformedguidance.com';
    
    // Additional directives per policy
    const customDirectives = [
      '',
      '# Crawl allowances (sections of value)',
      'Allow: /states/*',
      'Allow: /services/*',
      'Allow: /guides/*',
      'Allow: /blog/*',
      '',
      '# Optimize crawl budget for high-value pages',
      'User-agent: *',
      'Crawl-delay: 1',
      '',
      '# Block low-value/private paths and tracking parameters',
      'Disallow: /admin/',
      'Disallow: /private/',
      'Disallow: /test/',
      'Disallow: /thank-you',
      'Disallow: /success',
      'Disallow: /search',
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
    const fallback = `User-agent: *\nAllow: /\n\nSitemap: https://bradfordinformedguidance.com/sitemap_index.xml`;
    
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