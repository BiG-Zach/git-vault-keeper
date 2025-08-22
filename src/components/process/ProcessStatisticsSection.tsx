import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, Clock, MapPin, Shield } from 'lucide-react';

const statistics = [
  {
    icon: <Award className="w-8 h-8" />,
    value: "8+ Years",
    label: "Licensed Experience",
    description: "Serving families since 2016"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    value: "3 States",
    label: "Coverage Area",
    description: "FL, MI, NC expanding nationwide"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: "48-Hour",
    label: "Average Process",
    description: "Most clients approved in 2 days"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    value: "Next-Day",
    label: "Coverage Available",
    description: "Start protection immediately"
  }
];

export default function ProcessStatisticsSection() {
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
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-cyan-900/20" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-luxury-serif text-white mb-6">
            Why Choose Bradford Informed Guidance
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Proven expertise, fast results, and personalized service you can trust
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: prefersReducedMotion ? 0 : index * 0.1 
              }}
              className="relative group"
            >
              {/* Glass morphism card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-emerald-500/25 transition-shadow duration-300">
                    {stat.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2 font-luxury-serif">
                    {stat.value}
                  </div>
                  <div className="text-emerald-300 font-semibold mb-3 text-lg">
                    {stat.label}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full px-8 py-4 text-white font-semibold shadow-luxury">
            <Shield className="w-5 h-5" />
            <span>Licensed & Bonded Professional</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}