import React, { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Calendar, BarChart3, Handshake, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  content: string;
  bulletPoints: string[];
  isLeft?: boolean;
}

function PremiumProcessStep({ number, icon, title, content, bulletPoints, isLeft = false }: StepProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : (isLeft ? -40 : 40) }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isLeft ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Step content */}
      <div className="flex-1 w-full">
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 lg:p-10 shadow-premium hover:shadow-luxury transition-all duration-500 group">
          {/* Header */}
          <div className={`flex items-center gap-6 mb-6 ${isLeft ? 'flex-row-reverse lg:flex-row' : ''}`}>
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center text-white shadow-lg group-hover:shadow-emerald-500/25 transition-shadow duration-300">
              {icon}
            </div>
            <div className={isLeft ? 'text-right lg:text-left' : ''}>
              <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-1">
                Step {number}
              </div>
              <h3 className="text-2xl lg:text-3xl font-luxury-serif text-slate-900 leading-tight">
                {title}
              </h3>
            </div>
          </div>
          
          {/* Content */}
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            {content}
          </p>
          
          {/* Expandable bullet points */}
          <div className="space-y-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-3 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-200"
            >
              <span>What's included</span>
              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-3 pt-4">
                    {bulletPoints.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          ease: "easeOut", 
                          delay: prefersReducedMotion ? 0 : index * 0.1 
                        }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Timeline connector - desktop only */}
      <div className="hidden lg:flex flex-col items-center flex-shrink-0">
        <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-lg" />
        {number < 4 && (
          <div className="w-0.5 h-24 bg-gradient-to-b from-emerald-500 to-emerald-300 mt-4" />
        )}
      </div>
    </motion.div>
  );
}

export default function PremiumProcessSteps() {
  const steps: Omit<StepProps, 'isLeft'>[] = [
    {
      number: 1,
      icon: <Calendar className="w-10 h-10" />,
      title: "Schedule Your Free Personal Consultation with Me",
      content: "I start with a no-obligation consultation to understand your unique needs, budget, and coverage goals. 24-hour response guarantee for all inquiries.",
      bulletPoints: [
        "24-hour response guarantee for all consultations",
        "Duration: 15-30 minutes with me personally",
        "No cost, no obligation",
        "Licensed broker in licensed states",
        "Evening and weekend appointments available"
      ]
    },
    {
      number: 2,
      icon: <BarChart3 className="w-10 h-10" />,
      title: "I Compare All Your Options Personally",
      content: "Using my Best Insurance Group partnership and relationships with 10 carriers and 6 PPO networks, I create your personalized comparison within 48 hours showing costs, benefits, and network coverage across all 6 licensed states.",
      bulletPoints: [
        "Access to 10 carriers and 6 PPO networks through Best Insurance Group partnership",
        "Multi-carrier comparison within 48 hours",
        "Transparent pricing - no hidden fees or enrollment costs",
        "State-specific carrier availability across all 6 licensed states",
        "I verify your doctors are covered in your state"
      ]
    },
    {
      number: 3,
      icon: <Handshake className="w-10 h-10" />,
      title: "Receive Professional Recommendations",
      content: "As your licensed broker with dual verification (TrustMyProducer + NIPR), I explain each option in plain English, helping you understand exactly what you're getting. No insurance jargon, no pressure - just my honest professional guidance backed by 8 years of experience.",
      bulletPoints: [
        "Dual verification: TrustMyProducer + NIPR credentials",
        "Licensed & bonded broker since 2017 (8 years experience)",
        "Multi-state expertise across licensed markets",
        "No pressure approach - transparent recommendations only",
        "Plain English explanations of all options"
      ]
    },
    {
      number: 4,
      icon: <CheckCircle className="w-10 h-10" />,
      title: "I Handle Same-Day Enrollment Assistance",
      content: "Once you choose your plan, I handle all the paperwork and enrollment details personally. Through my Best Insurance Group partnership, I get most approvals within 24 hours, with same-day enrollment assistance and coverage starting as soon as next day.",
      bulletPoints: [
        "Same-day enrollment assistance when requested",
        "24-hour approval turnaround through Best Insurance Group partnership",
        "I handle all your paperwork across all 6 states",
        "Direct carrier relationships streamline your enrollment",
        "Year-round advocacy and ongoing personal support"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(148 163 184) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-luxury-serif text-slate-900 mb-6">
            My Simple 4-Step Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Getting the right insurance shouldn't be complicated. Here's how I make it simple, fast, and stress-free.
          </p>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <PremiumProcessStep
              key={step.number}
              {...step}
              isLeft={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

