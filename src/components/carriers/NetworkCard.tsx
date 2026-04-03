import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';

export type Network = {
  name: string;
  logoSrc: string;
  description: string;
  rating?: string;
  highlights: string[];
  lookupUrl: string;
};

interface NetworkCardProps {
  network: Network;
}

const NetworkCard = React.memo(function NetworkCard({ network }: NetworkCardProps) {
  return (
    <div className="h-full flex flex-col rounded-2xl shadow-sm border border-slate-200 bg-white/90 backdrop-blur-md transition-all duration-500 hover:shadow-xl hover:border-slate-300 hover:bg-white hover:scale-[1.02] hover:-translate-y-1 group relative">
      {/* Background effects behind content */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-100/50 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0" />
      
      {/* Header */}
      <div className="relative z-10 p-6 space-y-4">
        {/* Logo and Rating Row */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <img 
              src={network.logoSrc} 
              alt={`${network.name} logo`}
              className="h-16 w-auto object-contain filter brightness-100 contrast-110 transition-all duration-300 group-hover:brightness-110"
              loading="lazy"
            />
          </div>
          {network.rating && (
            <div className="ml-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs font-semibold text-green-700 border border-green-200 backdrop-blur-sm">
                <CheckCircle2 className="h-3 w-3" />
                {network.rating}
              </div>
            </div>
          )}
        </div>

        {/* Network Name */}
        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">{network.name}</h3>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 px-6 space-y-4">
        {/* Description */}
        <p className="text-base text-slate-700 leading-relaxed font-medium">{network.description}</p>

        {/* Highlights */}
        <div className="space-y-3">
          {network.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 text-slate-600 flex-shrink-0" />
              <span className="text-sm text-slate-700 font-medium">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer with CTA */}
      <div className="relative z-10 p-6 pt-4 mt-auto">
        <Button
          asChild
          className="w-full h-12 bg-brand-jade-500 text-white hover:bg-brand-jade-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-jade-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none bg-[#10B981] hover:bg-[#059669] font-bold text-base rounded-lg transition-all duration-300 hover:scale-[1.02] animate-pulse hover:animate-none shadow-lg hover:shadow-xl"
        >
          <a
            href={network.lookupUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Find your doctor on ${network.name} provider portal (opens in a new tab)`}
            data-gtm="network_lookup_click"
            data-network={network.name}
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            Find Your Doctor →
          </a>
        </Button>
      </div>
    </div>
  );
});

export default NetworkCard;