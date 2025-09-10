/**
 * Dynamic XML Sitemap Generator for SEO Domination
 * Generates comprehensive sitemaps with priority scoring, lastmod dates, and hreflang
 */

import { stateMetadata, type StateCodeSlug } from './stateMetadata';

export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  alternates?: Array<{ hreflang: string; href: string }>;
  images?: Array<{ loc: string; caption?: string; title?: string }>;
}

export interface SitemapConfig {
  baseUrl: string;
  includeStatePages: boolean;
  includeBlogPosts: boolean;
  includeServicePages: boolean;
  includeImages: boolean;
  lastBuildDate?: string;
}

const DEFAULT_CONFIG: SitemapConfig = {
  baseUrl: 'https://bradfordinformedguidance.com',
  includeStatePages: true,
  includeBlogPosts: true,
  includeServicePages: true,
  includeImages: true,
  lastBuildDate: new Date().toISOString(),
};

// Core pages with SEO priority scoring
const CORE_PAGES: SitemapEntry[] = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1.0,
    images: [
      { loc: '/images/hero-family.webp', caption: 'Happy family with health insurance coverage' },
      { loc: '/images/trust-badges.webp', caption: 'Licensed insurance professional badges' }
    ]
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      { loc: '/images/about-team.webp', caption: 'Bradford Informed Guidance team' },
      { loc: '/images/office-location.webp', caption: 'Insurance office location' }
    ]
  },
  {
    url: '/carriers',
    changefreq: 'weekly',
    priority: 0.9,
    images: [
      { loc: '/images/carrier-logos.webp', caption: 'Top insurance carrier partnerships' },
      { loc: '/images/ppo-networks.webp', caption: 'PPO network coverage map' }
    ]
  },
  {
    url: '/how-it-works',
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      { loc: '/images/process-steps.webp', caption: 'Insurance selection process' }
    ]
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: 0.7,
    images: [
      { loc: '/images/contact-form.webp', caption: 'Contact our insurance experts' }
    ]
  },
  {
    url: '/quote',
    changefreq: 'daily',
    priority: 0.95,
    images: [
      { loc: '/images/quote-calculator.webp', caption: 'Instant insurance quote tool' }
    ]
  }
];

// Service pages for semantic SEO clusters
const SERVICE_PAGES: SitemapEntry[] = [
  {
    url: '/services/health-insurance',
    changefreq: 'weekly',
    priority: 0.9,
    images: [
      { loc: '/images/health-insurance-guide.webp', caption: 'Comprehensive health insurance guide' }
    ]
  },
  {
    url: '/services/life-insurance',
    changefreq: 'weekly', 
    priority: 0.9,
    images: [
      { loc: '/images/life-insurance-family.webp', caption: 'Life insurance protection for families' }
    ]
  },
  {
    url: '/services/iul-insurance',
    changefreq: 'weekly',
    priority: 0.85,
    images: [
      { loc: '/images/iul-investment.webp', caption: 'Indexed Universal Life insurance benefits' }
    ]
  },
  {
    url: '/services/ppo-networks',
    changefreq: 'weekly',
    priority: 0.85,
    images: [
      { loc: '/images/ppo-doctor-network.webp', caption: 'Extensive PPO provider networks' }
    ]
  },
  {
    url: '/services/short-term-medical',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/services/dental-insurance',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/services/vision-insurance',
    changefreq: 'monthly',
    priority: 0.7
  }
];

// Blog categories for content marketing SEO
const BLOG_CATEGORIES: SitemapEntry[] = [
  {
    url: '/blog',
    changefreq: 'daily',
    priority: 0.8
  },
  {
    url: '/blog/health-insurance-guides',
    changefreq: 'weekly',
    priority: 0.75
  },
  {
    url: '/blog/life-insurance-tips',
    changefreq: 'weekly',
    priority: 0.75
  },
  {
    url: '/blog/insurance-news',
    changefreq: 'daily',
    priority: 0.7
  },
  {
    url: '/blog/financial-planning',
    changefreq: 'weekly',
    priority: 0.7
  }
];

export function generateStatePages(): SitemapEntry[] {
  const stateEntries: SitemapEntry[] = [];
  
  Object.entries(stateMetadata).forEach(([code, meta]) => {
    const priority = meta.available ? 0.9 : 0.6; // Higher priority for active states
    const changefreq = meta.available ? 'weekly' : 'monthly';
    
    stateEntries.push({
      url: `/states/${code}`,
      changefreq,
      priority,
      images: [
        { 
          loc: `/images/states/${code}-coverage.webp`, 
          caption: `${meta.name} insurance coverage map`,
          title: `Insurance options in ${meta.name}`
        }
      ]
    });
    
    // Add state-specific service pages for licensed states
    if (meta.available) {
      const services = ['health-insurance', 'life-insurance', 'iul-insurance'];
      services.forEach(service => {
        stateEntries.push({
          url: `/states/${code}/${service}`,
          changefreq: 'weekly',
          priority: 0.85,
          images: [
            { 
              loc: `/images/states/${code}-${service}.webp`,
              caption: `${service.replace('-', ' ')} options in ${meta.name}`
            }
          ]
        });
      });
    }
  });
  
  return stateEntries;
}

