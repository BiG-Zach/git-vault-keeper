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
  telephone: '+16893256570',
  email: 'zbradford@bradfordinformedguidance.com',
  address: {
    streetAddress: '4200 W Cypress St',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    postalCode: '33607',
    addressCountry: 'US',
  },
  sameAs: [
    'https://bradfordinformedguidance.trustmyproducer.com',
    // Add real profiles when available
    'https://www.facebook.com/',
    'https://www.linkedin.com/',
    'https://g.page/',
  ],
  serviceArea: ['Florida', 'Michigan', 'North Carolina', 'Arizona', 'Texas', 'Georgia'],
  npn: '18181266',
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
    '@type': 'InsuranceAgency',
    name: ORG.name,
    url: ORG.url,
    logo: {
      '@type': 'ImageObject',
      url: ORG.logo,
    },
    image: ORG.image,
    telephone: ORG.telephone,
    email: ORG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORG.address.streetAddress,
      addressLocality: ORG.address.addressLocality,
      addressRegion: ORG.address.addressRegion,
      postalCode: ORG.address.postalCode,
      addressCountry: ORG.address.addressCountry,
    },
    areaServed: ORG.serviceArea.map(state => ({
      '@type': 'State',
      name: state,
    })),
    sameAs: ORG.sameAs,
    description: 'Licensed insurance brokerage serving multiple states with expertise in health and life insurance',
    priceRange: '$$',
    knowsAbout: [
      'Health Insurance',
      'Life Insurance',
      'PPO Networks',
      'Insurance Brokerage',
      'Medicare',
      'Supplemental Insurance',
    ],
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

export function serviceSchema(
  services: string[] = ['Health Insurance', 'Life Insurance'],
  image?: string,
  options?: {
    name?: string;
    description?: string;
    url?: string;
  }
) {
  const imageUrl = absoluteUrl(image ?? ORG.image);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: options?.name || 'Insurance Brokerage Services',
    description: options?.description || 'Expert insurance guidance and carrier comparison',
    image: imageUrl,
    url: options?.url || ORG.url,
    provider: {
      '@type': 'InsuranceAgency',
      name: ORG.name,
      url: ORG.url,
      logo: ORG.logo,
      telephone: ORG.telephone,
      email: ORG.email,
    },
    serviceType: services,
    areaServed: ORG.serviceArea.map(state => ({
      '@type': 'State',
      name: state,
    })),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        price: '0',
        description: 'Free consultation and comparison services',
      },
    },
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
  articleSection?: string;
  keywords?: string[];
  type?: 'Article' | 'BlogPosting';
}) {
  const {
    title,
    description,
    url,
    image,
    datePublished,
    dateModified,
    author = 'Zachary Bradford',
    articleSection,
    keywords,
    type = 'BlogPosting',
  } = params;

  const data = {
    '@context': 'https://schema.org',
    '@type': type,
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

  if (articleSection) {
    (data as Record<string, unknown>).articleSection = articleSection;
  }

  if (keywords?.length) {
    (data as Record<string, unknown>).keywords = keywords;
  }

  return JSON.stringify(data);
}
export function itemListSchema(params: {
  name: string;
  description: string;
  items: Array<{
    name: string;
    url: string;
    description?: string;
  }>;
}) {
  const { name, description, items } = params;
  
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'WebPage',
        name: item.name,
        url: absoluteUrl(item.url),
        description: item.description,
      },
    })),
  };
  
  return JSON.stringify(data);
}


function absoluteUrl(path: string) {
  if (!path) return ORG.image;
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${ORG.url.replace(/\/$/, '')}${normalized}`;
}
