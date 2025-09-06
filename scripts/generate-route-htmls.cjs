#!/usr/bin/env node

/**
 * Generate static HTML files for key routes with proper canonical URLs
 * This solves the SPA SEO canonical URL issue
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://bradfordinformedguidance.com';

// Routes that need individual HTML files with proper canonical URLs
const ROUTES = [
  {
    path: 'services/health-insurance',
    title: 'Best Health Insurance Plans 2024 | Expert Guidance & Quotes',
    description: 'Find the perfect health insurance plan with expert guidance. Compare PPO plans, get instant quotes, save up to 50%. Licensed FL, MI, NC agents ready to help.',
    keywords: 'health insurance, health insurance plans, affordable health insurance, best health insurance, health insurance quotes, PPO health plans, individual health insurance, family health insurance'
  },
  {
    path: 'services/life-insurance', 
    title: 'Life Insurance Quotes & Plans 2024 | Term & Whole Life Coverage',
    description: 'Get affordable life insurance quotes from top-rated carriers. Term life, whole life, and IUL policies. Licensed agents in FL, MI, NC. Instant quotes available.',
    keywords: 'life insurance, life insurance quotes, term life insurance, whole life insurance, life insurance plans, affordable life insurance, life insurance coverage'
  },
  {
    path: 'about',
    title: 'About Bradford Informed Guidance | Licensed Insurance Expert',
    description: 'Meet Zach Bradford, licensed insurance broker serving FL, MI, NC since 2016. Expert guidance on health & life insurance with personalized service and competitive rates.',
    keywords: 'Bradford Informed Guidance, Zach Bradford, licensed insurance broker, insurance expert FL MI NC, insurance agent'
  }
];

function generateHTML(route) {
  const canonical = `${BASE_URL}/${route.path}`;
  
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <!-- CRITICAL: Route-specific Canonical URL -->
    <link rel="canonical" href="${canonical}" />
    
    <!-- Essential SEO Meta Tags -->
    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <meta name="keywords" content="${route.keywords}" />
    
    <!-- Google Search Console Verification -->
    <meta name="google-site-verification" content="GSC_VERIFICATION_CODE_PLACEHOLDER" />
    
    <!-- Robots and Indexing -->
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Bradford Informed Guidance" />
    
    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    
    <!-- Preconnect to Critical External Resources -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://www.googletagmanager.com" />
    <link rel="preconnect" href="https://www.google-analytics.com" />
    
    <!-- DNS Prefetch for Performance -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    <link rel="dns-prefetch" href="//www.google-analytics.com" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
}

function generateRouteHTMLFiles() {
  console.log('🔧 Generating route-specific HTML files for SEO...');
  
  // Ensure dist directory exists
  if (!fs.existsSync('dist')) {
    console.log('❌ dist directory not found. Run npm run build first.');
    process.exit(1);
  }
  
  let generated = 0;
  
  for (const route of ROUTES) {
    const routePath = path.join('dist', route.path);
    const htmlPath = path.join(routePath, 'index.html');
    
    // Create directory structure if it doesn't exist
    fs.mkdirSync(routePath, { recursive: true });
    
    // Generate HTML content
    const htmlContent = generateHTML(route);
    
    // Write HTML file
    fs.writeFileSync(htmlPath, htmlContent);
    
    console.log(`✅ Generated: ${htmlPath}`);
    generated++;
  }
  
  console.log(`\n🎯 Successfully generated ${generated} route-specific HTML files`);
  console.log('📊 These routes now have proper canonical URLs for Google indexing');
  
  // Update package.json postbuild script info
  console.log('\n📋 Next steps:');
  console.log('1. Deploy to production: npx vercel --prod');
  console.log('2. Test canonical URLs: curl -s https://bradfordinformedguidance.com/services/health-insurance | grep canonical');
  console.log('3. Re-request indexing in Google Search Console');
}

// Execute if run directly
if (require.main === module) {
  generateRouteHTMLFiles();
}

module.exports = { generateRouteHTMLFiles };