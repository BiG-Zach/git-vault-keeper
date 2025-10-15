import { BookOpen, Clock, CheckCircle2, FileText, MessageCircle, Shield, Calendar, Phone, Users, DollarSign, Heart, Briefcase, HelpCircle } from 'lucide-react';

export default function ConsultationGuideSection() {
  return (
    <section className="section bg-white py-16 md:py-20">
      <div className="container-default">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-6 py-3 mb-8">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-700 font-bold text-sm">CONSULTATION GUIDE</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What to Expect When You Contact Me
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            After 8 years of guiding families through insurance decisions, here's exactly what happens when you reach out and how I ensure you get the guidance you need.
          </p>
        </div>

        {/* Contact Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Your Consultation Journey</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1: First 24 Hours */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
                <div>
                  <Clock className="w-6 h-6 text-emerald-600 mb-1" />
                  <h4 className="text-lg font-bold text-slate-900">First 24 Hours</h4>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Personal response from me (not an automated system)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Initial assessment of your situation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Confirmation of next steps and timeline</span>
                </li>
              </ul>
            </div>

            {/* Step 2: Consultation Scheduling */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
                <div>
                  <Calendar className="w-6 h-6 text-blue-600 mb-1" />
                  <h4 className="text-lg font-bold text-slate-900">Scheduling</h4>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Flexible timing that works with your schedule</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Evening and weekend slots available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Preparation guidance sent before meeting</span>
                </li>
              </ul>
            </div>

            {/* Step 3: Your Meeting */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
                <div>
                  <MessageCircle className="w-6 h-6 text-purple-600 mb-1" />
                  <h4 className="text-lg font-bold text-slate-900">Your Meeting</h4>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive coverage review and recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Typical duration: 30-45 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Written summary and action plan provided</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Consultation Preparation Checklist */}
        <div className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Come Prepared (Optional but Helpful)</h3>
          <p className="text-slate-600 mb-8">Having this information ready helps me provide more accurate recommendations, but don't worry if you don't have everything – we'll work with what you have.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Current Coverage */}
            <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Current Insurance Policies</h4>
                <p className="text-sm text-slate-600">Policy numbers, coverage amounts, and premium costs (if you have existing coverage)</p>
              </div>
            </div>

            {/* Family Details */}
            <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Family or Business Details</h4>
                <p className="text-sm text-slate-600">Number of dependents, ages, and any special circumstances to consider</p>
              </div>
            </div>

            {/* Budget */}
            <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Budget Considerations</h4>
                <p className="text-sm text-slate-600">Approximate monthly budget or current premium costs you're comfortable with</p>
              </div>
            </div>

            {/* Health Considerations */}
            <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Health Considerations</h4>
                <p className="text-sm text-slate-600">Any pre-existing conditions or medications (kept confidential)</p>
              </div>
            </div>

            {/* Questions */}
            <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Your Questions</h4>
                <p className="text-sm text-slate-600">List of specific concerns or questions you'd like addressed</p>
              </div>
            </div>

            {/* Employment Info */}
            <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Employment Information</h4>
                <p className="text-sm text-slate-600">Self-employed, W-2 employee, or business owner (affects available options)</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Common Questions Before Contacting</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold text-lg text-slate-900 mb-3 flex items-start gap-3">
                <span className="text-emerald-600 flex-shrink-0">Q:</span>
                <span>Do I need to commit to anything when I call?</span>
              </h4>
              <p className="text-slate-600 ml-8">
                <span className="font-semibold text-slate-900">Absolutely not.</span> Our first conversation is purely educational. I'll explain your options, answer your questions, and provide recommendations. You're under zero pressure to make any decisions during or after our call. Many clients take weeks to decide, and that's perfectly fine.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold text-lg text-slate-900 mb-3 flex items-start gap-3">
                <span className="text-blue-600 flex-shrink-0">Q:</span>
                <span>What information will you need from me?</span>
              </h4>
              <p className="text-slate-600 ml-8">
                <span className="font-semibold text-slate-900">Just the basics to start.</span> Your age, location, family size, and general health status. I don't need detailed medical records or financial documents for our initial conversation. We'll only dive deeper if you decide to move forward with an application.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold text-lg text-slate-900 mb-3 flex items-start gap-3">
                <span className="text-purple-600 flex-shrink-0">Q:</span>
                <span>How long does a consultation typically take?</span>
              </h4>
              <p className="text-slate-600 ml-8">
                <span className="font-semibold text-slate-900">Usually 30-45 minutes.</span> Quick questions can be answered in 10-15 minutes. Complex situations (multiple family members, business coverage, etc.) might take the full 45 minutes. I'll never rush you – we'll take the time you need.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold text-lg text-slate-900 mb-3 flex items-start gap-3">
                <span className="text-orange-600 flex-shrink-0">Q:</span>
                <span>What if I'm not sure what type of insurance I need?</span>
              </h4>
              <p className="text-slate-600 ml-8">
                <span className="font-semibold text-slate-900">That's exactly what I'm here for.</span> Most people aren't sure what they need – that's completely normal. I'll ask about your situation, goals, and concerns, then explain which types of coverage make sense for you and why. Education comes first.
              </p>
            </div>
          </div>
        </div>

        {/* Process Transparency Framework */}
        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">My No-Pressure Promise</h3>
          <p className="text-center text-slate-600 mb-10 max-w-3xl mx-auto">
            Transparency and trust are the foundation of how I work. Here's what you can always expect from me:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Transparency Point 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-lg text-slate-900 mb-3">Independent Broker Role</h4>
              <p className="text-slate-600 mb-4">
                I work for <span className="font-semibold text-slate-900">you</span>, not insurance companies. I'm not tied to any single carrier, which means I can shop multiple options to find the best fit for your situation.
              </p>
              <p className="text-sm text-slate-500 italic">
                I represent 15+ carriers and have no quotas or sales targets to meet.
              </p>
            </div>

            {/* Transparency Point 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg text-slate-900 mb-3">Recommendation Process</h4>
              <p className="text-slate-600 mb-4">
                My recommendations are based on <span className="font-semibold text-slate-900">your needs</span>, not commissions. I'll explain why I'm suggesting specific options and show you alternatives so you can make an informed decision.
              </p>
              <p className="text-sm text-slate-500 italic">
                I earn the same commission regardless of which carrier you choose.
              </p>
            </div>

            {/* Transparency Point 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-bold text-lg text-slate-900 mb-3">No-Pressure Policy</h4>
              <p className="text-slate-600 mb-4">
                Take your time to decide. I'm here when <span className="font-semibold text-slate-900">you're ready</span>. No aggressive follow-ups, no pressure tactics. If you need space to think, just let me know.
              </p>
              <p className="text-sm text-slate-500 italic">
                Many clients take 2-4 weeks to decide, and that's perfectly normal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}