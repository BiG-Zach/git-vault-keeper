import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Shield, Star, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Conversion-Optimized Carriers Hero Section
 *
 * Psychology-driven design focusing on:
 * - Pain point acknowledgment (headline)
 * - Value proposition clarity (subheadline)
 * - Trust building (credentials bar)
 * - Benefit-focused messaging
 * - Clear, single CTA
 *
 * Designed for maximum conversion with proper hierarchy and spacing
 */

const ConversionHero = React.memo(function ConversionHero() {
  return (
    <section
      className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Background Pattern - Subtle professional texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(15, 23, 42, 0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      {/* Gradient Accent Orbs - Premium feel */}
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Primary Headline - Pain Point Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1
            id="hero-headline"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-6"
          >
            Stop Overpaying for Health Insurance{' '}
            <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              That Doesn't Cover What You Need
            </span>
          </h1>

          {/* Subheadline - Value Proposition */}
          <p className="text-xl sm:text-2xl text-slate-700 font-medium leading-relaxed mb-8 max-w-4xl mx-auto">
            Premium PPO networks, A+ carriers, zero broker fees—and coverage starting in 24 hours
          </p>
        </motion.div>

        {/* Trust Bar - Social Proof & Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mb-16"
        >
          <div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto"
            role="list"
            aria-label="Trust indicators"
          >
            {/* Trust Badge 1 */}
            <div
              className="flex items-center gap-2 text-sm sm:text-base"
              role="listitem"
            >
              <Award className="w-5 h-5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
              <span className="text-slate-700 font-medium whitespace-nowrap">
                15+ A-Rated Carriers
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full" aria-hidden="true" />

            {/* Trust Badge 2 */}
            <div
              className="flex items-center gap-2 text-sm sm:text-base"
              role="listitem"
            >
              <Zap className="w-5 h-5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
              <span className="text-slate-700 font-medium whitespace-nowrap">
                Same-Day Quotes
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full" aria-hidden="true" />

            {/* Trust Badge 3 */}
            <div
              className="flex items-center gap-2 text-sm sm:text-base"
              role="listitem"
            >
              <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
              <span className="text-slate-700 font-medium whitespace-nowrap">
                Licensed in 6 States
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full" aria-hidden="true" />

            {/* Trust Badge 4 */}
            <div
              className="flex items-center gap-2 text-sm sm:text-base"
              role="listitem"
            >
              <Star className="w-5 h-5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
              <span className="text-slate-700 font-medium whitespace-nowrap">
                Best Insurance Group Certified
              </span>
            </div>
          </div>
        </motion.div>

        {/* Value Proposition Section - Two Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Left Column - What Makes Us Different */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                What makes us different:
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                You work directly with licensed insurance advisors—not call centers or algorithms.
                We compare <strong className="text-slate-900">15+ top-tier carriers</strong> simultaneously
                to find plans with the coverage you actually need at prices that make sense.
              </p>
            </div>

            {/* Right Column - Your Benefits */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-8 border border-emerald-200">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Your benefits:
              </h2>
              <ul className="space-y-4" role="list">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-lg text-slate-700">
                    Premium PPO access without premium prices
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-lg text-slate-700">
                    Real humans answering in under 24 hours
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-lg text-slate-700">
                    No hidden fees, commissions, or pressure tactics
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-lg text-slate-700">
                    Coverage in FL, GA, SC, TN, AL, and TX
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-offset-2"
            aria-label="Get your free insurance quote"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>

          {/* Credentials Line */}
          <p className="mt-6 text-sm text-slate-600">
            Since 2020 | Bonded & Insured | Best Insurance Group Exclusive Partner
          </p>
        </motion.div>

      </div>
    </section>
  );
});

export default ConversionHero;
