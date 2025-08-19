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
    <div className="group relative overflow-hidden rounded-2xl border border-surface-glassLine/20 bg-surface-glass backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-luxury hover:border-brand-jade-500/30">
      <div className="relative z-10">
        {/* Logo and Badge Row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <img 
              src={network.logoSrc} 
              alt={`${network.name} logo`}
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
          </div>
          <div className="ml-4">
            <span className="inline-flex items-center rounded-full bg-brand-jade-500/10 px-3 py-1 text-xs font-medium text-brand-jade-600 border border-brand-jade-500/20">
              PPO Network
            </span>
          </div>
        </div>

        {/* Network Name */}
        <h3 className="text-lg font-semibold text-ink-900 mb-2">{network.name}</h3>
        
        {/* Description */}
        <p className="text-sm text-ink-900/70 mb-4 leading-relaxed">{network.description}</p>

        {/* Highlights */}
        <div className="space-y-2 mb-6">
          {network.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-jade-500 flex-shrink-0" />
              <span className="text-sm text-ink-900/80">{highlight}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href={network.lookupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 w-full justify-center rounded-xl bg-brand-jade-500 px-4 py-3 text-sm font-medium text-white hover:bg-brand-jade-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-jade-500 focus:ring-offset-2"
          aria-label={`Find your doctor on ${network.name} provider portal — opens in a new tab`}
          data-gtm="network_lookup_click"
          data-network={network.name}
        >
          <ExternalLink className="h-4 w-4" />
          Find Your Doctor
        </a>
      </div>

      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-jade-500/5 to-brand-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}