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
        <div className="flex items-start justify-between mb-8">
          <div className="flex-1">
            <img 
              src={carrier.logoSrc} 
              alt={`${carrier.name} logo`}
              className="h-16 w-auto object-contain filter brightness-100 contrast-110 transition-all duration-300 group-hover:brightness-110"
              loading="lazy"
            />
          </div>
          {carrier.rating && (
            <div className="ml-4">
              <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold border backdrop-blur-sm ${
                carrier.rating.includes('A+') || carrier.rating.includes('A (') 
                  ? 'bg-gradient-to-r from-green-500/15 to-green-600/15 text-green-600 border-green-500/30' 
                  : 'bg-gradient-to-r from-blue-500/15 to-blue-600/15 text-blue-600 border-blue-500/30'
              }`}>
                <Shield className="h-3 w-3" />
                {carrier.rating}
              </div>
            </div>
          )}
        </div>

        {/* Carrier Name */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-sky-600 transition-colors duration-300">{carrier.name}</h3>
        
        {/* Description */}
        <p className="text-base text-gray-700 mb-8 leading-relaxed font-medium">{carrier.description}</p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2">
          {carrier.specialties.map((specialty, index) => (
            <span 
              key={index}
              className={`inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                specialty === 'Next-day approval' 
                  ? 'bg-gradient-to-r from-orange-500/15 to-orange-600/15 text-orange-600 border-orange-500/30 animate-pulse' 
                  : 'bg-gradient-to-r from-brand-sky-500/15 to-brand-sky-600/15 text-brand-sky-600 border-brand-sky-500/30'
              }`}
            >
              {specialty === 'Next-day approval' && '⚡ '}
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