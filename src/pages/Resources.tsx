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
            {/* Life Insurance Mastery */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-jade-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-brand-jade-500 rounded"></div>
              </div>
              <h3 className="h3 mb-4">Life Insurance Mastery</h3>
              <p className="text-slate-600 mb-6">
                Complete guides on term life, whole life, and universal life insurance options.
              </p>
              <div className="text-sm text-slate-500">
                <span className="font-medium">12 Articles</span> • Avg 8 min read
              </div>
            </div>

            {/* Health Insurance Authority */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
              </div>
              <h3 className="h3 mb-4">Health Insurance Authority</h3>
              <p className="text-slate-600 mb-6">
                Navigate ACA plans, Medicare, and employer coverage with expert guidance.
              </p>
              <div className="text-sm text-slate-500">
                <span className="font-medium">15 Articles</span> • Avg 10 min read
              </div>
            </div>

            {/* Local Market Expertise */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-emerald-500 rounded"></div>
              </div>
              <h3 className="h3 mb-4">Local Market Expertise</h3>
              <p className="text-slate-600 mb-6">
                State-specific guides for Florida, Michigan, and North Carolina markets.
              </p>
              <div className="text-sm text-slate-500">
                <span className="font-medium">8 Articles</span> • Avg 6 min read
              </div>
            </div>

            {/* Premium Comparison Tools */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-purple-500 rounded"></div>
              </div>
              <h3 className="h3 mb-4">Comparison Tools</h3>
              <p className="text-slate-600 mb-6">
                Side-by-side carrier comparisons and interactive calculators.
              </p>
              <div className="text-sm text-slate-500">
                <span className="font-medium">6 Tools</span> • Interactive
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