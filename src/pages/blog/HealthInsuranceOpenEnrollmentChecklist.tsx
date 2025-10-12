import { Link } from "react-router-dom";
import { Calendar, Phone, ArrowLeft, CheckCircle } from "lucide-react";
import SEO from "../../components/SEO";
import { buildArticleSEO } from "../../utils/seoHelpers";

export default function HealthInsuranceOpenEnrollmentChecklist() {
  const title = "Health Insurance Open Enrollment: Your Complete Success Checklist";
  const description = "Don't miss critical deadlines. Our step-by-step checklist ensures you get the best coverage and avoid costly mistakes during open enrollment.";
  const path = "/blog/health-insurance-open-enrollment-checklist";
  const datePublished = "2024-01-17";
  const articleSEO = buildArticleSEO({ title, description, path, datePublished });

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO 
        title={title}
        description={description}
        path={path}
        image={articleSEO.image}
        meta={articleSEO.meta}
        scripts={articleSEO.scripts}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-slate-900">Open Enrollment Checklist</span>
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
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Health Insurance Open Enrollment: Your Complete Success Checklist
          </h1>
          
          <p className="text-xl text-slate-600 mb-6 leading-relaxed">
            Don't miss critical deadlines. Our step-by-step checklist ensures you get the best coverage and avoid costly mistakes during open enrollment.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-xs">ZB</span>
              </div>
              <span>By Zach Bradford, Licensed FL Broker W347851</span>
            </div>
            <span>•</span>
            <span>December 10, 2024</span>
            <span>•</span>
            <span>11 min read</span>
            <span>•</span>
            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              HEALTH INSURANCE
            </div>
          </div>
        </header>

        {/* Urgent Alert */}
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                ⚠️ Critical Deadline Alert
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  Open Enrollment Period: <strong>November 1 - January 15, 2025</strong>
                  <br />
                  Missing this deadline means waiting until next year unless you have a qualifying life event.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-slate-50 rounded-lg p-6 mb-8 border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Complete Checklist Overview</h2>
          <ul className="space-y-2 text-slate-600">
            <li><a href="#preparation-phase" className="hover:text-blue-600 transition-colors">Phase 1: Preparation (Start 30 Days Early)</a></li>
            <li><a href="#document-gathering" className="hover:text-blue-600 transition-colors">Phase 2: Document Gathering</a></li>
            <li><a href="#plan-comparison" className="hover:text-blue-600 transition-colors">Phase 3: Plan Comparison & Analysis</a></li>
            <li><a href="#enrollment-execution" className="hover:text-blue-600 transition-colors">Phase 4: Enrollment Execution</a></li>
            <li><a href="#post-enrollment" className="hover:text-blue-600 transition-colors">Phase 5: Post-Enrollment Verification</a></li>
            <li><a href="#common-mistakes" className="hover:text-blue-600 transition-colors">10 Costly Mistakes to Avoid</a></li>
            <li><a href="#timeline-calendar" className="hover:text-blue-600 transition-colors">Month-by-Month Timeline</a></li>
            <li><a href="#faq" className="hover:text-blue-600 transition-colors">Frequently Asked Questions</a></li>
          </ul>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          
          <section id="preparation-phase" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Phase 1: Preparation (Start 30 Days Early)</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Essential Preparation Checklist</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-green-700 font-medium">Review Current Coverage</p>
                    <p className="text-green-600 text-sm">Analyze what worked and what didn't in your current plan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-green-700 font-medium">Calculate Healthcare Spending</p>
                    <p className="text-green-600 text-sm">Total your 2024 medical, dental, and prescription costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-green-700 font-medium">List Your Doctors</p>
                    <p className="text-green-600 text-sm">Create a complete list of all healthcare providers you want to keep</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-green-700 font-medium">Inventory Prescriptions</p>
                    <p className="text-green-600 text-sm">Document all medications, dosages, and monthly costs</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">2024 Healthcare Spending Analysis Worksheet</h3>
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden mb-6">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-slate-900 font-semibold">Category</th>
                    <th className="px-4 py-3 text-left text-slate-900 font-semibold">Annual Cost</th>
                    <th className="px-4 py-3 text-left text-slate-900 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Premiums paid</td>
                    <td className="px-4 py-3 text-slate-700">$_______</td>
                    <td className="px-4 py-3 text-slate-700">Monthly × 12</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Deductible met</td>
                    <td className="px-4 py-3 text-slate-700">$_______</td>
                    <td className="px-4 py-3 text-slate-700">Out-of-pocket before insurance</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Copays/Coinsurance</td>
                    <td className="px-4 py-3 text-slate-700">$_______</td>
                    <td className="px-4 py-3 text-slate-700">After insurance kicks in</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-700">Prescriptions</td>
                    <td className="px-4 py-3 text-slate-700">$_______</td>
                    <td className="px-4 py-3 text-slate-700">Monthly costs × 12</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 text-slate-900 font-semibold">Total 2024 Cost</td>
                    <td className="px-4 py-3 text-slate-900 font-semibold">$_______</td>
                    <td className="px-4 py-3 text-slate-700">Use for 2025 planning</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="document-gathering" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Phase 2: Document Gathering</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">📋 Required Documents</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Social Security numbers (all family members)</li>
                  <li>• Tax return or W-2 forms (for income verification)</li>
                  <li>• Current insurance cards and policy documents</li>
                  <li>• Immigration documents (if applicable)</li>
                  <li>• Bank statements (for premium payments)</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">💡 Preparation Tips</h3>
                <ul className="space-y-2 text-purple-700">
                  <li>• Scan documents to digital files</li>
                  <li>• Create a dedicated enrollment folder</li>
                  <li>• Have backup payment methods ready</li>
                  <li>• Double-check all personal information</li>
                  <li>• Estimate 2025 household income</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="plan-comparison" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Phase 3: Plan Comparison & Analysis</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Pro Tip:</strong> Don't just compare monthly premiums. A $50 higher premium could save you $2,000+ annually in out-of-pocket costs.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Plan Comparison Matrix</h3>
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-3 py-2 text-left text-slate-900 font-semibold">Factor</th>
                    <th className="px-3 py-2 text-left text-slate-900 font-semibold">Plan A</th>
                    <th className="px-3 py-2 text-left text-slate-900 font-semibold">Plan B</th>
                    <th className="px-3 py-2 text-left text-slate-900 font-semibold">Plan C</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-3 py-2 text-slate-700 font-medium">Monthly Premium</td>
                    <td className="px-3 py-2 text-slate-700">$_____</td>
                    <td className="px-3 py-2 text-slate-700">$_____</td>
                    <td className="px-3 py-2 text-slate-700">$_____</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-slate-700 font-medium">Annual Deductible</td>
                    <td className="px-3 py-2 text-slate-700">$_____</td>
                    <td className="px-3 py-2 text-slate-700">$_____</td>
                    <td className="px-3 py-2 text-slate-700">$_____</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-slate-700 font-medium">Out-of-Pocket Max</td>
                    <td className="px-3 py-2 text-slate-700">$_____</td>
                    <td className="px-3 py-2 text-slate-700">$_____</td>
                    <td className="px-3 py-2 text-slate-700">$_____</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-slate-700 font-medium">Primary Care Copay</td>
                    <td className="px-3 py-2 text-slate-700">$_____</td>
                    <td className="px-3 py-2 text-slate-700">$_____</td>
                    <td className="px-3 py-2 text-slate-700">$_____</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-slate-700 font-medium">Specialist Copay</td>
                    <td className="px-3 py-2 text-slate-700">$_____</td>
                    <td className="px-3 py-2 text-slate-700">$_____</td>
                    <td className="px-3 py-2 text-slate-700">$_____</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-slate-700 font-medium">Prescription Coverage</td>
                    <td className="px-3 py-2 text-slate-700">_____</td>
                    <td className="px-3 py-2 text-slate-700">_____</td>
                    <td className="px-3 py-2 text-slate-700">_____</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-slate-700 font-medium">Network Size</td>
                    <td className="px-3 py-2 text-slate-700">_____</td>
                    <td className="px-3 py-2 text-slate-700">_____</td>
                    <td className="px-3 py-2 text-slate-700">_____</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-3 py-2 text-slate-900 font-semibold">Estimated Annual Cost</td>
                    <td className="px-3 py-2 text-slate-900 font-semibold">$_____</td>
                    <td className="px-3 py-2 text-slate-900 font-semibold">$_____</td>
                    <td className="px-3 py-2 text-slate-900 font-semibold">$_____</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="enrollment-execution" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Phase 4: Enrollment Execution</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">⏰ Critical Timeline</h3>
              <ul className="space-y-2 text-red-700">
                <li><strong>By December 15:</strong> Enroll for January 1st coverage</li>
                <li><strong>By January 15:</strong> Final deadline for any 2025 coverage</li>
                <li><strong>Within 30 days:</strong> Pay your first premium to activate coverage</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Step-by-Step Enrollment Process</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Create Healthcare.gov Account</h4>
                  <p className="text-slate-700 text-sm">Or log into existing account. Verify your identity and security questions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Complete Application</h4>
                  <p className="text-slate-700 text-sm">Enter household information, income, and coverage preferences accurately.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Review Subsidy Eligibility</h4>
                  <p className="text-slate-700 text-sm">Check for premium tax credits and cost-sharing reductions you qualify for.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">4</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Compare and Select Plan</h4>
                  <p className="text-slate-700 text-sm">Use your comparison matrix to make the final decision.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">5</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Complete Enrollment</h4>
                  <p className="text-slate-700 text-sm">Submit application and save confirmation number and documents.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="common-mistakes" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10 Costly Mistakes to Avoid</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">❌ Choosing Based on Premium Alone</h4>
                <p className="text-red-700 text-sm">A low premium plan with high deductibles could cost thousands more annually.</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">❌ Not Checking Provider Networks</h4>
                <p className="text-red-700 text-sm">Your favorite doctor might not be covered, leading to out-of-network costs.</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">❌ Ignoring Prescription Coverage</h4>
                <p className="text-red-700 text-sm">Your medications might not be on the formulary or could be expensive.</p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">❌ Missing Subsidy Opportunities</h4>
                <p className="text-red-700 text-sm">Income reporting errors could cost you thousands in premium tax credits.</p>
              </div>
            </div>
          </section>

          <section id="timeline-calendar" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Month-by-Month Timeline</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h4 className="font-semibold text-blue-800">October: Pre-Planning Phase</h4>
                <p className="text-blue-700 text-sm">Review current coverage, gather documents, research new options</p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h4 className="font-semibold text-green-800">November: Active Enrollment</h4>
                <p className="text-green-700 text-sm">Open enrollment begins November 1st. Start comparing and enrolling</p>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                <h4 className="font-semibold text-orange-800">December: Decision Deadline</h4>
                <p className="text-orange-700 text-sm">Enroll by December 15th for January 1st coverage</p>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h4 className="font-semibold text-red-800">January: Final Chance</h4>
                <p className="text-red-700 text-sm">Last chance to enroll by January 15th for 2025 coverage</p>
              </div>
            </div>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What if I miss the open enrollment deadline?</h3>
                <p className="text-slate-700">
                  You'll have to wait until next year's open enrollment unless you have a qualifying life event (marriage, job loss, birth of child, etc.). Special enrollment periods last 60 days from the qualifying event.
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I change my plan after enrolling?</h3>
                <p className="text-slate-700">
                  Generally no, unless you have a qualifying life event. However, you can make changes during the next open enrollment period or if you qualify for a special enrollment period.
                </p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">How do I know if I qualify for subsidies?</h3>
                <p className="text-slate-700">
                  Premium tax credits are available for households earning between 100-400% of the Federal Poverty Level (roughly $31,200-$124,800 for a family of four in 2024). The application will calculate your eligibility automatically.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Need Expert Help with Open Enrollment?</h2>
          <p className="text-lg mb-6 opacity-90">
            Don't navigate this alone. Our licensed brokers will guide you through every step and ensure you get the best coverage at the lowest cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/bradfordinformedguidance"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Free Consultation
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
              <p className="text-slate-600 text-sm mb-2">Licensed Florida Insurance Broker (W347851)</p>
              <p className="text-slate-700">
                Zach has helped over 1,200 families navigate open enrollment successfully, saving them an average of $2,400 annually through strategic plan selection and subsidy optimization. His systematic approach ensures no critical details are missed.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/blog/health-insurance-deductibles-guide" className="group">
              <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Health Insurance Deductibles: How to Lower Your Out-of-Pocket Costs
                </h3>
                <p className="text-slate-600 text-sm">
                  Smart strategies to reduce healthcare expenses while maintaining excellent coverage.
                </p>
              </div>
            </Link>
            
            <Link to="/blog/florida-health-insurance-guide-2024" className="group">
              <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Florida Health Insurance: Complete 2024 Market Guide
                </h3>
                <p className="text-slate-600 text-sm">
                  Comprehensive analysis of Florida's health insurance marketplace and options.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
