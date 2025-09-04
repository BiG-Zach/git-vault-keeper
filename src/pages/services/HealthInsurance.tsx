import React from 'react';
import SEO from '../../components/SEO';
import { organizationSchema, faqSchema, professionalServiceSchema } from '../../utils/schema';
import { trackEvent } from '../../utils/gtm';

const HealthInsurance: React.FC = () => {
  const handleQuoteRequest = (insuranceType: string) => {
    trackEvent({
      event: 'quote_request',
      event_category: 'health_insurance',
      event_action: 'quote_button_click',
      event_label: insuranceType,
      insurance_type: insuranceType,
      conversion_value: 250
    });
  };

  const healthInsuranceFAQs = [
    {
      question: 'What is the best health insurance plan for individuals?',
      answer: 'The best health insurance plan depends on your specific needs, budget, and health status. Our licensed agents analyze your situation to recommend PPO plans with comprehensive coverage, affordable premiums, and access to top-rated provider networks. We specialize in medically underwritten plans that can offer significant savings for healthy individuals.'
    },
    {
      question: 'How much does health insurance cost per month?',
      answer: 'Health insurance costs vary based on age, location, coverage level, and health status. Individual plans typically range from $200-$800 monthly, while family plans range from $500-$2,000. Our medically underwritten options often provide 30-50% savings compared to ACA marketplace plans for qualified applicants.'
    },
    {
      question: 'What is the difference between PPO and HMO health insurance?',
      answer: 'PPO (Preferred Provider Organization) plans offer more flexibility with out-of-network coverage and no referral requirements, while HMO (Health Maintenance Organization) plans require referrals and typically have lower costs. We primarily offer PPO plans for maximum flexibility and nationwide coverage.'
    },
    {
      question: 'Can I get health insurance with pre-existing conditions?',
      answer: 'Yes, we offer several options for individuals with pre-existing conditions, including guaranteed issue plans and short-term medical coverage. Our licensed agents will review your specific situation and find coverage options that provide the protection you need at competitive rates.'
    }
  ];

  return (
    <>
      <SEO
        title="Best Health Insurance Plans 2024 | Expert Guidance & Quotes"
        description="Find the perfect health insurance plan with expert guidance. Compare PPO plans, get instant quotes, save up to 50%. Licensed FL, MI, NC agents ready to help."
        path="/services/health-insurance"
        meta={[
          { name: 'keywords', content: 'health insurance, health insurance plans, affordable health insurance, best health insurance, health insurance quotes, PPO health plans, individual health insurance, family health insurance, health insurance coverage' },
          { property: 'og:type', content: 'website' },
          { name: 'robots', content: 'index, follow' },
        ]}
        scripts={[
          { type: 'application/ld+json', innerHTML: organizationSchema() },
          { type: 'application/ld+json', innerHTML: professionalServiceSchema(
            'Health Insurance Plans',
            'Comprehensive health insurance coverage for individuals and families with PPO networks, competitive rates, and expert guidance from licensed professionals.'
          ) },
          { type: 'application/ld+json', innerHTML: faqSchema(healthInsuranceFAQs) }
        ]}
      />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - H1 Optimization */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find the <span className="text-blue-200">Best Health Insurance</span> Plans for Your Family
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Get expert guidance on affordable health insurance plans with comprehensive PPO coverage. 
              Compare top carriers, save up to 50% on premiums, and secure next-day coverage with our licensed professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleQuoteRequest('health_insurance_general')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Free Health Insurance Quote
              </button>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Compare Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Health Insurance Types - H2 Semantic Clustering */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Health Insurance Solutions</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Individual Health Insurance */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Individual Health Insurance</h3>
              <p className="text-gray-600 mb-4">
                Tailored individual health insurance plans with competitive rates, 
                comprehensive coverage, and access to top PPO networks nationwide.
              </p>
              <ul className="text-sm text-gray-600 mb-6">
                <li>• Medically underwritten plans</li>
                <li>• 30-50% savings potential</li>
                <li>• Top-rated PPO networks</li>
                <li>• Next-day coverage available</li>
              </ul>
              <button 
                onClick={() => handleQuoteRequest('individual_health')}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Get Individual Quote
              </button>
            </div>

            {/* Family Health Plans */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Family Health Plans</h3>
              <p className="text-gray-600 mb-4">
                Family health insurance coverage that protects everyone with 
                affordable premiums, low deductibles, and excellent provider networks.
              </p>
              <ul className="text-sm text-gray-600 mb-6">
                <li>• Family-friendly premiums</li>
                <li>• Comprehensive coverage</li>
                <li>• Pediatric care included</li>
                <li>• Maternity benefits</li>
              </ul>
              <button 
                onClick={() => handleQuoteRequest('family_health')}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
              >
                Get Family Quote
              </button>
            </div>

            {/* Short-Term Medical */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Short-Term Medical</h3>
              <p className="text-gray-600 mb-4">
                Temporary short-term health insurance for gaps in coverage, 
                job transitions, or immediate protection needs.
              </p>
              <ul className="text-sm text-gray-600 mb-6">
                <li>• Immediate coverage</li>
                <li>• Bridge gap insurance</li>
                <li>• Flexible terms</li>
                <li>• Emergency protection</li>
              </ul>
              <button 
                onClick={() => handleQuoteRequest('short_term_health')}
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors"
              >
                Get Short-Term Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Health Insurance Plans?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                💰 Significant Cost Savings
              </h3>
              <p className="text-gray-700">
                Our medically underwritten health insurance plans can save qualified 
                applicants 30-50% compared to marketplace options, with premiums starting as low as $200/month.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-3">
                🏥 Extensive PPO Networks
              </h3>
              <p className="text-gray-700">
                Access to top-rated PPO health insurance networks including over 1 million 
                providers nationwide, with no referrals required for specialists.
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">
                ⚡ Next-Day Coverage
              </h3>
              <p className="text-gray-700">
                Get immediate health insurance coverage with approvals in as little as 
                24 hours and coverage effective the next business day.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                👨‍⚕️ Expert Guidance
              </h3>
              <p className="text-gray-700">
                Licensed health insurance agents provide personalized recommendations 
                based on your health needs, budget, and preferred providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Conversion Optimization */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Perfect Health Insurance Plan?
          </h2>
          <p className="text-xl mb-8">
            Get personalized recommendations from our licensed agents. Compare plans, 
            understand your options, and secure coverage that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleQuoteRequest('final_cta_health')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Get My Health Insurance Quote Now
            </button>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Speak with an Agent
            </button>
          </div>
          
          <div className="mt-8 flex justify-center items-center space-x-8 text-sm">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Free Consultations
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Licensed Agents
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Multiple Carriers
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HealthInsurance;