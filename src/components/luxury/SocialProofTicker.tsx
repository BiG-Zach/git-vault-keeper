import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ShieldCheck, Clock, Users } from 'lucide-react';
import { BRAND } from '../../lib/brand';

type Highlight = {
  icon: typeof MapPin;
  headline: string;
  description: string;
};

const licensedStatesDisplay = BRAND.licensed.replace(/,\s*/g, ' • ');

const HIGHLIGHTS: Highlight[] = [
  {
    icon: MapPin,
    headline: 'Licensed Across Six States',
    description: licensedStatesDisplay,
  },
  {
    icon: ShieldCheck,
    headline: `NPN ${BRAND.npn} – Verified`,
    description: 'Confirm via TrustMyProducer and the NIPR national registry.',
  },
  {
    icon: Clock,
    headline: 'Concierge Response Times',
    description: 'Quotes delivered in 45–90 minutes, Mon-Sun, 8:00 AM - 8:00 PM EST.',
  },
  {
    icon: Users,
    headline: 'Independent White-Glove Support',
    description: 'Health, life, and supplemental coverage tailored to families, entrepreneurs, and retirees.',
  },
];

const DISPLAY_INTERVAL = 8000;

export default function SocialProofTicker() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: number | undefined;
    const rotation = window.setInterval(() => {
      setIsVisible(false);
      timeoutId = window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
        setIsVisible(true);
      }, 250);
    }, DISPLAY_INTERVAL);

    return () => {
      window.clearInterval(rotation);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  const current = HIGHLIGHTS[index];
  const Icon = current.icon;

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden lg:block" aria-live="polite">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -60, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="max-w-sm rounded-2xl border border-emerald-500/40 bg-slate-900/90 p-5 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/15">
                <Icon className="h-6 w-6 text-emerald-300" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
                  Bradford Informed Guidance
                </p>
                <p className="mt-1 text-lg font-bold text-white">{current.headline}</p>
                <p className="mt-2 text-sm leading-relaxed text-emerald-100/85">
                  {current.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
