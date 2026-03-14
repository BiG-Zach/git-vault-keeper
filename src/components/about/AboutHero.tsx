import { motion, useReducedMotion } from "framer-motion";
import { useParallax } from "../../lib/useParallax";

const HERO_IMAGE = "/images/hero/about-hero-desktop.webp";

export default function AboutHero() {
  const prefersReducedMotion = useReducedMotion();
  const { ref, y } = useParallax(0.2);

  return (
    <header ref={ref} className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: !prefersReducedMotion ? `translateY(${y}px)` : undefined }}
      >
        <img
          src={HERO_IMAGE}
          alt="Professional insurance broker consultation environment"
          className="w-full h-[120%] object-cover object-center -mt-[10%]"
          loading="eager"
        />
      </div>

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight drop-shadow-lg">
            Your Trusted Guide <br />
            <span className="text-emerald-400 italic">in a Complex Industry</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            8+ years helping families navigate health and life insurance with <span className="text-white font-medium">clarity and confidence.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-white/90 pt-4">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
              <span>Multi-State Licensed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
              <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.5)]"></div>
              <span>A+ Rated Carriers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