export function generateLongTailPages(): SitemapEntry[] {
  const longTailEntries: SitemapEntry[] = [];
  
  // High-intent longtail keyword pages
  const targetKeywords = [
    'best-health-insurance-self-employed',
    'affordable-family-health-insurance', 
    'short-term-medical-insurance',
    'ppo-vs-hmo-comparison',
    'life-insurance-young-families',
    'indexed-universal-life-benefits',
    'health-insurance-pre-existing-conditions',
    'small-business-group-insurance',
    'cobra-alternatives',
    'medicare-supplement-plans'
  ];
  
  targetKeywords.forEach(keyword => {
    longTailEntries.push({
      url: `/guides/${keyword}`,
      changefreq: 'monthly',
      priority: 0.75,
      images: [
        { 
          loc: `/images/guides/${keyword}-hero.webp`,
          caption: `Comprehensive guide to ${keyword.replace(/-/g, ' ')}`
        }
      ]
    });
  });
  
  return longTailEntries;
}

export function generateSitemapXML(config: Partial<SitemapConfig> = {}): string {
  const fullConfig = { ...DEFAULT_CONFIG, ...config };
  const { baseUrl, includeStatePages, includeBlogPosts, includeServicePages, includeImages } = fullConfig;
  
  let entries: SitemapEntry[] = [...CORE_PAGES];
  
  if (includeServicePages) {
    entries.push(...SERVICE_PAGES);
  }
  
  if (includeStatePages) {
    entries.push(...generateStatePages());
  }
  
  if (includeBlogPosts) {
    entries.push(...BLOG_CATEGORIES);
  }
  
  // Add longtail keyword pages for competitive advantage
  entries.push(...generateLongTailPages());
  
  // Add lastmod to all entries
  const lastmod = new Date().toISOString().split('T')[0];
  entries = entries.map(entry => ({
    ...entry,
    lastmod: entry.lastmod || lastmod,
    url: entry.url.startsWith('http') ? entry.url : `${baseUrl}${entry.url}`
  }));
  
  const urlElements = entries.map(entry => {
    let urlXml = `  <url>\n    <loc>${entry.url}</loc>`;
    
    if (entry.lastmod) {
      urlXml += `\n    <lastmod>${entry.lastmod}</lastmod>`;
    }
    
    if (entry.changefreq) {
      urlXml += `\n    <changefreq>${entry.changefreq}</changefreq>`;
    }
    
    if (entry.priority !== undefined) {
      urlXml += `\n    <priority>${entry.priority.toFixed(1)}</priority>`;
    }
    
    // Add image sitemap data for enhanced visibility
    if (includeImages && entry.images?.length) {
      entry.images.forEach(image => {
        urlXml += `\n    <image:image>`;
        urlXml += `\n      <image:loc>${baseUrl}${image.loc}</image:loc>`;
        if (image.caption) {
          urlXml += `\n      <image:caption>${escapeXml(image.caption)}</image:caption>`;
        }
        if (image.title) {
          urlXml += `\n      <image:title>${escapeXml(image.title)}</image:title>`;
        }
        urlXml += `\n    </image:image>`;
      });
    }
    
    urlXml += `\n  </url>`;
    return urlXml;
  }).join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlElements}
</urlset>`;
}

export function generateSitemapIndex(sitemaps: Array<{ loc: string; lastmod?: string }>): string {
  const sitemapElements = sitemaps.map(sitemap => {
    let xml = `  <sitemap>\n    <loc>${sitemap.loc}</loc>`;
    if (sitemap.lastmod) {
      xml += `\n    <lastmod>${sitemap.lastmod}</lastmod>`;
    }
    xml += `\n  </sitemap>`;
    return xml;
  }).join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapElements}
</sitemapindex>`;
}

export function generateRobotsTxt(baseUrl: string, additionalDirectives: string[] = []): string {
  const defaultDirectives = [
    'User-agent: *',
    'Allow: /',
    '',
    '# SEO-optimized crawling directives',
    'User-agent: Googlebot',
    'Allow: /',
    'Crawl-delay: 1',
    '',
    'User-agent: Bingbot', 
    'Allow: /',
    'Crawl-delay: 2',
    '',
    '# Block non-essential bots to preserve crawl budget',
    'User-agent: AhrefsBot',
    'Disallow: /',
    '',
    'User-agent: SemrushBot',
    'Disallow: /',
    '',
    '# Allow important directories',
    'Allow: /images/',
    'Allow: /css/',
    'Allow: /js/',
    '',
    '# Sitemap locations',
    `Sitemap: ${baseUrl}/sitemap_index.xml`,
    `Sitemap: ${baseUrl}/sitemap-pages.xml`,
    `Sitemap: ${baseUrl}/sitemap-images.xml`,
    '',
    '# Host declaration for primary domain',
    `Host: ${baseUrl.replace('https://', '').replace('http://', '')}`
  ];
  
  return [...defaultDirectives, ...additionalDirectives].join('\n');
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Export utility functions for API routes
export { DEFAULT_CONFIG };