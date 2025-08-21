import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar } from "lucide-react";
import Section from "../layout/Section";
import { useParallax } from "../../lib/useParallax";

const HAS_MULTI = true;
const SINGLE_FALLBACK = "/images/hero/our-process-hero-desktop.webp";
const LQIP = "";

// multi-source names
const JPG1X = "/images/hero/our-process-hero-desktop.webp";
const JPG2X = "/images/hero/our-process-hero-retina.webp";
const WEBP1X = "/images/hero/our-process-hero-mobile.webp";
const WEBP2X = "/images/hero/our-process-hero-retina.webp";

export default function OurProcessHero() {
  const prefersReducedMotion = useReducedMotion();
  const { ref, y } = useParallax(0.2, 48);
  const [imgError, setImgError] = React.useState(false);

  const Content = (
    <div className="mx-auto max-w-4xl px-4 md:px-0 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,.65)] mb-6 bg-gradient-to-r from-white via-big-teal-100 to-white bg-clip-text text-transparent">
        My Simple 4-Step Process to Get You Perfect Insurance Coverage
      </h1>
      <p className="text-xl md:text-2xl text-big-teal-100 leading-relaxed drop-shadow-[0_3px_14px_rgba(0,0,0,.5)] mb-10 max-w-3xl mx-auto">
        Getting the right insurance shouldn't be complicated. As your licensed broker serving Florida, Michigan, and North Carolina, I use my proven 4-step process to make it simple, fast, and stress-free.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="https://calendly.com/bradfordinformedguidance"
          className="group inline-flex items-center justify-center px-8 py-4 bg-big-accent text-white font-bold rounded-2xl hover:bg-big-orange-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Step 1 Now
          <Calendar className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
        </a>
        <div className="text-big-teal-200 text-sm font-medium">
          Free consultation • No obligation • Licensed & bonded
        </div>
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

        {/* Overlay with BIG colors */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-big-blue-900/75 via-big-blue-800/50 to-big-teal-600/75"></div>
        
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