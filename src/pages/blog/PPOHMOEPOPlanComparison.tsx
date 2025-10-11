import { Link } from 'react-router-dom';
import { Clock, User, Calendar, Share2, ArrowLeft, CheckCircle, DollarSign, Shield, Building, MapPin, Stethoscope } from 'lucide-react';
import SEO from '../../components/SEO';

export default function PPOHMOEPOPlanComparison() {
  return (
    <main className="min-h-screen bg-white">
      <SEO 
        title="PPO vs HMO vs EPO: Choose the Right Plan Type for Your Family | Bradford Informed Guidance"
        description="Stop overpaying for the wrong plan. Here's how to choose the best health insurance option for your needs and save money."
        path="/blog/ppo-hmo-epo-plan-comparison"
      />

      {/* Breadcrumb */}
      <nav className="py-4 bg-slate-50 border-b">
        <div className="container-default">
          <div className="flex items-center text-sm text-slate-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/resources" className="hover:text-blue-600">Resources</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">PPO vs HMO vs EPO Comparison</span>
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
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                HEALTH INSURANCE
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                PPO vs HMO vs EPO: Choose the Right Plan Type for Your Family
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Stop overpaying for the wrong plan. Here's how to choose the best health insurance option for your needs and save money.
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
                <span>Updated December 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>11 min read</span>
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
              <li><a href="#plan-types-overview" className="hover:text-blue-600">1. Health Plan Types Overview</a></li>
              <li><a href="#hmo-explained" className="hover:text-blue-600">2. HMO Plans Explained</a></li>
              <li><a href="#ppo-explained" className="hover:text-blue-600">3. PPO Plans Explained</a></li>
              <li><a href="#epo-explained" className="hover:text-blue-600">4. EPO Plans Explained</a></li>
              <li><a href="#comparison-table" className="hover:text-blue-600">5. Side-by-Side Comparison</a></li>
              <li><a href="#choosing-guide" className="hover:text-blue-600">6. How to Choose the Right Plan</a></li>
              <li><a href="#cost-examples" className="hover:text-blue-600">7. Real Cost Examples</a></li>
              <li><a href="#faq" className="hover:text-blue-600">8. Frequently Asked Questions</a></li>
            </ol>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <section id="plan-types-overview" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Health Plan Types Overview</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Understanding the differences between HMO, PPO, and EPO plans is crucial for choosing health insurance 
                that fits your needs and budget. The wrong choice could cost you thousands in unnecessary premiums 
                or out-of-network charges.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Quick Decision Framework</h3>
                <div className="grid md:grid-cols-3 gap-4 text-blue-700">
                  <div className="text-center">
                    <Building className="w-8 h-8 mx-auto mb-2" />
                    <strong>Choose HMO if:</strong>
                    <p className="text-sm mt-1">You want lowest premiums and don't mind restrictions</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <strong>Choose PPO if:</strong>
                    <p className="text-sm mt-1">You want maximum flexibility and can pay higher premiums</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2" />
                    <strong>Choose EPO if:</strong>
                    <p className="text-sm mt-1">You want balance between cost and network flexibility</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">What These Acronyms Mean</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">HMO</h4>
                  <p className="text-slate-600 text-sm">Health Maintenance Organization</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">PPO</h4>
                  <p className="text-slate-600 text-sm">Preferred Provider Organization</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">EPO</h4>
                  <p className="text-slate-600 text-sm">Exclusive Provider Organization</p>
                </div>
              </div>
            </section>

            <section id="hmo-explained" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">HMO Plans Explained</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                HMO plans offer the most structured approach to healthcare with the lowest premiums. You choose a 
                primary care physician (PCP) who coordinates all your care and provides referrals to specialists.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-green-800">HMO Advantages</h3>
                  </div>
                  <ul className="space-y-2 text-green-700">
                    <li>• Lowest monthly premiums</li>
                    <li>• Predictable, low copayments</li>
                    <li>• Coordinated care through your PCP</li>
                    <li>• Preventive care typically covered 100%</li>
                    <li>• No deductible for routine services</li>
                    <li>• Simple claims process</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <DollarSign className="w-6 h-6 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold text-red-800">HMO Disadvantages</h3>
                  </div>
                  <ul className="space-y-2 text-red-700">
                    <li>• Must stay within provider network</li>
                    <li>• Need referrals for specialists</li>
                    <li>• Limited provider choices</li>
                    <li>• No out-of-network coverage (except emergencies)</li>
                    <li>• May have longer wait times</li>
                    <li>• Geographic service area restrictions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Typical HMO Costs (Florida Family of 4)</h3>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="font-bold text-slate-900">Monthly Premium</div>
                    <div className="text-2xl text-green-600">$850</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">PCP Visit</div>
                    <div className="text-2xl text-green-600">$25</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Specialist</div>
                    <div className="text-2xl text-green-600">$50</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Deductible</div>
                    <div className="text-2xl text-green-600">$0</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="ppo-explained" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">PPO Plans Explained</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                PPO plans offer maximum flexibility in choosing healthcare providers. You can see any doctor or 
                specialist without referrals, though you'll pay less when using in-network providers.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-green-800">PPO Advantages</h3>
                  </div>
                  <ul className="space-y-2 text-green-700">
                    <li>• No referrals needed for specialists</li>
                    <li>• Large provider networks</li>
                    <li>• Out-of-network coverage available</li>
                    <li>• Can see providers nationwide</li>
                    <li>• More flexibility in choosing doctors</li>
                    <li>• Direct access to specialists</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <DollarSign className="w-6 h-6 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold text-red-800">PPO Disadvantages</h3>
                  </div>
                  <ul className="space-y-2 text-red-700">
                    <li>• Highest monthly premiums</li>
                    <li>• Higher deductibles</li>
                    <li>• More complex claims process</li>
                    <li>• Out-of-network costs can be high</li>
                    <li>• May need to pay upfront and get reimbursed</li>
                    <li>• More paperwork</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Typical PPO Costs (Florida Family of 4)</h3>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="font-bold text-slate-900">Monthly Premium</div>
                    <div className="text-2xl text-blue-600">$1,350</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">In-Network Visit</div>
                    <div className="text-2xl text-blue-600">$35</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Out-of-Network</div>
                    <div className="text-2xl text-blue-600">40% coinsurance</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Deductible</div>
                    <div className="text-2xl text-blue-600">$2,500</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="epo-explained" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">EPO Plans Explained</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                EPO plans are a hybrid between HMO and PPO plans. They offer more provider choices than HMOs 
                without requiring referrals, but typically don't cover out-of-network care except for emergencies.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-green-800">EPO Advantages</h3>
                  </div>
                  <ul className="space-y-2 text-green-700">
                    <li>• No referrals needed for specialists</li>
                    <li>• Lower premiums than PPO</li>
                    <li>• Larger networks than HMO</li>
                    <li>• Direct access to specialists</li>
                    <li>• Streamlined claims process</li>
                    <li>• Good balance of cost and flexibility</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <DollarSign className="w-6 h-6 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold text-red-800">EPO Disadvantages</h3>
                  </div>
                  <ul className="space-y-2 text-red-700">
                    <li>• No out-of-network coverage</li>
                    <li>• Limited geographic coverage</li>
                    <li>• Higher premiums than HMO</li>
                    <li>• Provider network changes possible</li>
                    <li>• May have moderate deductibles</li>
                    <li>• Less flexibility than PPO</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Typical EPO Costs (Florida Family of 4)</h3>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="font-bold text-slate-900">Monthly Premium</div>
                    <div className="text-2xl text-purple-600">$1,100</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">PCP Visit</div>
                    <div className="text-2xl text-purple-600">$30</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Specialist</div>
                    <div className="text-2xl text-purple-600">$60</div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Deductible</div>
                    <div className="text-2xl text-purple-600">$1,500</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="comparison-table" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Side-by-Side Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-300">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="border border-slate-300 p-4 text-left font-bold">Feature</th>
                      <th className="border border-slate-300 p-4 text-left font-bold">HMO</th>
                      <th className="border border-slate-300 p-4 text-left font-bold">EPO</th>
                      <th className="border border-slate-300 p-4 text-left font-bold">PPO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 p-4 font-medium">Monthly Premium</td>
                      <td className="border border-slate-300 p-4 text-green-600">$$ (Lowest)</td>
                      <td className="border border-slate-300 p-4 text-yellow-600">$$$ (Moderate)</td>
                      <td className="border border-slate-300 p-4 text-red-600">$$$$ (Highest)</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 p-4 font-medium">PCP Required</td>
                      <td className="border border-slate-300 p-4 text-red-600">Yes</td>
                      <td className="border border-slate-300 p-4 text-green-600">No</td>
                      <td className="border border-slate-300 p-4 text-green-600">No</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-4 font-medium">Referrals Needed</td>
                      <td className="border border-slate-300 p-4 text-red-600">Yes</td>
                      <td className="border border-slate-300 p-4 text-green-600">No</td>
                      <td className="border border-slate-300 p-4 text-green-600">No</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 p-4 font-medium">Out-of-Network Coverage</td>
                      <td className="border border-slate-300 p-4 text-red-600">Emergency Only</td>
                      <td className="border border-slate-300 p-4 text-red-600">Emergency Only</td>
                      <td className="border border-slate-300 p-4 text-green-600">Yes (Higher Cost)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-4 font-medium">Network Size</td>
                      <td className="border border-slate-300 p-4 text-yellow-600">Smaller</td>
                      <td className="border border-slate-300 p-4 text-yellow-600">Moderate</td>
                      <td className="border border-slate-300 p-4 text-green-600">Largest</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 p-4 font-medium">Flexibility</td>
                      <td className="border border-slate-300 p-4 text-red-600">Low</td>
                      <td className="border border-slate-300 p-4 text-yellow-600">Moderate</td>
                      <td className="border border-slate-300 p-4 text-green-600">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="choosing-guide" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Choose the Right Plan</h2>
              
              <div className="space-y-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Building className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-green-800">Choose HMO If You:</h3>
                  </div>
                  <ul className="space-y-2 text-green-700 mb-4">
                    <li>• Want the lowest monthly premiums</li>
                    <li>• Don't mind getting referrals for specialists</li>
                    <li>• Prefer coordinated care through one doctor</li>
                    <li>• Rarely need medical care</li>
                    <li>• Live in an area with good HMO networks</li>
                    <li>• Are comfortable with limited provider choices</li>
                  </ul>
                  <div className="bg-green-100 p-3 rounded">
                    <strong className="text-green-800">Best for:</strong> Budget-conscious families, young/healthy individuals
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-purple-800">Choose EPO If You:</h3>
                  </div>
                  <ul className="space-y-2 text-purple-700 mb-4">
                    <li>• Want direct specialist access without referrals</li>
                    <li>• Need moderate premium costs</li>
                    <li>• Stay within your local area for care</li>
                    <li>• Want more provider choices than HMO</li>
                    <li>• Don't need out-of-network coverage</li>
                    <li>• Value simplicity in claims processing</li>
                  </ul>
                  <div className="bg-purple-100 p-3 rounded">
                    <strong className="text-purple-800">Best for:</strong> Families wanting balance of cost and flexibility
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-blue-800">Choose PPO If You:</h3>
                  </div>
                  <ul className="space-y-2 text-blue-700 mb-4">
                    <li>• Want maximum flexibility in provider choice</li>
                    <li>• Travel frequently and need nationwide coverage</li>
                    <li>• Have specific doctors you want to keep seeing</li>
                    <li>• Don't mind paying higher premiums</li>
                    <li>• Need or want out-of-network coverage</li>
                    <li>• Prefer direct access to specialists</li>
                  </ul>
                  <div className="bg-blue-100 p-3 rounded">
                    <strong className="text-blue-800">Best for:</strong> High earners, frequent travelers, chronic conditions
                  </div>
                </div>
              </div>
            </section>

            <section id="cost-examples" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Real Cost Examples</h2>
              
              <div className="space-y-8">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">The Johnson Family - Healthy Young Family</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-bold text-green-800 mb-2">HMO Choice</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>Premium: $850/month</li>
                        <li>Annual check-ups: $75</li>
                        <li>One urgent care: $25</li>
                        <li><strong>Total Year 1: $10,950</strong></li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-bold text-purple-800 mb-2">EPO Choice</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>Premium: $1,100/month</li>
                        <li>Annual check-ups: $120</li>
                        <li>One urgent care: $30</li>
                        <li><strong>Total Year 1: $13,350</strong></li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-bold text-blue-800 mb-2">PPO Choice</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>Premium: $1,350/month</li>
                        <li>Annual check-ups: $140</li>
                        <li>One urgent care: $35</li>
                        <li><strong>Total Year 1: $16,375</strong></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-green-100 rounded">
                    <p className="text-green-800 font-medium">
                      <strong>Winner:</strong> HMO saves $5,425 annually for healthy family with minimal medical needs
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">The Chen Family - Chronic Condition Management</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-bold text-green-800 mb-2">HMO Choice</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>Premium: $850/month</li>
                        <li>Specialist visits: $600</li>
                        <li>Referral delays: Inconvenient</li>
                        <li><strong>Total Year 1: $10,800</strong></li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-bold text-purple-800 mb-2">EPO Choice</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>Premium: $1,100/month</li>
                        <li>Specialist visits: $720</li>
                        <li>Direct access: Convenient</li>
                        <li><strong>Total Year 1: $13,920</strong></li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-bold text-blue-800 mb-2">PPO Choice</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>Premium: $1,350/month</li>
                        <li>Specialist visits: $840</li>
                        <li>Out-of-network option: Valuable</li>
                        <li><strong>Total Year 1: $17,040</strong></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-purple-100 rounded">
                    <p className="text-purple-800 font-medium">
                      <strong>Winner:</strong> EPO provides best balance of cost and convenience for chronic condition management
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Can I switch plan types during the year?</h3>
                  <p className="text-slate-700">
                    Generally, you can only switch plan types during open enrollment (November 1 - January 15) or if you 
                    have a qualifying life event like marriage, birth of a child, or job loss. Some employer plans may 
                    allow mid-year changes during their annual enrollment periods.
                  </p>
                </div>

                <div className="border-b border-slate-200 pb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">What happens if I need emergency care out-of-network?</h3>
                  <p className="text-slate-700">
                    All plan types (HMO, EPO, PPO) must cover emergency care at in-network rates, even if you go to an 
                    out-of-network hospital. However, follow-up care may need to be transferred to in-network providers 
                    for HMO and EPO plans.
                  </p>
                </div>

                <div className="border-b border-slate-200 pb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">How do I know if my doctor is in-network?</h3>
                  <p className="text-slate-700">
                    Check the insurance company's provider directory online or call the customer service number on your 
                    insurance card. You can also call your doctor's office - they can verify coverage and help you 
                    understand your benefits before your appointment.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Stethoscope className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-blue-900">Need Help Choosing the Right Plan?</h3>
            </div>
            <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
              Don't leave thousands of dollars on the table by choosing the wrong plan type. Get personalized 
              recommendations based on your family's specific needs and budget.
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
                  Licensed Florida Insurance Broker (W347851) specializing in health insurance plan selection. 
                  Helping families choose the right coverage since 2016.
                </p>
                <div className="text-sm text-slate-500">
                  Licensed in FL, MI, NC, AZ, TX & GA • 1,000+ families served • A+ BBB Rating
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/blog/florida-health-insurance-guide-2024" className="block p-6 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-900 mb-2">Florida Health Insurance: Complete 2024 Market Guide</h4>
                <p className="text-slate-600">Everything Florida residents need to know about health insurance options and costs.</p>
              </Link>
              <Link to="/blog/health-insurance-deductibles-guide" className="block p-6 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-900 mb-2">Health Insurance Deductibles: How to Lower Your Costs</h4>
                <p className="text-slate-600">Smart strategies to reduce your healthcare expenses while maintaining excellent coverage.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}