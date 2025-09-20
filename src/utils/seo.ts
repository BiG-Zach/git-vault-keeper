export type MetaTag =
  | { name: string; content: string }
  | { property: string; content: string }
  | { httpEquiv: string; content: string };

export type LinkTag = { rel: string; href: string; as?: string; type?: string; crossOrigin?: string };

export interface SEOConfig {
  title?: string;
  titleTemplate?: string; // e.g., "%s — Bradford Informed Guidance"
  description?: string;
  canonical?: string;
  lang?: string;
  image?: string; // Open Graph & Twitter image URL
  imageAlt?: string; // Alt text for social images
  meta?: MetaTag[];
  links?: LinkTag[];
  scripts?: Array<{ type?: string; innerHTML?: string; src?: string; defer?: boolean; async?: boolean }>;
  noindex?: boolean;
  themeColor?: string;
  keywords?: string; // SEO keywords for meta tag
  author?: string; // Page author
  publishedTime?: string; // ISO date for articles
  modifiedTime?: string; // ISO date for last modification
  section?: string; // Content section (e.g., "Health Insurance")
  tags?: string[]; // Content tags for categorization
  articleType?: 'article' | 'website' | 'service'; // Content type
  breadcrumbs?: Array<{ name: string; url: string }>; // Breadcrumb navigation
  faqSchema?: Array<{ question: string; answer: string }>; // FAQ structured data
  reviewSchema?: { rating: number; reviewCount: number; bestRating?: number }; // Review markup
}

export const SITE = {
  name: 'Bradford Informed Guidance',
  url: 'https://bradfordinformedguidance.com',
  defaultDescription:
    'Expert health & life insurance guidance for self-employed, families, and early retirees. Licensed in FL, MI, NC. Get instant quotes, next-day coverage, and personalized recommendations.',
  themeColor: '#0ea5e9',
  twitter: '@BradfordInsure', // Professional insurance Twitter handle
  facebook: 'https://www.facebook.com/BradfordInformedGuidance',
  linkedin: 'https://www.linkedin.com/company/bradford-informed-guidance',
  logo: 'https://www.bradfordinformedguidance.com/images/bradford-logo.png',
  favicon: 'https://www.bradfordinformedguidance.com/favicon.ico',
  companyName: 'Bradford Informed Guidance LLC',
  foundingYear: '2023',
  industry: 'Insurance Services',
  specialties: ['Health Insurance', 'Life Insurance', 'IUL', 'PPO Networks'],
  serviceAreas: ['Florida', 'Michigan', 'North Carolina'],
  phone: '+1-689-325-6570',
  email: 'hello@bradfordinformedguidance.com'
};

export function buildTitle(title?: string, template = '%s — Bradford Informed Guidance') {
  if (!title) return SITE.name;
  return template.replace('%s', title);
}

/**
 * Minimal head manager (client-side). It replaces tags by keys to avoid duplicates.
 * Safe for SPA use. On SSR you would render static tags in index.html instead.
 */
export function applyHead(config: SEOConfig) {
  if (typeof document === 'undefined') return;
  const d = document;
  const head = d.head;

  // Title
  if (config.title || config.titleTemplate) {
    d.title = buildTitle(config.title, config.titleTemplate);
  }

  // Lang
  if (config.lang) {
    d.documentElement.lang = config.lang;
  }

  // Theme color
  ensureMeta({ name: 'theme-color', content: config.themeColor || SITE.themeColor });

  // Robots
  if (config.noindex) {
    ensureMeta({ name: 'robots', content: 'noindex, nofollow' });
  } else {
    removeMetaByName('robots');
  }

  // Description - always ensure one is set
  const metaDescription = config.description || SITE.defaultDescription;
  ensureMeta({ name: 'description', content: metaDescription });
  
  // Keywords if provided
  if (config.keywords) {
    ensureMeta({ name: 'keywords', content: config.keywords });
  }

  // Canonical
  if (config.canonical) ensureLink({ rel: 'canonical', href: config.canonical });

  // Enhanced social tags for maximum reach
  ensureMeta({ property: 'og:site_name', content: SITE.name });
  ensureMeta({ property: 'og:type', content: 'website' });
  ensureMeta({ property: 'og:url', content: config.canonical || SITE.url });
  ensureMeta({ property: 'og:locale', content: 'en_US' });
  ensureMeta({ property: 'og:image', content: config.image || `${SITE.url}/images/og-default.jpg` });
  ensureMeta({ property: 'og:image:width', content: '1200' });
  ensureMeta({ property: 'og:image:height', content: '630' });
  ensureMeta({ property: 'og:image:alt', content: config.imageAlt || 'Bradford Informed Guidance - Expert Insurance Solutions' });
  if (config.title) ensureMeta({ property: 'og:title', content: buildTitle(config.title, config.titleTemplate) });
  // Always include description for Open Graph
  ensureMeta({ property: 'og:description', content: metaDescription });
  
  // Enhanced Twitter Cards for engagement
  ensureMeta({ name: 'twitter:card', content: 'summary_large_image' });
  ensureMeta({ name: 'twitter:site', content: SITE.twitter });
  ensureMeta({ name: 'twitter:creator', content: SITE.twitter });
  ensureMeta({ name: 'twitter:image', content: config.image || `${SITE.url}/images/twitter-card.jpg` });
  ensureMeta({ name: 'twitter:image:alt', content: config.imageAlt || 'Bradford Informed Guidance - Insurance Excellence' });
  if (config.title) ensureMeta({ name: 'twitter:title', content: buildTitle(config.title, config.titleTemplate) });
  // Always include description for Twitter Cards
  ensureMeta({ name: 'twitter:description', content: metaDescription });
  
  // Essential SEO meta tags
  ensureMeta({ name: 'author', content: SITE.companyName });
  ensureMeta({ name: 'publisher', content: SITE.companyName });
  ensureMeta({ name: 'copyright', content: `© ${new Date().getFullYear()} ${SITE.companyName}` });
  ensureMeta({ name: 'rating', content: 'general' });
  ensureMeta({ name: 'distribution', content: 'global' });
  ensureMeta({ name: 'revisit-after', content: '7 days' });
  
  // Core Web Vitals & Performance hints
  ensureLink({ rel: 'preconnect', href: 'https://fonts.googleapis.com' });
  ensureLink({ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' });
  ensureLink({ rel: 'dns-prefetch', href: 'https://www.google-analytics.com' });
  ensureLink({ rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' });

  // Custom meta
  config.meta?.forEach(ensureMeta);

  // Links
  config.links?.forEach(ensureLink);

  // Scripts (inline or external)
  config.scripts?.forEach((s) => {
    if (s.src) {
      const key = `script[src="${s.src}"]`;
      let el = head.querySelector<HTMLScriptElement>(key);
      if (!el) {
        el = d.createElement('script');
        el.src = s.src;
        if (s.defer) el.defer = true;
        if (s.async) el.async = true;
        if (s.type) el.type = s.type;
        head.appendChild(el);
      }
    } else if (s.innerHTML) {
      // keyed by content hash surrogate
      const key = `script[data-managed="true"][data-hash="${hash(s.innerHTML)}"]`;
      let el = head.querySelector<HTMLScriptElement>(key);
      if (!el) {
        el = d.createElement('script');
        el.type = s.type || 'application/ld+json';
        el.dataset.managed = 'true';
        el.dataset.hash = String(hash(s.innerHTML));
        el.innerHTML = s.innerHTML;
        head.appendChild(el);
      } else {
        el.innerHTML = s.innerHTML;
      }
    }
  });
}

function ensureMeta(def: MetaTag) {
  const head = document.head;
  let selector = '';
  if ('name' in def) selector = `meta[name="${def.name}"]`;
  if ('property' in def) selector = `meta[property="${def.property}"]`;
  if ('httpEquiv' in def) selector = `meta[http-equiv="${def.httpEquiv}"]`;
  let el = head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    if ('name' in def) el.setAttribute('name', def.name);
    if ('property' in def) el.setAttribute('property', def.property);
    if ('httpEquiv' in def) el.setAttribute('http-equiv', def.httpEquiv);
    head.appendChild(el);
  }
  el.setAttribute('content', def.content);
}

function removeMetaByName(name: string) {
  const el = document.head.querySelector(`meta[name="${name}"]`);
  if (el) el.remove();
}

function ensureLink(def: LinkTag) {
  const head = document.head;
  let el: HTMLLinkElement | null = null;

  if (def.rel === 'canonical') {
    const canonicals = head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicals.length > 0) {
      el = canonicals[0];
      for (let i = 1; i < canonicals.length; i++) {
        canonicals[i].remove();
      }
    }
  }

  if (!el) {
    const hrefSelector = def.href ? `[href="${def.href}"]` : '';
    const selector = def.rel === 'canonical' ? 'link[rel="canonical"]' : `link[rel="${def.rel}"]${hrefSelector}`;
    el = head.querySelector<HTMLLinkElement>(selector);
  }

  if (!el) {
    el = document.createElement('link');
    el.rel = def.rel;
    head.appendChild(el);
  } else if (el.rel !== def.rel) {
    el.rel = def.rel;
  }

  if (def.href) el.href = def.href;
  if (def.as) el.as = def.as;
  if (def.type) el.type = def.type;
  if (def.crossOrigin) el.crossOrigin = def.crossOrigin;
}

function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return h;
}

export function canonicalFor(pathname: string) {
  const base = SITE.url.replace(/\/$/, '');
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${path}`;
}
