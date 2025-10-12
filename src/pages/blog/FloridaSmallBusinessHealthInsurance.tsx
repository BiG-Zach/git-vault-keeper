import { Link } from 'react-router-dom';
import { ChevronRight, Building2, DollarSign, Shield, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';
import SEO from '../../components/SEO';
import { buildArticleSEO } from '../../utils/seoHelpers';
import RelatedPosts from '../../components/blog/RelatedPosts';

export default function FloridaSmallBusinessHealthInsurance() {
  const title = 'Small Business Health Insurance Florida: Top 10 Best Options | Bradford Informed Guidance';
  const description = 'Attract and retain top talent with competitive health benefits. Complete guide to Florida small business health insurance with carrier comparisons and cost analysis.';
  const path = '/blog/florida-small-business-health-insurance';
  const datePublished = '2024-01-24';
  const articleSEO = buildArticleSEO({
    title,
    description,
    path,
    datePublished,
    articleSection: 'Florida Small Business Insurance',
    keywords: [
      'Florida small business health insurance',
      'Florida group health plans',
      'ICHRA Florida benefits',
    ],
  });

  return (
    <main>
      <SEO 
        title={title}
        description={description}
        path={path}
        image={articleSEO.image}
        meta={articleSEO.meta}
        scripts={articleSEO.scripts}
      />
      
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/resources" className="hover:text-blue-600">Resources</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Florida Small Business Health Insurance</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg mb-6">
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6" />
                <span className="font-semibold">Small Business Guide</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Small Business Health Insurance Florida: Top 10 Best Options
            </h1>
            
            <div className="flex items-center gap-6 text-slate-600 mb-6">
              <span>Updated Jan 2024</span>
              <span>•</span>
              <span>13 min read</span>
              <span>•</span>
              <span>2,500 words</span>
            </div>
            
            <p className="text-xl text-slate-700 leading-relaxed">
              Attract and retain top talent with competitive health benefits. This comprehensive guide covers the best small business health insurance options in Florida with real cost comparisons.
            </p>
          </header>

          {/* Urgent Alert */}
          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-12">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Important Deadline</h3>
                <p className="text-red-800 mb-3">
                  Small business health insurance enrollment runs year-round, but employees can only join during open enrollment or qualifying life events.
                </p>
                <Link 
                  to="/quote" 
                  className="inline-block bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700 transition-colors"
                >
                  Get Free Business Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-slate-50 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Complete Guide Contents:</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li><a href="#florida-requirements" className="text-blue-600 hover:underline">Florida Small Business Requirements</a></li>
                <li><a href="#top-carriers" className="text-blue-600 hover:underline">Top 10 Health Insurance Carriers</a></li>
                <li><a href="#cost-analysis" className="text-blue-600 hover:underline">Cost Analysis by Employee Count</a></li>
                <li><a href="#plan-types" className="text-blue-600 hover:underline">Plan Types Comparison</a></li>
              </ul>
              <ul className="space-y-2">
                <li><a href="#tax-benefits" className="text-blue-600 hover:underline">Tax Benefits & Credits</a></li>
                <li><a href="#implementation" className="text-blue-600 hover:underline">Implementation Timeline</a></li>
                <li><a href="#compliance" className="text-blue-600 hover:underline">Compliance Requirements</a></li>
                <li><a href="#broker-benefits" className="text-blue-600 hover:underline">Working with a Broker</a></li>
              </ul>
            </div>
          </div>

          {/* Florida Requirements */}
          <section id="florida-requirements" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Florida Small Business Health Insurance Requirements</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Key Requirements</h3>
                  <p className="text-blue-800">
                    Florida businesses with 2-50 full-time equivalent employees qualify for small group health insurance plans.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Eligibility Criteria</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <span>2-50 full-time equivalent employees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <span>75% employee participation requirement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <span>Must contribute minimum 50% of premiums</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <span>No medical underwriting for groups</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Florida Benefits</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <span>Year-round enrollment available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <span>Essential health benefits required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <span>Mental health parity compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <span>Preventive care coverage required</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Top 10 Carriers */}
          <section id="top-carriers" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Top 10 Small Business Health Insurance Carriers in Florida</h2>
            
            <div className="space-y-6 mb-8">
              {/* Florida Blue */}
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold">#1</div>
                    <h3 className="text-xl font-semibold text-slate-900">Florida Blue</h3>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">A+ AM Best</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-600">Market Share</div>
                    <div className="font-bold text-slate-900">32%</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-slate-600">Network Size</div>
                    <div className="font-semibold">Largest in FL</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Plan Types</div>
                    <div className="font-semibold">HMO, PPO, EPO</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Avg Monthly Cost</div>
                    <div className="font-semibold">$385/employee</div>
                  </div>
                </div>
                <p className="text-slate-700">
                  Florida's largest health insurer with the most comprehensive provider network. Best choice for businesses wanting maximum flexibility and provider access.
                </p>
              </div>

              {/* UnitedHealthcare */}
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold">#2</div>
                    <h3 className="text-xl font-semibold text-slate-900">UnitedHealthcare</h3>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">A+ AM Best</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-600">Market Share</div>
                    <div className="font-bold text-slate-900">18%</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-slate-600">Network Size</div>
                    <div className="font-semibold">National</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Plan Types</div>
                    <div className="font-semibold">HMO, PPO, HDHP</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Avg Monthly Cost</div>
                    <div className="font-semibold">$395/employee</div>
                  </div>
                </div>
                <p className="text-slate-700">
                  National carrier with strong wellness programs and digital tools. Excellent for multi-state businesses or those with traveling employees.
                </p>
              </div>

              {/* Aetna */}
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold">#3</div>
                    <h3 className="text-xl font-semibold text-slate-900">Aetna (CVS Health)</h3>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">A AM Best</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-600">Market Share</div>
                    <div className="font-bold text-slate-900">15%</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-slate-600">Network Size</div>
                    <div className="font-semibold">Large</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Plan Types</div>
                    <div className="font-semibold">HMO, PPO, HDHP</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Avg Monthly Cost</div>
                    <div className="font-semibold">$375/employee</div>
                  </div>
                </div>
                <p className="text-slate-700">
                  Strong integration with CVS pharmacies and MinuteClinics. Competitive pricing with good technology platform for employee engagement.
                </p>
              </div>

              {/* Cigna */}
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold">#4</div>
                    <h3 className="text-xl font-semibold text-slate-900">Cigna</h3>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">A AM Best</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-600">Market Share</div>
                    <div className="font-bold text-slate-900">12%</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-slate-600">Network Size</div>
                    <div className="font-semibold">Large</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Plan Types</div>
                    <div className="font-semibold">HMO, PPO, HDHP</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Avg Monthly Cost</div>
                    <div className="font-semibold">$380/employee</div>
                  </div>
                </div>
                <p className="text-slate-700">
                  Known for excellent customer service and comprehensive wellness programs. Strong option for businesses focused on employee health and wellbeing.
                </p>
              </div>

              {/* Humana */}
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold">#5</div>
                    <h3 className="text-xl font-semibold text-slate-900">Humana</h3>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">A- AM Best</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-600">Market Share</div>
                    <div className="font-bold text-slate-900">8%</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-slate-600">Network Size</div>
                    <div className="font-semibold">Regional</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Plan Types</div>
                    <div className="font-semibold">HMO, PPO</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Avg Monthly Cost</div>
                    <div className="font-semibold">$365/employee</div>
                  </div>
                </div>
                <p className="text-slate-700">
                  Competitive pricing with strong focus on preventive care and wellness incentives. Good choice for cost-conscious businesses.
                </p>
              </div>
            </div>

            <div className="bg-slate-100 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Additional Top Carriers (6-10):</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="font-medium text-slate-900">#6 Molina Healthcare</div>
                  <div className="text-sm text-slate-600">Focus: Medicaid and affordable options</div>
                </div>
                <div>
                  <div className="font-medium text-slate-900">#7 Ambetter (Sunshine Health)</div>
                  <div className="text-sm text-slate-600">Focus: ACA marketplace plans</div>
                </div>
                <div>
                  <div className="font-medium text-slate-900">#8 Oscar Health</div>
                  <div className="text-sm text-slate-600">Focus: Technology-driven care</div>
                </div>
                <div>
                  <div className="font-medium text-slate-900">#9 Simply Healthcare</div>
                  <div className="text-sm text-slate-600">Focus: Medicaid and dual-eligible</div>
                </div>
              </div>
            </div>
          </section>

          {/* Cost Analysis */}
          <section id="cost-analysis" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Cost Analysis by Employee Count</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border border-slate-200 rounded-lg">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-slate-900">Employee Count</th>
                    <th className="text-left p-4 font-semibold text-slate-900">Monthly Premium/Employee</th>
                    <th className="text-left p-4 font-semibold text-slate-900">Employer Contribution</th>
                    <th className="text-left p-4 font-semibold text-slate-900">Total Monthly Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-200">
                    <td className="p-4">2-5 employees</td>
                    <td className="p-4">$420</td>
                    <td className="p-4">50% ($210)</td>
                    <td className="p-4">$420-$1,050</td>
                  </tr>
                  <tr className="border-t border-slate-200 bg-slate-50">
                    <td className="p-4">6-15 employees</td>
                    <td className="p-4">$395</td>
                    <td className="p-4">70% ($277)</td>
                    <td className="p-4">$1,662-$4,155</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="p-4">16-25 employees</td>
                    <td className="p-4">$375</td>
                    <td className="p-4">75% ($281)</td>
                    <td className="p-4">$4,496-$7,025</td>
                  </tr>
                  <tr className="border-t border-slate-200 bg-slate-50">
                    <td className="p-4">26-50 employees</td>
                    <td className="p-4">$365</td>
                    <td className="p-4">80% ($292)</td>
                    <td className="p-4">$7,592-$14,600</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-2">Cost Savings Tip</h3>
              <p className="text-green-800">
                Consider High Deductible Health Plans (HDHPs) with Health Savings Accounts (HSAs) to reduce premiums by 15-30% while providing tax advantages to employees.
              </p>
            </div>
          </section>

          {/* Tax Benefits */}
          <section id="tax-benefits" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Tax Benefits & Credits</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-blue-900 mb-3">Small Business Health Care Tax Credit</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Up to 50% of premiums for businesses</li>
                  <li>• Up to 35% for tax-exempt organizations</li>
                   <li>• Must have &lt;25 FTE employees</li>
                   <li>• Average wages &lt;$56,000 (2024)</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <TrendingUp className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-green-900 mb-3">Business Tax Deductions</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• 100% deductible as business expense</li>
                  <li>• Reduces federal and state income tax</li>
                  <li>• Payroll tax savings for employees</li>
                  <li>• HSA contributions are deductible</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 mb-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Offer Health Benefits to Your Team?</h2>
              <p className="text-lg mb-6 text-green-100">
                Get personalized quotes from top Florida carriers in under 48 hours
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/quote" 
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Get Business Quote
                </Link>
                <a 
                  href="tel:+16893256570" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Speak with Broker
                </a>
              </div>
            </div>
          </section>

          {/* Author Bio */}
          <section className="bg-slate-50 rounded-xl p-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">ZB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Zach Bradford</h3>
                <div className="text-slate-600 mb-3">Licensed Insurance Broker | FL License W347851</div>
                <p className="text-slate-700">
                  Zach has helped over 200 Florida small businesses implement health insurance programs, securing over $1.2M 
                  in tax credits and savings. He specializes in finding the perfect balance between coverage and cost.
                </p>
              </div>
            </div>
          </section>

          <RelatedPosts
            slugs={[
              '/blog/florida-health-insurance-guide-2024',
              '/blog/tampa-bay-insurance-broker-guide',
              '/health-insurance',
            ]}
          />
        </div>
      </article>
    </main>
  );
}
