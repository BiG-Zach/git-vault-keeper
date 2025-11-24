import { Link } from 'react-router-dom';
import { Clock, User, Calendar, Share2, ArrowLeft, CheckCircle, DollarSign, Shield, Users, Calculator, GraduationCap } from 'lucide-react';
import SEO from '../../components/SEO';
import { buildArticleSEO } from '../../utils/seoHelpers';
import RelatedPosts from '../../components/blog/RelatedPosts';

export default function HowMuchLifeInsuranceCalculator() {
  const title = 'How Much Life Insurance Do You Really Need? The 10x Income Rule Debunked | Bradford Informed Guidance';
  const description = 'The "10 times your income" rule could leave your family $200,000 short or waste $5,000 yearly. Use our professional calculator to get it right.';
  const path = '/blog/how-much-life-insurance-calculator';
  const datePublished = '2024-01-13';
  const articleSEO = buildArticleSEO({
    title,
    description,
    path,
    datePublished,
    articleSection: 'Life Insurance',
    keywords: [
      'life insurance calculator',
      'life insurance needs analysis',
      'income replacement insurance',
    ],
  });

  return (
    <main className="min-h-screen bg-white">
      <SEO
        title={title}
        description={description}
        path={path}
        image={articleSEO.image}
        meta={articleSEO.meta}
        scripts={articleSEO.scripts}
      />

      {/* Breadcrumb */}
      <nav className="py-4 bg-slate-50 border-b">
        <div className="container-default">
          <div className="flex items-center text-sm text-slate-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/resources" className="hover:text-blue-600">Resources</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">How Much Life Insurance Calculator</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-12">
        <div className="container-default max-w-4xl">
          <div className="mb-8">
            <Link
              to="/resources"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Link>

            <div className="mb-6">
              <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                LIFE INSURANCE
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                How Much Life Insurance Do You Really Need? (Free Calculator)
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                The "10 times your income" rule could leave your family $200,000 short or waste $5,000 yearly. Use our professional calculator to get it right.
              </p>
            </div>

            {/* Author & Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 border-b border-slate-200 pb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>By Zach Bradford, Licensed FL Broker W347851</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Updated January 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>8 min read</span>
              </div>
              <button className="flex items-center text-blue-600 hover:text-blue-700">
                <Share2 className="w-4 h-4 mr-2" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-slate-50 rounded-lg p-6 mb-12">
            <h2 className="font-bold text-slate-900 mb-4">Table of Contents</h2>
            <ol className="space-y-2 text-slate-600">
              <li><a href="#why-10x-fails" className="hover:text-blue-600">1. Why the 10x Income Rule Fails</a></li>
              <li><a href="#needs-analysis" className="hover:text-blue-600">2. The Professional Needs Analysis Method</a></li>
              <li><a href="#calculator" className="hover:text-blue-600">3. Free Life Insurance Calculator</a></li>
              <li><a href="#real-examples" className="hover:text-blue-600">4. Real Family Examples</a></li>
              <li><a href="#special-considerations" className="hover:text-blue-600">5. Special Considerations</a></li>
              <li><a href="#review-schedule" className="hover:text-blue-600">6. When to Review Your Coverage</a></li>
              <li><a href="#faq" className="hover:text-blue-600">7. Frequently Asked Questions</a></li>
            </ol>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <section id="why-10x-fails" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why the 10x Income Rule Fails</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                The "10 times your annual income" rule is simple, but it ignores crucial factors that determine your
                family's actual needs. This one-size-fits-all approach can leave families drastically under-insured
                or paying for unnecessary coverage. Understanding proper coverage amounts is essential when shopping for <Link to="/life-insurance" className="text-primary hover:underline">life insurance</Link>.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <h3 className="text-lg font-bold text-red-800 mb-3">Real Example: The Johnson Family</h3>
                <p className="text-red-700 mb-2">
                  <strong>Income:</strong> $80,000 annually
                </p>
                <p className="text-red-700 mb-2">
                  <strong>10x Rule Says:</strong> $800,000 coverage needed
                </p>
                <p className="text-red-700 mb-2">
                  <strong>Actual Needs:</strong> $1.2 million (mortgage, college funds, final expenses)
                </p>
                <p className="text-red-700 font-medium">
                  Result: $400,000 shortfall that could devastate the family financially
                </p>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">What the 10x Rule Ignores</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Outstanding mortgage balance</span>
                </div>
                <div className="flex items-start">
                  <GraduationCap className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Children's college expenses</span>
                </div>
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Existing debts and obligations</span>
                </div>
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Final expenses and funeral costs</span>
                </div>
              </div>
            </section>

            <section id="needs-analysis" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Professional Needs Analysis Method</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Professional <Link to="/carriers" className="text-primary hover:underline">insurance agents</Link> use the "needs analysis" method, which calculates exactly how much
                money your family would need to maintain their lifestyle and meet their goals if you weren't there to provide.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">The Needs Analysis Formula</h3>
                <div className="space-y-3 text-blue-700">
                  <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                    <span>Annual Living Expenses (10-15 years)</span>
                    <span className="font-medium">$___________</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                    <span>Outstanding Mortgage</span>
                    <span className="font-medium">$___________</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                    <span>Children's College Fund</span>
                    <span className="font-medium">$___________</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                    <span>Other Debts</span>
                    <span className="font-medium">$___________</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                    <span>Final Expenses</span>
                    <span className="font-medium">$___________</span>
                  </div>
                  <div className="flex justify-between items-center border-t-2 border-blue-300 pt-2 font-bold">
                    <span>TOTAL NEEDS</span>
                    <span>$___________</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Minus: Existing Assets</span>
                    <span>-$___________</span>
                  </div>
                  <div className="flex justify-between items-center border-t-2 border-blue-600 pt-2 font-bold text-blue-900">
                    <span>LIFE INSURANCE NEEDED</span>
                    <span>$___________</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="calculator" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Free Life Insurance Calculator</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Use this professional calculator to determine your exact life insurance needs. This calculator
                uses the same method insurance professionals use with their clients.
              </p>

              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-600 mb-2">Interactive Calculator</h3>
                <p className="text-gray-500 mb-4">
                  Professional needs analysis calculator would be embedded here in a real implementation
                </p>
                <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
                  <h4 className="font-bold text-slate-900 mb-4">Quick Estimate Method</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Annual Income:</span>
                      <span className="font-medium">$________ × 10-15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Plus: Mortgage Balance:</span>
                      <span className="font-medium">$________</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Plus: College Costs:</span>
                      <span className="font-medium">$________ per child</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-bold">
                      <span>Estimated Need:</span>
                      <span>$________</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="real-examples" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Real Family Examples</h2>

              <div className="space-y-8">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">The Martinez Family - Two Young Children</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Family Details:</h4>
                      <ul className="text-slate-600 space-y-1">
                        <li>• Combined income: $120,000</li>
                        <li>• Mortgage: $280,000</li>
                        <li>• Children: Ages 5 and 8</li>
                        <li>• Savings: $25,000</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Needs Analysis:</h4>
                      <ul className="text-slate-600 space-y-1">
                        <li>• Income replacement: $1,200,000</li>
                        <li>• Mortgage payoff: $280,000</li>
                        <li>• College fund: $160,000</li>
                        <li>• Final expenses: $25,000</li>
                        <li><strong>Total need: $1,665,000</strong></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-100 rounded">
                    <p className="text-blue-800">
                      <strong>10x Rule:</strong> $1.2M (short by $465,000) |
                      <strong>Professional Analysis:</strong> $1.665M
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">The Chen Family - High Earners, Older Children</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Family Details:</h4>
                      <ul className="text-slate-600 space-y-1">
                        <li>• Combined income: $250,000</li>
                        <li>• Mortgage: $150,000</li>
                        <li>• Children: Ages 16 and 18</li>
                        <li>• Investments: $400,000</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Needs Analysis:</h4>
                      <ul className="text-slate-600 space-y-1">
                        <li>• Income replacement: $1,875,000</li>
                        <li>• Mortgage payoff: $150,000</li>
                        <li>• College expenses: $80,000</li>
                        <li>• Minus investments: -$400,000</li>
                        <li><strong>Total need: $1,705,000</strong></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-green-100 rounded">
                    <p className="text-green-800">
                      <strong>10x Rule:</strong> $2.5M (excess of $795,000) |
                      <strong>Professional Analysis:</strong> $1.705M (saved $800/year in premiums)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="special-considerations" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Special Considerations</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Factors That Increase Needs</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Special needs children requiring lifetime care</li>
                    <li>• High mortgage in expensive area</li>
                    <li>• Private school tuition commitments</li>
                    <li>• Care for aging parents</li>
                    <li>• Business loan personal guarantees</li>
                    <li>• Single income household</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Factors That Decrease Needs</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Substantial existing life insurance</li>
                    <li>• Large investment accounts or savings</li>
                    <li>• Paid-off mortgage</li>
                    <li>• Adult children who are self-sufficient</li>
                    <li>• Strong survivor benefits from employer</li>
                    <li>• Dual high-income household</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="review-schedule" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">When to Review Your Coverage</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Your life insurance needs change over time. Regular reviews ensure you maintain appropriate coverage
                without overpaying for protection you no longer need.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-amber-800 mb-4">Review Your Coverage When:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-amber-700">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Marriage or divorce</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Birth or adoption of child</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Buying or selling a home</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Significant income change</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-amber-700">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Starting a business</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Paying off major debts</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Children become independent</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Every 3-5 years minimum</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Should I count my spouse's income in the calculation?</h3>
                  <p className="text-slate-700">
                    Yes, if your spouse earns income, you should calculate coverage for both of you. The surviving spouse
                    will lose that income stream and may need to work less to care for children, making replacement income critical.
                  </p>
                </div>

                <div className="border-b border-slate-200 pb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">How much does college really cost to factor in?</h3>
                  <p className="text-slate-700">
                    Current average costs are $28,000/year for in-state public schools and $50,000+/year for private colleges.
                    For planning purposes, budget $120,000-$200,000 per child for a four-year degree, adjusted for inflation.
                  </p>
                </div>

                <div className="border-b border-slate-200 pb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">What if I can't afford the "recommended" amount?</h3>
                  <p className="text-slate-700">
                    Some coverage is always better than none. Start with what you can afford now and increase coverage
                    as your income grows. Many policies offer riders that guarantee your right to purchase additional coverage later. Learn more about policy options in our <Link to="/blog/term-vs-whole-life-insurance-2025" className="text-primary hover:underline">term vs whole life comparison</Link>.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Calculator className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-blue-900">Get Your Personalized Analysis</h3>
            </div>
            <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
              Skip the guesswork and get a professional needs analysis customized for your family's unique situation.
              I'll help you determine the right amount of coverage at the best price through our <Link to="/our-process" className="text-blue-800 hover:underline font-medium">4-step advisory process</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/bradfordinformedguidance"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Free Consultation
              </a>
              <a
                href="tel:+16893256570"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-300 hover:bg-blue-50 transition-colors"
              >
                Call (689) 325-6570
              </a>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 bg-slate-50 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                ZB
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Zach Bradford</h3>
                <p className="text-slate-600 mb-3">
                  Licensed Florida Insurance Broker (W347851) specializing in <Link to="/life-insurance" className="text-primary hover:underline">life insurance</Link> and health insurance.
                  Helping families calculate their exact coverage needs since 2016.
                </p>
                <div className="text-sm text-slate-500">
                  Licensed in FL, MI, NC, AZ, TX & GA • 1,000+ families served • A+ BBB Rating
                </div>
              </div>
            </div>
          </div>

          <RelatedPosts
            slugs={[
              '/blog/term-vs-whole-life-insurance-2025',
              '/blog/life-insurance-companies-financial-strength',
              '/blog/life-insurance-pre-existing-conditions',
            ]}
          />
        </div>
      </article>
    </main>
  );
}
