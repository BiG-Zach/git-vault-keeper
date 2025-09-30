import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { trackEvent, GTM_EVENTS } from '../utils/gtm';

type QA = { q: string; a: string };

const ITEMS: QA[] = [
  { q: 'Which states are currently served?', a: 'Licensed in Florida, Michigan, North Carolina, Arizona, Texas, and Georgia.' },
  { q: 'Which PPO networks are available?', a: 'Aetna, Cigna, First Health, Multiplan, and United (availability varies by plan and state).' },
  { q: 'What distinguishes Bradford Informed Guidance?', a: 'A-rated carrier partnerships, year-round enrollment options, transparent pricing structure, and licensed professional guidance.' },
  { q: 'Is year-round enrollment available?', a: 'Yes. Private health insurance plans offer year-round enrollment with coverage effective the following month, independent of ACA marketplace enrollment periods.' },
  { q: 'What coverage types are offered?', a: 'Individual, family, and small business health insurance. Life insurance solutions for estate planning and income protection.' },
  { q: 'What is the consultation cost?', a: 'No-cost consultation services. Licensed broker compensation provided by carrier partnerships.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleCTAClick = () => {
    trackEvent(GTM_EVENTS.FAQ_CTA_CLICK);
    window.open('https://calendly.com/bradfordinformedguidance', '_blank');
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white" aria-labelledby="faq-title">
      <div className="text-center mb-8 md:mb-10">
        <motion.h2
          id="faq-title"
          className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 leading-tight mb-2 md:mb-3"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          Common Questions
        </motion.h2>
        <motion.p
          className="text-slate-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        >
          Coverage options, licensing, and enrollment process information.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {ITEMS.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm hover:shadow-md/20 hover:ring-slate-300 transition-all duration-200"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ 
                duration: 0.45, 
                ease: "easeOut",
                delay: prefersReducedMotion ? 0 : index * 0.1 
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-start justify-between gap-4 focus-ring-emerald rounded-2xl"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-slate-900 pr-4 leading-tight">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-slate-400 text-xl font-light flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  ›
                </motion.span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.3, ease: "easeInOut" },
                      opacity: { duration: 0.2, delay: openIndex === index ? 0.1 : 0 }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-slate-600 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA below FAQs */}
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
        className="text-center mt-10 md:mt-12"
      >
        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto ring-1 ring-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 leading-tight mb-3">
            Additional Questions?
          </h3>
          <p className="text-slate-600 mb-6">
            Licensed insurance professionals available for consultation.
          </p>
          <motion.button
            onClick={handleCTAClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl focus-ring-emerald"
            aria-label="Schedule free consultation to get answers"
            whileHover={prefersReducedMotion ? {} : { scale: 1.01 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
          >
            Schedule Consultation
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}