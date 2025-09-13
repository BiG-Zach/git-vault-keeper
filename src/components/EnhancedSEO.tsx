import React from 'react';
import { 
  organizationSchema, 
  faqSchema, 
  reviewSchema, 
  localBusinessSchema,
  testimonialSchema,
  courseSchema,
  videoSchema,
  eventSchema,
  webPageSchema,
  productSchema,
  jobPostingSchema,
  softwareApplicationSchema,
  professionalServiceSchema,
  breadcrumbSchema,
  websiteSchema
} from '../utils/schema';

interface FAQItem {
  question: string;
  answer: string;
}

interface TestimonialItem {
  author: string;
  text: string;
  rating: number;
  date: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface LocationInfo {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}

interface EnhancedSEOProps {
  // Basic page info
  title?: string;
  description?: string;
  canonical?: string;

  // Disable guards to prevent duplicate tags after prerender
  disableTitle?: boolean;
  disableMetaDescription?: boolean;
  disableCanonical?: boolean;
  
  // Schema markup options
  includeOrganization?: boolean;
  includeWebsite?: boolean;
  includeBreadcrumbs?: boolean;
  
  // Content-specific schemas
  faqs?: FAQItem[];
  testimonials?: TestimonialItem[];
  breadcrumbs?: BreadcrumbItem[];
  location?: LocationInfo;
  
  // Service/Product schemas
  serviceName?: string;
  serviceDescription?: string;
  
  // Review schema
  aggregateRating?: {
    rating: number;
    reviewCount: number;
    bestRating?: number;
  };
  
  // Video schema
  video?: {
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    duration: string;
  };
  
  // Event schema
  event?: {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    url: string;
  };
  
  // Course schema
  course?: {
    title: string;
    description: string;
    provider: string;
    url: string;
  };
  
  // Job posting schema
  jobPosting?: {
    title: string;
    description: string;
    location: string;
    datePosted: string;
    validThrough: string;
    salaryMin?: number;
    salaryMax?: number;
  };
  
  // Product schema
  product?: {
    name: string;
    description: string;
    category: string;
    price?: number;
    availability: string;
  };
  
  // Custom schemas
  customSchemas?: string[];
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonical,
  // Guards
  disableTitle = false,
  disableMetaDescription = false,
  disableCanonical = false,
  // Schema toggles
  includeOrganization = true,
  includeWebsite = true,
  includeBreadcrumbs = false,
  // Data
  faqs,
  testimonials,
  breadcrumbs,
  location,
  serviceName,
  serviceDescription,
  aggregateRating,
  video,
  event,
  course,
  jobPosting,
  product,
  customSchemas = []
}) => {
  // Generate all relevant schemas
  const schemas: string[] = [];
  
  // Core schemas
  if (includeOrganization) {
    schemas.push(organizationSchema());
  }
  
  if (includeWebsite) {
    schemas.push(websiteSchema());
  }
  
  // Page-specific schema
  if (title && description && canonical) {
    schemas.push(webPageSchema({
      title,
      description,
      url: canonical,
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString()
    }));
  }
  
  // Breadcrumbs
  if (includeBreadcrumbs && breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(breadcrumbSchema(
      breadcrumbs.map(crumb => ({ name: crumb.name, item: crumb.url }))
    ));
  }
  
  // FAQ schema
  if (faqs && faqs.length > 0) {
    schemas.push(faqSchema(faqs));
  }
  
  // Testimonials/Reviews schema
  if (testimonials && testimonials.length > 0) {
    schemas.push(testimonialSchema(testimonials));
  }
  
  // Aggregate rating schema
  if (aggregateRating) {
    schemas.push(reviewSchema(
      aggregateRating.rating,
      aggregateRating.reviewCount,
      aggregateRating.bestRating
    ));
  }
  
  // Local business schema
  if (location) {
    schemas.push(localBusinessSchema(location));
  }
  
  // Service schema
  if (serviceName && serviceDescription) {
    schemas.push(professionalServiceSchema(serviceName, serviceDescription));
  }
  
  // Video schema
  if (video) {
    schemas.push(videoSchema(
      video.title,
      video.description,
      video.videoUrl,
      video.thumbnailUrl,
      video.duration
    ));
  }
  
  // Event schema
  if (event) {
    schemas.push(eventSchema(event));
  }
  
  // Course schema
  if (course) {
    schemas.push(courseSchema(
      course.title,
      course.description,
      course.provider,
      course.url
    ));
  }
  
  // Job posting schema
  if (jobPosting) {
    schemas.push(jobPostingSchema(jobPosting));
  }
  
  // Product schema
  if (product) {
    schemas.push(productSchema(product));
  }
  
  // Custom schemas
  schemas.push(...customSchemas);
  
  // Render guards to prevent duplicate tags after static prerender
  const canUseDOM = typeof document !== 'undefined';
  const existingTitle = canUseDOM ? !!document.head.querySelector('title') : false;
  const existingDescription = canUseDOM ? !!document.head.querySelector('meta[name="description"]') : false;
  const existingCanonical = canUseDOM ? !!document.head.querySelector('link[rel="canonical"]') : false;

  const renderTitle = !!title && !(disableTitle || existingTitle);
  const renderDescription = !!description && !(disableMetaDescription || existingDescription);
  const renderCanonical = !!canonical && !(disableCanonical || existingCanonical);

  return (
    <>
      {/* JSON-LD Schema Markup */}
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}
      
      {/* Basic meta tags (guarded) */}
      {renderTitle && (
        <title>{title}</title>
      )}
      
      {renderDescription && (
        <meta name="description" content={description} />
      )}
      
      {renderCanonical && (
        <link rel="canonical" href={canonical} />
      )}
      
      {/* Open Graph tags */}
      {title && (
        <meta property="og:title" content={title} />
      )}
      
      {description && (
        <meta property="og:description" content={description} />
      )}
      
      {canonical && (
        <meta property="og:url" content={canonical} />
      )}
      
      {/* Twitter Card tags */}
      {title && (
        <meta name="twitter:title" content={title} />
      )}
      
      {description && (
        <meta name="twitter:description" content={description} />
      )}
    </>
  );
};

export default EnhancedSEO;