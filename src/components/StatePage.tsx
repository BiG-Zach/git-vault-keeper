import React, { useEffect } from 'react';
import { applyHead } from '../utils/seo';
import { organizationSchema, localBusinessSchema, faqSchema, professionalServiceSchema } from '../utils/schema';
import { trackEvent } from '../utils/gtm';

interface StateInfo {
  code: string;
  name: string;
  population: string;
  majorCities: string[];
  insuranceRegulations: string[];
  averagePremium: string;
  topCarriers: string[];
  specialConsiderations: string[];
}

interface StatePageProps {
  stateInfo: StateInfo;
}

// Comprehensive state data for SEO targeting
export const US_STATES: Record<string, StateInfo> = {
  'FL': {
    code: 'FL',
    name: 'Florida',
    population: '22.6 million',
    majorCities: ['Miami', 'Tampa', 'Orlando', 'Jacksonville', 'St. Petersburg', 'Hialeah', 'Tallahassee', 'Fort Lauderdale'],
    insuranceRegulations: ['ACA Marketplace', 'Florida Blue dominant', 'Hurricane coverage requirements', 'No state tax benefits'],
    averagePremium: '$456/month',
    topCarriers: ['Florida Blue', 'Aetna', 'UnitedHealthcare', 'Humana', 'Molina Healthcare'],
    specialConsiderations: ['Hurricane-related health coverage', 'Large retiree population', 'Seasonal resident considerations', 'No state income tax benefits']
  },
  'MI': {
    code: 'MI',
    name: 'Michigan',
    population: '10.0 million',
    majorCities: ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Lansing', 'Ann Arbor', 'Flint', 'Dearborn'],
    insuranceRegulations: ['Michigan Health Insurance Exchange', 'Auto no-fault coordination', 'Union coverage considerations', 'State premium assistance'],
    averagePremium: '$387/month',
    topCarriers: ['Blue Cross Blue Shield Michigan', 'Priority Health', 'Molina Healthcare', 'UnitedHealthcare', 'HAP'],
    specialConsiderations: ['Auto industry health benefits', 'No-fault auto insurance coordination', 'Union member options', 'Manufacturing worker coverage']
  },
  'NC': {
    code: 'NC',
    name: 'North Carolina',
    population: '10.7 million',
    majorCities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem', 'Fayetteville', 'Cary', 'Wilmington'],
    insuranceRegulations: ['HealthCare.gov marketplace', 'Blue Cross NC prominence', 'Research Triangle benefits', 'State employee plans'],
    averagePremium: '$423/month',
    topCarriers: ['Blue Cross Blue Shield NC', 'Cigna', 'UnitedHealthcare', 'Aetna', 'MedCost'],
    specialConsiderations: ['Research Triangle tech benefits', 'University system coverage', 'Tobacco settlement programs', 'Rural healthcare access']
  }
};

