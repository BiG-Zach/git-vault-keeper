import { stateMetadata, type StateCodeSlug } from './stateMetadata';
import { BRAND } from '../lib/brand';

/**
 * JSON-LD schema builders for SEO. These utilities return stringified
 * JSON-LD blocks to inject via the SEO component's scripts prop.
 */

export const ORG = {
  name: 'Bradford Informed Guidance',
  url: 'https://bradfordinformedguidance.com',
  logo: 'https://bradfordinformedguidance.com/logos/brand-mark.svg',
  image: 'https://bradfordinformedguidance.com/assets/backgrounds/happy-family-beach-hero.webp',
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
  serviceArea: ['Florida', 'Michigan', 'North Carolina', 'Arizona', 'Texas', 'Georgia', 'Indiana', 'South Carolina'],
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

export const ORG_ID = `${ORG.url}/#organization`;

export function organizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    '@id': ORG_ID,
    name: ORG.name,
    legalName: 'Bradford Informed Guidance, LLC',
    alternateName: 'BIG',
    url: ORG.url,
    logo: {
      '@type': 'ImageObject',
      '@id': `${ORG.url}/#logo`,
      url: ORG.logo,
      width: '512',
      height: '512',
      caption: 'Bradford Informed Guidance Logo'
    },
    image: {
      '@type': 'ImageObject',
      '@id': `${ORG.url}/#image`,
      url: ORG.image,
      caption: 'Bradford Informed Guidance Family Hero'
    },
    telephone: ORG.telephone,
    email: ORG.email,
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORG.address.streetAddress,
      addressLocality: ORG.address.addressLocality,
      addressRegion: ORG.address.addressRegion,
      postalCode: ORG.address.postalCode,
      addressCountry: ORG.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '27.9506',
      longitude: '-82.5126'
    },
    areaServed: ORG.serviceArea.map(state => ({
      '@type': 'State',
      name: state,
    })),
    sameAs: [
      BRAND.verification.trustMyProducer,
      BRAND.verification.nipr,
      'https://www.facebook.com/BradfordInformedGuidance',
      'https://www.linkedin.com/company/bradford-informed-guidance',
      'https://g.page/r/BradfordInformedGuidance'
    ].filter(Boolean),
    description: 'Independent insurance brokerage specializing in Health & Life Insurance, Medicare, and the "One Big Beautiful Bill Act" (OBBBA) compliance. Providing enterprise-level carrier access and personalized advocacy.',
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Insurance',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    knowsAbout: [
      {
        '@type': 'Thing',
        name: 'One Big Beautiful Bill Act (OBBBA)',
      },
      {
        '@type': 'Thing',
        name: 'Section 71301 - Subsidy Liability',
      },
      {
        '@type': 'Thing',
        name: 'Section 71302 - Immigrant Eligibility',
      },
      {
        '@type': 'Thing',
        name: 'Trump Accounts',
      },
      'Health Insurance Marketplace',
      'Life Insurance',
      'Medicare Advantage',
      'Term Life Policy',
      'Whole Life Policy',
      'PPO Networks'
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'License',
        educationalLevel: 'Professional',
        recognizedBy: {
          '@type': 'Organization',
          name: 'National Insurance Producer Registry (NIPR)',
          url: 'https://nipr.com'
        },
        url: BRAND.verification.nipr
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: ORG.telephone,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish']
    }
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
      '@id': ORG_ID
    },
    url: `${ORG.url}/about`,
    knowsAbout: [
      'Health Insurance',
      'Life Insurance',
      'Medicare',
      'PPO Plans',
      'Insurance Brokerage',
      'Systemic Subsidy Fragility'
    ],
    sameAs: [
      'https://www.linkedin.com/in/zachary-bradford',
      'https://nipr.com/producer-lookup'
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Insurance License',
      identifier: 'W347851',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Florida Department of Financial Services',
        url: 'https://www.myfloridacfo.com'
      }
    }
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
  wordCount?: number;
  articleBody?: string;
  about?: string[];
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
    wordCount,
    articleBody,
    about,
  } = params;

  const data: Record<string, unknown> = {
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
      jobTitle: 'Licensed Independent Insurance Broker',
      identifier: ORG.npn,
      worksFor: {
        '@type': 'InsuranceAgency',
        name: ORG.name,
        url: ORG.url,
      },
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

  if (articleSection) data.articleSection = articleSection;
  if (keywords?.length) data.keywords = keywords;
  if (typeof wordCount === 'number' && wordCount > 0) data.wordCount = wordCount;
  if (articleBody) data.articleBody = articleBody;
  if (about?.length) {
    data.about = about.map((name) => ({ '@type': 'Thing', name }));
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



export function videoObjectSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl?: string;
  embedUrl?: string;
  duration?: string; // ISO 8601 duration format
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: absoluteUrl(video.thumbnailUrl),
    uploadDate: video.uploadDate,
    contentUrl: video.contentUrl ? absoluteUrl(video.contentUrl) : undefined,
    embedUrl: video.embedUrl ? absoluteUrl(video.embedUrl) : undefined,
    duration: video.duration,
  };
  return JSON.stringify(data);
}

export function faqPageSchema(questions: Array<{ question: string; answer: string }>) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
  return JSON.stringify(data);
}

function absoluteUrl(path: string) {
  if (!path) return ORG.image;
  if (/^https?:\/\//i.test(path)) return path;
  if (path.startsWith('/')) {
    return `${ORG.url.replace(/\/$/, '')}${path}`;
  }
  return `${ORG.url.replace(/\/$/, '')}/${path}`;
}

// Generic Dataset schema for any tabular data anchor in a post body. Emits a
// schema.org/Dataset with one PropertyValue per row (keyed on the first column
// header, valued on the remaining columns joined). Pair with GFM-table
// extraction in sanityContent.ts so every post body table becomes a Data-Anchor
// that AI citation engines can ingest.
export function datasetSchema(params: {
  name: string;
  description: string;
  variableMeasured?: string;
  url?: string;
  headers: string[];
  rows: string[][];
}) {
  const [keyHeader, ...valueHeaders] = params.headers;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: params.name,
    description: params.description,
    variableMeasured: params.variableMeasured ?? valueHeaders.join(', '),
    ...(params.url ? { url: params.url } : {}),
    creator: {
      '@type': 'Organization',
      name: ORG.name,
      url: ORG.url,
      '@id': ORG_ID,
    },
    data: params.rows.map((row) => ({
      '@type': 'PropertyValue',
      name: `${keyHeader}: ${row[0] ?? ''}`,
      value: row.slice(1).map((cell, i) => `${valueHeaders[i] ?? ''}: ${cell}`).join(' | '),
    })),
  });
}

export function trustSealSchema(params: {
  npn: string;
  licenseNumber: string;
  associations: string[];
}) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: ORG.name,
    identifier: params.npn,
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Insurance License',
      identifier: params.licenseNumber,
      recognizedBy: {
        '@type': 'Organization',
        name: 'National Insurance Producer Registry (NIPR)',
        url: 'https://nipr.com'
      }
    },
    memberOf: params.associations.map(a => ({
      '@type': 'Organization',
      name: a
    }))
  });
}
