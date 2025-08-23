import { Link } from "react-router-dom";
import { Calendar, Phone, ArrowLeft, TrendingUp } from "lucide-react";
import SEO from "../../components/SEO";

export default function AetnaCignaUnitedComparison() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO 
        title="Aetna vs Cigna vs UnitedHealthcare: 2024 Independent Analysis"
        description="Which major insurer offers the best value? Our comprehensive comparison reveals the winner based on coverage, cost, and customer satisfaction."
        path="/blog/aetna-cigna-united-comparison-2024"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/resources" className="hover:text-blue-600 transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-slate-900">Aetna vs Cigna vs United Comparison</span>
          </div>
        </nav>

        <header className="mb-12">
          <Link to="/resources" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Aetna vs Cigna vs UnitedHealthcare: 2024 Independent Analysis
          </h1>
          
          <p className="text-xl text-slate-600 mb-6 leading-relaxed">
            Which major insurer offers the best value? Our comprehensive comparison reveals the winner based on coverage, cost, and customer satisfaction.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-xs">ZB</span>
              </div>
              <span>By Zach Bradford, Licensed FL Broker W347851</span>
            </div>
            <span>•</span>
            <span>December 14, 2024</span>
            <span>•</span>
            <span>14 min read</span>
            <span>•</span>
            <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
              CARRIER ANALYSIS
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2024 Overall Winner Rankings</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">UnitedHealthcare</h3>
                    <p className="text-green-600 text-sm font-medium">★★★★★ Best Overall Value (4.6/5.0)</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Strengths</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Largest provider network nationwide</li>
                      <li>• Competitive pricing on most plans</li>
                      <li>• Excellent digital tools and app</li>
                      <li>• Strong employer group options</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Best For</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Families wanting broad network access</li>
                      <li>• People who travel frequently</li>
                      <li>• Tech-savvy healthcare consumers</li>
                      <li>• Employer-sponsored coverage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">2024 Performance</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Customer satisfaction: 4.4/5.0</li>
                      <li>• Claims processing: 4.7/5.0</li>
                      <li>• Network adequacy: Excellent</li>
                      <li>• Premium competitiveness: Very Good</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Cigna Healthcare</h3>
                    <p className="text-blue-600 text-sm font-medium">★★★★☆ Best Customer Experience (4.3/5.0)</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Strengths</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Superior customer service</li>
                      <li>• Innovative wellness programs</li>
                      <li>• Strong international coverage</li>
                      <li>• Excellent chronic care management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Best For</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• People with chronic conditions</li>
                      <li>• International travelers/expats</li>
                      <li>• Those prioritizing customer service</li>
                      <li>• Wellness-focused individuals</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">2024 Performance</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Customer satisfaction: 4.6/5.0</li>
                      <li>• Claims processing: 4.2/5.0</li>
                      <li>• Network adequacy: Good</li>
                      <li>• Premium competitiveness: Good</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Aetna (CVS Health)</h3>
                    <p className="text-purple-600 text-sm font-medium">★★★★☆ Best Integrated Care (4.1/5.0)</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Strengths</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• CVS pharmacy integration</li>
                      <li>• Strong Medicare Advantage plans</li>
                      <li>• Good specialty care networks</li>
                      <li>• Innovative care coordination</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Best For</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Seniors (Medicare Advantage)</li>
                      <li>• People with complex conditions</li>
                      <li>• CVS pharmacy users</li>
                      <li>• Integrated care seekers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">2024 Performance</h4>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Customer satisfaction: 4.0/5.0</li>
                      <li>• Claims processing: 4.3/5.0</li>
                      <li>• Network adequacy: Good</li>
                      <li>• Premium competitiveness: Fair</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Find Your Best Health Insurance Carrier</h2>
          <p className="text-lg mb-6 opacity-90">
            Don't choose based on name recognition alone. Get personalized carrier analysis based on your specific needs and location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/bradfordinformedguidance"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Free Carrier Analysis
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
      </article>
    </main>
  );
}