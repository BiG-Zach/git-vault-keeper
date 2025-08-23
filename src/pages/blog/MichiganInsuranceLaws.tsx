import { Link } from "react-router-dom";
import { Calendar, Phone, ArrowLeft, Scale, Shield } from "lucide-react";
import SEO from "../../components/SEO";

export default function MichiganInsuranceLaws() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO 
        title="Michigan Insurance Laws: What Every Resident Must Know"
        description="Stay compliant and protected. Michigan's latest insurance requirements explained simply by a licensed broker with 8+ years experience."
        path="/blog/michigan-insurance-laws"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-slate-900">Michigan Insurance Laws</span>
          </div>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <Link 
            to="/resources" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          
          <div className="flex items-center gap-2 mb-4">
            <Scale className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-medium">Michigan State Law Guide</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Michigan Insurance Laws: What Every Resident Must Know
          </h1>
          
          <p className="text-xl text-slate-600 mb-6 leading-relaxed">
            Stay compliant and protected. Michigan's latest insurance requirements explained simply by a licensed broker with 8+ years experience.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-xs">ZB</span>
              </div>
              <span>By Zach Bradford, Licensed FL Broker W347851</span>
            </div>
            <span>•</span>
            <span>December 8, 2024</span>
            <span>•</span>
            <span>10 min read</span>
            <span>•</span>
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              LOCAL MARKET
            </div>
          </div>
        </header>

        {/* Legal Alert */}
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                ⚖️ Legal Compliance Alert
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  Michigan insurance laws are complex and frequently updated. Non-compliance can result in fines, license suspension, and financial liability. This guide covers current requirements as of December 2024.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-slate-50 rounded-lg p-6 mb-8 border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Michigan Insurance Law Guide</h2>
          <ul className="space-y-2 text-slate-600">
            <li><a href="#no-fault-auto" className="hover:text-blue-600 transition-colors">No-Fault Auto Insurance Requirements</a></li>
            <li><a href="#health-insurance-mandate" className="hover:text-blue-600 transition-colors">Health Insurance Mandate & Penalties</a></li>
            <li><a href="#homeowners-requirements" className="hover:text-blue-600 transition-colors">Homeowners Insurance Requirements</a></li>
            <li><a href="#workers-compensation" className="hover:text-blue-600 transition-colors">Workers' Compensation Laws</a></li>
            <li><a href="#professional-liability" className="hover:text-blue-600 transition-colors">Professional Liability Requirements</a></li>
            <li><a href="#penalties-consequences" className="hover:text-blue-600 transition-colors">Penalties for Non-Compliance</a></li>
            <li><a href="#recent-changes" className="hover:text-blue-600 transition-colors">Recent Law Changes (2024)</a></li>
            <li><a href="#faq" className="hover:text-blue-600 transition-colors">Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          
          <section id="no-fault-auto" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">No-Fault Auto Insurance Requirements</h2>
            <p className="text-slate-700 mb-4">
              Michigan operates under a no-fault auto insurance system, which means your insurance pays for your medical expenses and lost wages regardless of who caused the accident. Understanding these requirements is crucial for legal compliance.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Required Minimum Coverage (2024)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Personal Injury Protection (PIP)</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Unlimited medical coverage (default)</li>
                    <li>• $500,000 option available</li>
                    <li>• $250,000 option available</li>
                    <li>• PIP exclusion if qualifying health insurance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Property Protection Insurance (PPI)</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Minimum $1,000,000 required</li>
                    <li>• Covers damage to others' property</li>
                    <li>• Does not cover your vehicle</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">2019 No-Fault Reform Impact</h3>
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden mb-6">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-slate-900 font-semibold">PIP Option</th>
                    <th className="px-4 py-3 text-left text-slate-900 font-semibold">Medical Coverage</th>
                    <th className="px-4 py-3 text-left text-slate-900 font-semibold">Who Can Choose</th>
                    <th className="px-4 py-3 text-left text-slate-900 font-semibold">Typical Premium Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Unlimited</td>
                    <td className="px-4 py-3 text-slate-700">No cap on medical expenses</td>
                    <td className="px-4 py-3 text-slate-700">Anyone</td>
                    <td className="px-4 py-3 text-slate-700">Highest</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">$500,000</td>
                    <td className="px-4 py-3 text-slate-700">Up to $500,000</td>
                    <td className="px-4 py-3 text-slate-700">Anyone</td>
                    <td className="px-4 py-3 text-slate-700">Moderate</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">$250,000</td>
                    <td className="px-4 py-3 text-slate-700">Up to $250,000</td>
                    <td className="px-4 py-3 text-slate-700">Anyone</td>
                    <td className="px-4 py-3 text-slate-700">Lower</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">PIP Exclusion</td>
                    <td className="px-4 py-3 text-slate-700">$0 (use health insurance)</td>
                    <td className="px-4 py-3 text-slate-700">Qualifying health coverage only</td>
                    <td className="px-4 py-3 text-slate-700">Lowest</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Important:</strong> Choosing lower PIP limits or exclusion requires careful consideration. Medical expenses from serious auto accidents can easily exceed $250,000-500,000. Ensure your health insurance adequately covers auto-related injuries if choosing PIP exclusion.
              </p>
            </div>
          </section>

          <section id="health-insurance-mandate" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Health Insurance Mandate & Penalties</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Michigan Health Insurance Status</h3>
              <p className="text-green-700 mb-3">
                Michigan does NOT have a state health insurance mandate. However, understanding federal requirements and state-specific programs is important for residents.
              </p>
              <ul className="text-green-700 space-y-1">
                <li>• No state penalty for being uninsured</li>
                <li>• Federal penalty eliminated in 2019</li>
                <li>• Medicaid expansion available (Healthy Michigan Plan)</li>
                <li>• Special enrollment periods still apply</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Healthy Michigan Plan Eligibility</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Income Requirements (2024)</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Individual: Up to $20,783/year</li>
                  <li>• Family of 2: Up to $28,207/year</li>
                  <li>• Family of 3: Up to $35,632/year</li>
                  <li>• Family of 4: Up to $43,056/year</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">Eligibility Criteria</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Ages 19-64</li>
                  <li>• Michigan resident</li>
                  <li>• Not eligible for Medicare</li>
                  <li>• Not pregnant (separate program)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="homeowners-requirements" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Homeowners Insurance Requirements</h2>
            <p className="text-slate-700 mb-4">
              While Michigan doesn't legally require homeowners insurance for property owners, mortgage lenders do require it. Understanding Michigan-specific coverage needs is crucial for adequate protection.
            </p>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Michigan Weather-Related Risks</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-orange-800 mb-2">Winter Hazards</h4>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Ice dam damage</li>
                    <li>• Frozen pipe bursts</li>
                    <li>• Snow load on roofs</li>
                    <li>• Heating system failures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-orange-800 mb-2">Summer Hazards</h4>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Severe thunderstorms</li>
                    <li>• Hail damage</li>
                    <li>• Tornadoes</li>
                    <li>• Basement flooding</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Recommended Coverage Enhancements</h3>
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden mb-6">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-slate-900 font-semibold">Coverage Type</th>
                    <th className="px-4 py-3 text-left text-slate-900 font-semibold">Why Important in MI</th>
                    <th className="px-4 py-3 text-left text-slate-900 font-semibold">Typical Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Water Backup Coverage</td>
                    <td className="px-4 py-3 text-slate-700">Sewer backups common in older cities</td>
                    <td className="px-4 py-3 text-slate-700">$50-150/year</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Service Line Coverage</td>
                    <td className="px-4 py-3 text-slate-700">Freeze damage to utility lines</td>
                    <td className="px-4 py-3 text-slate-700">$25-75/year</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Equipment Breakdown</td>
                    <td className="px-4 py-3 text-slate-700">High HVAC usage year-round</td>
                    <td className="px-4 py-3 text-slate-700">$40-100/year</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Ordinance & Law</td>
                    <td className="px-4 py-3 text-slate-700">Many older homes need code updates</td>
                    <td className="px-4 py-3 text-slate-700">10-25% of coverage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="workers-compensation" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Workers' Compensation Laws</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">⚠️ Mandatory Coverage Requirements</h3>
              <p className="text-red-700 mb-3">
                Michigan requires most employers to carry workers' compensation insurance. Failure to comply can result in fines up to $1,000 per day plus criminal charges.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Who Must Carry Coverage</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">✅ Required Coverage</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Private employers with 3+ employees</li>
                  <li>• All employers with 1+ employee in construction</li>
                  <li>• Partnerships with employees</li>
                  <li>• LLCs with employee-members</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">❌ Exemptions</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Sole proprietors with no employees</li>
                  <li>• Partnerships with only partners</li>
                  <li>• Real estate agents (independent contractors)</li>
                  <li>• Domestic workers (under 35 hours/week)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Coverage Benefits Required</h3>
            <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
              <ul className="space-y-3 text-slate-700">
                <li><strong>Medical expenses:</strong> All reasonable and necessary medical treatment</li>
                <li><strong>Wage loss benefits:</strong> Up to 80% of after-tax average weekly wage</li>
                <li><strong>Vocational rehabilitation:</strong> Retraining for return to work</li>
                <li><strong>Death benefits:</strong> Support for surviving dependents</li>
              </ul>
            </div>
          </section>

          <section id="professional-liability" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Professional Liability Requirements</h2>
            <p className="text-slate-700 mb-4">
              Certain professions in Michigan have mandatory liability insurance requirements. Understanding these requirements is crucial for professional license compliance.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Healthcare Professionals</h4>
                <p className="text-slate-700 text-sm mb-2">Medical malpractice insurance required for licensing</p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Physicians: Minimum $1M per occurrence/$3M aggregate</li>
                  <li>• Nurses: Varies by specialty and employer</li>
                  <li>• Dentists: Minimum $1M per claim</li>
                </ul>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Legal Professionals</h4>
                <p className="text-slate-700 text-sm mb-2">Attorneys must carry professional liability insurance</p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Minimum coverage varies by practice area</li>
                  <li>• Solo practitioners: Recommended $100K-1M</li>
                  <li>• Large firms: Often $5M+ per claim</li>
                </ul>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Financial Professionals</h4>
                <p className="text-slate-700 text-sm mb-2">Insurance agents, CPAs, and financial advisors</p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Insurance agents: E&O required for licensing</li>
                  <li>• CPAs: Professional liability recommended</li>
                  <li>• Financial advisors: FINRA requirements apply</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="penalties-consequences" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Penalties for Non-Compliance</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Auto Insurance Violations</h3>
              <div className="space-y-2 text-red-700">
                <p><strong>First offense:</strong> $200 fine + driver license suspension</p>
                <p><strong>Subsequent offenses:</strong> $400 fine + extended suspension</p>
                <p><strong>Accident without insurance:</strong> Additional penalties + financial responsibility</p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Workers' Compensation Violations</h3>
              <div className="space-y-2 text-orange-700">
                <p><strong>Daily penalties:</strong> Up to $1,000 per day without coverage</p>
                <p><strong>Criminal charges:</strong> Misdemeanor for willful non-compliance</p>
                <p><strong>Civil liability:</strong> Personal responsibility for all claims</p>
              </div>
            </div>
          </section>

          <section id="recent-changes" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Recent Law Changes (2024)</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">2024 Legislative Updates</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Auto Insurance:</strong> New PIP options became available in July 2024</li>
                <li>• <strong>Workers' Comp:</strong> Updated benefit levels effective January 2024</li>
                <li>• <strong>Health Insurance:</strong> Expanded telehealth coverage requirements</li>
                <li>• <strong>Professional Liability:</strong> New requirements for mental health providers</li>
              </ul>
            </div>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I drive without auto insurance in Michigan?</h3>
                <p className="text-slate-700">
                  No. Michigan requires all drivers to carry minimum auto insurance coverage. Driving without insurance results in immediate license suspension, fines, and potential criminal charges. Even if you don't own a car, you need coverage to legally drive any vehicle.
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What happens if I get hurt in an auto accident without health insurance?</h3>
                <p className="text-slate-700">
                  Your auto insurance PIP coverage will pay for medical expenses regardless of your health insurance status. However, if you chose PIP exclusion, you may be responsible for medical costs that your health insurance doesn't cover.
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Do I need workers' compensation if I'm a sole proprietor?</h3>
                <p className="text-slate-700">
                  Sole proprietors without employees are not required to carry workers' compensation insurance. However, if you hire even one employee or work in construction, coverage becomes mandatory. Many sole proprietors choose to buy coverage for their own protection.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Ensure Michigan Law Compliance</h2>
          <p className="text-lg mb-6 opacity-90">
            Don't risk penalties or legal issues. Get expert guidance on Michigan insurance requirements and find compliant coverage at the best rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/bradfordinformedguidance"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Compliance Review
            </a>
            <a
              href="tel:(689) 325-6570"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (689) 325-6570
            </a>
          </div>
        </section>

        {/* Author Bio */}
        <section className="bg-slate-50 rounded-lg p-6 mb-8 border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              ZB
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Zach Bradford</h3>
              <p className="text-slate-600 text-sm mb-2">Licensed Florida Insurance Broker (W347851) | Multi-State Insurance Expert</p>
              <p className="text-slate-700">
                While licensed in Florida, Zach has extensive experience helping families understand insurance requirements across multiple states, including Michigan. His expertise in insurance law and regulations has helped hundreds of families achieve compliance while optimizing their coverage costs.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/blog/north-carolina-best-health-insurance" className="group">
              <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  North Carolina's Best Health Insurance Plans: 2024 Rankings
                </h3>
                <p className="text-slate-600 text-sm">
                  Independent analysis of NC's top health plans based on coverage and value.
                </p>
              </div>
            </Link>
            
            <Link to="/blog/florida-health-insurance-guide-2024" className="group">
              <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Florida Health Insurance: Complete 2024 Market Guide
                </h3>
                <p className="text-slate-600 text-sm">
                  Comprehensive guide to Florida's health insurance marketplace and options.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}