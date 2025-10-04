import { stateMetadata, type StateCodeSlug } from './stateMetadata';

/**
 * JSON-LD schema builders for SEO. These utilities return stringified
 * JSON-LD blocks to inject via the SEO component's scripts prop.
 */

export const ORG = {
  name: 'Bradford Informed Guidance',
  url: 'https://www.bradfordinformedguidance.com',
  logo: 'https://www.bradfordinformedguidance.com/logo.png', // update to real path
  sameAs: [
    'https://bradfordinformedguidance.trustmyproducer.com',
    // Add real profiles when available
    'https://www.facebook.com/',
    'https://www.linkedin.com/',
    'https://g.page/',
  ],
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

  const data: Record<string, any> = {
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

  data.address = {
    '@type': 'PostalAddress',
    addressRegion: address?.addressRegion ?? regionCode,
    addressLocality: address?.addressLocality,
    streetAddress: address?.streetAddress,
    postalCode: address?.postalCode,
    addressCountry: address?.addressCountry ?? 'US',
  };

  if (phone) {
    data.telephone = phone;
  }

  return JSON.stringify(data);
}

export function serviceSchema(services: string[] = ['Health Insurance', 'Life Insurance']) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'Organization',
      name: ORG.name,
      url: ORG.url,
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
