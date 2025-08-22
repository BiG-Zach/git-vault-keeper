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
    <div className="mx-auto max-w-5xl px-6 md:px-8 text-center relative">
      {/* Visual Masterpiece Background Effects */}
      <div className="absolute inset-0 -inset-x-20 -inset-y-16 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/6 left-1/6 w-80 h-80 bg-gradient-to-br from-emerald-400/25 via-cyan-300/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/5 right-1/6 w-72 h-72 bg-gradient-to-br from-blue-400/20 via-emerald-300/25 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-gradient-to-br from-cyan-300/15 via-blue-400/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
        </div>

        {/* Premium Light Rays */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-white/60 to-transparent transform -rotate-12 animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-200/50 to-transparent transform rotate-12 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '6s' }} />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-200/40 to-transparent transform -rotate-6 animate-pulse" style={{ animationDelay: '3s', animationDuration: '7s' }} />
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/8 left-1/8 w-4 h-4 border-2 border-white/70 rotate-45 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
          <div className="absolute top-1/3 right-1/8 w-5 h-5 border border-emerald-200/60 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '5s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-200/50 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/5 right-1/3 w-6 h-6 border-2 border-white/50 transform rotate-45 animate-spin" style={{ animationDuration: '15s' }} />
          <div className="absolute bottom-1/6 right-1/5 w-3 h-3 bg-gradient-to-br from-emerald-200/40 to-blue-200/30 rounded-full animate-ping" style={{ animationDelay: '4s', animationDuration: '6s' }} />
          <div className="absolute top-3/4 left-1/5 w-4 h-4 border border-cyan-200/50 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
        </div>

        {/* Premium Texture Pattern */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(255,255,255,0.3)_1px,_transparent_1px)] bg-[length:60px_60px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(16,185,129,0.2)_0.8px,_transparent_0.8px)] bg-[length:45px_45px]" style={{ transform: 'rotate(30deg)' }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,_rgba(34,211,238,0.15)_0.6px,_transparent_0.6px)] bg-[length:55px_55px]" style={{ transform: 'rotate(-15deg)' }} />
        </div>

        {/* Advanced Network Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroNetworkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
              <stop offset="50%" stopColor="rgba(16,185,129,0.4)" />
              <stop offset="100%" stopColor="rgba(34,211,238,0.3)" />
            </linearGradient>
            <filter id="heroGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <line x1="10%" y1="15%" x2="35%" y2="30%" stroke="url(#heroNetworkGradient)" strokeWidth="1.2" filter="url(#heroGlow)" />
          <line x1="35%" y1="30%" x2="70%" y2="20%" stroke="url(#heroNetworkGradient)" strokeWidth="1" filter="url(#heroGlow)" />
          <line x1="70%" y1="20%" x2="90%" y2="40%" stroke="url(#heroNetworkGradient)" strokeWidth="1.1" filter="url(#heroGlow)" />
          <line x1="20%" y1="70%" x2="50%" y2="85%" stroke="url(#heroNetworkGradient)" strokeWidth="0.9" filter="url(#heroGlow)" />
          <line x1="50%" y1="85%" x2="85%" y2="75%" stroke="url(#heroNetworkGradient)" strokeWidth="1" filter="url(#heroGlow)" />
          <line x1="15%" y1="45%" x2="40%" y2="55%" stroke="url(#heroNetworkGradient)" strokeWidth="0.8" filter="url(#heroGlow)" />
          <circle cx="10%" cy="15%" r="3" fill="rgba(255,255,255,0.7)" filter="url(#heroGlow)" />
          <circle cx="35%" cy="30%" r="2.5" fill="rgba(16,185,129,0.6)" filter="url(#heroGlow)" />
          <circle cx="70%" cy="20%" r="3.5" fill="rgba(34,211,238,0.5)" filter="url(#heroGlow)" />
          <circle cx="90%" cy="40%" r="2.5" fill="rgba(255,255,255,0.6)" filter="url(#heroGlow)" />
          <circle cx="20%" cy="70%" r="3" fill="rgba(16,185,129,0.5)" filter="url(#heroGlow)" />
          <circle cx="50%" cy="85%" r="2" fill="rgba(34,211,238,0.6)" filter="url(#heroGlow)" />
          <circle cx="85%" cy="75%" r="3" fill="rgba(255,255,255,0.5)" filter="url(#heroGlow)" />
          <circle cx="15%" cy="45%" r="2.5" fill="rgba(16,185,129,0.4)" filter="url(#heroGlow)" />
          <circle cx="40%" cy="55%" r="2" fill="rgba(34,211,238,0.4)" filter="url(#heroGlow)" />
        </svg>

        {/* Luxury Shimmer Effects */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-emerald-200/15 to-transparent transform skew-x-6 animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }} />
        </div>

        {/* Premium Border Glow */}
        <div className="absolute inset-0 rounded-3xl border border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.1),inset_0_0_60px_rgba(16,185,129,0.05)]" />
      </div>

      {/* Content with enhanced backdrop */}
      <div className="relative z-10 backdrop-blur-sm bg-black/10 rounded-3xl p-8 border border-white/10">
        
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