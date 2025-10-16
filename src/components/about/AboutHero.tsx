import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useParallax } from "../../lib/useParallax";

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
  const [imgError, setImgError] = React.useState(false);

  const Content = (
    <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
      {/* Main Content */}
      <div className="relative">
        {/* Headlines with Playfair Display */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          style={{
            textShadow: '0 2px 8px rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.1)'
          }}
        >
          Your Trusted Guide<br />
          <span className="font-serif italic font-semibold">in a Complex Industry</span>
        </h1>

        <h2
          className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          style={{ textShadow: '0 2px 6px rgba(0,0,0,0.4)' }}
        >
          8+ years of experience dedicated to helping families navigate their health insurance options with clarity and confidence.
        </h2>

        {/* Enhanced Body Text */}
        <div className="max-w-3xl mx-auto">
          <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-8 max-w-3xl mx-auto"
             style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
            I'm your dedicated insurance broker, specializing in <em className="font-semibold text-white">health and life coverage</em> for self-employed professionals, families, and those planning retirement.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 text-white/80 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Licensed Across Multiple States</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Expanding Nationwide</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>A+ Rated Carrier Access</span>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            Start Your Consultation
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">&gt;</span>
          </button>
          <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
            Schedule a Conversation
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <header className="relative isolate w-full" role="banner" aria-label="About page hero section">
      <div ref={ref} className="relative w-full min-h-[70vh] lg:min-h-[75vh] flex items-center justify-center py-16 lg:py-20">
        {/* Parallax layer */}
        <div
          className="absolute inset-0 z-0 will-change-transform"
          style={{ transform: prefersReducedMotion ? undefined : `translate3d(0, ${y}px, 0)` }}
        >
          {/* If multi-source assets exist and no error, use <picture>. Otherwise, use single fallback or just let BrandGrade carry the visual. */}
          {!imgError && HAS_MULTI ? (
            <picture>
              <source type="image/webp" srcSet={`${WEBP1X} 1600w, ${WEBP2X} 2400w`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1600px" />
              <source type="image/jpeg" srcSet={`${JPG1X} 1600w, ${JPG2X} 2400w`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1600px" />
              <img
                src={JPG1X}
                alt="Professional insurance broker consultation environment"
                className="block h-full w-full object-cover"
                loading="eager"
                onError={() => setImgError(true)}
                width={2400}
                height={1600}
                style={LQIP ? { backgroundImage: `url(${LQIP})`, backgroundSize: "cover", backgroundPosition: "50% 50%" } : undefined}
              />
            </picture>
          ) : SINGLE_FALLBACK && !imgError ? (
            <img
              src={SINGLE_FALLBACK}
              alt="Professional insurance broker consultation environment"
              className="block h-full w-full object-cover"
              loading="eager"
              onError={() => setImgError(true)}
              width={2400}
              height={1600}
              style={LQIP ? { backgroundImage: `url(${LQIP})`, backgroundSize: "cover", backgroundPosition: "50% 50%" } : undefined}
            />
          ) : (
            // final graceful fallback (no image)
            <div className="h-full w-full bg-gradient-to-b from-slate-200 to-slate-400" />
          )}
        </div>

        {/* Enhanced Background Overlay for Text Readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-slate-900/70 via-slate-800/50 to-slate-900/70" />

        {/* Content */}
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            {prefersReducedMotion ? (
              Content
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full"
                style={{ willChange: 'transform, opacity' }}
              >
                {Content}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
