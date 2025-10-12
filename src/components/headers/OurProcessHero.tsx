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
      {/* Main Headline - Enhanced with authority and results focus */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-luxury-serif font-bold tracking-tight leading-[0.95] text-white mb-8"
          style={{ 
            textShadow: '0 8px 32px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)',
            background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
            WebkitBackgroundClip: 'text',
            padding: '0 20px',
            borderRadius: '16px'
          }}>
        My Proven 4-Step System to Secure Your Family's Perfect Coverage
      </h1>
      
      {/* Subheadline - Emphasizing simplicity and ease */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/95 leading-relaxed font-light mb-8 max-w-4xl mx-auto"
          style={{ 
            textShadow: '0 6px 24px rgba(0,0,0,0.7), 0 3px 12px rgba(0,0,0,0.5)',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(8px)',
            padding: '16px 24px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
        Finding the right insurance should be effortless, not overwhelming.
      </h2>
      
      {/* Enhanced Body Copy - Personal authority with results promise */}
      <div className="max-w-4xl mx-auto">
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium"
           style={{ 
             textShadow: '0 4px 16px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)',
             background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
             backdropFilter: 'blur(12px)',
             padding: '24px 32px',
             borderRadius: '16px',
             border: '1px solid rgba(255,255,255,0.15)',
             boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
           }}>
          As your dedicated licensed broker in <span className="font-semibold text-white">Florida, Michigan, and North Carolina</span>, I've perfected a streamlined process that eliminates confusion, saves you thousands, and delivers results in <span className="font-semibold text-white">24 hours or less</span>.
        </p>
        
        {/* Trust indicators with SEO keywords */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm md:text-base">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90">
            <Shield className="w-4 h-4" />
            <span className="font-medium">Licensed Insurance Broker</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-medium">Proven Process</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
            <span className="font-medium">Perfect Coverage Guaranteed</span>
          </div>
        </div>
      </div>
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
                fetchpriority="high"
                onError={() => setImgError(true)}
                width={2400}
                height={1600}
                style={LQIP ? { backgroundImage: `url(${LQIP})`, backgroundSize: "cover", backgroundPosition: "50% 50%" } : undefined}
              />
            </picture>
          ) : SINGLE_FALLBACK && !imgError ? (
            <img
              src={SINGLE_FALLBACK}
              alt=""
              className="block h-full w-full object-cover"
              loading="eager"
              fetchpriority="high"
              onError={() => setImgError(true)}
              width={2400}
              height={1600}
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
