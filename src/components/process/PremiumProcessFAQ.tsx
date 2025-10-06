import React, { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Calendar, Phone } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does your process take?",
    answer: "Most clients get their perfect plan within 48 hours, with coverage starting next day when needed. My streamlined process works seamlessly across every state I serve."
  },
  {
    question: "Can you help if I already have insurance?",
    answer: "Absolutely - I can review your current coverage and find better options during open enrollment or qualifying life events. Many clients save money while getting better coverage."
  },
  {
    question: "Will you be available if I need help later?",
    answer: "Yes - I provide ongoing personal support for all my clients throughout their coverage. You will have my direct contact information and I respond within 4 business hours."
  },
  {
    question: "How do you get paid? Are there any fees for me?",
    answer: "I'm paid directly by the insurance carriers, so my services are completely free to you. There are no fees, no markups, and no hidden costs - you pay the same rates as buying direct."
  },
  {
    question: "What if I need to make changes to my plan later?",
    answer: "I handle all plan changes, additions, and updates for my clients. Whether it's adding family members, changing coverage levels, or switching plans during open enrollment, I'm here to help."
  },
  {
    question: "Do you work with all the major insurance companies?",
    answer: "Yes, I have relationships with all major carriers including Aetna, Cigna, UnitedHealthcare, Blue Cross Blue Shield, and more. This gives you access to the widest range of options and networks."
  }
];

function FAQAccordionItem({ faq, index }: { faq: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.5, 
        ease: "easeOut", 
        delay: prefersReducedMotion ? 0 : index * 0.1 
      }}
      className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 text-left flex items-center justify-between group"
      >
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors duration-200 pr-4">
          {faq.question}
        </h3>
        <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-200">
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-emerald-600" />
          ) : (
            <ChevronDown className="w-4 h-4 text-emerald-600" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-6">
              <div className="w-full h-px bg-gradient-to-r from-emerald-200 to-transparent mb-4" />
              <p className="text-slate-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PremiumProcessFAQ() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(148 163 184) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-luxury-serif text-slate-900 mb-6">
            Common Questions About Working with Me
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Here are the most frequently asked questions from clients about my process and services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <FAQAccordionItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-10 lg:p-12 text-white shadow-luxury">
            <h3 className="text-3xl font-luxury-serif font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-emerald-100 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Most clients get their perfect plan within 48 hours across the six states we serve. Let's find yours with a free, no-pressure consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://calendly.com/bradfordinformedguidance"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Schedule Your No-Pressure Consultation
              </motion.a>
              
              <motion.a
                href="tel:(689) 325-6570"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-400 transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Call Now: (689) 325-6570
              </motion.a>
            </div>
            
            <p className="text-emerald-200 text-sm mt-4">
              Available Mon–Sun, 8:00 AM – 8:00 PM EST
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
