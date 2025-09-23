import { motion } from "framer-motion";
import Section from "../layout/Section";

const HERO_DESKTOP_SRC = "/images/hero/family-beach-california-sunset.webp";
const HERO_MOBILE_SRC = "/images/hero/mobile-hero.webp";

interface HeroProps {
    title: string;
    subtitle: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    onPrimaryCtaClick?: () => void;
}

export default function Hero({ title, subtitle, primaryCtaText, primaryCtaLink, onPrimaryCtaClick }: HeroProps) {
  return (
    <Section as="header" className="relative overflow-clip px-0 py-0" style={{ background: 'none !important' }}>
      <div className="relative h-[62vh] min-h-[460px] w-full">
        <picture>
          <source media="(max-width: 767px)" srcSet={HERO_MOBILE_SRC} />
          <source media="(min-width: 768px)" srcSet={HERO_DESKTOP_SRC} />
          <img
            src={HERO_DESKTOP_SRC}
            alt="Family enjoying a sunset walk on the beach"
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={1280}
          />
        </picture>
        <div
          className="absolute inset-0 z-[1]"
          aria-hidden="true"
          style={{
            backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.55) 10%, rgba(0, 0, 0, 0.25) 40%, rgba(0, 0, 0, 0.15) 100%)'
          }}
        />
        <div className="absolute inset-0 z-[50] grid place-items-center px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
                <div className="relative z-[60] mx-auto max-w-3xl">
                    <div className="rounded-2xl px-6 py-6 md:px-8 md:py-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7), 1px 1px 0px rgba(0,0,0,0.8)' }}>
                            {title}
                        </h1>
                        <p className="mt-3 text-lg md:text-xl leading-relaxed text-white font-semibold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.6), 1px 1px 0px rgba(0,0,0,0.7)' }}>
                            {subtitle}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <a href={primaryCtaLink} onClick={onPrimaryCtaClick} className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white font-medium shadow-lg shadow-emerald-900/25 hover:bg-emerald-500 active:scale-[.99] transition">
                                {primaryCtaText}
                            </a>
                            <a href="/#options" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white/95 ring-1 ring-white/35 hover:bg-white/10 active:scale-[.99] transition">
                                See Your Options
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </Section>
  );
}
