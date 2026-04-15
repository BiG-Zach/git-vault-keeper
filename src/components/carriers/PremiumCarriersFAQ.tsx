import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { BRAND } from '../../lib/brand';

const faqs = [
  { question: "What is a PPO network and how does it benefit me?", answer: "A PPO lets you see any licensed provider with no referrals needed, while delivering significant savings when you stay in-network. Our networks include 900K to 1.5M plus providers nationwide, so your doctors are almost always covered. We verify your specific physicians before you enroll." },
  { question: "Which PPO network is right for me?", answer: "It depends on your doctors, state, and budget. MultiPlan and First Health are the most flexible for self-funded and medically underwritten plans. UnitedHealthcare PPO is the largest national network. Aetna Open Choice is strong for ACA and private plans. Cigna PPO is unmatched for frequent travelers with global coverage. We run a side-by-side comparison in every consultation." },
  { question: "Can I keep my current doctor?", answer: "Most likely yes. Our networks collectively cover over 1.4 million providers. Use the Find Your Doctor links on each network card above to verify, or let us check during your consultation. We confirm every physician before you enroll so there are no surprises." },
  { question: "Why work with a multi-carrier broker instead of buying direct?", answer: "Direct carriers only show you their products. As an independent broker, I compare 10 carriers and 5 PPO networks simultaneously with no bias toward any one company. My compensation comes from carriers, not you, so you pay the same premium either way but get expert guidance, claims advocacy, and annual plan reviews at no extra cost." },
  { question: "What is the difference between your carriers?", answer: "UnitedHealthcare and Aetna lead in comprehensive health PPO coverage. Blue Cross Blue Shield has the strongest regional hospital relationships. Cigna excels for global and travel coverage. Mutual of Omaha and Americo are our top life insurance carriers. Aflac fills income gaps with supplemental benefits. Illinois Mutual and Philadelphia American specialize in life and medically underwritten health plans. SGIC offers budget-friendly gap coverage. We match the right carrier to your specific situation." },
  { question: "How do you secure the best rate?", answer: "Through our Best Insurance Group partnership, I request simultaneous quotes from all applicable carriers, verify subsidy or employer credits, and negotiate underwriting exceptions when needed. Every recommendation comes with a transparent side-by-side comparison showing lowest premium, lowest total cost, and best network clearly labeled." },
  { question: "What does the Best Insurance Group partnership mean for me?", answer: "It unlocks enterprise-level resources normally reserved for large agencies: priority underwriters, exclusive carrier programs, and escalation paths that keep approvals and claims moving quickly. This is how we deliver corporate-grade coverage to individuals and families." },
  { question: "How does coverage work when I travel to other states?", answer: "All PPO networks we recommend provide nationwide coverage. Emergency care is always covered regardless of location. For routine out-of-state care, we ensure your plan includes out-of-network benefits or reciprocal provider agreements. Since we are licensed in all 8 states, we can also rewrite your policy if you relocate with no need to find a new broker." },
{ question: "How quickly can I get coverage?", answer: "Most applications are processed within 24 to 48 hours. For qualifying urgent situations such as job loss, birth of a child, or loss of other coverage, we can often secure same-day decisions through our carrier relationships. We prioritize urgent cases and provide same-day enrollment assistance when time is critical." },
  { question: "Do I pay extra fees for your services?", answer: "Never. My services are completely free to you. I am compensated directly by the carriers upon enrollment. You pay the exact same premium whether you buy direct or work with me, but with me you get multi-carrier comparison, ongoing support, and claims advocacy included." }
];

export default function PremiumCarriersFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }} whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-3 bg-emerald-500/20 rounded-full px-6 py-3 mb-8">
            <HelpCircle className="h-6 w-6 text-emerald-400" />
            <span className="text-emerald-300 font-semibold">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Everything You Need to Know About<span className="block gradient-text-luxury">Our Networks and Carriers</span></h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Common questions about PPO networks, carriers, and coverage across all 8 licensed states.</p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group-hover:border-emerald-400/30 transition-colors duration-300">
                <button className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset" onClick={() => setOpenIndex(openIndex === index ? null : index)} aria-expanded={openIndex === index} type="button">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300 pr-4">{faq.question}</h3>
                    <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
                      <ChevronDown className="h-6 w-6 text-slate-400 group-hover:text-emerald-400 transition-colors duration-300" />
                    </motion.div>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div key={index} initial={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }} animate={shouldReduceMotion ? undefined : { height: 'auto', opacity: 1 }} exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <div className="px-8 pb-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />
<p className="text-slate-300 leading-relaxed text-base">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
        <motion.div className="text-center mt-16 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl" initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }} whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Our licensed brokers are here to help you navigate your options and find the perfect coverage for your needs.</p>
          <Button asChild size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg border-0">
            <a href={BRAND.phoneTel}><Phone className="h-5 w-5 mr-3" />Call {BRAND.phoneHuman}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}