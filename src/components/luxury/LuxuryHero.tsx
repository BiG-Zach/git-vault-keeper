import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Award, Clock, Users } from 'lucide-react';
import { BRAND } from '../../lib/brand';
import LuxuryHeroForm from './LuxuryHeroForm';

const LuxuryHero = () => {
  const prefersReducedMotion = useReducedMotion();

  const benefits = [
    { icon: Clock, text: "Average quotes in 45-90 minutes" },
    { icon: Shield, text: "Licensed & bonded professionals" },
    { icon: Award, text: "A+ rated carrier partners" },
    { icon: Users, text: "Dedicated personal guidance" }
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-family.webp"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        
      </div>


      <div className="relative z-10 overflow-hidden">
        {/* Enhanced Visual Masterpiece Container */}
        <div className="relative container mx-auto px-4 lg:px-6">
          {/* Floating Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-spin opacity-30" style={{ animationDuration: '20s' }}></div>
            <div className="absolute top-1/4 right-20 w-24 h-24 border border-teal-300/20 rounded-lg animate-spin opacity-40" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
            <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-tr from-teal-300/15 to-blue-300/15 rounded-xl animate-pulse delay-1000 transform rotate-12"></div>
          </div>
          
          {/* Premium Light Rays */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-white/30 via-transparent to-teal-300/30 transform rotate-12"></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-teal-300/30 via-transparent to-blue-300/30 transform -rotate-6"></div>
            <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-blue-300/20 via-transparent to-white/20 transform rotate-3"></div>
          </div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-1/5 left-1/6 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-teal-300 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute bottom-1/4 right-1/5 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-1500"></div>
            <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-teal-400 rounded-full animate-pulse delay-2500"></div>
          </div>
          
          {/* Enhanced Content Grid with Premium Backdrop */}
          <div className="relative backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-8 lg:p-12 shadow-2xl">
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-teal-300/5 pointer-events-none"></div>
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center relative z-10">
          {/* Left: Premium Content - Strategically positioned for optimal viewing */}
          <div className="text-white relative max-w-2xl lg:max-w-none">
            {/* Content container with optimal spacing and visual flow */}
            <div className="space-y-8 lg:space-y-10">
              
              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
              >
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight">
                  <span className="block font-luxury-serif mb-2">Private Health &</span>
                  <span className="block gradient-text-luxury font-luxury-serif mb-4">Life Guidance.</span>
                  <span className="block text-2xl lg:text-3xl xl:text-4xl font-normal text-white/90 mt-6">
                    Clear. Fast. Year-Round.
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="space-y-6"
              >
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl lg:max-w-xl">
                  Medically underwritten options with PPO networks. Expert guidance from licensed professionals who understand your unique needs.
                </p>

              </motion.div>

              {/* Additional mobile-specific trust elements */}
              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="lg:hidden pt-4"
              >
                <div className="flex flex-wrap gap-3">
                  {benefits.slice(2).map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-white/80 bg-white/5 rounded-lg px-3 py-2">
                      <benefit.icon className="w-4 h-4 text-emerald-400" />
                      <span>{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Premium Form */}
          <motion.div
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <LuxuryHeroForm />
          </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHero;