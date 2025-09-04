import React, { useEffect } from 'react';
import SEO from '../../components/SEO';
import { organizationSchema, faqSchema, professionalServiceSchema } from '../../utils/schema';
import { trackEvent } from '../../utils/gtm';

const PPONetworks: React.FC = () => {
  useEffect(() => {

    // Track page view for analytics
    trackEvent({
      event: 'page_view',
      event_category: 'ppo_networks',
      event_action: 'pillar_page_view',
      page_type: 'service_pillar',
      insurance_type: 'ppo_health',
      user_journey_stage: 'research'
    });
  }, []);

  const handleQuoteRequest = (insuranceType: string) => {
    trackEvent({
      event: 'quote_request',
      event_category: 'ppo_networks',
      event_action: 'quote_button_click',
      event_label: insuranceType,
      insurance_type: insuranceType,
      conversion_value: 300
    });
  };

  return (
    <>
      <SEO
        title="PPO Health Insurance Plans | Preferred Provider Networks & Coverage"
        description="Find the best PPO health insurance plans with extensive provider networks. Compare PPO vs HMO options, network coverage, and premiums in FL, MI, NC. Expert PPO guidance."
        path="/services/ppo-networks"
        meta={[
          { name: 'keywords', content: 'PPO health insurance, PPO networks, preferred provider organization, PPO vs HMO, PPO plans, health insurance networks, PPO coverage, PPO providers' },
          { property: 'og:image', content: 'https://bradfordinformedguidance.com/images/ppo-network-doctors.jpg' },
          { property: 'og:image:alt', content: 'PPO health insurance network with doctors and medical providers' },
          { property: 'og:type', content: 'website' },
          { name: 'robots', content: 'index, follow' },
        ]}
        scripts={[
          { type: 'application/ld+json', innerHTML: organizationSchema() },
          { type: 'application/ld+json', innerHTML: professionalServiceSchema(
            'PPO Health Insurance Networks',
            'Comprehensive PPO health insurance plans with extensive provider networks, flexible coverage options, and access to specialists without referrals'
          ) },
          { type: 'application/ld+json', innerHTML: faqSchema([
            {
              question: 'What is a PPO health insurance plan?',
              answer: 'A Preferred Provider Organization (PPO) is a type of health insurance plan that offers flexibility in choosing healthcare providers. You can see any doctor or specialist without a referral, though you will pay less if you use providers in the PPO network.'
            },
            {
              question: 'What is the difference between PPO and HMO plans?',
              answer: 'PPO plans offer more flexibility - you can see specialists without referrals and use out-of-network providers (at higher cost). HMO plans require referrals for specialists and typically only cover in-network care, but usually have lower premiums and out-of-pocket costs.'
            },
            {
              question: 'Do I need referrals to see specialists with a PPO plan?',
              answer: 'No, PPO plans do not require referrals to see specialists. You can directly schedule appointments with any specialist, whether they are in-network or out-of-network, though in-network visits will cost less.'
            },
            {
              question: 'What happens if I use an out-of-network provider with a PPO plan?',
              answer: 'You can still receive care from out-of-network providers with a PPO plan, but you will pay higher costs including higher deductibles, coinsurance, and potentially balance billing. Some services may not be covered at all when using out-of-network providers.'
            }
          ]) }
        ]}
      />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - H1 Optimization for PPO Keywords */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PPO Health Insurance Plans: Maximum Flexibility, Extensive Networks
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Access top PPO health insurance plans with nationwide provider networks. 
              See specialists without referrals, choose your doctors, and enjoy comprehensive coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleQuoteRequest('ppo_quote')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Free PPO Quote
              </button>
              <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Find PPO Providers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PPO Benefits - H2 Semantic Clustering */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose PPO Health Insurance?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-teal-500">
              <div className="text-center mb-4">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold text-teal-600">Provider Choice Freedom</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Choose any doctor, hospital, or specialist without restrictions. 
                Maintain relationships with your preferred healthcare providers.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• See any doctor or specialist</li>
                <li>• Keep your current providers</li>
                <li>• No primary care requirements</li>
                <li>• Nationwide coverage when traveling</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
              <div className="text-center mb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-600">No Referrals Needed</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Schedule appointments directly with specialists without waiting for 
                primary care referrals. Get faster access to specialized care.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• Direct specialist access</li>
                <li>• Faster appointment scheduling</li>
                <li>• No referral delays</li>
                <li>• Emergency care flexibility</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
              <div className="text-center mb-4">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold text-green-600">Large Provider Networks</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Access thousands of doctors, hospitals, and specialists in 
                comprehensive PPO networks across multiple states.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• Thousands of providers</li>
                <li>• Major hospitals included</li>
                <li>• Specialist networks</li>
                <li>• Multi-state coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PPO vs HMO Comparison - H2 Education */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">PPO vs HMO: Which Plan is Right for You?</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">PPO Plans</th>
                  <th className="px-6 py-4 text-center">HMO Plans</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold">Referrals Required</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">No</td>
                  <td className="px-6 py-4 text-center text-red-600">Yes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Provider Choice</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">Any Provider</td>
                  <td className="px-6 py-4 text-center text-red-600">Network Only</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Out-of-Network Coverage</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">Yes (Higher Cost)</td>
                  <td className="px-6 py-4 text-center text-red-600">Emergency Only</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Monthly Premium</td>
                  <td className="px-6 py-4 text-center text-yellow-600">Higher</td>
                  <td className="px-6 py-4 text-center text-green-600">Lower</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Top PPO Networks - H2 Provider Information */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Major PPO Insurance Networks</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">BCBS</span>
                </div>
                <h3 className="text-xl font-semibold">Blue Cross Blue Shield</h3>
              </div>
              <p className="text-gray-600 mb-4">
                The largest PPO network in the United States with coverage in all 50 states 
                and access to over 1.7 million healthcare providers.
              </p>
              <button 
                onClick={() => handleQuoteRequest('bcbs_ppo')}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Get BCBS Quote
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">AET</span>
                </div>
                <h3 className="text-xl font-semibold">Aetna PPO</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive PPO network with over 1.2 million healthcare providers 
                and strong coverage in major metropolitan areas.
              </p>
              <button 
                onClick={() => handleQuoteRequest('aetna_ppo')}
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors"
              >
                Get Aetna Quote
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">UHC</span>
                </div>
                <h3 className="text-xl font-semibold">UnitedHealthcare</h3>
              </div>
              <p className="text-gray-600 mb-4">
                One of the largest health insurers with extensive PPO networks, 
                serving over 70 million members nationwide.
              </p>
              <button 
                onClick={() => handleQuoteRequest('uhc_ppo')}
                className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition-colors"
              >
                Get UHC Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - H2 Structured Data */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">PPO Health Insurance FAQs</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">What is a PPO health insurance plan?</h3>
              <p className="text-gray-600">
                A Preferred Provider Organization (PPO) is a type of health insurance plan that offers flexibility 
                in choosing healthcare providers. You can see any doctor or specialist without a referral, though 
                you will pay less if you use providers in the PPO network.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">What is the difference between PPO and HMO plans?</h3>
              <p className="text-gray-600">
                PPO plans offer more flexibility - you can see specialists without referrals and use out-of-network 
                providers (at higher cost). HMO plans require referrals for specialists and typically only cover 
                in-network care, but usually have lower premiums and out-of-pocket costs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">Do I need referrals to see specialists with a PPO plan?</h3>
              <p className="text-gray-600">
                No, PPO plans do not require referrals to see specialists. You can directly schedule appointments 
                with any specialist, whether they are in-network or out-of-network, though in-network visits will cost less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Conversion Optimization */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect PPO Plan?</h2>
          <p className="text-xl mb-8">
            Compare PPO health insurance plans from top carriers. Get quotes, find providers, 
            and secure comprehensive coverage with the flexibility you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleQuoteRequest('final_cta_ppo')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Free PPO Quote
            </button>
            <button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Find PPO Providers
            </button>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center justify-center">
              <span className="text-green-400 mr-2">✓</span>
              No Referrals
            </div>
            <div className="flex items-center justify-center">
              <span className="text-green-400 mr-2">✓</span>
              Large Networks
            </div>
            <div className="flex items-center justify-center">
              <span className="text-green-400 mr-2">✓</span>
              Provider Choice
            </div>
            <div className="flex items-center justify-center">
              <span className="text-green-400 mr-2">✓</span>
              Specialist Access
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default PPONetworks;