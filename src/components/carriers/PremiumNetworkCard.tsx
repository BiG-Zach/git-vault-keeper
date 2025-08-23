import { ExternalLink, CheckCircle2, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

export type Network = {
  name: string;
  logoSrc: string;
  description: string;
  rating?: string;
  highlights: string[];
  lookupUrl: string;
};

interface PremiumNetworkCardProps {
  network: Network;
  index: number;
}

export default function PremiumNetworkCard({ network, index }: PremiumNetworkCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div 
      className="h-full flex flex-col"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="h-full flex flex-col rounded-3xl shadow-lg border border-slate-100 bg-white backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:border-emerald-200 hover:scale-[1.02] hover:-translate-y-2 group relative overflow-hidden">
        {/* Premium background patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-white opacity-80" />
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.15) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />
        
        {/* Premium glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-100/0 via-emerald-100/30 to-emerald-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        
        {/* Header */}
        <div className="relative z-10 p-8 space-y-6">
          {/* Logo and Rating Row */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="bg-white/80 rounded-2xl p-4 w-fit shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <img 
                  src={network.logoSrc} 
                  alt={`${network.name} logo`}
                  className="h-16 w-auto object-contain filter brightness-100 contrast-110 transition-all duration-300 group-hover:brightness-110"
                  loading="lazy"
                />
              </div>
            </div>
            {network.rating && (
              <div className="ml-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-800 border border-emerald-200 backdrop-blur-sm shadow-sm">
                  <Star className="h-3 w-3 fill-emerald-600 text-emerald-600" />
                  {network.rating}
                </div>
              </div>
            )}
          </div>

          {/* Network Name */}
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-900 transition-colors duration-300">
            {network.name}
          </h3>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 px-8 space-y-6">
          {/* Description */}
          <p className="text-base text-slate-700 leading-relaxed font-medium group-hover:text-slate-800 transition-colors duration-300">
            {network.description}
          </p>

          {/* Highlights */}
          <div className="space-y-4">
            {network.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="p-1 bg-emerald-100 rounded-full mt-0.5 group-hover:bg-emerald-200 transition-colors duration-300">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                </div>
                <span className="text-sm text-slate-700 font-medium leading-relaxed flex-1">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer with CTA */}
        <div className="relative z-10 p-8 pt-4 mt-auto">
          <Button
            asChild
            className="w-full h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none font-bold text-base rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl border-0"
          >
            <a
              href={network.lookupUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Find your doctor on ${network.name} provider portal (opens in a new tab)`}
              data-gtm="premium_network_lookup_click"
              data-network={network.name}
            >
              <ExternalLink className="h-5 w-5 mr-3" />
              Find Your Doctor
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}