// Longtail Keyword Generator for Insurance SEO Domination
import React, { useEffect } from 'react';
import { applyHead } from '../utils/seo';
import { organizationSchema, faqSchema, professionalServiceSchema, localBusinessSchema } from '../utils/schema';
import { trackEvent } from '../utils/gtm';

// High-intent longtail keyword patterns for insurance domination
export interface LongtailKeyword {
  pattern: string;
  intent: 'transactional' | 'informational' | 'navigational' | 'commercial';
  difficulty: 'low' | 'medium' | 'high';
  searchVolume: 'low' | 'medium' | 'high';
  conversionPotential: 'low' | 'medium' | 'high';
}

export const INSURANCE_LONGTAIL_PATTERNS: LongtailKeyword[] = [
  // High-Intent Transactional Keywords
  { pattern: 'best {insuranceType} {state}', intent: 'commercial', difficulty: 'medium', searchVolume: 'medium', conversionPotential: 'high' },
  { pattern: 'cheap {insuranceType} {state}', intent: 'transactional', difficulty: 'medium', searchVolume: 'high', conversionPotential: 'high' },
  { pattern: 'affordable {insuranceType} {state}', intent: 'transactional', difficulty: 'medium', searchVolume: 'medium', conversionPotential: 'high' },
  { pattern: '{insuranceType} quotes {state}', intent: 'transactional', difficulty: 'low', searchVolume: 'medium', conversionPotential: 'high' },
  { pattern: '{insuranceType} rates {state}', intent: 'commercial', difficulty: 'medium', searchVolume: 'medium', conversionPotential: 'high' },
  { pattern: '{insuranceType} cost {state}', intent: 'commercial', difficulty: 'medium', searchVolume: 'high', conversionPotential: 'medium' },
  
  // Geographic + Service Combinations
  { pattern: '{insuranceType} {city} {state}', intent: 'commercial', difficulty: 'low', searchVolume: 'low', conversionPotential: 'high' },
  { pattern: '{insuranceType} agents {city} {state}', intent: 'commercial', difficulty: 'low', searchVolume: 'low', conversionPotential: 'high' },
  { pattern: '{insuranceType} brokers {state}', intent: 'commercial', difficulty: 'medium', searchVolume: 'low', conversionPotential: 'high' },
  
  // Problem-Solution Keywords
  { pattern: 'how to get {insuranceType} {state}', intent: 'informational', difficulty: 'low', searchVolume: 'medium', conversionPotential: 'medium' },
  { pattern: 'apply for {insuranceType} {state}', intent: 'transactional', difficulty: 'low', searchVolume: 'medium', conversionPotential: 'high' },
  { pattern: '{insuranceType} enrollment {state}', intent: 'transactional', difficulty: 'medium', searchVolume: 'medium', conversionPotential: 'high' },
  
  // Demographic-Specific Keywords
  { pattern: '{insuranceType} for families {state}', intent: 'commercial', difficulty: 'low', searchVolume: 'low', conversionPotential: 'high' },
  { pattern: '{insuranceType} for seniors {state}', intent: 'commercial', difficulty: 'medium', searchVolume: 'medium', conversionPotential: 'high' },
  { pattern: '{insuranceType} for students {state}', intent: 'commercial', difficulty: 'low', searchVolume: 'low', conversionPotential: 'medium' },
  { pattern: '{insuranceType} for self employed {state}', intent: 'commercial', difficulty: 'low', searchVolume: 'medium', conversionPotential: 'high' },
  
  // Comparison Keywords
  { pattern: '{insuranceType} vs {alternativeType} {state}', intent: 'informational', difficulty: 'low', searchVolume: 'low', conversionPotential: 'medium' },
  { pattern: 'compare {insuranceType} plans {state}', intent: 'commercial', difficulty: 'medium', searchVolume: 'medium', conversionPotential: 'high' },
  
  // Urgency Keywords
  { pattern: 'instant {insuranceType} quotes {state}', intent: 'transactional', difficulty: 'low', searchVolume: 'low', conversionPotential: 'high' },
  { pattern: 'same day {insuranceType} {state}', intent: 'transactional', difficulty: 'low', searchVolume: 'low', conversionPotential: 'high' },
  { pattern: 'emergency {insuranceType} {state}', intent: 'transactional', difficulty: 'low', searchVolume: 'low', conversionPotential: 'medium' }
];

