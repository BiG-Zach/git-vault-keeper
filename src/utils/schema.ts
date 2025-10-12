import { stateMetadata, type StateCodeSlug } from './stateMetadata';

/**
 * JSON-LD schema builders for SEO. These utilities return stringified
 * JSON-LD blocks to inject via the SEO component's scripts prop.
 */

export const ORG = {
  name: 'Bradford Informed Guidance',
  url: 'https://www.bradfordinformedguidance.com',
  logo: 'https://www.bradfordinformedguidance.com/logos/brand-mark.svg',
  image: 'https://www.bradfordinformedguidance.com/assets/backgrounds/happy-family-beach-hero.webp',
  sameAs: [
    'https://bradfordinformedguidance.trustmyproducer.com',
    // Add real profiles when available
    'https://www.facebook.com/',
    'https://www.linkedin.com/',
    'https://g.page/',
  ],
};

export const SITE = {
  name: ORG.name,
  url: ORG.url,
};

type Address = {
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
};

export function organizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORG.name,
    url: ORG.url,
    logo: ORG.logo,
    image: ORG.image,
    sameAs: ORG.sameAs,
  };
  return JSON.stringify(data);
}

type SupportedStateCode = StateCodeSlug | Uppercase<StateCodeSlug>;

export function localBusinessSchema(state: SupportedStateCode, address?: Address, phone?: string) {
  const slug = state.toLowerCase() as StateCodeSlug;
  const entry = stateMetadata[slug];
  const stateName = entry?.name ?? slug.toUpperCase();
  const canonical = `${ORG.url.replace(/\/$/, '')}/states/${slug}`;

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${ORG.name} – ${stateName} Insurance Office`,
    url: canonical,
    image: ORG.logo,
    sameAs: ORG.sameAs,
    areaServed: stateName,
    parentOrganization: {
      '@type': 'Organization',
      name: ORG.name,
      url: ORG.url,
    },
  };

  const regionCode = slug.toUpperCase();

  interface PostalAddress {
    '@type': 'PostalAddress';
    addressRegion: string;
    addressLocality?: string;
    streetAddress?: string;
    postalCode?: string;
    addressCountry: string;
  }

  data.address = {
    '@type': 'PostalAddress',
    addressRegion: address?.addressRegion ?? regionCode,
    addressLocality: address?.addressLocality,
    streetAddress: address?.streetAddress,
    postalCode: address?.postalCode,
    addressCountry: address?.addressCountry ?? 'US',
  } as PostalAddress;

  if (phone) {
    data.telephone = phone;
  }

  return JSON.stringify(data);
}

export function serviceSchema(services: string[] = ['Health Insurance', 'Life Insurance'], image?: string) {
  const imageUrl = absoluteUrl(image ?? ORG.image);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    image: imageUrl,
    provider: {
      '@type': 'Organization',
      name: ORG.name,
      url: ORG.url,
      logo: ORG.logo,
      image: imageUrl,
    },
    serviceType: services,
  };
  return JSON.stringify(data);
}

export function websiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: ORG.name,
    url: ORG.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${ORG.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
  return JSON.stringify(data);
}

export function breadcrumbSchema(crumbs: Array<{ name: string; item: string }>) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };
  return JSON.stringify(data);
}

export function personSchema(name: string, jobTitle: string, description: string, image?: string) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: name,
    jobTitle: jobTitle,
    description: description,
    image: image,
    worksFor: {
      '@type': 'Organization',
      name: ORG.name,
      url: ORG.url,
    },
    url: `${ORG.url}/about`,
    knowsAbout: [
      'Health Insurance',
      'Life Insurance',
      'Medicare',
      'PPO Plans',
      'Insurance Brokerage',
    ],
  };
  return JSON.stringify(data);
}

export function articleSchema(params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  const {
    title,
    description,
    url,
    image,
    datePublished,
    dateModified,
    author = 'Zachary Bradford',
  } = params;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    image: absoluteUrl(image ?? ORG.image),
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Person',
      name: author,
      url: `${ORG.url}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: ORG.name,
      logo: {
        '@type': 'ImageObject',
        url: ORG.logo,
      },
    },
  };

  return JSON.stringify(data);
}

function absoluteUrl(path: string) {
  if (!path) return ORG.image;
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${ORG.url.replace(/\/$/, '')}${normalized}`;
}
