import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Search } from "lucide-react";
// Removed Section import for full-width design
import { useParallax } from "../../lib/useParallax";

const SINGLE_FALLBACK = "/images/hero/resources-hero-retina.webp";
const LQIP = "";

export default function ResourcesHero() {
  const prefersReducedMotion = useReducedMotion();
  const { ref, y } = useParallax(0.2, 48);
  const [imgError, setImgError] = React.useState(false);

  const Content = (
    <div className="mx-auto max-w-5xl px-4 md:px-0 text-center relative">


        {/* Enhanced typography and stronger text effects */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white mb-6 font-luxury-serif">
        <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          Your Complete Insurance Knowledge Center
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8 max-w-4xl mx-auto font-luxury-sans drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
        Expert guidance from <span className="font-semibold text-blue-200">Zach Bradford</span>, Licensed FL Broker W347851<br />
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
              fetchpriority="high"
              width={2400}
              height={1600}
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
        </div>

        {/* Animated Visual Masterpiece Elements */}
        <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-emerald-500/25 to-blue-500/25 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl animate-pulse delay-500" />
          
          {/* Premium Light Rays */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/40 to-transparent transform rotate-12 animate-pulse" />
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-300/40 to-transparent transform -rotate-12 animate-pulse delay-700" />
            <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-300/40 to-transparent transform rotate-6 animate-pulse delay-1400" />
          </div>
          
          {/* Floating Geometric Elements */}
          <div className="absolute top-24 right-20 w-8 h-8 border border-white/30 rotate-45 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <div className="absolute bottom-32 left-16 w-6 h-6 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
          <div className="absolute top-1/3 right-1/4 w-4 h-4 border-2 border-blue-300/40 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-10 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          
          {/* Network Connection Lines with Glow */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path d="M100,100 Q400,50 700,150" stroke="rgba(59,130,246,0.4)" strokeWidth="1" fill="none" filter="url(#glow)">
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
            </path>
            <path d="M150,300 Q450,200 650,400" stroke="rgba(16,185,129,0.4)" strokeWidth="1" fill="none" filter="url(#glow)">
              <animate attributeName="opacity" values="0.6;0.2;0.6" dur="5s" repeatCount="indefinite" />
            </path>
            <path d="M50,450 Q350,350 600,500" stroke="rgba(236,72,153,0.4)" strokeWidth="1" fill="none" filter="url(#glow)">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="6s" repeatCount="indefinite" />
            </path>
          </svg>
          
          {/* Luxury Shimmer Waves */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse" style={{ 
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 75%, transparent 100%)',
              animation: 'shimmer 8s infinite linear'
            }} />
          </div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-30 grid place-items-center">
          <div className="w-full py-16 md:py-24 relative">
            {/* Premium Backdrop Enhancement */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent rounded-3xl pointer-events-none" />
            
            {prefersReducedMotion ? (
              Content
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 14 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative z-10"
              >
                {Content}
              </motion.div>
            )}
          </div>
        </div>

        {/* Custom Shimmer Animation */}
        <style>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(200%) skewX(-12deg); }
          }
        `}</style>
      </div>
    </header>
  );
}
