import * as React from "react";
import Section from "../layout/Section";
import Magnetic from "../ui/Magnetic";

export default function AboutCTA() {
  return (
    <Section className="relative z-10 bg-surface-luxury py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Luxury Glass CTA Container */}
        <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-8 md:p-12 overflow-hidden group">

          {/* Subtle glowing animated orbs in corners */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-[80px] animate-pulse pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-sky-500/20 rounded-full blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />

          {/* Glowing Border Hover Effect */}
          <div className="absolute inset-0 rounded-3xl border border-emerald-400/0 group-hover:border-emerald-400/20 shadow-[0_0_0_0_rgba(52,211,153,0)] group-hover:shadow-[0_0_40px_-10px_rgba(52,211,153,0.15)] transition-all duration-700 pointer-events-none flex-shrink-0" />

          <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-8 md:gap-10 lg:items-center">

            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold font-luxury-serif tracking-tight leading-tight text-white drop-shadow-md">
                Let's Make Your Coverage <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                  Work for You.
                </span>
              </h3>
              <p className="text-lg text-slate-300 font-light max-w-2xl">
                Ready to secure enterprise-level benefits with a personal touch? See your options today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Magnetic>
                <a
                  href="/quote"
                  data-gtm="about-cta-quote"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.23)] hover:-translate-y-0.5 transition-all duration-300 transform border border-emerald-400/30 whitespace-nowrap"
                >
                  Request Guidance
                </a>
              </Magnetic>
              <Magnetic strength={10}>
                <a
                  href="/contact"
                  data-gtm="about-cta-schedule"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-lg transition-all duration-300 hover:-translate-y-0.5 shadow-lg whitespace-nowrap"
                >
                  Schedule Consultation
                </a>
              </Magnetic>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
}
