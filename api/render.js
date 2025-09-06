// Serverless function to serve pages with proper canonical URLs
export default function handler(req, res) {
  const { url } = req;
  const baseUrl = 'https://bradfordinformedguidance.com';
  
  // Route-specific metadata
  const routes = {
    '/': {
      title: 'Health & Life Insurance FL MI NC | Licensed Broker Zach Bradford',
      description: 'Licensed insurance broker FL, MI, NC. Get instant health & life insurance quotes from top carriers. Expert guidance since 2016. Call (689) 325-6570.',
      canonical: `${baseUrl}/`
    },
    '/services/health-insurance': {
      title: 'Best Health Insurance Plans 2024 | Expert Guidance & Quotes',
      description: 'Find the perfect health insurance plan with expert guidance. Compare PPO plans, get instant quotes, save up to 50%. Licensed FL, MI, NC agents ready to help.',
      canonical: `${baseUrl}/services/health-insurance`
    },
    '/services/life-insurance': {
      title: 'Life Insurance Quotes & Plans 2024 | Term & Whole Life Coverage',
      description: 'Get affordable life insurance quotes from top-rated carriers. Term life, whole life, and IUL policies. Licensed agents in FL, MI, NC. Instant quotes available.',
      canonical: `${baseUrl}/services/life-insurance`
    },
    '/about': {
      title: 'About Bradford Informed Guidance | Licensed Insurance Expert',
      description: 'Meet Zach Bradford, licensed insurance broker serving FL, MI, NC since 2016. Expert guidance on health & life insurance with personalized service and competitive rates.',
      canonical: `${baseUrl}/about`
    }
  };
  
  // Get route metadata or default to homepage
  const routeData = routes[url] || routes['/'];
  
  // Generate HTML with proper canonical URLs
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <!-- CRITICAL: Route-specific Canonical URL -->
    <link rel="canonical" href="${routeData.canonical}" />
    
    <!-- Essential SEO Meta Tags -->
    <title>${routeData.title}</title>
    <meta name="description" content="${routeData.description}" />
    
    <!-- Google Search Console Verification -->
    <meta name="google-site-verification" content="GSC_VERIFICATION_CODE_PLACEHOLDER" />
    
    <!-- Robots and Indexing -->
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="${routeData.title}" />
    <meta property="og:description" content="${routeData.description}" />
    <meta property="og:url" content="${routeData.canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Bradford Informed Guidance" />
    
    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${routeData.title}" />
    <meta name="twitter:description" content="${routeData.description}" />
    
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
  
  // Set headers
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  
  // Send HTML
  res.status(200).send(html);
}