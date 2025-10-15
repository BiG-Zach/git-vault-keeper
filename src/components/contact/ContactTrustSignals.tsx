import { Users, ShieldCheck, Eye, Clock, Star, TrendingUp } from 'lucide-react';

export default function ContactTrustSignals() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Trust Signal 1: Partnership */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-800">Enterprise Resources</h3>
              <p className="text-slate-600 text-sm mb-3">
                Partnering with Best Insurance Group since 2020
              </p>
              <div className="text-2xl font-bold text-emerald-600">500+</div>
              <div className="text-xs text-slate-500">Families Helped</div>
            </div>

            {/* Trust Signal 2: Verification */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-800">Dual Verification</h3>
              <p className="text-slate-600 text-sm mb-3">
                TrustMyProducer + NIPR independently verified
              </p>
              <div className="text-2xl font-bold text-blue-600">98%</div>
              <div className="text-xs text-slate-500">Client Satisfaction</div>
            </div>

            {/* Trust Signal 3: Transparency */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-800">No Pressure</h3>
              <p className="text-slate-600 text-sm mb-3">
                Transparent recommendations, no aggressive tactics
              </p>
              <div className="text-2xl font-bold text-purple-600">30-45</div>
              <div className="text-xs text-slate-500">Minute Consultations</div>
            </div>

          </div>

          {/* Testimonial Snippets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-emerald-500">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-3">
                "Zero pressure, purely educational. Zach took the time to explain everything and let us make the decision when we were ready."
              </p>
              <p className="text-sm font-semibold text-slate-900">— Sarah P., Tampa Bay</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-3">
                "The consultation was incredibly thorough. I learned more in 45 minutes than I had in years of trying to figure this out myself."
              </p>
              <p className="text-sm font-semibold text-slate-900">— Michael B., Georgia</p>
            </div>
          </div>

          {/* Additional Stats Bar */}
          <div className="mt-8 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <div className="text-2xl font-bold text-slate-900">24hr</div>
                </div>
                <div className="text-sm text-slate-600">Response Time</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <div className="text-2xl font-bold text-slate-900">6</div>
                </div>
                <div className="text-sm text-slate-600">Licensed States</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  <div className="text-2xl font-bold text-slate-900">5+</div>
                </div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-amber-500" />
                  <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                </div>
                <div className="text-sm text-slate-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
