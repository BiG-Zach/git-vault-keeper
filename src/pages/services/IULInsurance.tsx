import React, { useEffect } from 'react';
import { applyHead } from '../../utils/seo';
import { organizationSchema, faqSchema, professionalServiceSchema } from '../../utils/schema';
import { trackEvent } from '../../utils/gtm';

const IULInsurance: React.FC = () => {
  useEffect(() => {
    // SEO optimization for IUL pillar page - targeting high-value keywords
    applyHead({
      title: 'Indexed Universal Life Insurance (IUL) | Tax-Free Retirement Income',
      description: 'Discover IUL insurance benefits: market-linked growth, tax-free retirement income, and flexible premiums. Compare top IUL policies in FL, MI, NC. Expert IUL guidance and quotes.',
      canonical: 'https://www.bradfordinformedguidance.com/services/iul-insurance',
      keywords: 'IUL insurance, indexed universal life insurance, IUL benefits, tax-free retirement income, IUL vs 401k, indexed life insurance, IUL policy, universal life insurance',
      image: 'https://www.bradfordinformedguidance.com/images/iul-retirement-planning.jpg',
      imageAlt: 'IUL indexed universal life insurance retirement planning strategy',
      section: 'IUL Insurance',
      articleType: 'service',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'IUL Insurance', url: '/services/iul-insurance' }
      ],
      scripts: [
        {
          type: 'application/ld+json',
          innerHTML: organizationSchema()
        },
        {
          type: 'application/ld+json',
          innerHTML: professionalServiceSchema(
            'Indexed Universal Life Insurance (IUL)',
            'Advanced IUL insurance solutions offering market-linked growth potential, tax-advantaged retirement income, and flexible premium structures'
          )
        },
        {
          type: 'application/ld+json',
          innerHTML: faqSchema([
            {
              question: 'What is Indexed Universal Life (IUL) insurance?',
              answer: 'IUL is a type of permanent life insurance that combines death benefit protection with a cash value component linked to market index performance. It offers growth potential with downside protection, typically guaranteeing a 0% floor even when markets decline.'
            },
            {
              question: 'How does IUL provide tax-free retirement income?',
              answer: 'IUL cash value grows tax-deferred, and you can access funds through tax-free policy loans during retirement. This strategy allows you to supplement retirement income without increasing your taxable income, potentially keeping you in lower tax brackets.'
            },
            {
              question: 'What are the main benefits of IUL over traditional retirement accounts?',
              answer: 'IUL offers several advantages: no contribution limits like 401(k)s, tax-free access to cash value, market upside with downside protection, flexible premiums, and a death benefit for beneficiaries. It is not subject to required minimum distributions.'
            },
            {
              question: 'What market indexes are available with IUL policies?',
              answer: 'Most IUL policies offer multiple index options including S&P 500, NASDAQ-100, Russell 2000, and international indexes. Many also provide fixed interest rate options and blended index strategies for diversification.'
            }
          ])
        }
      ]
    });

    // Track page view for analytics
    trackEvent({
      event: 'page_view',
      event_category: 'iul_insurance',
      event_action: 'pillar_page_view',
      page_type: 'service_pillar',
      insurance_type: 'iul',
      user_journey_stage: 'research'
    });
  }, []);

  const handleQuoteRequest = (insuranceType: string) => {
    trackEvent({
      event: 'quote_request',
      event_category: 'iul_insurance',
      event_action: 'quote_button_click',
      event_label: insuranceType,
      insurance_type: insuranceType,
      conversion_value: 500 // Higher value for IUL leads
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - H1 Optimization for IUL Keywords */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Indexed Universal Life (IUL) Insurance: Build Tax-Free Retirement Income
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Combine life insurance protection with market-linked growth potential. 
              Access tax-free retirement income while protecting your family. Licensed IUL experts in FL, MI, NC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleQuoteRequest('iul_quote')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Get Free IUL Quote
              </button>
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Download IUL Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IUL Benefits - H2 Semantic Clustering */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose IUL Insurance?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Market-Linked Growth */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
              <div className="text-center mb-4">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-green-600">Market-Linked Growth</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Your cash value is linked to market index performance like the S&P 500, 
                offering unlimited upside potential with typical caps of 10-14% annually.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• Participate in market gains</li>
                <li>• Multiple index options</li>
                <li>• Annual reset feature</li>
                <li>• No direct market exposure</li>
              </ul>
            </div>

            {/* Downside Protection */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
              <div className="text-center mb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-600">Downside Protection</h3>
              </div>
              <p className="text-gray-600 mb-4">
                IUL policies typically guarantee a 0% floor, meaning your cash value 
                will never decrease due to market downturns or negative index performance.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• 0% guaranteed floor</li>
                <li>• Principal protection</li>
                <li>• No market losses</li>
                <li>• Peace of mind</li>
              </ul>
            </div>

            {/* Tax-Free Access */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
              <div className="text-center mb-4">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-600">Tax-Free Retirement Income</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Access your cash value through tax-free policy loans during retirement, 
                providing income without increasing your taxable income.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• Tax-free policy loans</li>
                <li>• No income tax impact</li>
                <li>• Supplement Social Security</li>
                <li>• No required distributions</li>
              </ul>
            </div>

            {/* Flexible Premiums */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-500">
              <div className="text-center mb-4">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-semibold text-orange-600">Premium Flexibility</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Adjust your premium payments based on your financial situation. 
                Pay more to maximize cash value growth or reduce payments when needed.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• Adjustable premiums</li>
                <li>• Skip payments option</li>
                <li>• Maximize contributions</li>
                <li>• Financial flexibility</li>
              </ul>
            </div>

            {/* No Contribution Limits */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-red-500">
              <div className="text-center mb-4">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-red-600">No Contribution Limits</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Unlike 401(k)s and IRAs, IUL has no annual contribution limits, 
                allowing high earners to save significantly more for retirement.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• No annual limits</li>
                <li>• High-earner friendly</li>
                <li>• Unlimited savings potential</li>
                <li>• Tax-efficient growth</li>
              </ul>
            </div>

            {/* Death Benefit */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-indigo-500">
              <div className="text-center mb-4">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-semibold text-indigo-600">Family Protection</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Provides a tax-free death benefit to beneficiaries while building 
                cash value for retirement, offering dual financial benefits.
              </p>
              <ul className="text-sm text-gray-600">
                <li>• Tax-free death benefit</li>
                <li>• Family protection</li>
                <li>• Estate planning tool</li>
                <li>• Dual-purpose strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IUL vs Other Retirement Strategies - H2 Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">IUL vs Traditional Retirement Accounts</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">IUL Insurance</th>
                  <th className="px-6 py-4 text-center">401(k)</th>
                  <th className="px-6 py-4 text-center">Traditional IRA</th>
                  <th className="px-6 py-4 text-center">Roth IRA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold">Annual Contribution Limit</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">No Limit</td>
                  <td className="px-6 py-4 text-center">$23,000 (2024)</td>
                  <td className="px-6 py-4 text-center">$7,000 (2024)</td>
                  <td className="px-6 py-4 text-center">$7,000 (2024)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Tax-Free Access</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">Yes (Loans)</td>
                  <td className="px-6 py-4 text-center text-red-600">No</td>
                  <td className="px-6 py-4 text-center text-red-600">No</td>
                  <td className="px-6 py-4 text-center text-yellow-600">After 59½</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Required Distributions</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">None</td>
                  <td className="px-6 py-4 text-center text-red-600">Yes at 73</td>
                  <td className="px-6 py-4 text-center text-red-600">Yes at 73</td>
                  <td className="px-6 py-4 text-center text-green-600">None</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Market Protection</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">0% Floor</td>
                  <td className="px-6 py-4 text-center text-red-600">Full Risk</td>
                  <td className="px-6 py-4 text-center text-red-600">Full Risk</td>
                  <td className="px-6 py-4 text-center text-red-600">Full Risk</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">Death Benefit</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">Yes</td>
                  <td className="px-6 py-4 text-center text-red-600">No</td>
                  <td className="px-6 py-4 text-center text-red-600">No</td>
                  <td className="px-6 py-4 text-center text-red-600">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* IUL Strategy Examples - H2 Use Cases */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">IUL Success Strategies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* High Earner Strategy */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">High Earner Strategy</h3>
              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-800">$500,000+ Income</div>
                <div className="text-sm text-gray-600">Annual Salary</div>
              </div>
              <p className="text-gray-600 mb-4">
                Maximize retirement savings beyond 401(k) limits with substantial IUL contributions 
                for tax-efficient wealth building.
              </p>
              <ul className="text-sm text-gray-600 mb-6">
                <li>• Contribute $50,000+ annually</li>
                <li>• Supplement maxed-out 401(k)</li>
                <li>• Tax-free retirement income</li>
                <li>• Estate planning benefits</li>
              </ul>
              <button 
                onClick={() => handleQuoteRequest('high_earner_iul')}
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors"
              >
                Explore High Earner IUL
              </button>
            </div>

            {/* Business Owner Strategy */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Business Owner Strategy</h3>
              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-800">Variable Income</div>
                <div className="text-sm text-gray-600">Business Profits</div>
              </div>
              <p className="text-gray-600 mb-4">
                Flexible premium structure accommodates variable business income 
                while building substantial retirement wealth.
              </p>
              <ul className="text-sm text-gray-600 mb-6">
                <li>• Flexible payment schedule</li>
                <li>• Tax-deductible premiums</li>
                <li>• Key person coverage</li>
                <li>• Business succession planning</li>
              </ul>
              <button 
                onClick={() => handleQuoteRequest('business_owner_iul')}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Explore Business IUL
              </button>
            </div>

            {/* Early Retirement Strategy */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Early Retirement Strategy</h3>
              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-800">Retire at 55</div>
                <div className="text-sm text-gray-600">Financial Independence</div>
              </div>
              <p className="text-gray-600 mb-4">
                Access cash value before age 59½ without penalties, 
                bridging the gap to traditional retirement accounts.
              </p>
              <ul className="text-sm text-gray-600 mb-6">
                <li>• Early access to funds</li>
                <li>• No penalty withdrawals</li>
                <li>• Bridge retirement gap</li>
                <li>• FIRE movement strategy</li>
              </ul>
              <button 
                onClick={() => handleQuoteRequest('early_retirement_iul')}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
              >
                Explore Early Retirement IUL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IUL Index Options - H2 Investment Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Available Market Index Options</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">S&P 500 Index</h3>
              <div className="text-2xl font-bold text-gray-800 mb-2">10-14%</div>
              <div className="text-sm text-gray-600 mb-4">Typical Cap Rate</div>
              <p className="text-sm text-gray-600">
                Most popular index option tracking the 500 largest U.S. companies.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-green-600">NASDAQ-100</h3>
              <div className="text-2xl font-bold text-gray-800 mb-2">9-13%</div>
              <div className="text-sm text-gray-600 mb-4">Typical Cap Rate</div>
              <p className="text-sm text-gray-600">
                Technology-focused index with higher growth potential.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-purple-600">Russell 2000</h3>
              <div className="text-2xl font-bold text-gray-800 mb-2">8-12%</div>
              <div className="text-sm text-gray-600 mb-4">Typical Cap Rate</div>
              <p className="text-sm text-gray-600">
                Small-cap stocks index for diversified growth exposure.
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-orange-600">Fixed Account</h3>
              <div className="text-2xl font-bold text-gray-800 mb-2">3-5%</div>
              <div className="text-sm text-gray-600 mb-4">Guaranteed Rate</div>
              <p className="text-sm text-gray-600">
                Conservative option with guaranteed minimum interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - H2 Structured Data */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">IUL Insurance FAQs</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">What is Indexed Universal Life (IUL) insurance?</h3>
              <p className="text-gray-600">
                IUL is a type of permanent life insurance that combines death benefit protection with a cash value 
                component linked to market index performance. It offers growth potential with downside protection, 
                typically guaranteeing a 0% floor even when markets decline.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">How does IUL provide tax-free retirement income?</h3>
              <p className="text-gray-600">
                IUL cash value grows tax-deferred, and you can access funds through tax-free policy loans during retirement. 
                This strategy allows you to supplement retirement income without increasing your taxable income, 
                potentially keeping you in lower tax brackets.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">What are the main benefits of IUL over traditional retirement accounts?</h3>
              <p className="text-gray-600">
                IUL offers several advantages: no contribution limits like 401(k)s, tax-free access to cash value, 
                market upside with downside protection, flexible premiums, and a death benefit for beneficiaries. 
                It is not subject to required minimum distributions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">What market indexes are available with IUL policies?</h3>
              <p className="text-gray-600">
                Most IUL policies offer multiple index options including S&P 500, NASDAQ-100, Russell 2000, 
                and international indexes. Many also provide fixed interest rate options and blended index 
                strategies for diversification.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-2">What are the risks of IUL insurance?</h3>
              <p className="text-gray-600">
                Main risks include policy lapse if premiums are insufficient, loan interest that reduces death benefits, 
                cap rates that limit upside potential, and fees that can impact returns. Proper policy design and 
                funding are critical for success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Conversion Optimization */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Tax-Free Retirement Income?</h2>
          <p className="text-xl mb-8">
            Discover how IUL insurance can supplement your retirement strategy with market-linked growth, 
            downside protection, and tax-free access to cash value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleQuoteRequest('final_cta_iul')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Free IUL Analysis
            </button>
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Schedule IUL Consultation
            </button>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center justify-center">
              <span className="text-green-400 mr-2">✓</span>
              No Annual Limits
            </div>
            <div className="flex items-center justify-center">
              <span className="text-green-400 mr-2">✓</span>
              Tax-Free Access
            </div>
            <div className="flex items-center justify-center">
              <span className="text-green-400 mr-2">✓</span>
              Market Protection
            </div>
            <div className="flex items-center justify-center">
              <span className="text-green-400 mr-2">✓</span>
              Death Benefit
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IULInsurance;