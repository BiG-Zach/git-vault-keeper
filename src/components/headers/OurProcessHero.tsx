import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Shield } from "lucide-react";
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
    <div className="mx-auto max-w-5xl px-6 md:px-8 text-center">
      {/* Professional badge */}
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="inline-flex items-center gap-2 bg-emerald-600/90 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold text-sm mb-8 shadow-lg"
      >
        <Shield className="w-4 h-4" />
        Licensed Broker Since 2016
      </motion.div>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-luxury-serif font-bold tracking-tight leading-tight text-white drop-shadow-[0_8px_32px_rgba(0,0,0,.75)] mb-8">
        My Simple 4-Step Process to Get You Perfect Coverage
      </h1>
      <p className="text-2xl md:text-3xl text-white/95 leading-relaxed drop-shadow-[0_4px_16px_rgba(0,0,0,.6)] mb-6 max-w-4xl mx-auto font-light">
        Getting the right insurance shouldn't be complicated.
      </p>
      <p className="text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-[0_3px_14px_rgba(0,0,0,.5)] max-w-4xl mx-auto">
        As your licensed broker serving Florida, Michigan, and North Carolina, I use my proven process to make it simple, fast, and stress-free.
      </p>
    </div>
  );

  return (
    <header className="relative isolate w-full">
      <div ref={ref} className="relative w-full min-h-[75vh] md:min-h-[85vh] overflow-hidden">
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
          <div className="w-full py-20 md:py-28">
            {prefersReducedMotion ? (
              Content
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
                {Content}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}