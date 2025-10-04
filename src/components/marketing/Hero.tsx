import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "../layout/Section";

const HERO_SRC = "/assets/backgrounds/happy-family-beach-hero.webp";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const Content = (
    <div className="relative z-[60] mx-auto max-w-3xl">
      <div 
        className="rounded-2xl px-6 py-6 md:px-8 md:py-8"
        style={{
          background: 'none !important',
          backgroundColor: 'transparent !important',
          backdropFilter: 'none !important',
          boxShadow: 'none !important'
        }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7), 1px 1px 0px rgba(0,0,0,0.8)' }}>
          Clarity in Health Insurance.
        </h1>
        <p className="mt-3 text-lg md:text-xl leading-relaxed text-white font-semibold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.6), 1px 1px 0px rgba(0,0,0,0.7)' }}>
          Expert guidance, personalized plans, and the power of a national partnership. We turn confusion into confidence.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="/contact" data-gtm="hero-cta-schedule" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white font-medium shadow-lg shadow-emerald-900/25 hover:bg-emerald-500 active:scale-[.99] transition">
            Start Your Consultation
          </a>
          <a href="/#options" data-gtm="hero-cta-options" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white/95 ring-1 ring-white/35 hover:bg-white/10 active:scale-[.99] transition">
            See Your Options
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <Section as="header" className="relative overflow-clip px-0 py-0" style={{ background: 'none !important' }}>
      <div 
        className="relative h-[62vh] min-h-[460px] w-full"
        style={{ 
          background: 'none !important',
          backgroundColor: 'transparent !important',
          backgroundImage: 'none !important'
        }}
      >
        {/* Background image - FORCE FULL BRIGHTNESS */}
        <img 
          src={HERO_SRC} 
          alt="" 
          className="absolute inset-0 z-0 h-full w-full object-cover object-center" 
          style={{ 
            filter: 'brightness(1) contrast(1) !important', 
            opacity: '1 !important'
          }}
          loading="eager" 
          fetchPriority="high" 
        />
        
        {/* FORCE REMOVE ANY OVERLAYS */}
        <div 
          className="absolute inset-0 z-[1]"
          style={{
            background: 'none !important',
            backgroundColor: 'transparent !important',
            backgroundImage: 'none !important'
          }}
        />


        {/* Content (highest) */}
        <div 
          className="absolute inset-0 z-[50] grid place-items-center px-4 md:px-6"
          style={{
            background: 'none !important',
            backgroundColor: 'transparent !important'
          }}
        >
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


