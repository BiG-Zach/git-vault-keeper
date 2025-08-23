import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, Shield, TrendingUp, Award, CheckCircle, Trophy, Target, Zap } from 'lucide-react';

const IndustryRecognitionSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const recognitions = [
    { 
      icon: Star, 
      title: "A+ Rating", 
      subtitle: "BBB Accredited",
      description: "Better Business Bureau's highest rating for trust and reliability",
      accent: "text-yellow-400"
    },
    { 
      icon: Star, 
      title: "5-Star Service", 
      subtitle: "Client Satisfaction",
      description: "Consistently rated 5-stars for personalized service and support",
      accent: "text-emerald-400"
    },
    { 
      icon: Shield, 
      title: "Licensed Professional", 
      subtitle: "Multi-State Authority",
      description: "Licensed insurance professional in FL, MI, NC with expanding coverage",
      accent: "text-blue-400"
    },
    { 
      icon: TrendingUp, 
      title: "Industry Leader", 
      subtitle: "Market Excellence",
      description: "Recognized leader in medically underwritten health insurance guidance",
      accent: "text-emerald-400"
    },
    { 
      icon: Award, 
      title: "Customer Choice Award", 
      subtitle: "2023 Winner",
      description: "Voted by clients for exceptional service and savings delivered",
      accent: "text-amber-400"
    },
    { 
      icon: Trophy, 
      title: "Top Insurance Partner", 
      subtitle: "2023 Recognition",
      description: "Recognized by leading carriers for partnership excellence",
      accent: "text-emerald-400"
    },
    { 
      icon: CheckCircle, 
      title: "Excellence in Service", 
      subtitle: "Verified Results",
      description: "Independently verified for consistent client satisfaction and outcomes",
      accent: "text-green-400"
    },
    { 
      icon: Zap, 
      title: "Rapid Response", 
      subtitle: "45-90 Min Average",
      description: "Industry-leading response time for quotes and policy solutions",
      accent: "text-cyan-400"
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
            <Trophy className="w-4 h-4" />
            <span>Industry Recognition</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-luxury-serif">
            Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Authority</span>
          </h2>
          
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is recognized across the industry, from client satisfaction to professional achievements.
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