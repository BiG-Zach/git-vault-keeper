import { ExternalLink, CheckCircle2 } from 'lucide-react';

export type Network = {
  name: string;
  logoSrc: string;
  description: string;
  highlights: string[];
  lookupUrl: string;
};

interface NetworkCardProps {
  network: Network;
}

export default function NetworkCard({ network }: NetworkCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-500 hover:shadow-luxury hover:border-brand-jade-500/30 hover:bg-white/8 hover:scale-[1.02] hover:-translate-y-1">
      {/* Premium glass background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Premium glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-jade-500/20 to-brand-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative z-10">
        {/* Logo and Badge Row */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <img 
              src={network.logoSrc} 
              alt={`${network.name} logo`}
              className="h-14 w-auto object-contain filter brightness-100 contrast-110 transition-all duration-300 group-hover:brightness-110"
              loading="lazy"
            />
          </div>
          <div className="ml-4">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-jade-500/15 to-brand-jade-600/15 px-4 py-2 text-xs font-semibold text-brand-jade-500 border border-brand-jade-500/30 backdrop-blur-sm shadow-glow/30">
              PPO Network
            </span>
          </div>
        </div>

        {/* Network Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-jade-600 transition-colors duration-300">{network.name}</h3>
        
        {/* Description */}
        <p className="text-sm text-gray-700 mb-6 leading-relaxed font-medium">{network.description}</p>

        {/* Highlights */}
        <div className="space-y-3 mb-8">
          {network.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 text-brand-jade-500 flex-shrink-0" />
              <span className="text-sm text-gray-800 font-medium">{highlight}</span>
            </div>
          ))}
        </div>

        {/* CTA Button - ENHANCED VISIBILITY */}
        <a
          href={network.lookupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn relative inline-flex items-center gap-3 w-full justify-center rounded-xl bg-gradient-to-r from-brand-jade-500 to-brand-jade-600 px-6 py-4 text-sm font-bold text-white hover:from-brand-jade-600 hover:to-brand-jade-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-jade-500/50 focus:ring-offset-2 shadow-xl hover:shadow-2xl hover:scale-105 transform-gpu"
          aria-label={`Find your doctor on ${network.name} provider portal — opens in a new tab`}
          data-gtm="network_lookup_click"
          data-network={network.name}
        >
          {/* Button glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-jade-400 to-brand-jade-500 opacity-0 group-hover/btn:opacity-75 transition-opacity duration-300 blur-md" />
          
          <ExternalLink className="h-5 w-5 relative z-10" />
          <span className="relative z-10">Find Your Doctor</span>
          
          {/* Shine effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transform -skew-x-12 group-hover/btn:translate-x-full transition-all duration-700" />
        </a>
      </div>

      {/* Premium border glow */}
      <div className="absolute inset-0 rounded-2xl border border-gradient-to-r from-brand-jade-500/30 to-brand-sky-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}