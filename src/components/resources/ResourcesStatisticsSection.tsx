import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, Users, Clock, Award, Shield } from 'lucide-react';

const statistics = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    value: "50+",
    label: "Expert Guides",
    description: "Comprehensive insurance guides published"
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "1,000+",
    label: "Families Helped",
    description: "Families served since 2016"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: "8+ Years",
    label: "Licensed Experience",
    description: "Professional insurance expertise"
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "16",
    label: "Expert Articles",
    description: "In-depth analysis available now"
  }
];

export default function ResourcesStatisticsSection() {
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-luxury-serif text-white mb-6">
            Your Trusted Insurance Knowledge Authority
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Delivering professional expertise and comprehensive guidance since 2016
          </p>
        </motion.div>

        {/* Statistics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: prefersReducedMotion ? 0 : index * 0.1 
              }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 h-full text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-blue-500/25 transition-shadow duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white font-luxury-serif mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-blue-300 mb-2">
                  {stat.label}
                </div>
                <div className="text-slate-400 text-sm leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional credentials badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full px-8 py-4 text-white font-semibold shadow-lg">
            <Shield className="w-6 h-6" />
            <span className="text-lg">Licensed FL Broker W347851 | Since 2016</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}