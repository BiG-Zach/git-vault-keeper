import React, { useEffect } from 'react';
import SEO from '../../components/SEO';
import { organizationSchema, faqSchema, professionalServiceSchema } from '../../utils/schema';
import { trackEvent } from '../../utils/gtm';

const LifeInsurance: React.FC = () => {
  useEffect(() => {

    // Track page view for analytics
    trackEvent({
      event: 'page_view',
      event_category: 'life_insurance',
      event_action: 'pillar_page_view',
      page_type: 'service_pillar',
      insurance_type: 'life_insurance',
      user_journey_stage: 'research'
    });
  }, []);

  const handleQuoteRequest = (insuranceType: string) => {
    trackEvent({
      event: 'quote_request',
      event_category: 'life_insurance',
      event_action: 'quote_button_click',
      event_label: insuranceType,
      insurance_type: insuranceType,
      conversion_value: 250
    });
  };

  return (
    <>
      <SEO
        title="Life Insurance Plans & Quotes | Term & Whole Life Coverage"
        description="Compare life insurance quotes from top-rated carriers. Term life, whole life, universal life, and IUL policies. Licensed in FL, MI, NC. Instant quotes, expert guidance."
        path="/services/life-insurance"
        meta={[
          { name: 'keywords', content: 'life insurance, term life insurance, whole life insurance, universal life insurance, IUL, life insurance quotes, life insurance rates, life insurance coverage, life insurance policy' },
          { property: 'og:image', content: 'https://bradfordinformedguidance.com/images/life-insurance-family.jpg' },
          { property: 'og:image:alt', content: 'Happy family protected by comprehensive life insurance coverage' },
          { property: 'og:type', content: 'website' },
          { name: 'robots', content: 'index, follow' },
        ]}
        scripts={[
          { type: 'application/ld+json', innerHTML: organizationSchema() },
          { type: 'application/ld+json', innerHTML: professionalServiceSchema(
            'Life Insurance Services',
            'Comprehensive life insurance solutions including term, whole, universal, and indexed universal life policies'
          ) },
          { type: 'application/ld+json', innerHTML: faqSchema([
            {
              question: 'How much life insurance do I need?',
              answer: 'Most experts recommend 10-12 times your annual income in life insurance coverage. However, factors like debt, dependents, future expenses, and existing coverage should be considered. Our agents provide personalized calculations based on your specific situation.'
            },
            {
              question: 'What is the difference between term and whole life insurance?',
              answer: 'Term life insurance provides coverage for a specific period (10, 20, or 30 years) at lower premiums. Whole life insurance provides permanent coverage with a cash value component but higher premiums. Term is ideal for temporary needs, while whole life offers lifetime protection and investment benefits.'
            },
            {
              question: 'Can I get life insurance if I have health issues?',
              answer: 'Yes, many carriers offer coverage for individuals with health conditions. Options include simplified issue policies, guaranteed acceptance plans, and graded death benefit policies. We work with multiple carriers to find the best coverage for your health situation.'
            },
            {
              question: 'How quickly can I get life insurance coverage?',
              answer: 'Coverage timeline varies by policy type. Simplified issue policies can provide coverage within 24-48 hours. Traditional underwritten policies typically take 4-8 weeks. Some carriers offer temporary coverage while your application is processed.'
            }
          ]) }
        ]}
      />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - H1 Optimization */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Life Insurance Plans That Protect What Matters Most
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Compare term life, whole life, universal life, and IUL policies from top-rated carriers. 
              Licensed in Florida, Michigan, and North Carolina. Get instant quotes and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleQuoteRequest('life_insurance_general')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Free Life Insurance Quote
              </button>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Compare Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Life Insurance Types - H2 Semantic Clustering */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Types of Life Insurance Coverage</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Term Life Insurance */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Term Life Insurance</h3>
              <p className="text-gray-600 mb-4">
                Affordable coverage for a specific term (10, 20, or 30 years). Perfect for temporary needs 
                like mortgage protection or income replacement during working years.
              </p>
              <ul className="text-sm text-gray-600 mb-6">
                <li>• Lowest premiums</li>
                <li>• Coverage periods: 10-30 years</li>
                <li>• Convertible options available</li>
                <li>• Level premiums guaranteed</li>
              </ul>
              <button 
                onClick={() => handleQuoteRequest('term_life')}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Get Term Life Quote
              </button>
            </div>

            {/* Whole Life Insurance */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Whole Life Insurance</h3>
              <p className="text-gray-600 mb-4">
                Permanent coverage with guaranteed cash value growth. Provides lifelong protection 
                with level premiums and potential dividends.
              </p>
              <ul className="text-sm text-gray-600 mb-6">
                <li>• Lifetime coverage guaranteed</li>
                <li>• Cash value accumulation</li>
                <li>• Potential dividend payments</li>
                <li>• Fixed premium payments</li>
              </ul>
              <button 
                onClick={() => handleQuoteRequest('whole_life')}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
              >
                Get Whole Life Quote
              </button>
            </div>

            {/* Universal Life Insurance */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Universal Life Insurance</h3>
              <p className="text-gray-600 mb-4">
                Flexible permanent coverage with adjustable premiums and death benefits. 
                Cash value growth tied to current interest rates.
              </p>
              <ul className="text-sm text-gray-600 mb-6">
                <li>• Flexible premium payments</li>
                <li>• Adjustable death benefit</li>
                <li>• Interest-sensitive cash value</li>
                <li>• Policy loan options</li>
              </ul>
              <button 
                onClick={() => handleQuoteRequest('universal_life')}
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors"
              >
                Get Universal Life Quote
              </button>
            </div>

            {/* Indexed Universal Life (IUL) */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-orange-500">
              <div className="text-xs bg-orange-500 text-white px-2 py-1 rounded mb-2 inline-block">POPULAR</div>
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Indexed Universal Life (IUL)</h3>
              <p className="text-gray-600 mb-4">
                Permanent coverage with cash value growth linked to market indexes. 
                Offers growth potential with downside protection.
              </p>
              <ul className="text-sm text-gray-600 mb-6">
                <li>• Market-linked growth potential</li>
                <li>• Downside protection (0% floor)</li>
                <li>• Flexible premiums</li>
                <li>• Tax-advantaged withdrawals</li>
              </ul>
              <button 
                onClick={() => handleQuoteRequest('iul')}
                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors"
              >
                Get IUL Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - H2 Content Clustering */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Life Insurance?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Family Protection</h3>
              <p className="text-gray-600">
                Ensure your family can maintain their lifestyle and meet financial obligations 
                if something happens to you. Replace lost income and cover future expenses.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Debt Coverage</h3>
              <p className="text-gray-600">
                Pay off mortgages, credit cards, student loans, and other debts. 
                Prevent your family from inheriting financial burdens during difficult times.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Education Funding</h3>
              <p className="text-gray-600">
                Secure your children's educational future with life insurance proceeds. 
                Ensure college costs are covered regardless of life's uncertainties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Calculator - H2 Interactive Tools */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">How Much Life Insurance Do You Need?</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Coverage Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Annual Income</label>
                    <input type="number" placeholder="$75,000" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Outstanding Debts</label>
                    <input type="number" placeholder="$250,000" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Number of Dependents</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                  <button 
                    onClick={() => handleQuoteRequest('coverage_calculator')}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Calculate Coverage Need
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Coverage Guidelines</h3>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Income Replacement (10x)</span>
                    <span className="font-semibold">$750,000</span>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Debt Coverage</span>
                    <span className="font-semibold">$250,000</span>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Education Fund</span>
                    <span className="font-semibold">$100,000</span>
                  </div>
                  <div className="flex justify-between p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                    <span className="font-semibold">Recommended Coverage</span>
                    <span className="font-bold text-blue-600">$1,100,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* State Coverage - H2 Geographic Targeting */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Life Insurance Coverage by State</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-4">Florida Life Insurance</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive life insurance solutions for Florida residents. Navigate state-specific 
                regulations with expert guidance from licensed Florida agents.
              </p>
              <ul className="text-sm text-gray-600 mb-4">
                <li>• Licensed Florida agents</li>
                <li>• State-compliant policies</li>
                <li>• Hurricane protection riders</li>
                <li>• Retirement planning focus</li>
              </ul>
              <button 
                onClick={() => handleQuoteRequest('florida_life')}
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                Get Florida Quote →
              </button>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-semibold mb-4">Michigan Life Insurance</h3>
              <p className="text-gray-600 mb-4">
                Protect your family with Michigan-specific life insurance options. 
                Expert guidance for automotive industry workers and retirees.
              </p>
              <ul className="text-sm text-gray-600 mb-4">
                <li>• Michigan licensed agents</li>
                <li>• Industry-specific planning</li>
                <li>• Union member discounts</li>
                <li>• Pension coordination</li>
              </ul>
              <button 
                onClick={() => handleQuoteRequest('michigan_life')}
                className="text-green-600 font-semibold hover:text-green-800"
              >
                Get Michigan Quote →
              </button>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold mb-4">North Carolina Life Insurance</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive life insurance solutions for North Carolina families. 
                Expert guidance on state regulations and tax advantages.
              </p>
              <ul className="text-sm text-gray-600 mb-4">
                <li>• NC licensed agents</li>
                <li>• State tax optimization</li>
                <li>• Research Triangle focus</li>
                <li>• Estate planning integration</li>
              </ul>
              <button 
                onClick={() => handleQuoteRequest('north_carolina_life')}
                className="text-purple-600 font-semibold hover:text-purple-800"
              >
                Get NC Quote →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - H2 Structured Data */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Life Insurance FAQs</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">How much life insurance do I need?</h3>
              <p className="text-gray-600">
                Most experts recommend 10-12 times your annual income in life insurance coverage. 
                However, factors like debt, dependents, future expenses, and existing coverage should be considered. 
                Our agents provide personalized calculations based on your specific situation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">What is the difference between term and whole life insurance?</h3>
              <p className="text-gray-600">
                Term life insurance provides coverage for a specific period (10, 20, or 30 years) at lower premiums. 
                Whole life insurance provides permanent coverage with a cash value component but higher premiums. 
                Term is ideal for temporary needs, while whole life offers lifetime protection and investment benefits.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">Can I get life insurance if I have health issues?</h3>
              <p className="text-gray-600">
                Yes, many carriers offer coverage for individuals with health conditions. Options include simplified issue policies, 
                guaranteed acceptance plans, and graded death benefit policies. We work with multiple carriers to find the best 
                coverage for your health situation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">How quickly can I get life insurance coverage?</h3>
              <p className="text-gray-600">
                Coverage timeline varies by policy type. Simplified issue policies can provide coverage within 24-48 hours. 
                Traditional underwritten policies typically take 4-8 weeks. Some carriers offer temporary coverage while your 
                application is processed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Conversion Optimization */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Family's Future?</h2>
          <p className="text-xl mb-8">
            Get personalized life insurance quotes from top-rated carriers. 
            Licensed agents in Florida, Michigan, and North Carolina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleQuoteRequest('final_cta_quote')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Free Life Insurance Quote
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

export default LifeInsurance;