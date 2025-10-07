import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { BRAND } from '../../lib/brand';

const faqs = [
  {
    question: "What is a PPO network and how does it benefit me?",
    answer: "A PPO (Preferred Provider Organization) network gives you the flexibility to see any healthcare provider, but offers significant cost savings when you choose in-network providers. You do not need referrals to see specialists, and you have access to a vast network of doctors, hospitals, and healthcare facilities across Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas."
  },
  {
    question: "Can I keep my current doctor with these PPO networks?",
    answer: "Most likely, yes. Our PPO networks include over 1.3 million healthcare providers nationwide. Use the Find Your Doctor links on each network card above to verify if your current physician is in-network. We also verify your doctor's network status during your consultation so you feel confident before you enroll."
  },
  {
    question: "How do I choose between different PPO networks?",
    answer: "Each PPO network has unique strengths. Aetna and UnitedHealthcare offer the largest networks, Cigna focuses on wellness programs, First Health provides reliable nationwide coverage, MultiPlan offers cost-effective solutions, and Blue Cross Blue Shield has strong regional expertise. We compare your doctors, prescriptions, and budget to match you with the best fit in your state."
  },
  {
    question: "Why work with a multi-carrier broker instead of a single carrier agent?",
    answer: "As a multi-carrier broker, I compare 15+ A-rated carriers across Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas. You see every competitive option in one consultation without pressure from a single insurer, and you receive unbiased guidance tailored to your household's priorities."
  },
  {
    question: "How do you secure the best rate across all these carriers?",
    answer: "My Best Insurance Group partnership gives me direct underwriting access. I request simultaneous quotes, verify subsidy or employer credits, and negotiate exceptions when health history or budget needs extra attention. Every recommendation arrives with a transparent side-by-side comparison."
  },
  {
    question: "What's the difference between your carriers?",
    answer: "Our carriers specialize in different areas: Allstate Health and UnitedHealthcare excel in comprehensive health coverage, Mutual of Omaha and Americo focus on life insurance solutions, while Aflac provides supplemental benefits. All carriers are A-rated or higher by AM Best, ensuring financial stability and reliable claim payments."
  },
  {
    question: "What does the Best Insurance Group partnership mean for me?",
    answer: "It unlocks enterprise-level resources normally reserved for large agencies - priority underwriters, exclusive carrier programs, and escalation paths that keep approvals and claims moving quickly in every state we serve."
  },
  {
    question: "Do you serve all six states you are licensed in?",
    answer: "Absolutely. We are licensed and bonded to support clients in Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas. Each consultation includes state-specific carrier guidance, compliance updates, and virtual support tailored to where you live."
  },
  {
    question: "What's the difference between working with a broker vs. buying direct from insurance companies?",
    answer: "When you work with me as your broker, you get access to multiple carriers and can compare options side-by-side without bias. Insurance companies only show you their products. I provide ongoing support for claims, renewals, and changes at no extra cost - my compensation comes from the carriers, not your pocket. Plus, with my Best Insurance Group partnership, I often have access to exclusive plans and faster underwriting that aren't available to the public."
  },
  {
    question: "How do you ensure I get the best rate available?",
    answer: "I have access to 15+ A-rated carriers through my Best Insurance Group partnership, which means I can compare rates across the entire market, not just one company. I also verify subsidy eligibility for ACA plans and check for any available discounts or wellness program benefits. My 8 years of experience helps me identify the best value - sometimes the lowest premium isn't actually the best deal when you factor in deductibles, networks, and coverage."
  },
  {
    question: "What if I need to file a claim - how does that work with a broker?",
    answer: "This is where working with a broker really pays off. I act as your advocate throughout the claims process. While you'll still file claims directly with your insurance carrier, I help resolve any issues that arise, understand claim denials, and ensure you're getting the benefits you're entitled to. I've helped clients navigate everything from routine claim questions to complex appeals across all 6 states I serve."
  },
  {
    question: "How does coverage work when I travel to other states?",
    answer: "Most PPO networks I recommend provide nationwide coverage, which is perfect for travel. Emergency care is always covered regardless of location. For routine care while traveling, I ensure your plan includes out-of-network benefits or has reciprocal agreements with providers in other states. Since I'm licensed in FL, GA, SC, TN, AL, and TX, I can help coordinate coverage if you're moving between these states."
  },
  {
    question: "What happens if I need to make changes to my plan?",
    answer: "I handle all plan changes for you - whether it's adding family members during special enrollment periods, updating your address if you move, or switching plans during open enrollment. Changes outside of open enrollment require qualifying life events, and I help you understand what qualifies and ensure you don't lose coverage during transitions."
  },
  {
    question: "Do I pay extra fees for broker services?",
    answer: "No, my services are completely free to you. I'm compensated directly by the insurance carriers when you enroll, so there are no broker fees, enrollment fees, or service charges. You pay the same premium whether you buy direct from the carrier or work with me - but with me, you get ongoing support, multiple carrier access, and advocacy at no additional cost."
  },
  {
    question: "How quickly can I get coverage if I need it urgently?",
    answer: "For qualifying urgent situations, I can often get same-day coverage decisions through my Best Insurance Group partnership. Most applications are processed within 24-48 hours. For immediate needs like job loss or birth of a child, I help you understand your options including COBRA, short-term plans, or special enrollment periods. I prioritize urgent cases and provide same-day enrollment assistance when time is critical."
  },
  {
    question: "What if my doctor isn't in the network I choose?",
    answer: "Before you enroll, I verify your current doctors are in-network using the most current provider directories. If your doctor isn't included, I help you find comparable specialists in the network or discuss out-of-network benefits if keeping your current doctor is essential. I also monitor for network changes throughout the year and alert you to any updates that might affect your care."
  }
];

export default function PremiumCarriersFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dark luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />
        {/* Gradient accents */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-emerald-500/20 rounded-full px-6 py-3 mb-8">
            <HelpCircle className="h-6 w-6 text-emerald-400" />
            <span className="text-emerald-300 font-semibold">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to Know About
            <span className="block gradient-text-luxury">Our Networks & Carriers</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Get answers to common questions about PPO networks, insurance carriers, and our services across FL, GA, SC, TN, AL, and TX.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="group"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group-hover:border-emerald-400/30 transition-colors duration-300">
                <button
                  className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300 pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-6 w-6 text-slate-400 group-hover:text-emerald-400 transition-colors duration-300" />
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? undefined : { height: 'auto', opacity: 1 }}
                      exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />
                        <p className="text-slate-300 leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div 
          className="text-center mt-16 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our licensed brokers are here to help you navigate your options and find the perfect coverage for your needs.
          </p>
          
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-0"
          >
            <a href={BRAND.phoneTel}>
              <Phone className="h-5 w-5 mr-3" />
              Call {BRAND.phoneHuman}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

