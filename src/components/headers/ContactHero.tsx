import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "../layout/Section";
import { useParallax } from "../../lib/useParallax";

const HAS_MULTI = true;
const SINGLE_FALLBACK = "/images/hero/contact-hero-desktop.webp";
const LQIP = "";

// multi-source names
const JPG1X = "/images/hero/contact-hero-desktop.webp";
const JPG2X = "/images/hero/contact-hero-retina.webp";
const WEBP1X = "/images/hero/contact-hero-mobile.webp";
const WEBP2X = "/images/hero/contact-hero-retina.webp";

export default function ContactHero() {
  const prefersReducedMotion = useReducedMotion();
  const { ref, y } = useParallax(0.2, 48);
  const [imgError, setImgError] = React.useState(false);

  const Content = (
    <div className="mx-auto max-w-4xl px-4 md:px-0 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,.65)] mb-6">
        Get In Touch - Your Licensed Insurance Broker Ready to Help
      </h1>
      <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-[0_3px_14px_rgba(0,0,0,.5)] max-w-3xl mx-auto">
        Questions about health or life insurance? I'm Zach Bradford, your licensed broker, and I'm here to help personally. Multiple ways to connect with me directly - no call centers, no middlemen.
      </p>
    </div>
  );

  return (
    <Section as="header" className="relative isolate px-0 py-0 w-full max-w-none">
      <div ref={ref} className="relative w-full min-h-[70vh] md:min-h-[80vh] overflow-hidden">
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