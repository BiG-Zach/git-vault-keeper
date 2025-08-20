import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Search, Users, Shield } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import Section from "../layout/Section";
import { useParallax } from "../../lib/useParallax";

const HAS_MULTI = false;
const SINGLE_FALLBACK = "/lovable-uploads/beb601b4-92fe-4cc6-bb10-d5f7e986c925.png";
const LQIP = "";

// multi-source names (not used since HAS_MULTI is false)
const JPG1X = "/lovable-uploads/beb601b4-92fe-4cc6-bb10-d5f7e986c925.png";
const JPG2X = "/lovable-uploads/beb601b4-92fe-4cc6-bb10-d5f7e986c925.png";
const WEBP1X = "/lovable-uploads/beb601b4-92fe-4cc6-bb10-d5f7e986c925.png";
const WEBP2X = "/lovable-uploads/beb601b4-92fe-4cc6-bb10-d5f7e986c925.png";

export default function ResourcesHero() {
  const prefersReducedMotion = useReducedMotion();
  const { ref, y } = useParallax(0.2, 48);
  const [imgError, setImgError] = React.useState(false);

  const Content = (
    <div className="mx-auto max-w-5xl px-4 md:px-0 text-center relative">
      {/* Premium Badge Overlay */}
      <div className="absolute -top-8 right-4 md:right-8 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
        <Shield className="w-4 h-4" />
        Licensed FL Broker W347851
      </div>

      {/* Live Visitor Counter */}
      <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm">
        <Users className="w-4 h-4 text-emerald-400" />
        <span>Join 12,847+ smart families who trust our guidance</span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,.65)] mb-6 min-h-[120px] md:min-h-[140px]">
        <TypeAnimation
          sequence={[
            'Your Complete Insurance',
            1000,
            'Your Complete Insurance\nKnowledge Center',
            2000,
            'Your Complete Insurance\nKnowledge Center',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: 'inherit', display: 'inline-block', whiteSpace: 'pre-line' }}
          repeat={Infinity}
        />
      </h1>
      
      {/* Floating Search Bar */}
      <div className="relative max-w-2xl mx-auto mb-8">
        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/20">
          <div className="flex items-center">
            <Search className="w-5 h-5 text-slate-400 ml-4" />
            <input
              type="text"
              placeholder="Search insurance guides, calculators, state guides..."
              className="flex-1 px-4 py-3 bg-transparent text-slate-700 placeholder-slate-500 outline-none"
            />
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
              Search
            </button>
          </div>
        </div>
      </div>

      <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-[0_3px_14px_rgba(0,0,0,.5)] mb-8 max-w-3xl mx-auto">
        Expert insights, comprehensive guides, and tools to help you make informed insurance decisions
      </p>
      
      {/* Author Credibility Box */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block border border-white/20 mb-8">
        <p className="text-white/80 text-sm uppercase tracking-wider mb-2">Insights From</p>
        <p className="text-white font-medium text-lg">Zach Bradford</p>
        <p className="text-white/80 text-sm">8+ Years Experience | Over $50M in Coverage Placed</p>
      </div>

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
            <div className="h-full w-full bg-gradient-to-br from-blue-900 to-blue-600" />
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