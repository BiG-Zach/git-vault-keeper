import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, Shield, Users, Clock, Star, CheckCircle } from 'lucide-react';

const authorityPoints = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Licensed & Bonded Professional",
    description: "FL License W347851 with full bonding protection"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "8+ Years Experience",
    description: "Serving families professionally since 2016"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "1,000+ Families Served",
    description: "Trusted advisor for Florida families"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Top-Rated Carriers Only",
    description: "I only recommend A-rated insurance companies"
  }
];

const credentials = [
  {
    icon: <Award className="w-8 h-8" />,
    label: "Licensed",
    value: "FL W347851",
    description: "Fully licensed & bonded"
  },
  {
    icon: <Star className="w-8 h-8" />,
    label: "5-Star",
    value: "Reviews",
    description: "Client satisfaction rating"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    label: "50+ Guides",
    value: "Published",
    description: "Expert articles & resources"
  }
];

export default function ExpertAuthoritySection() {
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-luxury-serif text-white mb-6">
            Professional Insurance Expertise You Can Trust
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Zach Bradford brings 8+ years of licensed experience helping families secure their financial future
          </p>
        </motion.div>

        {/* Authority points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {authorityPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : (index % 2 === 0 ? -20 : 20) }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: prefersReducedMotion ? 0 : index * 0.1 
              }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-blue-500/25 transition-shadow duration-300">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 font-luxury-serif">
                      {point.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials showcase */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeOut", 
                    delay: prefersReducedMotion ? 0 : 0.4 + (index * 0.1)
                  }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-blue-500/25 transition-shadow duration-300">
                      {credential.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white font-luxury-serif">
                    {credential.label}
                  </div>
                  <div className="text-xl font-semibold text-blue-300 mb-2">
                    {credential.value}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {credential.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Client testimonial quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 pt-8 border-t border-white/20"
            >
              <blockquote className="text-white text-lg font-luxury-serif italic max-w-2xl mx-auto">
                "Zach's expertise saved our family thousands on life insurance while ensuring we had the right coverage. His knowledge of the Florida market is unmatched."
              </blockquote>
              <div className="mt-4 text-slate-300 text-sm">
                — Sarah M., Tampa Bay Family
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}