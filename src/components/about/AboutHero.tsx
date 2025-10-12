import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useParallax } from "../../lib/useParallax";
import { Star, Shield, Award } from "lucide-react";

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
    <div className="relative mx-auto max-w-6xl px-4 md:px-6">
      {/* Floating Trust Badges */}
      <div className="absolute -top-20 right-4 md:right-8 z-10">
        <div className="flex flex-col gap-3 opacity-90">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-medium">Licensed Professional</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center gap-2 ml-4">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-white text-sm font-medium">Multi-State Authority</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Premium Badge */}
        <div className="mb-6 flex justify-center md:justify-start">
          <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-white/90 text-sm font-medium tracking-wide">PREMIUM INSURANCE BROKER</span>
          </div>
        </div>

        {/* Headlines with Playfair Display */}
        <h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-6"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 2px 8px rgba(0,0,0,0.3), 0 0 40px rgba(255,255,255,0.1)'
          }}
        >
          Your Trusted Guide<br />
          <span className="text-white/95 font-serif italic font-semibold">in a Complex Industry</span>
        </h1>

        <h2
          className="font-sans text-lg md:text-xl lg:text-2xl font-normal text-white/90 mb-8 leading-relaxed"
          style={{ textShadow: '0 2px 6px rgba(0,0,0,0.4)' }}
        >
          8+ years of experience dedicated to helping families navigate their health insurance options with clarity and confidence.
        </h2>

        {/* Enhanced Body Text */}
        <div className="max-w-2xl">
          <p className="text-base md:text-lg font-normal text-white/95 leading-relaxed mb-8"
             style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
            I'm your dedicated insurance broker, specializing in <em className="font-semibold text-white">health and life coverage</em> for self-employed professionals, families, and those planning retirement.
          </p>
          
          <div className="flex flex-wrap gap-6 text-white/90 text-sm">
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
              <span>Best Rates Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
      <div ref={ref} className="relative w-full min-h-[50vh] sm:min-h-[52vh] md:min-h-[58vh] overflow-hidden">
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
              alt="Professional insurance broker consultation environment"
              className="block h-full w-full object-cover"
              loading="eager"
              fetchpriority="high"
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

        {/* Enhanced Radial Gradient Overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-radial from-black/10 via-black/30 to-black/50" />

        {/* Content */}
        <div className="absolute inset-0 z-30 grid place-items-end">
          <div className="w-full pb-10 md:pb-14">
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
