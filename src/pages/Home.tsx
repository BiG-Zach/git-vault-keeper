import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, Star, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import Section from "../components/layout/Section";
import { useNavigate } from "react-router-dom";
import USMap from "../components/ExpansionTracker/USMap";
import { STATE_STATUS, statusLabel, type StateCode } from "../components/ExpansionTracker/data";
import MapLegend from "../components/ui/MapLegend";
import RingyLeadCaptureForm from '../components/forms/RingyLeadCaptureForm';
import HowItWorks from '../components/marketing/HowItWorks';
import TestimonialsReel from '../components/marketing/TestimonialsReel';
import WhyChooseUs from '../components/marketing/WhyChooseUs';

const HERO_DESKTOP_SRC = "/images/hero/family-beach-california-sunset.webp";
const HERO_MOBILE_SRC = "/images/hero/mobile-hero.webp";

/**
 * The primary homepage component, representing Variant A.
 * The A/B testing controller logic has been removed from this file to allow for
 * static analysis and direct visual editing in tools like Lovable Dev.
 */
export default function Home() {
    const nav = useNavigate();

    return (
        <>
            <SEO
                title="Health & Life Insurance FL MI NC | Licensed Broker Zach Bradford"
                description="Licensed insurance broker in FL, MI, & NC. Get instant health & life insurance quotes from top carriers. Expert guidance since 2016."
                path="/"
            />
            <main id="content">
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
                        <div className="absolute inset-0 z-[50] grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-6">
                            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
                                <div className="relative z-[60] mx-auto max-w-3xl">
                                    <div className="rounded-2xl px-6 py-6 md:px-8 md:py-8">
                                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7), 1px 1px 0px rgba(0,0,0,0.8)' }}>
                                            Secure Your Tomorrow, Starting Today
                                        </h1>
                                        <p className="mt-3 text-lg md:text-xl leading-relaxed text-white font-semibold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.6), 1px 1px 0px rgba(0,0,0,0.7)' }}>
                                            Instant quotes, next-day protection, ongoing expert guidance—so your family's future is never left to chance.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}>
                                <RingyLeadCaptureForm />
                            </motion.div>
                        </div>
                    </div>
                </Section>
                <WhyChooseUs />
                <HowItWorks />
                <TestimonialsReel />
                <Section className="py-10 md:py-12 bg-band">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl md:text-3xl font-semibold">Where we're live</h2>
                            <MapLegend />
                        </div>
                        <div className="rounded-2xl overflow-hidden border bg-white/70 p-3" style={{ transform: 'scale(1.1)' }}>
                            <USMap
                                getStateAttrs={(code: StateCode) => {
                                    const status = STATE_STATUS[code];
                                    const base = status === 'available'
                                        ? 'fill-emerald-500/70 hover:fill-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400'
                                        : status === 'comingSoon'
                                            ? 'fill-sky-500/60 hover:fill-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400'
                                            : 'fill-slate-300 hover:fill-slate-400';
                                    return { className: `${base} stroke-white/70`, title: `${code} — ${statusLabel(code)}` };
                                }}
                                onActivate={(code) => nav(`/states/${code}`)}
                            />
                        </div>
                    </div>
                </Section>
            </main>
        </>
    );
}