// Insurance types for pattern matching
export const INSURANCE_TYPES = [
  'health insurance',
  'life insurance',
  'auto insurance',
  'home insurance',
  'renters insurance',
  'disability insurance',
  'dental insurance',
  'vision insurance',
  'travel insurance',
  'pet insurance',
  'business insurance',
  'workers compensation',
  'professional liability',
  'umbrella insurance',
  'long term care insurance',
  'critical illness insurance',
  'accident insurance',
  'hospital indemnity',
  'cancer insurance',
  'medicare supplement',
  'medicare advantage',
  'short term medical',
  'temporary health insurance',
  'individual health insurance',
  'family health insurance',
  'group health insurance',
  'small business health insurance',
  'self employed health insurance',
  'student health insurance',
  'international health insurance',
  'expat health insurance',
  'catastrophic health insurance',
  'bronze health insurance',
  'silver health insurance',
  'gold health insurance',
  'platinum health insurance',
  'PPO health insurance',
  'HMO health insurance',
  'EPO health insurance',
  'POS health insurance',
  'high deductible health plan',
  'HSA compatible health insurance',
  'term life insurance',
  'whole life insurance',
  'universal life insurance',
  'variable life insurance',
  'indexed universal life',
  'guaranteed issue life insurance',
  'no exam life insurance',
  'final expense insurance',
  'burial insurance',
  'key person life insurance',
  'business life insurance'
];

// Major cities for geo-targeting
export const MAJOR_CITIES = {
  'FL': ['Miami', 'Tampa', 'Orlando', 'Jacksonville', 'St Petersburg', 'Hialeah', 'Tallahassee', 'Fort Lauderdale', 'Port St Lucie', 'Cape Coral'],
  'MI': ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Lansing', 'Ann Arbor', 'Flint', 'Dearborn', 'Livonia', 'Troy'],
  'NC': ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston Salem', 'Fayetteville', 'Cary', 'Wilmington', 'High Point', 'Greenville']
};

// Generate longtail keywords for specific patterns
export function generateLongtailKeywords(
  patterns: LongtailKeyword[],
  insuranceTypes: string[],
  states: string[],
  cities: Record<string, string[]>
): Array<{
  keyword: string;
  title: string;
  description: string;
  slug: string;
  intent: string;
  difficulty: string;
  state?: string;
  city?: string;
  insuranceType: string;
}> {
  const keywords: Array<{
    keyword: string;
    title: string;
    description: string;
    slug: string;
    intent: string;
    difficulty: string;
    state?: string;
    city?: string;
    insuranceType: string;
  }> = [];

  patterns.forEach(pattern => {
    insuranceTypes.forEach(insuranceType => {
      states.forEach(state => {
        // State-level keywords
        const stateKeyword = pattern.pattern
          .replace('{insuranceType}', insuranceType)
          .replace('{state}', state)
          .replace('{alternativeType}', getAlternativeInsuranceType(insuranceType));

        keywords.push({
          keyword: stateKeyword,
          title: generateTitle(stateKeyword, state),
          description: generateDescription(stateKeyword, state, insuranceType),
          slug: generateSlug(stateKeyword),
          intent: pattern.intent,
          difficulty: pattern.difficulty,
          state,
          insuranceType
        });

        // City-level keywords if pattern includes city
        if (pattern.pattern.includes('{city}') && cities[state]) {
          cities[state].forEach(city => {
            const cityKeyword = pattern.pattern
              .replace('{insuranceType}', insuranceType)
              .replace('{city}', city)
              .replace('{state}', state)
              .replace('{alternativeType}', getAlternativeInsuranceType(insuranceType));

            keywords.push({
              keyword: cityKeyword,
              title: generateTitle(cityKeyword, state, city),
              description: generateDescription(cityKeyword, state, insuranceType, city),
              slug: generateSlug(cityKeyword),
              intent: pattern.intent,
              difficulty: pattern.difficulty,
              state,
              city,
              insuranceType
            });
          });
        }
      });
    });
  });

  return keywords;
}

function getAlternativeInsuranceType(insuranceType: string): string {
  const alternatives: Record<string, string> = {
    'health insurance': 'HMO plans',
    'life insurance': 'term life',
    'auto insurance': 'car insurance',
    'home insurance': 'homeowners insurance'
  };
  return alternatives[insuranceType] || 'insurance plans';
}

function generateTitle(keyword: string, state: string, city?: string): string {
  const capitalizedKeyword = keyword.replace(/\b\w/g, l => l.toUpperCase());
  const location = city ? `${city}, ${state}` : state;
  return `${capitalizedKeyword} | Expert ${location} Insurance Agents`;
}

function generateDescription(keyword: string, state: string, insuranceType: string, city?: string): string {
  const location = city ? `${city}, ${state}` : state;
  return `Find ${keyword} with licensed ${state} agents. Compare top ${insuranceType} plans in ${location}. Free quotes, expert guidance, instant coverage. Get protected today.`;
}

function generateSlug(keyword: string): string {
  return keyword
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// React component for longtail keyword pages
interface LongtailPageProps {
  keyword: string;
  title: string;
  description: string;
  state?: string;
  city?: string;
  insuranceType: string;
  intent: string;
}

export const LongtailPage: React.FC<LongtailPageProps> = ({
  keyword,
  title,
  description,
  state,
  city,
  insuranceType,
  intent
}) => {
  useEffect(() => {
    const canonicalUrl = `https://www.bradfordinformedguidance.com/keywords/${generateSlug(keyword)}`;
    
    applyHead({
      title,
      description,
      canonical: canonicalUrl,
      keywords: `${keyword}, ${insuranceType}, ${state} insurance, insurance quotes, insurance agents, ${city || state} insurance`,
      image: `https://www.bradfordinformedguidance.com/images/keywords/${generateSlug(keyword)}.jpg`,
      imageAlt: `${title} - Expert Insurance Solutions`,
      section: 'Insurance Keywords',
      articleType: 'service',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Insurance Services', url: '/services' },
        { name: state || 'Keywords', url: state ? `/states/${state.toLowerCase()}` : '/keywords' },
        { name: keyword, url: canonicalUrl }
      ],
      scripts: [
        {
          type: 'application/ld+json',
          innerHTML: organizationSchema()
        },
        {
          type: 'application/ld+json',
          innerHTML: professionalServiceSchema(
            title,
            `Expert ${insuranceType} services for ${city ? `${city}, ${state}` : state} residents`
          )
        },
        {
          type: 'application/ld+json',
          innerHTML: faqSchema([
            {
              question: `How do I find ${keyword}?`,
              answer: `Finding ${keyword} is easy with our licensed agents. We compare plans from top carriers to find the best coverage for your needs and budget in ${city ? `${city}, ${state}` : state}.`
            },
            {
              question: `What makes the best ${insuranceType} in ${state}?`,
              answer: `The best ${insuranceType} in ${state} offers comprehensive coverage, competitive rates, excellent customer service, and a strong network of providers. Our agents help you evaluate all these factors.`
            },
            {
              question: `How much does ${insuranceType} cost in ${state}?`,
              answer: `${insuranceType} costs in ${state} vary based on coverage level, age, health, and location. Our agents provide personalized quotes from multiple carriers to ensure you get the best rates.`
            }
          ])
        }
      ]
    });

    // Track longtail keyword page view
    trackEvent({
      event: 'page_view',
      event_category: 'longtail_keywords',
      event_action: 'keyword_page_view',
      event_label: keyword,
      page_type: 'longtail_landing',
      insurance_type: insuranceType,
      state_served: state || 'unknown',
      user_journey_stage: intent === 'transactional' ? 'purchase' : 'research'
    });
  }, [keyword, title, description, state, city, insuranceType, intent]);

  const handleQuoteRequest = () => {
    trackEvent({
      event: 'quote_request',
      event_category: 'longtail_keywords',
      event_action: 'quote_button_click',
      event_label: keyword,
      insurance_type: insuranceType,
      state_served: state || 'unknown',
      conversion_value: intent === 'transactional' ? 300 : 150
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">
              {keyword}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleQuoteRequest}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Free Quote
              </button>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Compare Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Quote Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Get Your {insuranceType} Quote</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input type="text" className="w-full p-3 border rounded-lg" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full p-3 border rounded-lg" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input type="tel" className="w-full p-3 border rounded-lg" placeholder="Enter your phone" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">ZIP Code</label>
                <input type="text" className="w-full p-3 border rounded-lg" placeholder="Enter ZIP code" />
              </div>
            </div>
            <button 
              onClick={handleQuoteRequest}
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Free {insuranceType} Quote
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our {insuranceType} Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                Licensed agents with deep knowledge of {state} insurance regulations and carrier options.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Rates</h3>
              <p className="text-gray-600">
                Compare plans from multiple carriers to find the most affordable {insuranceType} options.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Service</h3>
              <p className="text-gray-600">
                Quick quotes, fast enrollment, and same-day coverage options available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Get personalized {insuranceType} quotes from licensed {state} agents.
          </p>
          <button 
            onClick={handleQuoteRequest}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Free Quote Now
          </button>
        </div>
      </section>
    </div>
  );
};
