import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_NAME, FOUNDER_NAME, SITE_URL } from '../config/company';

// --- SCHEMA TYPE DEFINITIONS ---

interface InsuranceAgency {
  '@type': 'InsuranceAgency';
  name: string;
  url: string;
  logo: string;
  telephone: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  openingHours: string[];
}

interface Person {
  '@type': 'Person';
  name: string;
  url: string;
  jobTitle: string;
  worksFor: {
    '@type': 'Organization';
    name: string;
  };
  sameAs?: string[];
}

interface FAQPage {
  '@type': 'FAQPage';
  mainEntity: {
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }[];
}

type Schema = InsuranceAgency | Person | FAQPage;

// --- BASE SCHEMAS (Default data for your site) ---

const baseInsuranceAgency: InsuranceAgency = {
  '@type': 'InsuranceAgency',
  name: COMPANY_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/placeholder.svg`, // TODO: Replace with actual logo URL
  telephone: '+1-689-325-6570',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4200 W Cypress St',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    postalCode: '33607',
    addressCountry: 'US',
  },
  openingHours: [
    'Mo-Fr 08:00-20:00',
    'Sa-Su 08:00-20:00',
  ],
};

const basePerson: Person = {
  '@type': 'Person',
  name: FOUNDER_NAME,
  url: `${SITE_URL}/about`,
  jobTitle: 'Licensed Insurance Broker',
  worksFor: {
    '@type': 'Organization',
    name: COMPANY_NAME,
  },
  // sameAs: [
  //   '[https://www.linkedin.com/in/yourprofile](https://www.linkedin.com/in/yourprofile)',
  // ],
};

// --- COMPONENT ---

interface StructuredDataProps {
  schema: Partial<Schema>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ schema }) => {
  let finalSchema: Schema;

  switch (schema['@type']) {
    case 'Person':
      finalSchema = { ...basePerson, ...schema };
      break;
    case 'FAQPage':
      finalSchema = schema as FAQPage; // FAQ is page-specific
      break;
    case 'InsuranceAgency':
    default:
      finalSchema = { ...baseInsuranceAgency, ...schema };
      break;
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(finalSchema)}</script>
    </Helmet>
  );
};
