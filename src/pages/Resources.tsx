import SEO from '../components/SEO';
import ResourcesHero from '../components/headers/ResourcesHero';

export default function Resources() {
  return (
    <main id="content" className="has-sticky-cta">
      <SEO 
        title="Insurance Resources & Guides"
        description="Comprehensive insurance guides, expert insights, and tools from licensed broker Zach Bradford. Life insurance, health insurance, and local market expertise."
        path="/resources"
      />
      
      <ResourcesHero />

      {/* Resource Categories */}
      <section className="section bg-slate-50">
        <div className="container-default">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Browse by Category</h2>
            <p className="lead text-slate-600">
              Explore our comprehensive library of insurance guides and resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Life Insurance Mastery Hub */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 hover:border-emerald-200 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                MASTERY HUB
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  <path d="M9 10l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Life Insurance Mastery</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Complete guides on term life, whole life, and universal life insurance options.
              </p>
              
              {/* Featured Articles Preview */}
              <div className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-sm text-emerald-600">• 2024 Life Insurance Guide: Protect Your Legacy</div>
                <div className="text-sm text-emerald-600">• Term vs Whole Life: The $50,000 Decision</div>
                <div className="text-sm text-emerald-600">• Young Adult Life Insurance: Why 25 is Magic</div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">12 Articles</span>
                <span className="text-emerald-600 font-medium">Updated Jan 2024</span>
              </div>
            </div>

            {/* Health Insurance Authority Center */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 hover:border-blue-200 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                AUTHORITY
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Health Insurance Authority</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Navigate ACA plans, Medicare, and employer coverage with expert guidance.
              </p>
              
              {/* Featured Articles Preview */}
              <div className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-sm text-blue-600">• Florida Health Insurance: 2024 Market Guide</div>
                <div className="text-sm text-blue-600">• PPO vs HMO: Which Saves Your Family More?</div>
                <div className="text-sm text-blue-600">• Pre-existing Conditions: Complete Guide</div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">15 Articles</span>
                <span className="text-blue-600 font-medium">Recently Updated</span>
              </div>
            </div>

            {/* Local Market Intelligence */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 hover:border-purple-200 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                EXCLUSIVE
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Local Market Intelligence</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                State-specific guides for Florida, Michigan, and North Carolina markets.
              </p>
              
              {/* Featured Articles Preview */}
              <div className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-sm text-purple-600">• Tampa Bay Insurance: Insider's 2024 Guide</div>
                <div className="text-sm text-purple-600">• Michigan Insurance Laws: What Changed</div>
                <div className="text-sm text-purple-600">• Florida Hurricane Insurance Guide</div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">8 Articles</span>
                <span className="text-purple-600 font-medium">Local Insights</span>
              </div>
            </div>

            {/* Premium Comparison Tools */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 hover:border-amber-200 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                INTERACTIVE
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 7.5h5v2h-5zm0 7h5v2h-5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM11 6H6v5h5V6zm-1 4H7V7h3v3zm1 3H6v5h5v-5zm-1 4H7v-3h3v3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Premium Comparison Tools</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Side-by-side carrier comparisons and interactive calculators.
              </p>
              
              {/* Featured Tools Preview */}
              <div className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-sm text-amber-600">• Life Insurance Needs Calculator</div>
                <div className="text-sm text-amber-600">• Aetna vs Cigna vs UnitedHealthcare</div>
                <div className="text-sm text-amber-600">• Florida's Best Health Plans Ranked</div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">6 Interactive Tools</span>
                <span className="text-amber-600 font-medium">Live Data</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Preview */}
      <section className="section">
        <div className="container-default">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Featured Resources</h2>
            <p className="lead text-slate-600">
              Our most popular guides to help you get started
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Featured Article 1 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-brand-jade-500 to-brand-jade-600"></div>
              <div className="p-6">
                <div className="text-sm text-brand-jade-600 font-medium mb-2">LIFE INSURANCE</div>
                <h3 className="h3 mb-3">Life Insurance Explained: Complete 2024 Guide</h3>
                <p className="text-slate-600 mb-4">
                  Everything you need to know about life insurance types, coverage amounts, and choosing the right policy.
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>8 min read</span>
                  <span>Updated Jan 2024</span>
                </div>
              </div>
            </article>

            {/* Featured Article 2 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600"></div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">HEALTH INSURANCE</div>
                <h3 className="h3 mb-3">Health Insurance Open Enrollment: Complete Checklist</h3>
                <p className="text-slate-600 mb-4">
                  Don't miss important deadlines. Our comprehensive checklist ensures you get the best coverage.
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>12 min read</span>
                  <span>Updated Dec 2023</span>
                </div>
              </div>
            </article>

            {/* Featured Article 3 */}
            <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-emerald-600"></div>
              <div className="p-6">
                <div className="text-sm text-emerald-600 font-medium mb-2">LOCAL GUIDE</div>
                <h3 className="h3 mb-3">Florida Health Insurance: 2024 Market Guide</h3>
                <p className="text-slate-600 mb-4">
                  Navigate Florida's unique insurance landscape with insights from local market expertise.
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>10 min read</span>
                  <span>Updated Jan 2024</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-jade-500 text-white">
        <div className="container-default text-center">
          <h2 className="h2 mb-4 text-white">Need Personalized Guidance?</h2>
          <p className="text-xl text-brand-jade-100 mb-8 max-w-2xl mx-auto">
            While our resources provide comprehensive information, every situation is unique. 
            Get personalized recommendations from a licensed professional.
          </p>
          <a
            href="https://calendly.com/bradfordinformedguidance"
            className="btn-primary bg-white text-brand-jade-600 hover:bg-brand-jade-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}