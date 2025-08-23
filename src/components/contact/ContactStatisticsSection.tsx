import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Shield, Users, Clock, Award } from "lucide-react";
import Section from "../layout/Section";
import { useParallax } from "../../lib/useParallax";

const stats = [
  {
    icon: <Shield className="w-8 h-8" />,
    number: "8+",
    label: "Years Licensed",
    description: "Trusted expertise since 2016"
  },
  {
    icon: <Users className="w-8 h-8" />,
    number: "1,000+",
    label: "Families Protected", 
    description: "Personal guidance provided"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    number: "<4hrs",
    label: "Response Time",
    description: "Personal reply guarantee"
  },
  {
    icon: <Award className="w-8 h-8" />,
    number: "3",
    label: "States Licensed",
    description: "FL, MI, NC coverage"
  }
];

export default function ContactStatisticsSection() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section className="relative bg-slate-900 overflow-hidden py-16 md:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-transparent rounded-full w-96 h-96 -top-48 -left-48"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-teal-500/15 to-transparent rounded-full w-96 h-96 -bottom-48 -right-48"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.15), transparent),
                           radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.1), transparent)`,
          backgroundSize: '80px 80px, 80px 80px'
        }}></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-luxury-serif font-bold text-white mb-6"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Thousands Trust Zach Bradford
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Proven track record of personal service and expertise you can count on
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={prefersReducedMotion ? {} : containerVariants}
          initial={prefersReducedMotion ? {} : "hidden"}
          whileInView={prefersReducedMotion ? {} : "visible"}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={prefersReducedMotion ? {} : itemVariants}
            >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-luxury-serif">
                    {stat.number}
                  </div>
                  
                  <div className="text-lg font-semibold text-slate-300 mb-1">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-slate-400">
                    {stat.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}