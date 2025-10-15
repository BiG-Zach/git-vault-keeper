import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
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
    <div className="relative mx-auto max-w-6xl px-6 md:px-8 text-center">
      {/* Decorative Elements */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-gradient-to-tl from-blue-300/30 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Subtitle */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Licensed Insurance Broker • Available Now
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-luxury-serif font-bold tracking-tight leading-[1.1] text-white mb-8">
          <span className="block">Get In Touch</span>
          <span className="block bg-gradient-to-r from-white via-blue-100 to-teal-200 bg-clip-text text-transparent">
            Your Licensed Insurance
          </span>
          <span className="block text-white">
            Broker Ready to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Help</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 transform -skew-x-12 -z-10 opacity-80"></div>
            </span>
          </span>
        </h1>
        
        {/* Enhanced Description */}
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 leading-relaxed font-light mb-4">
            Questions about{" "}
            <span className="font-semibold text-teal-200">health</span> or{" "}
            <span className="font-semibold text-blue-200">life insurance</span>?
          </p>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            I'm{" "}
            <span className="font-bold text-white">Zach Bradford</span>, your licensed broker, 
            and I'm here to help personally. Multiple ways to connect with me directly — 
            <span className="italic">no call centers, no middlemen.</span>
          </p>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-sm font-medium">8+ Years Licensed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span className="text-sm font-medium">6 States Coverage</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
            <span className="text-sm font-medium">24hr Response Guarantee</span>
          </div>
        </div>
      </div>
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );

  return (
    <header className="relative isolate w-full">
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
              onError={() => setImgError(true)}
              width={2400}
              height={1600}
              style={LQIP ? { backgroundImage: `url(${LQIP})`, backgroundSize: "cover", backgroundPosition: "50% 50%" } : undefined}
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-b from-slate-200 to-slate-400" />
          )}
        </div>

        {/* Content overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30 z-20"></div>
        
        {/* Content */}
        <div className="absolute inset-0 z-30 grid place-items-center">
          <div className="w-full py-20 md:py-28">
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
