import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "../layout/Section";
import BrandGrade from "../media/BrandGrade";
import { useParallax } from "../../lib/useParallax";
import { useScrollProgress } from "../../lib/useScrollProgress";

const HAS_MULTI = true; // set to true when you add @1x/@2x webp/jpg
const SINGLE_FALLBACK = "/images/hero/about-hero-desktop.webp"; // drop one image here for now
const LQIP = ""; // optional tiny blur

// multi-source names (only used if HAS_MULTI === true)
const JPG1X = "/images/hero/about-hero-desktop.webp";
const JPG2X = "/images/hero/about-hero-retina.webp";
const WEBP1X = "/images/hero/about-hero-mobile.webp";
const WEBP2X = "/images/hero/about-hero-retina.webp";

export default function AboutHero() {
  const prefersReducedMotion = useReducedMotion();
  const { ref, y } = useParallax(0.2, 48);
  const page = useScrollProgress(); // 0..1 over the whole page
  const [imgError, setImgError] = React.useState(false);

  // Scroll-reactive strength: 75 → 95 as user scrolls
  const strength = prefersReducedMotion ? 85 : Math.round(75 + page * 20);

  const Content = (
    <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-12">
      {/* Premium Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 rounded-full animate-fade-in">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-white/90 tracking-wide">LICENSED INSURANCE EXPERT</span>
      </div>

      {/* Main Headline with Gradient */}
      <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] font-[800] tracking-[-0.03em] leading-[0.9] mb-6 animate-scale-in">
        <span className="block bg-gradient-to-r from-white via-white to-primary/90 bg-clip-text text-transparent drop-shadow-2xl">
          Meet Your Insurance
        </span>
        <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-2xl">
          Advocate & Family
        </span>
        <span className="block bg-gradient-to-r from-accent via-white to-white bg-clip-text text-transparent drop-shadow-2xl">
          Protection Expert
        </span>
      </h1>

      {/* Premium Stats Bar */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8 animate-slide-in-right">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">8+</div>
          <div className="text-sm text-white/80 font-medium">Years Experience</div>
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">1,000+</div>
          <div className="text-sm text-white/80 font-medium">Clients Protected</div>
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-accent/50 to-transparent"></div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">3</div>
          <div className="text-sm text-white/80 font-medium">States Licensed</div>
        </div>
      </div>

      {/* Subtitle with Premium Styling */}
      <p className="text-[1.4rem] md:text-[1.6rem] font-[500] leading-[1.4] mb-8 animate-fade-in" 
         style={{ 
           background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 50%, rgba(16,185,129,0.9) 100%)',
           WebkitBackgroundClip: 'text',
           WebkitTextFillColor: 'transparent',
           backgroundClip: 'text',
           textShadow: '0 2px 4px rgba(0,0,0,0.1)'
         }}>
        Helping self-employed professionals, families, and early retirees make confident insurance decisions.
        <br className="hidden md:block" />
        <span className="inline-block mt-2 px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-white/90 text-base font-medium border border-accent/30">
          Licensed in FL, MI, NC — Expanding Nationwide
        </span>
      </p>

      {/* Premium CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in">
        <button className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover-scale transition-all duration-300 shadow-lg hover:shadow-primary/25">
          <span className="flex items-center gap-2">
            Get Your Free Quote
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
        <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover-scale">
          Schedule Consultation
        </button>
      </div>
    </div>
  );

  return (
    <header className="relative isolate w-full">
      <div ref={ref} className="relative w-full min-h-[52vh] md:min-h-[58vh] overflow-hidden">
        {/* Parallax layer */}
        <div
          className="absolute inset-0 z-0 will-change-transform"
          style={{ transform: prefersReducedMotion ? undefined : `translate3d(0, ${y}px, 0)` }}
        >
          {/* If multi-source assets exist and no error, use <picture>. Otherwise, use single fallback or just let BrandGrade carry the visual. */}
          {!imgError && HAS_MULTI ? (
            <picture>
              <source type="image/webp" srcSet={`${WEBP1X} 1600w, ${WEBP2X} 2400w`} sizes="100vw" />
              <source type="image/jpeg" srcSet={`${JPG1X} 1600w, ${JPG2X} 2400w`} sizes="100vw" />
              <img
                src={JPG1X}
                alt=""
                className="block h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
                onError={() => setImgError(true)}
                style={LQIP ? { backgroundImage: `url(${LQIP})`, backgroundSize: "cover", backgroundPosition: "50% 50%" } : undefined}
              />
            </picture>
          ) : SINGLE_FALLBACK && !imgError ? (
            <img
              src={SINGLE_FALLBACK}
              alt=""
              className="block h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
              onError={() => setImgError(true)}
              style={LQIP ? { backgroundImage: `url(${LQIP})`, backgroundSize: "cover", backgroundPosition: "50% 50%" } : undefined}
            />
          ) : (
            // final graceful fallback (no image)
            <div className="h-full w-full bg-gradient-to-b from-slate-200 to-slate-400" />
          )}
        </div>

        {/* Removed overlays and effects to show clean hero image */}

        {/* Content */}
        <div className="absolute inset-0 z-30 grid place-items-end">
          <div className="w-full pb-10 md:pb-14">
            {prefersReducedMotion ? (
              Content
            ) : (
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: "easeOut" }}>
                {Content}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}