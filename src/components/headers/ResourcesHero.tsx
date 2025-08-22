import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Search, Users, Shield } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
// Removed Section import for full-width design
import { useParallax } from "../../lib/useParallax";

const HAS_MULTI = false;
const SINGLE_FALLBACK = "/lovable-uploads/f5b6b0de-192c-40c8-8fb2-35eaa4905195.png";
const LQIP = "";

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

      {/* Trust Badge */}
      <div className="mb-6 inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 text-white text-sm border border-white/20">
        <span className="text-yellow-300">⭐</span>
        <span>Trusted by 1,000+ Florida families since 2016</span>
      </div>

        {/* Enhanced typography and stronger text effects */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white mb-6 font-luxury-serif">
        <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          Your Complete Insurance Knowledge Center
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8 max-w-4xl mx-auto font-luxury-sans drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
        Expert guidance from <span className="font-semibold text-yellow-300">Zach Bradford</span>, Licensed FL Broker W347851<br />
        <span className="text-lg text-white/80">8+ Years Experience | 1,000+ Families Served</span>
      </p>
      
      {/* Executive Search Bar */}
      <div className="relative max-w-md mx-auto mb-8">
        <div className="relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 h-14">
          <div className="flex items-center h-full">
            <Search className="w-5 h-5 text-white/60 ml-5" />
            <input
              type="text"
              placeholder="Search insurance topics..."
              className="flex-1 px-4 py-3 bg-transparent text-white placeholder-white/60 outline-none font-luxury-sans"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://calendly.com/bradfordinformedguidance"
          className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-blue-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-luxury-sans"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Schedule Free Consultation
        </a>
        <a
          href="tel:(689) 325-6570"
          className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 font-luxury-sans"
        >
          Call (689) 325-6570
        </a>
      </div>
    </div>
  );

  return (
    <header className="relative isolate w-full overflow-hidden">
      <div ref={ref} className="relative w-full min-h-[70vh] md:min-h-[80vh] overflow-hidden">
        {/* Parallax layer */}
        <div
          className="absolute inset-0 z-0 will-change-transform"
          style={{ transform: prefersReducedMotion ? undefined : `translate3d(0, ${y}px, 0)` }}
        >
          {SINGLE_FALLBACK && !imgError ? (
            <img
              src={SINGLE_FALLBACK}
              alt="Executive library office with sophisticated bookshelves representing complete insurance knowledge center"
              className="block h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
              onError={() => setImgError(true)}
              style={LQIP ? { backgroundImage: `url(${LQIP})`, backgroundSize: "cover", backgroundPosition: "50% 50%" } : undefined}
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 relative">
              {/* Amazing library pattern overlay */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgba(255,215,0,0.3) 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, rgba(0,150,255,0.3) 0%, transparent 50%),
                  linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)
                `,
                backgroundSize: '200px 200px, 300px 300px, 100% 100%'
              }} />
              {/* Executive knowledge pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 98px,
                  rgba(255,215,0,0.4) 100px,
                  rgba(255,215,0,0.4) 102px
                )`
              }} />
            </div>
          )}
          
          {/* Luxury Executive Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-blue-900/70" />
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
    </header>
  );
}