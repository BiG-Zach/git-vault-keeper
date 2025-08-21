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

      {/* Enhanced Trust Badge - Upper Left Corner */}
      <motion.div
        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="absolute top-6 left-6 z-30"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg" />
            <Shield className="w-5 h-5 text-white drop-shadow-sm" />
          </div>
          <div className="text-white">
            <div className="text-sm font-semibold tracking-wide">Licensed Professional</div>
            <div className="text-xs text-white/80 font-medium">{BRAND.licensed} States</div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
          
          {/* Left: Premium Content */}
          <div className="text-white relative">
            {/* Professional Badge */}
            <div className="absolute -top-2 -right-2 lg:-right-8 z-20">
              <div className="relative">
                <img 
                  src="/about/portrait.jpg" 
                  alt="Zachary Bradford - Licensed Insurance Expert" 
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white/20 shadow-xl object-cover"
                />
                <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1.5 rounded-full shadow-lg">
                  <Shield className="w-3 h-3" />
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
                <span className="block font-luxury-serif">Private Health &</span>
                <span className="block gradient-text-luxury font-luxury-serif">Life Guidance.</span>
                <span className="block text-2xl lg:text-3xl xl:text-4xl font-normal mt-2 text-white/90">
                  Clear. Fast. Year-Round.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-xl"
            >
              Medically underwritten options with PPO networks. Expert guidance from licensed professionals who understand your unique needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href={BRAND.phoneTel}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 backdrop-blur-md transition-all duration-300"
                data-gtm={`${BRAND.gtm.call}_luxury_hero`}
              >
                {BRAND.phoneHuman}
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="grid grid-cols-2 gap-4 lg:hidden"
            >
              {benefits.slice(0, 2).map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/80">
                  <benefit.icon className="w-4 h-4 text-emerald-400" />
                  <span>{benefit.text}</span>
                </div>
              ))}
            </motion.div>
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

        {/* Bottom urgency ticker */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-12 lg:mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 px-6 py-4">
            <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Avg first options in 45–90 mins
              </span>
              <span className="hidden sm:block">•</span>
              <span className="hidden sm:inline">{BRAND.hours}</span>
              <span className="hidden md:block">•</span>
              <span className="hidden md:inline">No obligation quotes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryHero;