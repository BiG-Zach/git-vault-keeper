import React, { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, TrendingUp, Users, Clock } from 'lucide-react';
import USMap from '../ExpansionTracker/USMap';
import MapTooltip from '../ui/MapTooltip';
import { STATE_STATUS, type StateCode } from '../ExpansionTracker/data';
import { trackEvent, GTM_EVENTS } from '../../utils/gtm';

type Status = 'Available' | 'Coming Soon' | 'Not Available';
type HoverInfo = { code: StateCode; name: string; status: Status; x: number; y: number };

const STATE_INFO_MAP = {
  FL: { name: 'Florida', status: 'Available' as Status, benefit: 'Active state - request a quote today.' },
  MI: { name: 'Michigan', status: 'Available' as Status, benefit: 'Active state - request a quote today.' },
  NC: { name: 'North Carolina', status: 'Available' as Status, benefit: 'Active state - request a quote today.' },
  AZ: { name: 'Arizona', status: 'Available' as Status, benefit: 'Active state - request a quote today.' },
  TX: { name: 'Texas', status: 'Available' as Status, benefit: 'Active state - request a quote today.' },
  GA: { name: 'Georgia', status: 'Available' as Status, benefit: 'Active state - request a quote today.' },
  CA: { name: 'California', status: 'Coming Soon' as Status, benefit: 'Launching soon - join the waitlist.' },
  NY: { name: 'New York', status: 'Coming Soon' as Status, benefit: 'Launching soon - join the waitlist.' },
  OH: { name: 'Ohio', status: 'Coming Soon' as Status, benefit: 'Launching soon - join the waitlist.' },
  PA: { name: 'Pennsylvania', status: 'Coming Soon' as Status, benefit: 'Launching soon - join the waitlist.' },
  IL: { name: 'Illinois', status: 'Coming Soon' as Status, benefit: 'Launching soon - join the waitlist.' }
} as const;

const MAP_STATS = [
  { icon: MapPin, number: "6", label: "Active States", sublabel: "FL, MI, NC, AZ, TX, & GA" },
  { icon: TrendingUp, number: "25+", label: "Expanding To", sublabel: "by 2025" },
  { icon: Users, number: "1,000+", label: "Families Served", sublabel: "and growing" },
  { icon: Clock, number: "45min", label: "Avg Quote Time", sublabel: "industry leading" }
] as const;

