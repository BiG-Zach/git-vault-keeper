import { Shield } from 'lucide-react';

export type Carrier = {
  name: string;
  logoSrc: string;
  description: string;
  rating?: string;
  specialties: string[];
};

interface CarrierCardProps {
  carrier: Carrier;
}

export default function CarrierCard({ carrier }: CarrierCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-surface-glassLine/20 bg-surface-glass backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-luxury hover:border-brand-sky-500/30">
      <div className="relative z-10">
        {/* Logo and Rating Row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <img 
              src={carrier.logoSrc} 
              alt={`${carrier.name} logo`}
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
          </div>
          {carrier.rating && (
            <div className="ml-4">
              <div className="inline-flex items-center gap-1 rounded-full bg-brand-success-500/10 px-3 py-1 text-xs font-medium text-brand-success-500 border border-brand-success-500/20">
                <Shield className="h-3 w-3" />
                {carrier.rating}
              </div>
            </div>
          )}
        </div>

        {/* Carrier Name */}
        <h3 className="text-lg font-semibold text-ink-900 mb-2">{carrier.name}</h3>
        
        {/* Description */}
        <p className="text-sm text-ink-900/70 mb-4 leading-relaxed">{carrier.description}</p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2">
          {carrier.specialties.map((specialty, index) => (
            <span 
              key={index}
              className="inline-flex items-center rounded-lg bg-brand-sky-500/10 px-2.5 py-1 text-xs font-medium text-brand-sky-600 border border-brand-sky-500/20"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-sky-500/5 to-brand-jade-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}