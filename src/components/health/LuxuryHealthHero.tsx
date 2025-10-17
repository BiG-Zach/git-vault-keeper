import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, Zap, Shield, Star, Check, Clock, Users, HeartPulse } from 'lucide-react';

/**
 * Luxury Health Insurance Hero Section
 * 
 * Premium conversion-optimized design with:
 * - Dynamic gradient background with animated orbs
 * - Professional dot pattern texture
 * - Large luxury typography with gradient effects
 * - Trust indicators with premium icons
 * - Two-column value proposition layout
 * - Prominent animated CTA
 */

const LuxuryHealthHero = React.memo(function LuxuryHealthHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Professional Dot Pattern - Premium Texture */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      {/* Dynamic Gradient Orbs - Animated Premium Feel */}
      <motion.div
        className="absolute top-20 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-[32rem] h-[32rem] bg-blue-500/15 rounded-full blur-3xl"
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Premium Headline with Luxury Typography */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto mb-12"
        >
          <h1
            id="hero-headline"
            className="font-luxury-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
          >
            Affordable Health Insurance{' '}
            <span className="block mt-3 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent">
              Without Compromise
            </span>
          </h1>

          {/* Premium Subheadline */}
          <p className="font-luxury-sans text-xl sm:text-2xl lg:text-3xl text-white/90 font-normal leading-relaxed max-w-4xl mx-auto">
            Licensed experts delivering premium PPO networks and A+ carriers across 6 states—with zero enrollment fees
          </p>
        </motion.div>

        {/* Trust Bar with Premium Icons */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-16"
        >
          <div
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto"
            role="list"
            aria-label="Trust indicators"
          >
            {[
              { icon: Award, text: '15+ A-Rated Carriers' },
              { icon: Clock, text: 'Quotes in 45-90 Minutes' },
              { icon: Shield, text: 'Licensed in 6 States' },
              { icon: Users, text: '1,000+ Families Guided' }
            ].map((item, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <div className="hidden sm:block w-1.5 h-1.5 bg-emerald-400/40 rounded-full" aria-hidden="true" />
                )}
                <motion.div
                  className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300"
                  role="listitem"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                >
                  <item.icon className="w-5 h-5 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                  <span className="text-white/90 font-medium whitespace-nowrap text-sm sm:text-base">
                    {item.text}
                  </span>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Premium Two-Column Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="max-w-6xl mx-auto mb-14"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">

            {/* Left: What Makes Us Different - Glass Card */}
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/20 shadow-luxury hover:bg-white/[0.12] transition-all duration-500"
              whileHover={prefersReducedMotion ? {} : { y: -4, boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.4)" }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                <HeartPulse className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h2 className="font-luxury-sans text-2xl lg:text-3xl font-semibold text-white mb-5">
                What makes us different
              </h2>
              <p className="font-luxury-sans text-lg lg:text-xl text-white/85 leading-relaxed">
                Licensed insurance advisors—not call centers. We compare{' '}
                <strong className="text-emerald-300 font-semibold">15+ top-tier carriers</strong>{' '}
                simultaneously to find plans with real coverage at transparent prices.
              </p>
            </motion.div>

            {/* Right: Your Benefits - Premium Gradient Card */}
            <motion.div 
              className="bg-gradient-to-br from-emerald-500/20 via-emerald-400/15 to-blue-500/20 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-emerald-400/30 shadow-premium hover:border-emerald-400/50 transition-all duration-500"
              whileHover={prefersReducedMotion ? {} : { y: -4, boxShadow: "0 30px 60px -15px rgba(16, 185, 129, 0.3)" }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                <Star className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h2 className="font-luxury-sans text-2xl lg:text-3xl font-semibold text-white mb-6">
                Your benefits
              </h2>
              <ul className="space-y-4" role="list">
                {[
                  'Premium PPO access without premium prices',
                  'Real humans answering in under 24 hours',
                  'No hidden fees, commissions, or pressure tactics',
                  'Coverage in FL, GA, SC, TN, AL, and TX'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span className="font-luxury-sans text-lg text-white/90 leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="https://calendly.com/bradfordinformedguidance"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-lg lg:text-xl font-semibold rounded-2xl shadow-luxury hover:shadow-glow transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            aria-label="Get your free health plan analysis"
          >
            Get Your Free Health Plan Analysis
            <Check className="w-6 h-6" aria-hidden="true" />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="tel:+16893256570"
            className="inline-flex items-center gap-3 px-8 py-4 mt-4 bg-white/10 backdrop-blur-sm hover:bg-white/15 text-white text-base lg:text-lg font-medium rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-900"
            whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
            aria-label="Call us at 689-325-6570"
          >
            Or Call (689) 325-6570
          </motion.a>

          {/* Premium Credentials */}
          <p className="mt-8 text-sm lg:text-base text-white/60 font-luxury-sans">
            Since 2020 • Bonded & Insured • Best Insurance Group Exclusive Partner
          </p>
        </motion.div>

      </div>
    </section>
  );
});

export default LuxuryHealthHero;
