export type MetaTag =
  | { name: string; content: string }
  | { property: string; content: string }
  | { httpEquiv: string; content: string };

export type LinkTag = { rel: string; href: string; as?: string; type?: string; crossOrigin?: string };

export type ScriptTag = {
  type?: string;
  innerHTML?: string;
  src?: string;
  defer?: boolean;
  async?: boolean;
  attributes?: Record<string, string>;
};

export interface SEOConfig {
  title?: string;
  titleTemplate?: string;
  description?: string;
  canonical?: string;
  lang?: string;
  image?: string;
  meta?: MetaTag[];
  links?: LinkTag[];
  scripts?: ScriptTag[];
  noindex?: boolean;
  themeColor?: string;
}

export interface ResolvedSEO {
  title: string;
  lang: string;
  themeColor: string;
  canonical?: string;
  description: string;
  image: string;
  robots?: string;
  meta: MetaTag[];
  links: LinkTag[];
  scripts: ScriptTag[];
}

export const SITE = {
  name: 'Bradford Informed Guidance',
  url: 'https://www.bradfordinformedguidance.com',
  image: 'https://www.bradfordinformedguidance.com/hero-family.webp',
  defaultDescription:
    'Independent insurance broker partnered with Best Insurance Group delivering enterprise-level carrier access across FL, MI, NC, AZ, TX, and GA.',
  themeColor: '#0ea5e9',
  twitter: '@', // update when available
};

export function buildTitle(title?: string, template = '%s — Bradford Informed Guidance') {
  if (!title) return SITE.name;
  return template.replace('%s', title);
}

export function resolveSEO(config: SEOConfig): ResolvedSEO {
  const titleTemplate = config.titleTemplate ?? '%s — Bradford Informed Guidance';
  const title = buildTitle(config.title, titleTemplate);
  const lang = config.lang ?? 'en';
  const description = config.description ?? SITE.defaultDescription;
  const themeColor = config.themeColor ?? SITE.themeColor;
  const canonical = config.canonical ?? SITE.url;
  const image = toAbsoluteUrl(config.image ?? SITE.image);
  const robots = config.noindex ? 'noindex, nofollow' : undefined;

  const baseMeta: MetaTag[] = [
    { name: 'description', content: description },
    { property: 'og:site_name', content: SITE.name },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonical },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ];

  const meta = mergeMeta(baseMeta, config.meta ?? []);

  const baseLinks: LinkTag[] = canonical ? [{ rel: 'canonical', href: canonical }] : [];
  const links = mergeLinks(baseLinks, config.links ?? []);

  return {
    title,
    lang,
    themeColor,
    canonical,
    description,
    image,
    robots,
    meta,
    links,
    scripts: [...(config.scripts ?? [])],
  };
}

/**
 * Client-side head manager. Uses the resolved head info to keep tags in sync.
 */
export function applyHead(resolved: ResolvedSEO) {
  if (typeof document === 'undefined') return;
  const d = document;
  const head = d.head;

  d.title = resolved.title;
  if (resolved.lang) {
    d.documentElement.lang = resolved.lang;
  }

  ensureMeta({ name: 'theme-color', content: resolved.themeColor });

  if (resolved.robots) {
    ensureMeta({ name: 'robots', content: resolved.robots });
  } else {
    removeMetaByName('robots');
  }

  // Remove old canonical links to avoid duplicates before adding new ones.
  removeLinksByRel('canonical');

  resolved.meta.forEach(ensureMeta);
  resolved.links.forEach(ensureLink);

  resolved.scripts.forEach((s) => {
    if (s.src) {
      const key = `script[src="${s.src}"]`;
      let el = head.querySelector<HTMLScriptElement>(key);
      if (!el) {
        el = d.createElement('script');
        el.src = s.src;
        head.appendChild(el);
      }
      configureScriptElement(el, s);
    } else if (s.innerHTML) {
      const dataHash = String(hash(s.innerHTML));
      const key = `script[data-managed="true"][data-hash="${dataHash}"]`;
      let el = head.querySelector<HTMLScriptElement>(key);
      if (!el) {
        el = d.createElement('script');
        el.type = s.type || 'application/ld+json';
        el.dataset.managed = 'true';
        el.dataset.hash = dataHash;
        head.appendChild(el);
      }
      configureScriptElement(el, s);
      el.innerHTML = s.innerHTML;
    }
  });
}

function configureScriptElement(el: HTMLScriptElement, spec: ScriptTag) {
  if (spec.type) {
    el.type = spec.type;
  }
  if (typeof spec.defer === 'boolean') {
    el.defer = spec.defer;
  }
  if (typeof spec.async === 'boolean') {
    el.async = spec.async;
  }
  if (spec.attributes) {
    for (const [key, value] of Object.entries(spec.attributes)) {
      el.setAttribute(key, value);
    }
  }
}

function mergeMeta(base: MetaTag[], overrides: MetaTag[]) {
  const map = new Map<string, MetaTag>();
  for (const tag of base) {
    map.set(metaKey(tag), tag);
  }
  for (const tag of overrides) {
    map.set(metaKey(tag), tag);
  }
  return Array.from(map.values());
}

function mergeLinks(base: LinkTag[], overrides: LinkTag[]) {
  const map = new Map<string, LinkTag>();
  for (const link of base) {
    map.set(linkKey(link), link);
  }
  for (const link of overrides) {
    map.set(linkKey(link), link);
  }
  return Array.from(map.values());
}

function metaKey(tag: MetaTag) {
  if ('name' in tag) return `name:${tag.name.toLowerCase()}`;
  if ('property' in tag) return `property:${tag.property.toLowerCase()}`;
  if ('httpEquiv' in tag) return `httpEquiv:${tag.httpEquiv.toLowerCase()}`;
  return JSON.stringify(tag);
}

function linkKey(link: LinkTag) {
  return `${link.rel}:${link.href ?? ''}`;
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
  const selector = `link[rel="${def.rel}"]${def.href ? `[href="${def.href}"]` : ''}`;
  let el = head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.rel = def.rel;
    head.appendChild(el);
  }
  if (def.href) el.href = def.href;
  if (def.as) el.as = def.as;
  if (def.type) el.type = def.type;
  if (def.crossOrigin) el.crossOrigin = def.crossOrigin;
}

function removeLinksByRel(rel: string) {
  const head = document.head;
  head.querySelectorAll(`link[rel="${rel}"]`).forEach((el) => el.remove());
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

function toAbsoluteUrl(url: string) {
  if (!url) return SITE.image;
  if (/^https?:\/\//i.test(url)) return url;
  const normalized = url.startsWith('/') ? url : `/${url}`;
  return `${SITE.url.replace(/\/$/, '')}${normalized}`;
}
