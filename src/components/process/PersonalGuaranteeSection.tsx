import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Quote, Shield, Heart, Clock } from 'lucide-react';

const guarantees = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Education-First Promise",
    guarantee: "Every recommendation starts with education and zero sales pressure so you feel confident before you choose a plan."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Six-State Compliance Expertise",
    guarantee: "Licensed in FL, GA, SC, TN, AL, and TX with Best Insurance Group resources to navigate state-specific regulations and underwriting."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24-Hour Response Guarantee",
    guarantee: "Every question receives a personal response within one business day, including virtual consultations for every state we serve."
  }
];

export default function PersonalGuaranteeSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-transparent to-cyan-900/30" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Quote className="w-8 h-8" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-luxury-serif text-white mb-8">
            My Personal Guarantee to You
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-luxury-serif text-slate-200 leading-relaxed mb-8">
              "As your licensed broker, I stake my professional reputation on providing honest, transparent guidance that puts your family's needs first across every market we serve."
            </blockquote>
            <cite className="text-emerald-300 text-xl font-semibold">
              — Zach Bradford, Licensed Insurance Broker
            </cite>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {guarantees.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: prefersReducedMotion ? 0 : index * 0.2 
              }}
              className="group"
            >
              {/* Glass morphism card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-emerald-500/25 transition-shadow duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4 font-luxury-serif">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {item.guarantee}
                  </p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </motion.div>
          ))}
        </div>

        {/* Bottom signature */}
        <motion.div
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full px-10 py-6 text-white shadow-luxury">
            <div className="text-right">
              <div className="font-luxury-serif text-xl font-bold">Zach Bradford</div>
              <div className="text-emerald-200 text-sm">Licensed Insurance Broker</div>
              <div className="text-emerald-200 text-sm">NPN: 18181266</div>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}