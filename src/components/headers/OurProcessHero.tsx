import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar } from "lucide-react";
import Section from "../layout/Section";
import { useParallax } from "../../lib/useParallax";

const HAS_MULTI = true;
const SINGLE_FALLBACK = "/images/hero/our-process-hero-desktop (1).webp";
const LQIP = "";

// multi-source names
const JPG1X = "/images/hero/our-process-hero-desktop (1).webp";
const JPG2X = "/images/hero/our-process-hero-retina (1).webp";
const WEBP1X = "/images/hero/our-process-hero-mobile (1).webp";
const WEBP2X = "/images/hero/our-process-hero-retina (1).webp";

export default function OurProcessHero() {
  const prefersReducedMotion = useReducedMotion();
  const { ref, y } = useParallax(0.2, 48);
  const [imgError, setImgError] = React.useState(false);

  const Content = (
    <div className="mx-auto max-w-4xl px-4 md:px-0 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,.65)] mb-6">
        My Simple 4-Step Process to Get You Perfect Insurance Coverage
      </h1>
      <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-[0_3px_14px_rgba(0,0,0,.5)] mb-8 max-w-3xl mx-auto">
        Getting the right insurance shouldn't be complicated. As your licensed broker serving Florida, Michigan, and North Carolina, I use my proven 4-step process to make it simple, fast, and stress-free.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://calendly.com/bradfordinformedguidance"
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Calendar className="w-6 h-6 mr-2" />
          Schedule Free Consultation
        </a>
        <a
          href="tel:(689) 325-6570"
          className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300"
        >
          Call (689) 325-6570
        </a>
      </div>
    </div>
  );

  return (
    <Section as="header" className="relative isolate px-0 py-0">
      <div ref={ref} className="relative w-full min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        {/* Parallax layer */}
        <div
          className="absolute inset-0 z-0 will-change-transform"
          style={{ transform: prefersReducedMotion ? undefined : `translate3d(0, ${y}px, 0)` }}
        >
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
            <div className="h-full w-full bg-gradient-to-b from-slate-200 to-slate-400" />
          )}
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-30 grid place-items-center">
          <div className="w-full py-16 md:py-24">
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
    </Section>
  );
}