import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Award, Clock, Users } from 'lucide-react';
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
      {/* Premium Background with Vignette */}
      <div className="absolute inset-0">
        <img
          src="/assets/backgrounds/happy-family-beach-hero.webp"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Subtle radial gradient overlay for natural vignetting */}
        <div className="absolute inset-0 bg-gradient-radial from-black/10 via-black/20 to-black/40"></div>
      </div>


      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-[1.5fr_0.5fr] gap-8 lg:gap-12 items-center">
          
          {/* Left: Premium Content - Strategically positioned for optimal viewing */}
          <div className="text-white relative max-w-2xl lg:max-w-none">
            {/* Content container with optimal spacing and visual flow */}
            <div className="space-y-8 lg:space-y-10">
              
              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="space-y-6"
              >
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-luxury-serif font-bold leading-[0.95] tracking-[-0.02em]">
                  <span className="block mb-4 bg-gradient-to-br from-white to-gray-50 bg-clip-text text-transparent">Independent Broker with</span>
                  <span className="block gradient-text-luxury font-luxury-serif">Enterprise Resources</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="space-y-6"
              >
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-luxury-sans font-normal text-white/95 leading-relaxed">
                  Best Insurance Group Partner | Licensed Expert | Exclusive Carrier Access
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="space-y-6"
              >
                <p className="text-lg lg:text-xl font-luxury-sans text-white/90 leading-relaxed max-w-2xl lg:max-w-xl antialiased">
                  Partnering with Best Insurance Group since 2020 to deliver exclusive carrier access and enterprise resources with personal, local guidance. Serving families in FL, MI, NC, AZ, TX, and GA with transparent recommendations and no-pressure consultations.
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
    </section>
  );
};

export default LuxuryHero;