const StatePage: React.FC<StatePageProps> = ({ stateInfo }) => {
  useEffect(() => {
    // SEO optimization for state-specific pages
    applyHead({
      title: `${stateInfo.name} Health Insurance Plans & Quotes | Licensed ${stateInfo.code} Agents`,
      description: `Find the best health insurance in ${stateInfo.name}. Compare ${stateInfo.topCarriers.join(', ')} plans. Licensed ${stateInfo.code} agents. Average ${stateInfo.averagePremium}. Get quotes now.`,
      canonical: `https://www.bradfordinformedguidance.com/states/${stateInfo.code.toLowerCase()}`,
      keywords: `${stateInfo.name} health insurance, health insurance ${stateInfo.name}, ${stateInfo.code} health insurance plans, health insurance quotes ${stateInfo.name}, ${stateInfo.name} insurance agents, health insurance ${stateInfo.majorCities.join(', ')}, ${stateInfo.topCarriers.join(' ')}, health insurance rates ${stateInfo.name}`,
      image: `https://www.bradfordinformedguidance.com/images/states/${stateInfo.code.toLowerCase()}-health-insurance.jpg`,
      imageAlt: `${stateInfo.name} health insurance coverage and plans`,
      section: `${stateInfo.name} Insurance`,
      articleType: 'service',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'States', url: '/states' },
        { name: stateInfo.name, url: `/states/${stateInfo.code.toLowerCase()}` }
      ],
      scripts: [
        {
          type: 'application/ld+json',
          innerHTML: organizationSchema()
        },
        {
          type: 'application/ld+json',
          innerHTML: localBusinessSchema({
            address: `Licensed Agent ${stateInfo.name}`,
            city: stateInfo.majorCities[0],
            state: stateInfo.name,
            zipCode: '00000',
            phone: '+1-800-BRADFORD'
          })
        },
        {
          type: 'application/ld+json',
          innerHTML: professionalServiceSchema(
            `${stateInfo.name} Health Insurance Services`,
            `Comprehensive health insurance solutions for ${stateInfo.name} residents including individual, family, and group coverage options`
          )
        },
        {
          type: 'application/ld+json',
          innerHTML: faqSchema([
            {
              question: `What is the average cost of health insurance in ${stateInfo.name}?`,
              answer: `The average health insurance premium in ${stateInfo.name} is approximately ${stateInfo.averagePremium} for individual coverage. Costs vary based on age, coverage level, and location within the state.`
            },
            {
              question: `Which health insurance companies operate in ${stateInfo.name}?`,
              answer: `Major health insurance carriers in ${stateInfo.name} include ${stateInfo.topCarriers.join(', ')}. Each offers different plan types, networks, and pricing options.`
            },
            {
              question: `How do I qualify for health insurance in ${stateInfo.name}?`,
              answer: `${stateInfo.name} residents can purchase health insurance through the marketplace during open enrollment or qualify for special enrollment periods due to life changes. Some may qualify for Medicaid or premium subsidies based on income.`
            }
          ])
        }
      ]
    });

    // Track state page view
    trackEvent({
      event: 'page_view',
      event_category: 'state_pages',
      event_action: 'state_page_view',
      event_label: stateInfo.code,
      page_type: 'state_service',
      insurance_type: 'health_insurance',
      state_served: stateInfo.code,
      user_journey_stage: 'research'
    });
  }, [stateInfo]);

  const handleQuoteRequest = (planType: string) => {
    trackEvent({
      event: 'quote_request',
      event_category: 'state_pages',
      event_action: 'quote_button_click',
      event_label: `${stateInfo.code}_${planType}`,
      insurance_type: 'health_insurance',
      state_served: stateInfo.code,
      conversion_value: 200
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - State-Specific H1 */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {stateInfo.name} Health Insurance Plans & Expert Guidance
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Licensed {stateInfo.code} agents helping {stateInfo.population} residents find affordable health insurance. 
              Compare plans from {stateInfo.topCarriers.slice(0, 3).join(', ')} and more. Average premium: {stateInfo.averagePremium}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleQuoteRequest('general')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Get {stateInfo.name} Quote
              </button>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Find {stateInfo.code} Doctors
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* State-Specific Coverage Options - H2 Longtail Keywords */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{stateInfo.name} Health Insurance Options</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Individual Plans</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive health insurance for {stateInfo.name} individuals and families. 
                Choose from bronze, silver, gold, and platinum coverage levels.
              </p>
              <ul className="text-sm text-gray-600 mb-6">
                <li>• ACA-compliant coverage</li>
                <li>• Preventive care included</li>
                <li>• Prescription drug coverage</li>
                <li>• {stateInfo.majorCities.slice(0, 3).join(', ')} provider networks</li>
              </ul>
              <button 
                onClick={() => handleQuoteRequest('individual')}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Get Individual Quote
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Family Plans</h3>
              <p className="text-gray-600 mb-4">
                Family health insurance plans covering spouses and children. 
                Pediatric coverage and maternity benefits included.
              </p>
              <ul className="text-sm text-gray-600 mb-6">
                <li>• Family deductible options</li>
                <li>• Pediatric dental & vision</li>
                <li>• Maternity coverage</li>
                <li>• Child-only plan options</li>
              </ul>
              <button 
                onClick={() => handleQuoteRequest('family')}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
              >
                Get Family Quote
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Short-Term Medical</h3>
              <p className="text-gray-600 mb-4">
                Temporary health insurance for {stateInfo.name} residents in transition. 
                Bridge coverage between jobs or life changes.
              </p>
              <ul className="text-sm text-gray-600 mb-6">
                <li>• Coverage up to 364 days</li>
                <li>• Fast approval process</li>
                <li>• Emergency & urgent care</li>
                <li>• Prescription drug benefits</li>
              </ul>
              <button 
                onClick={() => handleQuoteRequest('short_term')}
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors"
              >
                Get Short-Term Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Carriers in State - H2 Provider Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Top Health Insurance Companies in {stateInfo.name}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stateInfo.topCarriers.slice(0, 6).map((carrier, index) => (
              <div key={carrier} className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-3">{carrier}</h3>
                <p className="text-gray-600 mb-4">
                  {carrier} offers comprehensive health insurance plans throughout {stateInfo.name} 
                  with extensive provider networks in {stateInfo.majorCities.slice(0, 2).join(' and ')}.
                </p>
                <button 
                  onClick={() => handleQuoteRequest(carrier.toLowerCase().replace(/\s+/g, '_'))}
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Get {carrier} Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Cities Coverage - H2 Local SEO */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Health Insurance Coverage in Major {stateInfo.name} Cities</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stateInfo.majorCities.slice(0, 8).map((city) => (
              <div key={city} className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-3">{city} Health Insurance</h3>
                <p className="text-gray-600 mb-4">
                  Find health insurance plans and provider networks in {city}, {stateInfo.name}.
                </p>
                <button 
                  onClick={() => handleQuoteRequest(`${city.toLowerCase()}_plans`)}
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  {city} Plans →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State-Specific FAQ - H2 Local Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{stateInfo.name} Health Insurance FAQs</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">What is the average cost of health insurance in {stateInfo.name}?</h3>
              <p className="text-gray-600">
                The average health insurance premium in {stateInfo.name} is approximately {stateInfo.averagePremium} for individual coverage. 
                Costs vary based on age, coverage level, and location within the state. Families can expect to pay 
                2.5-3 times the individual rate for comprehensive coverage.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">Which health insurance companies operate in {stateInfo.name}?</h3>
              <p className="text-gray-600">
                Major health insurance carriers in {stateInfo.name} include {stateInfo.topCarriers.join(', ')}. 
                Each offers different plan types, networks, and pricing options. We work with all major carriers 
                to help you find the best coverage for your needs and budget.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">How do I qualify for health insurance in {stateInfo.name}?</h3>
              <p className="text-gray-600">
                {stateInfo.name} residents can purchase health insurance through the marketplace during open enrollment 
                or qualify for special enrollment periods due to life changes. Some may qualify for Medicaid or premium 
                subsidies based on income. Our licensed agents can help determine your eligibility and options.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">What are the special considerations for {stateInfo.name} health insurance?</h3>
              <p className="text-gray-600">
                {stateInfo.name} has unique considerations including: {stateInfo.specialConsiderations.join(', ')}. 
                Our local expertise helps navigate these state-specific factors to find the most appropriate coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - State-Specific Conversion */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get {stateInfo.name} Health Insurance?</h2>
          <p className="text-xl mb-8">
            Licensed {stateInfo.code} agents ready to help you find the perfect health insurance plan. 
            Compare rates from {stateInfo.topCarriers.slice(0, 3).join(', ')} and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleQuoteRequest('final_cta')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Free {stateInfo.name} Quote
            </button>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Speak with {stateInfo.code} Agent
            </button>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center justify-center">
              <span className="text-green-400 mr-2">✓</span>
              Licensed in {stateInfo.code}
            </div>
            <div className="flex items-center justify-center">
              <span className="text-green-400 mr-2">✓</span>
              Local Expertise
            </div>
            <div className="flex items-center justify-center">
              <span className="text-green-400 mr-2">✓</span>
              Free Consultations
            </div>
            <div className="flex items-center justify-center">
              <span className="text-green-400 mr-2">✓</span>
              Multiple Carriers
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatePage;