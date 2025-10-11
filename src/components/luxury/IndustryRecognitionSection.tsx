import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, Shield, TrendingUp, Award, CheckCircle, Trophy, Target, Zap } from 'lucide-react';

const IndustryRecognitionSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const recognitions = [
    { 
      icon: Shield, 
      title: "Independent Broker Advantage", 
      subtitle: "Best Insurance Group Partner",
      description: "Independent brokerage partnered with Best Insurance Group to combine enterprise carrier access with personal advocacy.",
      accent: "text-blue-400"
    },
    { 
      icon: Star, 
      title: "98% Client Satisfaction", 
      subtitle: "Proven Results",
      description: "Consistently rated 98% client satisfaction for exceptional service and measurable savings",
      accent: "text-emerald-400"
    },
    { 
      icon: Zap, 
      title: "24-Hour Response", 
      subtitle: "Speed Guarantee",
      description: "Guaranteed 24-hour response for quotes and policy solutions - faster than industry standard",
      accent: "text-cyan-400"
    },
    { 
      icon: TrendingUp, 
      title: "Strategic Coverage Architect", 
      subtitle: "Enterprise-Level Guidance",
      description: "Licensed independent broker delivering layered coverage strategies with measurable premium savings.",
      accent: "text-emerald-400"
    },
    { 
      icon: Trophy, 
      title: "Top Insurance Partner", 
      subtitle: "Carrier Recognition",
      description: "Recognized by A+ rated carriers for partnership excellence and client results",
      accent: "text-amber-400"
    },
    { 
      icon: Target, 
      title: "Proven Results", 
      subtitle: "Client Success",
      description: "Track record of helping families save average $2,400 annually with premium coverage",
      accent: "text-emerald-400"
    },
    { 
      icon: CheckCircle, 
      title: "Independent Broker Credentials", 
      subtitle: "Licensed Across Six States",
      description: "Serving FL, MI, NC, AZ, TX, and GA with transparent guidance and carrier-exclusive solutions.",
      accent: "text-green-400"
    },
    { 
      icon: Award, 
      title: "Client Choice Winner", 
      subtitle: "Verified Excellence",
      description: "Client-voted recognition for exceptional service delivery and measurable results",
      accent: "text-yellow-400"
    }
  ];

  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Effects - Matching AuthoritySection */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.1)_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium mb-6 backdrop-blur-sm border border-emerald-500/20">
            <Shield className="w-4 h-4" />
            <span>Independent Broker</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-luxury-serif">
            Independent Broker - <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Enterprise Resources</span>
          </h2>
          
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            My expertise is recognized nationwide, delivering exceptional outcomes from personalized service to measurable client success.
          </p>
        </motion.div>

        {/* Recognition Grid */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {recognitions.map((recognition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300`}>
                    <recognition.icon className={`w-8 h-8 ${recognition.accent}`} />
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                    {recognition.title}
                  </h3>
                  
                  <p className="text-emerald-300 text-sm font-semibold mb-3">
                    {recognition.subtitle}
                  </p>
                  
                  <p className="text-white/70 text-sm leading-relaxed">
                    {recognition.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default IndustryRecognitionSection;