export default function EnhancedMap() {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const [hover, setHover] = useState<HoverInfo | null>(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Enhanced state information for tooltips
  const getStateInfo = useCallback((code: StateCode): { name: string; status: Status; benefit?: string } => {
    const defaultInfo = { name: code, status: 'Not Available' as Status, benefit: undefined };
    return STATE_INFO_MAP[code as keyof typeof STATE_INFO_MAP] || defaultInfo;
  }, []);

  const getStateAttrs = useMemo(() => {
    return (code: StateCode) => {
      const status = STATE_STATUS[code];
      const stateInfo = getStateInfo(code);
      
      const base = 'transition-all duration-300 ease-in-out cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2';
      
      let stateClass = '';
      if (status === 'available') {
        stateClass = 'fill-emerald-500/80 hover:fill-emerald-400 hover:scale-105 hover:drop-shadow-lg animate-pulse';
      } else if (status === 'comingSoon') {
        stateClass = 'fill-blue-500/70 hover:fill-blue-400 hover:scale-102';
      } else {
        stateClass = 'fill-slate-300 hover:fill-slate-400';
      }
      
      const cls = `${base} ${stateClass} stroke-white/50 hover:stroke-white/80`;
      return {
        className: cls,
        status,
        title: `${stateInfo.name} — ${stateInfo.status}`
      };
    };
  }, [getStateInfo]);

  function onActivate(code: StateCode) {
    const status = STATE_STATUS[code];
    
    trackEvent({
      ...GTM_EVENTS.STATE_MAP_CLICK,
      event_label: `enhanced_map_click_${code.toLowerCase()}`,
    });

    if (status === 'available' || status === 'comingSoon') {
      navigate(`/states/${code.toLowerCase()}`);
    }
  }

  const updateTooltipPosition = (code: StateCode, event: React.MouseEvent | React.FocusEvent) => {
    if (!mapContainerRef.current) return;
    
    const containerRect = mapContainerRef.current.getBoundingClientRect();
    const stateInfo = getStateInfo(code);
    
    if ('clientX' in event) {
      setHover({
        code,
        name: stateInfo.name,
        status: stateInfo.status,
        x: event.clientX - containerRect.left + 12,
        y: event.clientY - containerRect.top - 12
      });
    } else {
      const pathElement = event.currentTarget as SVGPathElement;
      const bbox = pathElement.getBBox();
      const svgRect = pathElement.closest('svg')?.getBoundingClientRect();
      
      if (svgRect) {
        const svgX = bbox.x + bbox.width / 2;
        const svgY = bbox.y + bbox.height / 2;
        const scaleX = svgRect.width / 960;
        const scaleY = svgRect.height / 600;
        
        setHover({
          code,
          name: stateInfo.name,
          status: stateInfo.status,
          x: svgX * scaleX,
          y: svgY * scaleY - 20
        });
      }
    }
  };

  // Update container dimensions when hovering
  useEffect(() => {
    if (hover && mapContainerRef.current) {
      setContainerDimensions({
        width: mapContainerRef.current.offsetWidth,
        height: mapContainerRef.current.offsetHeight
      });
    }
  }, [hover]);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Luxury Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            <span>National Expansion in Progress</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 font-luxury-serif">
            <span className="block">Expanding Across</span>
            <span className="gradient-text-luxury">America</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Click on available states to explore coverage options, or join our waitlist for upcoming states. 
            We're rapidly expanding to serve families nationwide.
          </p>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {MAP_STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 lg:p-6 shadow-premium border border-slate-200 hover:shadow-luxury transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-lg mb-3">
                  <stat.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-slate-900 gradient-text-luxury mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-slate-700 mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Legend */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 mb-8 lg:mb-12"
        >
          <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-200">
            <span className="h-4 w-4 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-semibold text-slate-700">Active Now</span>
            <span className="text-xs text-slate-500 bg-emerald-100 px-2 py-1 rounded-full">6 states</span>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-200">
            <span className="h-4 w-4 rounded-full bg-blue-500" />
            <span className="text-sm font-semibold text-slate-700">Coming Soon</span>
            <span className="text-xs text-slate-500 bg-blue-100 px-2 py-1 rounded-full">22+ states</span>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-200">
            <span className="h-4 w-4 rounded-full bg-slate-300" />
            <span className="text-sm font-semibold text-slate-700">Not Available</span>
          </div>
        </motion.div>

        {/* Enhanced Map Container */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto"
        >
          <div
            ref={mapContainerRef}
            className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-6 lg:p-8 shadow-luxury border border-slate-200 relative overflow-hidden"
          >
            {/* Visual Masterpiece Background */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Animated Gradient Orbs */}
              <div className="absolute inset-0">
                <div className="absolute top-1/5 left-1/5 w-80 h-80 bg-gradient-to-br from-emerald-400/25 via-cyan-300/20 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/5 w-72 h-72 bg-gradient-to-br from-blue-400/20 via-emerald-300/25 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-2/3 left-2/3 w-56 h-56 bg-gradient-to-br from-cyan-300/15 via-blue-400/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
              </div>

              {/* Dynamic Light Streams */}
              <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-emerald-300/60 to-transparent transform -rotate-12 animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-300/50 to-transparent transform rotate-12 animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }} />
                <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-300/40 to-transparent transform -rotate-6 animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }} />
              </div>

              {/* Floating Interactive Elements */}
              <div className="absolute inset-0 opacity-25">
                <div className="absolute top-1/6 left-1/6 w-3 h-3 border border-emerald-400/60 rotate-45 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }} />
                <div className="absolute top-1/2 right-1/6 w-4 h-4 border border-cyan-400/50 rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '4s' }} />
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }} />
                <div className="absolute top-1/4 right-1/3 w-5 h-5 border-2 border-emerald-500/40 transform rotate-45 animate-spin" style={{ animationDuration: '12s' }} />
                <div className="absolute bottom-1/6 right-1/5 w-3 h-3 bg-gradient-to-br from-cyan-400/30 to-blue-400/20 rounded-full animate-ping" style={{ animationDelay: '3s', animationDuration: '5s' }} />
              </div>

              {/* Premium Texture Layers */}
              <div className="absolute inset-0 opacity-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_hsl(var(--emerald-400))_0.8px,_transparent_0.8px)] bg-[length:40px_40px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_hsl(var(--cyan-400))_0.5px,_transparent_0.5px)] bg-[length:28px_28px]" style={{ transform: 'rotate(30deg)' }} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,_hsl(var(--blue-400))_0.3px,_transparent_0.3px)] bg-[length:36px_36px]" style={{ transform: 'rotate(-15deg)' }} />
              </div>

              {/* Interconnected Network Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="mapNetworkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--emerald-500))" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="hsl(var(--cyan-500))" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(var(--blue-500))" stopOpacity="0.2" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <line x1="15%" y1="25%" x2="35%" y2="40%" stroke="url(#mapNetworkGradient)" strokeWidth="0.8" filter="url(#glow)" />
                <line x1="35%" y1="40%" x2="65%" y2="30%" stroke="url(#mapNetworkGradient)" strokeWidth="0.6" filter="url(#glow)" />
                <line x1="65%" y1="30%" x2="85%" y2="50%" stroke="url(#mapNetworkGradient)" strokeWidth="0.7" filter="url(#glow)" />
                <line x1="25%" y1="75%" x2="50%" y2="85%" stroke="url(#mapNetworkGradient)" strokeWidth="0.5" filter="url(#glow)" />
                <line x1="50%" y1="85%" x2="80%" y2="75%" stroke="url(#mapNetworkGradient)" strokeWidth="0.6" filter="url(#glow)" />
                <circle cx="15%" cy="25%" r="2.5" fill="hsl(var(--emerald-500))" opacity="0.7" filter="url(#glow)" />
                <circle cx="35%" cy="40%" r="2" fill="hsl(var(--cyan-500))" opacity="0.6" filter="url(#glow)" />
                <circle cx="65%" cy="30%" r="3" fill="hsl(var(--blue-500))" opacity="0.5" filter="url(#glow)" />
                <circle cx="85%" cy="50%" r="2" fill="hsl(var(--emerald-500))" opacity="0.6" filter="url(#glow)" />
                <circle cx="25%" cy="75%" r="2.5" fill="hsl(var(--cyan-500))" opacity="0.4" filter="url(#glow)" />
                <circle cx="50%" cy="85%" r="2" fill="hsl(var(--blue-500))" opacity="0.5" filter="url(#glow)" />
                <circle cx="80%" cy="75%" r="2.5" fill="hsl(var(--emerald-500))" opacity="0.6" filter="url(#glow)" />
              </svg>

              {/* Luxury Shimmer Wave */}
              <div className="absolute inset-0 opacity-15">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-emerald-200/10 to-transparent transform skew-x-6 animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }} />
              </div>
            </div>

            {/* Enhanced tooltip */}
            {hover && containerDimensions.width > 0 && (
              <MapTooltip
                isVisible={true}
                stateName={hover.name}
                status={hover.status}
                benefit={getStateInfo(hover.code).benefit}
                x={hover.x}
                y={hover.y}
                containerWidth={containerDimensions.width}
                containerHeight={containerDimensions.height}
              />
            )}

            {/* Map with enhanced styling */}
            <div className="mx-auto w-full max-w-[900px] relative z-10">
              <USMap
                getStateAttrs={getStateAttrs}
                onActivate={onActivate}
                onMouseEnter={(code, event) => updateTooltipPosition(code, event)}
                onMouseMove={(code, event) => hover?.code === code && updateTooltipPosition(code, event)}
                onMouseLeave={() => setHover(null)}
                onFocus={(code, event) => updateTooltipPosition(code, event)}
                onBlur={() => setHover(null)}
              />
            </div>

            {/* Mobile status indicator */}
            <div className="mt-6 text-center text-sm text-slate-500 lg:hidden" role="status" aria-live="polite">
              {hover ? `${hover.name} — ${hover.status}` : 'Tap a state for details'}
            </div>
          </div>
        </motion.div>

        {/* Enhanced call to action */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-50 via-white to-blue-50 rounded-2xl p-8 lg:p-12 border border-slate-200 max-w-3xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">
              Don't See Your State?
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Licensed professionals providing coverage solutions across six states.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Join Priority Waitlist
              </a>
              <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold rounded-xl transition-all duration-300">
                View Expansion Timeline
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
