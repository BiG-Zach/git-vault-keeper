import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
const bg = '/assets/backgrounds/happy-family-beach-hero.webp';
import { trackEvent, GTM_EVENTS } from '../utils/gtm';
import styles from '../mobile/MobileHero.module.css';
import heroMobile from './Hero.mobile.module.css';

type HeroProps = {
  title?: string;
  subtitle?: string;
};

const Hero = ({
  title = 'Clarity in Health Insurance.',
  subtitle = 'Expert guidance, personalized plans, and the power of a national partnership. We turn confusion into confidence.'
}: HeroProps) => {
  const prefersReducedMotion = useReducedMotion();

  const handleScheduleClick = () => {
    trackEvent(GTM_EVENTS.HERO_SCHEDULE_CLICK);
    window.location.href = '/contact';
  };
  const handleSeeOptionsClick = () => {
    trackEvent(GTM_EVENTS.HERO_SEE_OPTIONS_CLICK);
    window.location.href = '/quote';
  };

  return (
    <header
      className={`relative isolate overflow-hidden ${styles.hero} ${heroMobile.mobileRoot}`}
      style={{
        paddingTop: 'calc(var(--header-h, 56px) + env(safe-area-inset-top))'
      }}
    >
      {/* Background image */}
      <div className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[78vh]">
        <img
          src={bg}
          alt=""
          className={`absolute inset-0 z-0 w-full h-full object-cover ${heroMobile.mobileHeroImage}`}
          loading="eager"
          fetchPriority="high"
        />

        {/* Luxury scrims (ensure readability on any image) */}
        <div className="pointer-events-none absolute inset-0 z-10">
          {/* side vignettes */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_60%_at_0%_50%,rgba(0,0,0,.28),transparent_60%),radial-gradient(120%_60%_at_100%_50%,rgba(0,0,0,.28),transparent_60%)]" />
          {/* bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/35 to-transparent" />
          {/* center focus vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(closest-side_at_50%_58%,rgba(0,0,0,.36),rgba(0,0,0,.22)_35%,transparent_70%)]" />
        </div>

        {/* Content */}
        <div className={`absolute inset-0 z-30 grid place-items-center px-4 md:px-6 ${heroMobile.mobileStack}`}>
          <div className="mx-auto max-w-3xl rounded-2xl bg-black/45 backdrop-blur-md ring-1 ring-white/15 shadow-[0_10px_40px_rgba(0,0,0,.55)] px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 text-center">
            <motion.h1
              className={`font-semibold tracking-tight text-white [text-shadow:_0_0_3px_rgba(0,0,0,0.9),0_0_8px_rgba(0,0,0,0.7),0_0_12px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.2)] ${styles.headline} ${heroMobile.mobileHeadline}`}
              style={{
                fontSize: 'clamp(26px, 5vw, 34px)',
                lineHeight: '1.15',
                letterSpacing: '-0.01em',
                marginBottom: '8px'
              }}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              {title}
            </motion.h1>

            <motion.p
              className={`text-white/95 leading-relaxed max-w-2xl mx-auto [text-shadow:_0_0_2px_rgba(0,0,0,0.85),0_0_6px_rgba(0,0,0,0.7)] ${styles.subheadline} ${heroMobile.mobileSubheadline}`}
              style={{
                fontSize: 'clamp(14px, 3.5vw, 18px)',
                marginTop: '8px',
                marginBottom: '16px'
              }}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 }}
            >
              {subtitle}
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.15 }}
            >
              <button
                onClick={handleScheduleClick}
                className="rounded-xl bg-emerald-600 px-4 py-3 text-white font-medium shadow-lg shadow-emerald-900/25 hover:bg-emerald-500 active:scale-[.99] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                style={{ minHeight: '48px', fontSize: '14px' }}
                aria-label="Start your consultation"
                data-gtm="hero-cta-schedule"
              >
                Start Your Consultation
              </button>

              <button
                onClick={handleSeeOptionsClick}
                className="rounded-xl px-4 py-3 font-medium text-white/95 ring-1 ring-white/35 hover:bg-white/10 active:scale-[.99] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                style={{ minHeight: '48px', fontSize: '14px' }}
                aria-label="View available coverage options"
                data-gtm="hero-cta-options"
              >
                View Coverage Options
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;


