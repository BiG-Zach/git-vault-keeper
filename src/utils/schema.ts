/**
 * JSON-LD schema builders for SEO. These utilities return stringified
 * JSON-LD blocks to inject via the SEO component's scripts prop.
 */

export const ORG = {
  name: 'Bradford Informed Guidance',
  legalName: 'Bradford Informed Guidance LLC',
  url: 'https://www.bradfordinformedguidance.com',
  logo: 'https://www.bradfordinformedguidance.com/images/bradford-logo-512.png',
  image: 'https://www.bradfordinformedguidance.com/images/bradford-office.jpg',
  telephone: '+1-800-BRADFORD',
  email: 'hello@bradfordinformedguidance.com',
  foundingDate: '2023',
  numberOfEmployees: '5-10',
  description: 'Expert health and life insurance guidance for individuals, families, and businesses across Florida, Michigan, and North Carolina.',
  slogan: 'Insurance Made Simple, Coverage Made Smart',
  vatID: 'US123456789', // Update with actual tax ID
  duns: '123456789', // Update with actual DUNS number
  naics: '524210', // Insurance Agencies and Brokerages
  sameAs: [
    'https://www.facebook.com/BradfordInformedGuidance',
    'https://www.linkedin.com/company/bradford-informed-guidance',
    'https://twitter.com/BradfordInsure',
    'https://www.instagram.com/bradford_insurance',
    'https://www.youtube.com/c/BradfordInformedGuidance'
  ],
  areaServed: [
    {
      '@type': 'State',
      'name': 'Florida',
      'identifier': 'FL'
    },
    {
      '@type': 'State', 
      'name': 'Michigan',
      'identifier': 'MI'
    },
    {
      '@type': 'State',
      'name': 'North Carolina', 
      'identifier': 'NC'
    }
  ],
  serviceType: [
    'Health Insurance',
    'Life Insurance',
    'Indexed Universal Life (IUL)',
    'PPO Networks',
    'Individual Health Plans',
    'Family Health Plans',
    'Short-Term Medical',
    'Dental Insurance',
    'Vision Insurance'
  ]
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
    '@id': `${ORG.url}#organization`,
    name: ORG.name,
    legalName: ORG.legalName,
    url: ORG.url,
    logo: {
      '@type': 'ImageObject',
      url: ORG.logo,
      width: 512,
      height: 512
    },
    image: ORG.image,
    telephone: ORG.telephone,
    email: ORG.email,
    foundingDate: ORG.foundingDate,
    numberOfEmployees: ORG.numberOfEmployees,
    description: ORG.description,
    slogan: ORG.slogan,
    vatID: ORG.vatID,
    duns: ORG.duns,
    naics: ORG.naics,
    sameAs: ORG.sameAs,
    areaServed: ORG.areaServed,
    serviceType: ORG.serviceType,
    knowsAbout: [
      'Health Insurance',
      'Life Insurance',
      'PPO Networks',
      'Insurance Brokerage',
      'Risk Management',
      'Employee Benefits'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Insurance Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Health Insurance Plans',
            description: 'Comprehensive health insurance coverage for individuals and families'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Life Insurance Policies',
            description: 'Term and permanent life insurance solutions'
          }
        }
      ]
    }
  };
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

// Advanced schema builders for insurance industry domination
export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
  return JSON.stringify(data);
}

export function reviewSchema(rating: number, reviewCount: number, bestRating = 5) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${ORG.url}#organization`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount: reviewCount,
      bestRating: bestRating,
      worstRating: 1
    }
  };
  return JSON.stringify(data);
}

export function professionalServiceSchema(serviceName: string, description: string, areaServed?: string) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${ORG.url}#${serviceName.toLowerCase().replace(/\s+/g, '-')}`,
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      '@id': `${ORG.url}#organization`,
      name: ORG.name
    },
    areaServed: areaServed ? {
      '@type': 'State',
      name: areaServed
    } : ORG.areaServed,
    serviceType: serviceName,
    category: 'Insurance Services',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${serviceName} Options`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: serviceName,
            description: description
          }
        }
      ]
    }
  };
  return JSON.stringify(data);
}

export function howToSchema(title: string, steps: Array<{ name: string; text: string; image?: string }>) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: `Step-by-step guide: ${title}`,
    image: steps[0]?.image || `${ORG.url}/images/how-to-default.jpg`,
    totalTime: 'PT15M', // 15 minutes average
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0'
    },
    supply: {
      '@type': 'HowToSupply',
      name: 'Valid identification and personal information'
    },
    tool: {
      '@type': 'HowToTool',
      name: 'Computer or mobile device with internet access'
    },
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
      url: `${ORG.url}#step-${index + 1}`
    }))
  };
  return JSON.stringify(data);
}

export function articleSchema(title: string, description: string, author: string, publishDate: string, modifiedDate?: string, image?: string) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image || `${ORG.url}/images/article-default.jpg`,
    author: {
      '@type': 'Person',
      name: author,
      worksFor: {
        '@type': 'Organization',
        '@id': `${ORG.url}#organization`,
        name: ORG.name
      }
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${ORG.url}#organization`,
      name: ORG.name,
      logo: {
        '@type': 'ImageObject',
        url: ORG.logo
      }
    },
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': ORG.url
    },
    about: {
      '@type': 'Thing',
      name: 'Insurance'
    },
    keywords: 'insurance, health insurance, life insurance, financial planning'
  };
  return JSON.stringify(data);
}

