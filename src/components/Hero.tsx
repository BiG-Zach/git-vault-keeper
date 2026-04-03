import React from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEvent, GTM_EVENTS } from '../utils/gtm';
import styles from '../mobile/MobileHero.module.css';
import heroMobile from './Hero.mobile.module.css';

// Using consistent image path
const bg = '/assets/backgrounds/happy-family-beach-hero.webp';

type HeroProps = {
  title?: string;
  subtitle?: string;
};

const Hero = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  title = "Health Insurance That Actually Pays.",
  subtitle = "Private PPO plans for self-employed professionals & families. Access the same nationwide networks as big corporations—without the bureaucracy."
}: HeroProps) => {
  const navigate = useNavigate();

  const handleScheduleClick = () => {
    trackEvent(GTM_EVENTS.HERO_SCHEDULE_CLICK);
    navigate('/contact');
  };

  const handleSeeOptionsClick = () => {
    trackEvent(GTM_EVENTS.HERO_SEE_OPTIONS_CLICK);
    navigate('/quote');
  };

  return (
    <header
      className={`relative isolate overflow-hidden min-h-[85vh] flex items-center justify-center ${styles.hero} ${heroMobile.mobileRoot}`}
      style={{
        paddingTop: 'calc(var(--header-h, 56px) + env(safe-area-inset-top))'
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="Happy family on beach representing financial peace of mind"
          className={`w-full h-full object-cover object-center ${heroMobile.mobileHeroImage}`}
          loading="eager"
          width={2400}
          height={1600}
        />
        
        {/* Luxury Scrim Overlay - Using standard dark gradient for high contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
      </div>

      {/* Content Container - Ensure z-index puts this ON TOP */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        
        {/* Floating Glass Card */}
        <div className="mx-auto max-w-4xl">
          
          {/* Badge: Value Proposition */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium tracking-wide uppercase">
              Open Enrollment: FL • TX • MI • NC • AZ • GA • IN
            </span>
          </div>

          {/* Main Headline - Removed Framer Motion */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-lg" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
            Health Insurance That <br className="hidden md:block" />
            <span className="text-emerald-400">
              Actually Pays.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={handleScheduleClick}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg shadow-lg hover:-translate-y-0.5 transition-all duration-300 transform border border-emerald-400/30"
              aria-label="Book your free strategy call"
            >
              Book Strategy Call
            </button>
            
            <button
              onClick={handleSeeOptionsClick}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium text-lg transition-all duration-300 hover:-translate-y-0.5"
              aria-label="View coverage options"
            >
              View Options
            </button>
          </div>

          {/* Trust Strip - Phantom Logo Effect */}
          <div className="border-t border-white/10 pt-10 mt-12">
            <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Trusted Access To Premium Networks
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90">
              {/* Aetna */}
              <span className="group relative cursor-default">
                <span className="text-2xl md:text-3xl font-serif font-bold text-white/40 transition-all duration-500 group-hover:text-[#D20962] group-hover:scale-105">
                  aetna
                </span>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#D20962] transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </span>

              {/* Cigna */}
              <span className="group relative cursor-default">
                <span className="text-2xl md:text-3xl font-sans font-extrabold tracking-tight text-white/40 transition-all duration-500 group-hover:text-[#094D8F] group-hover:scale-105">
                  Cigna
                </span>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#094D8F] transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </span>

              {/* UHC */}
              <span className="group relative cursor-default">
                <span className="text-2xl md:text-3xl font-sans font-bold tracking-tighter text-white/40 transition-all duration-500 group-hover:text-[#002677] group-hover:scale-105">
                  United<span className="font-light">Healthcare</span>
                </span>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#002677] transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </span>

              {/* BCBS */}
              <span className="group relative cursor-default">
                <span className="text-2xl md:text-3xl font-serif font-bold italic text-white/40 transition-all duration-500 group-hover:text-[#005596] group-hover:scale-105">
                  BlueCross
                </span>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#005596] transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Hero;
