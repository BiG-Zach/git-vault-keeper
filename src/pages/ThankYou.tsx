import { useEffect } from 'react';
import { Clock, Phone, Mail, Shield, CheckCircle, Calendar, Award } from 'lucide-react';
import { COMPANY } from '../config/company';
import SEO from '../components/SEO';

export default function ThankYouPage() {
  useEffect(() => {
    // Track page view via Plausible
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('cta_contact_submit', {
        props: { page_title: 'Thank You - Quote Submitted' },
      });
    }
  }, []);

  return (
    <>
      <SEO
        title="Thank You — Quote Submitted"
        description="We received your insurance quote request and will follow up within one business day with personalized coverage options."
        path="/thank-you"
        noindex
      />
      <div className="min-h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-400" />
          </div>
          
          <h1 className="text-5xl font-luxury-serif font-bold bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent mb-4">
            Your Quote Request Has Been Received
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Thank you for trusting Bradford Informed Guidance with your family's protection. 
            Here's what happens next:
          </p>
        </div>

        {/* What Happens Next Timeline */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 p-8 mb-12">
          <h2 className="text-3xl font-luxury-serif font-bold text-white text-center mb-8">
            What Happens Next
          </h2>
          
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-start gap-6 p-6 rounded-xl border border-sky-500/20 bg-sky-500/5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-jade-600 to-brand-jade-500 rounded-lg flex items-center justify-center shadow-lg shadow-brand-jade-500/20">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Within 2 Hours
                </h3>
                <p className="text-slate-300">
                  I'll personally review your information and research the best options
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6 p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-jade-600 to-brand-jade-500 rounded-lg flex items-center justify-center shadow-lg shadow-brand-jade-500/20">
                  <Phone className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Within 24 Hours
                </h3>
                <p className="text-slate-300">
                  Expect my call with 3-5 tailored coverage options and pricing
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6 p-6 rounded-xl border border-purple-500/20 bg-purple-500/5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-jade-600 to-brand-jade-500 rounded-lg flex items-center justify-center shadow-lg shadow-brand-jade-500/20">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Same Day Email
                </h3>
                <p className="text-slate-300">
                  Receive your personalized quote summary with detailed comparisons
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-6 p-6 rounded-xl border border-amber-500/20 bg-amber-500/5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-gold-500 to-brand-gold-400 rounded-lg flex items-center justify-center shadow-lg shadow-brand-gold-500/20">
                  <Award className="w-6 h-6 text-slate-900" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Zero Pressure
                </h3>
                <p className="text-slate-300">
                  We only move forward when you're completely confident in your choice
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Reassurance Block */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-white/10 p-8 mb-12">
          <div className="text-center mb-6">
            <Shield className="w-12 h-12 text-brand-jade-400 mx-auto mb-4" />
            <h2 className="text-2xl font-luxury-serif font-bold text-white">
              Your Information is Safe & Secure
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-slate-200 font-medium">Licensed professional review only</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-slate-200 font-medium">No spam or unwanted calls</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-slate-200 font-medium">SSL encrypted and HIPAA compliant</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-slate-200 font-medium">Exclusive A+ rated carrier access</span>
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="bg-gradient-to-r from-brand-jade-600 to-brand-jade-500 text-white rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-luxury-serif font-bold text-slate-900 mb-6">Need Immediate Assistance?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-3 text-slate-900/70" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Call/Text</h3>
                <a 
                  href={COMPANY.phoneHref}
                  className="text-xl font-bold text-slate-900 hover:text-slate-700 transition-colors"
                >
                  (689) 325-6570
                </a>
              </div>
              
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-3 text-slate-900/70" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                <a 
                  href={COMPANY.emailHref}
                  className="text-lg text-slate-900 hover:text-slate-700 transition-colors break-all"
                >
                  zbradford@bradfordinformedguidance.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-slate-900/70">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">{COMPANY.hours}</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
