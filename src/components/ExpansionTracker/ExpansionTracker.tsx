import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../Reveal';
import USMap from './USMap';
import { trackEvent, GTM_EVENTS } from '../../utils/gtm';
import {
  STATE_STATUS,
  statusLabel,
  statusClasses,
  type StateCode,
} from './data';

const LEGEND_ITEMS = [
  {
    key: 'available',
    label: 'Available now',
    dotClass: 'bg-emerald-500 shadow-[0_0_0_2px_rgba(16,185,129,0.25)]',
  },
  {
    key: 'comingSoon',
    label: 'Coming soon',
    dotClass: 'bg-sky-500 shadow-[0_0_0_2px_rgba(14,165,233,0.25)] animate-pulse',
  },
  {
    key: 'notAvailable',
    label: 'Not available',
    dotClass: 'bg-slate-300 shadow-[0_0_0_2px_rgba(203,213,225,0.6)]',
  },
] as const;

const STATE_DETAILS: Partial<Record<StateCode, { name: string; plans: string; benefits: string[] }>> = {
  FL: {
    name: 'Florida',
    plans: '15+ Plans Available',
    benefits: ['PPO Networks', 'Year-Round Enrollment', 'Same-Day Coverage'],
  },
  MI: {
    name: 'Michigan',
    plans: '12+ Plans Available',
    benefits: ['Top Carriers', 'Flexible Options', 'Local Support'],
  },
  NC: {
    name: 'North Carolina',
    plans: '18+ Plans Available',
    benefits: ['Comprehensive Coverage', 'Affordable Rates', 'Quick Enrollment'],
  },
  AZ: {
    name: 'Arizona',
    plans: 'Launching 2024',
    benefits: ['Heat-Ready Plans', 'Travel-Friendly Coverage', 'Family Protection'],
  },
  GA: {
    name: 'Georgia',
    plans: 'Launching 2024',
    benefits: ['Atlanta & Coastal Networks', 'Business Owner Solutions', 'Local Expertise'],
  },
  TX: {
    name: 'Texas',
    plans: 'Launching 2024',
    benefits: ['Statewide PPO Access', 'Independent Contractor Support', 'High Deductible Alternatives'],
  },
  OH: {
    name: 'Ohio',
    plans: 'Coming Soon',
    benefits: ['Stay Tuned', 'Join the Waitlist', 'Be the First to Know'],
  },
};

function getStateDetails(code: StateCode) {
  return (
    STATE_DETAILS[code] || {
      name: code,
      plans: statusLabel(code),
      benefits: ['Expanding Coverage', 'Stay Tuned', 'Notify Me'],
    }
  );
}

export default function ExpansionTracker() {
  const [hovered, setHovered] = useState<StateCode | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const getStateAttrs = useMemo(() => {
    return (code: StateCode) => {
      const status = STATE_STATUS[code];
      const title = `${code} — ${statusLabel(code)}`;
      const base = 'transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 ring-offset-2';
      // Enhanced hover effects
      const affordance = 'shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] hover:shadow-[inset_0_0_0_2px_rgba(0,0,0,0.15)] hover:scale-105';
      const cls = `${base} ${affordance} ${statusClasses(status)}`;
      return { className: cls, status, title };
    };
  }, []);

  function onActivate(code: StateCode) {
    const status = STATE_STATUS[code];
    
    // Track the interaction
    trackEvent({
      ...GTM_EVENTS.STATE_MAP_CLICK,
      event_label: `state_map_click_${code.toLowerCase()}`,
    });

    // Navigate to state page if available
    if (status === 'available') {
      const stateRoutes = {
        FL: '/states/florida',
        MI: '/states/michigan',
        NC: '/states/north-carolina',
      };
      
      const route = stateRoutes[code as keyof typeof stateRoutes];
      if (route) {
        window.location.href = route;
      }
    }
  }

  const handleMouseEnter = (code: StateCode, event: React.MouseEvent) => {
    setHovered(code);
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const hoveredInfo = hovered ? getStateDetails(hovered) : null;

  return (
    <section aria-labelledby="expansion-tracker-title" className="py-12 sm:py-16 bg-white">
      <div className="container-default">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="expansion-tracker-title" className="h2 font-extrabold tracking-tight">
              Where We Are — and Where We’re Going
            </h2>
            <p className="lead mt-2 text-slate-600">
              Track our growth across the All American MedPlans footprint
            </p>
          </div>
        </Reveal>

        {/* Legend */}
        <Reveal delay={0.1}>
          <ul className="mt-6 mb-6 sm:mb-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            {LEGEND_ITEMS.map((item) => (
              <li key={item.key} className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={`h-3.5 w-3.5 rounded-full ring-2 ${item.dotClass}`}
                />
                <span className="text-slate-700">{item.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Map Panel */}
        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-3 sm:p-5 shadow-sm backdrop-blur-sm">
            {/* Compact legend/status row for mobile */}
            <div className="mb-3 flex flex-wrap items-center justify-center gap-4 text-[11px] sm:text-xs text-slate-600">
              <span className="inline-flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_2px_rgba(16,185,129,0.25)]" />
                Available
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_0_2px_rgba(14,165,233,0.25)] animate-pulse" />
                Coming soon
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-slate-300 shadow-[0_0_0_2px_rgba(203,213,225,0.6)]" />
                Not available
              </span>
            </div>

            <div className="relative">
              {/* Enhanced tooltip with state information */}
              <AnimatePresence>
                {hovered && hoveredInfo && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="pointer-events-none absolute z-20 hidden md:block"
                    style={{
                      left: tooltipPosition.x,
                      top: tooltipPosition.y,
                      transform: 'translate(-50%, -100%)',
                    }}
                  >
                    <div className="bg-slate-900/95 backdrop-blur-sm rounded-lg px-4 py-3 text-white shadow-lg ring-1 ring-black/10 min-w-[200px]">
                      <div className="mb-1 text-sm font-semibold">{hoveredInfo.name}</div>
                      <div className="mb-2 text-xs text-emerald-400">{hoveredInfo.plans}</div>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {hoveredInfo.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="inline-block h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      {STATE_STATUS[hovered] === 'available' && (
                        <div className="mt-2 text-xs font-medium text-sky-400">Click to view details →</div>
                      )}
                    </div>
                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-slate-900/95 rotate-45 -mt-1" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Responsive width clamp to keep map legible on small screens */}
              <div className="mx-auto w-full max-w-[980px]">
                <USMap
                  getStateAttrs={getStateAttrs}
                  onActivate={onActivate}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            </div>

            {/* Mobile help text row acts as tooltip stand-in */}
            <div className="mt-3 flex items-center justify-center text-[11px] text-slate-500 md:hidden" role="status" aria-live="polite">
              {hoveredInfo ? `${hoveredInfo.name} — ${hoveredInfo.plans}` : 'Tap a state for details'}
            </div>
          </div>
        </Reveal>

        {/* Footnote */}
        <Reveal delay={0.22}>
          <p className="mt-5 text-center text-xs text-slate-500">
            States are interactive and will link to details in the next update.
          </p>
        </Reveal>
      </div>
    </section>
  );
}