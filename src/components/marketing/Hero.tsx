import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "../layout/Section";

const HERO_SRC = "/hero-family.webp";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const Content = (
    <div className="relative z-[60] mx-auto max-w-3xl">
      <div className="rounded-2xl px-6 py-6 md:px-8 md:py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.6)' }}>
          Secure Your Tomorrow, <br className="hidden md:block" /> Starting Today
        </h1>
        <p className="mt-3 text-lg md:text-xl leading-relaxed text-white font-medium" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.5)' }}>
          Instant quotes, next-day protection, ongoing expert guidance — so your family's future is never left to chance.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="/contact" data-gtm="hero-cta-schedule" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white font-medium shadow-lg shadow-emerald-900/25 hover:bg-emerald-500 active:scale-[.99] transition">
            Schedule Free Consultation
          </a>
          <a href="/#options" data-gtm="hero-cta-options" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white/95 ring-1 ring-white/35 hover:bg-white/10 active:scale-[.99] transition">
            See Your Options
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <Section as="header" className="relative isolate overflow-clip px-0 py-0">
      <div className="relative h-[62vh] min-h-[460px] w-full bg-transparent">
        {/* Background image - Full brightness, no filters */}
        <img 
          src={HERO_SRC} 
          alt="" 
          className="absolute inset-0 z-0 h-full w-full object-cover object-center" 
          style={{ filter: 'none', opacity: 1 }}
          loading="eager" 
          fetchPriority="high" 
        />


        {/* Content (highest) */}
        <div className="absolute inset-0 z-[50] grid place-items-center px-4 md:px-6">
          {prefersReducedMotion ? (
            Content
          ) : (
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
              {Content}
            </motion.div>
          )}
        </div>
      </div>
    </Section>
  );
}