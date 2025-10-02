import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { NumberedIcon } from './ui/CustomIcons';
import { trackEvent, GTM_EVENTS } from '../utils/gtm';
import Section from './layout/Section';

const steps = [
  {
    number: 1,
    title: "Assessment",
    description: "Evaluate coverage needs, budget parameters, and network preferences.",
  },
  {
    number: 2,
    title: "Analysis",
    description: "Compare available plans from A-rated carriers and PPO networks.",
  },
  {
    number: 3,
    title: "Enrollment",
    description: "Professional enrollment support and policy activation assistance.",
  },
];

export default function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();

  const handleCTAClick = () => {
    trackEvent(GTM_EVENTS.HOW_IT_WORKS_CTA_CLICK);
    window.location.href = '/quote';
  };

  return (
    <Section className="bg-slate-50" aria-labelledby="how-it-works-title">
      <div className="text-center mb-8 md:mb-10">
        <motion.h2
          id="how-it-works-title"
          className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 leading-tight mb-2 md:mb-3"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          Enrollment Process
        </motion.h2>
        <motion.p
          className="text-slate-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        >
          Three-step consultation and enrollment process with licensed insurance professionals.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Connecting line - hidden on mobile */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-200 z-0" />
        
        {/* Steps grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="text-center group"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ 
                duration: 0.45, 
                ease: "easeOut",
                delay: prefersReducedMotion ? 0 : index * 0.15 
              }}
            >
              {/* Numbered icon */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <motion.div
                    className="size-8 md:size-9 bg-emerald-600 text-white font-semibold rounded-full flex items-center justify-center group-hover:bg-emerald-700 transition-colors duration-300"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 240, damping: 22 }}
                  >
                    {step.number}
                  </motion.div>
                  {/* Connecting dots for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-emerald-300 to-emerald-200" />
                  )}
                </div>
              </div>

              {/* Step content */}
              <div className="bg-white rounded-2xl p-5 md:p-6 ring-1 ring-slate-200 group-hover:shadow-lg/20 group-hover:ring-slate-300 transition-all duration-300">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-900 transition-colors duration-300 leading-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
        className="text-center mt-10 md:mt-12"
      >
        <motion.button
          onClick={handleCTAClick}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl focus-ring-emerald"
          aria-label="Request consultation"
          whileHover={prefersReducedMotion ? {} : { scale: 1.01 }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
        >
          Request Consultation
        </motion.button>
        <p className="mt-4 text-sm text-slate-600">
          Licensed professionals • Multi-state coverage • Year-round enrollment
        </p>
      </motion.div>
    </Section>
  );
}

