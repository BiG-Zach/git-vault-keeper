import { useEffect } from 'react';
import { Clock, Phone, Mail, Shield, CheckCircle, Calendar, Award } from 'lucide-react';
import SEO from '../components/SEO';

export default function ThankYouPage() {
  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Thank You - Quote Submitted',
        page_location: window.location.href,
      });
    }
  }, []);

  return (
    <>
      <SEO
        title="Thank You | Bradford Informed Guidance"
        description="We received your insurance quote request. A licensed expert from Bradford Informed Guidance will reach out soon with tailored coverage options."
        path="/thank-you"
        noindex
      />

        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <div className="max-w-4xl mx-auto px-4 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>

              <h1 className="text-5xl font-bold bg-gradient-to-r from-green-700 to-emerald-800 bg-clip-text text-transparent mb-4">
                Your Quote Request Has Been Received!
              </h1>

              <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
                Thank you for trusting Bradford Informed Guidance with your family's protection.
                Here's what happens next:
              </p>
            </div>

        {/* What Happens Next Timeline */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
            What Happens Next:
          </h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start gap-6 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  ⏰ Within 2 Hours
                </h3>
                <p className="text-blue-700">
                  I'll personally review your information and research the best options
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6 p-6 bg-green-50 rounded-xl border border-green-100">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  📞 Within 24 Hours
                </h3>
                <p className="text-green-700">
                  Expect my call with 3-5 tailored coverage options and pricing
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6 p-6 bg-purple-50 rounded-xl border border-purple-100">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-800 mb-2">
                  📋 Same Day
                </h3>
                <p className="text-purple-700">
                  Receive your personalized quote summary via email
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-6 p-6 bg-amber-50 rounded-xl border border-amber-100">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">
                  🛡️ Your Choice
                </h3>
                <p className="text-amber-700">
                  Zero pressure - we'll only move forward when you're completely confident
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Reassurance Block */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-12">
          <div className="text-center mb-6">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-800">
              Your Information is Safe & Secure
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-green-800 font-medium">Licensed professional review only</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-green-800 font-medium">No spam or unwanted calls</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-green-800 font-medium">SSL encrypted and HIPAA compliant</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-green-800 font-medium">Exclusive A+ rated carrier access</span>
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Need Immediate Assistance?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-3 opacity-90" />
                <h3 className="text-lg font-semibold mb-2">Call/Text</h3>
                <a 
                  href="tel:+16893256570" 
                  className="text-xl font-bold hover:text-blue-200 transition-colors"
                >
                  (689) 325-6570
                </a>
              </div>
              
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-3 opacity-90" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:zbradford@bradfordinformedguidance.com" 
                  className="text-lg hover:text-blue-200 transition-colors break-all"
                >
                  zbradford@bradfordinformedguidance.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Hours: Mon - Sun, 8:00 AM - 8:00 PM EST</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}