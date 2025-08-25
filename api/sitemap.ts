/**
 * Dynamic Sitemap API Endpoint
 * Generates real-time XML sitemaps for maximum SEO performance
 */

import type { APIRoute } from 'astro';
import { generateSitemapXML } from '../utils/sitemap';

export const GET: APIRoute = async ({ url }) => {
  try {
    const searchParams = new URL(url).searchParams;
    const includeImages = searchParams.get('images') !== 'false';
    const format = searchParams.get('format') || 'xml';
    
    const sitemapXML = generateSitemapXML({
      baseUrl: 'https://www.bradfordinformedguidance.com',
      includeStatePages: true,
      includeBlogPosts: true,
      includeServicePages: true,
      includeImages,
      lastBuildDate: new Date().toISOString()
    });
    
    if (format === 'json') {
      // Return JSON format for debugging
      return new Response(JSON.stringify({
        generated: new Date().toISOString(),
        sitemap: sitemapXML
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
        }
      });
    }
    
    return new Response(sitemapXML, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=7200', // CDN cache for 2 hours
        'X-Generated': new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('Sitemap generation error:', error);
    
    return new Response('<?xml version="1.0" encoding="UTF-8"?><error>Sitemap generation failed</error>', {
      status: 500,
      headers: {
        'Content-Type': 'application/xml'
      }
    });
  }
};

// Pre-generate sitemap at build time for static hosting
export const prerender = false;