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
    
    const today = new Date().toISOString().split('T')[0];

    const customDirectives = [
      'User-agent: *',
      'Allow: /',
      'Crawl-delay: 1',
      'Allow: /images/',
      'Allow: /css/',
      'Allow: /js/',
      'Allow: /states/',
      'Allow: /services/',
      'Allow: /guides/',
      'Allow: /blog/',
      'Disallow: /admin/',
      'Disallow: /private/',
      'Disallow: /test/',
      'Disallow: /thank-you',
      'Disallow: /success',
      'Disallow: /search',
      'Disallow: /api/',
      'Disallow: /*?*utm_*',
      'Disallow: /*?*ref=*',
      'Disallow: /*?*source=*',
      'Disallow: /*?*fbclid=*',
      'Disallow: /*?*gclid=*',
      'Disallow: /*?*msclkid=*',
      'Disallow: /*?*mc_cid=*',
      'Disallow: /*?*mc_eid=*',
      '',
      'User-agent: Googlebot',
      'Allow: /',
      'Crawl-delay: 1',
      '',
      'User-agent: Bingbot',
      'Allow: /',
      'Crawl-delay: 2',
      '',
      'User-agent: AhrefsBot',
      'Disallow: /',
      '',
      'User-agent: SemrushBot',
      'Disallow: /',
      '',
      'User-agent: facebookexternalhit',
      'Allow: /',
      '',
      'User-agent: Twitterbot',
      'Allow: /',
      '',
      'User-agent: LinkedInBot',
      'Allow: /',
      '',
      `# Last updated: ${today}`,
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
    const fallback = [
      '# robots.txt for Bradford Informed Guidance (fallback)',
      'User-agent: *',
      'Allow: /',
      '',
      'Sitemap: https://bradfordinformedguidance.com/sitemap_index.xml',
      'Sitemap: https://bradfordinformedguidance.com/sitemap-pages.xml',
      'Sitemap: https://bradfordinformedguidance.com/sitemap-images.xml',
      'Host: bradfordinformedguidance.com'
    ].join('\n') + '\n';
    
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