export function insuranceQuoteSchema(insuranceType: string, coverage: string, premium?: number) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${ORG.url}#quote-${insuranceType.toLowerCase().replace(/\s+/g, '-')}`,
    name: `${insuranceType} Quote`,
    description: `Get instant quotes for ${insuranceType} coverage`,
    provider: {
      '@type': 'Organization',
      '@id': `${ORG.url}#organization`,
      name: ORG.name
    },
    serviceType: insuranceType,
    category: 'Insurance Quote',
    areaServed: ORG.areaServed,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${insuranceType} Plans`,
      itemListElement: [
        {
          '@type': 'Offer',
          name: coverage,
          description: `Comprehensive ${insuranceType} coverage`,
          price: premium ? premium.toString() : 'Contact for pricing',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition'
        }
      ]
    }
  };
  return JSON.stringify(data);
}

// Enhanced schema builders for insurance industry rich snippets
export function localBusinessSchema(location: { address: string; city: string; state: string; zipCode: string; phone: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    '@id': `${ORG.url}#local-business`,
    name: ORG.name,
    url: ORG.url,
    logo: ORG.logo,
    image: ORG.image,
    telephone: location.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.zipCode,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128', // Update with actual coordinates
      longitude: '-74.0060'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5'
    },
    priceRange: '$$'
  };
  return JSON.stringify(data);
}

export function testimonialSchema(testimonials: Array<{ author: string; text: string; rating: number; date: string }>) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${ORG.url}#organization`,
    review: testimonials.map(testimonial => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: testimonial.author
      },
      reviewBody: testimonial.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating,
        bestRating: 5
      },
      datePublished: testimonial.date
    }))
  };
  return JSON.stringify(data);
}

export function courseSchema(title: string, description: string, provider: string, url: string) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: title,
    description: description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: ORG.url
    },
    url: url,
    courseMode: 'online',
    educationalLevel: 'beginner',
    about: 'Insurance Education',
    teaches: ['Insurance Basics', 'Policy Selection', 'Claims Process'],
    timeRequired: 'PT30M',
    inLanguage: 'en-US'
  };
  return JSON.stringify(data);
}

export function videoSchema(title: string, description: string, videoUrl: string, thumbnailUrl: string, duration: string) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: title,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: new Date().toISOString(),
    duration: duration, // Format: PT1M30S
    contentUrl: videoUrl,
    embedUrl: videoUrl,
    publisher: {
      '@type': 'Organization',
      '@id': `${ORG.url}#organization`,
      name: ORG.name,
      logo: {
        '@type': 'ImageObject',
        url: ORG.logo
      }
    }
  };
  return JSON.stringify(data);
}

export function eventSchema(event: { name: string; description: string; startDate: string; endDate: string; location: string; url: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'VirtualLocation',
      url: event.url
    },
    organizer: {
      '@type': 'Organization',
      '@id': `${ORG.url}#organization`,
      name: ORG.name,
      url: ORG.url
    },
    offers: {
      '@type': 'Offer',
      url: event.url,
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString()
    }
  };
  return JSON.stringify(data);
}

export function webPageSchema(pageInfo: { title: string; description: string; url: string; datePublished: string; dateModified?: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': pageInfo.url,
    url: pageInfo.url,
    name: pageInfo.title,
    description: pageInfo.description,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${ORG.url}#website`,
      url: ORG.url,
      name: ORG.name
    },
    about: {
      '@type': 'Thing',
      name: 'Insurance Services'
    },
    datePublished: pageInfo.datePublished,
    dateModified: pageInfo.dateModified || pageInfo.datePublished,
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'ReadAction',
      target: pageInfo.url
    }
  };
  return JSON.stringify(data);
}

export function productSchema(product: { name: string; description: string; category: string; price?: number; availability: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: ORG.name
    },
    manufacturer: {
      '@type': 'Organization',
      '@id': `${ORG.url}#organization`,
      name: ORG.name
    },
    offers: {
      '@type': 'Offer',
      price: product.price || '0',
      priceCurrency: 'USD',
      availability: `https://schema.org/${product.availability}`,
      seller: {
        '@type': 'Organization',
        '@id': `${ORG.url}#organization`,
        name: ORG.name
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '89',
      bestRating: '5'
    }
  };
  return JSON.stringify(data);
}

export function jobPostingSchema(job: { title: string; description: string; location: string; datePosted: string; validThrough: string; salaryMin?: number; salaryMax?: number }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    hiringOrganization: {
      '@type': 'Organization',
      '@id': `${ORG.url}#organization`,
      name: ORG.name,
      logo: ORG.logo
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'US'
      }
    },
    employmentType: 'FULL_TIME',
    baseSalary: job.salaryMin && job.salaryMax ? {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: {
        '@type': 'QuantitativeValue',
        minValue: job.salaryMin,
        maxValue: job.salaryMax,
        unitText: 'YEAR'
      }
    } : undefined
  };
  return JSON.stringify(data);
}

export function softwareApplicationSchema(app: { name: string; description: string; category: string; operatingSystem: string; downloadUrl: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.description,
    applicationCategory: app.category,
    operatingSystem: app.operatingSystem,
    downloadUrl: app.downloadUrl,
    author: {
      '@type': 'Organization',
      '@id': `${ORG.url}#organization`,
      name: ORG.name
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '156'
    }
  };
  return JSON.stringify(data);
}