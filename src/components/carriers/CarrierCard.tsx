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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-500 hover:shadow-luxury hover:border-brand-sky-500/30 hover:bg-white/8 hover:scale-[1.02] hover:-translate-y-1">
      {/* Premium glass background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Premium glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-sky-500/20 to-brand-jade-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative z-10">
        {/* Logo and Rating Row */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <img 
              src={carrier.logoSrc} 
              alt={`${carrier.name} logo`}
              className="h-14 w-auto object-contain filter brightness-100 contrast-110 transition-all duration-300 group-hover:brightness-110"
              loading="lazy"
            />
          </div>
          {carrier.rating && (
            <div className="ml-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-success-500/15 to-brand-success-600/15 px-4 py-2 text-xs font-semibold text-brand-success-500 border border-brand-success-500/30 backdrop-blur-sm">
                <Shield className="h-3 w-3" />
                {carrier.rating}
              </div>
            </div>
          )}
        </div>

        {/* Carrier Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-sky-600 transition-colors duration-300">{carrier.name}</h3>
        
        {/* Description */}
        <p className="text-sm text-gray-700 mb-6 leading-relaxed font-medium">{carrier.description}</p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2">
          {carrier.specialties.map((specialty, index) => (
            <span 
              key={index}
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-brand-sky-500/15 to-brand-sky-600/15 px-3 py-1.5 text-xs font-semibold text-brand-sky-600 border border-brand-sky-500/30 backdrop-blur-sm transition-all duration-300 hover:from-brand-sky-500/25 hover:to-brand-sky-600/25 hover:scale-105"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {/* Premium border glow */}
      <div className="absolute inset-0 rounded-2xl border border-gradient-to-r from-brand-sky-500/30 to-brand-jade-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}