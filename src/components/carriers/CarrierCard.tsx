import React from 'react';
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

const CarrierCard = React.memo(function CarrierCard({ carrier }: CarrierCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-md p-6 transition-all duration-500 hover:shadow-xl hover:border-slate-300 hover:bg-white hover:scale-[1.02] hover:-translate-y-1">
      {/* Premium glass background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Premium glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-100/50 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
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
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors duration-300">{carrier.name}</h3>
        
        {/* Description */}
        <p className="text-base text-slate-700 mb-8 leading-relaxed font-medium">{carrier.description}</p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2">
          {carrier.specialties.map((specialty, index) => {
            const isServiceType = ['Health', 'PPO', 'Life', 'Supplemental'].includes(specialty);
            return (
              <span 
                key={index}
                className={`inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  isServiceType
                    ? 'bg-slate-100 text-slate-700 border-slate-300' 
                    : 'bg-slate-50 text-slate-600 border-slate-200'
                }`}
              >
                {specialty}
              </span>
            );
          })}
        </div>
      </div>

      {/* Premium border glow */}
      <div className="absolute inset-0 rounded-2xl border border-gradient-to-r from-brand-sky-500/30 to-brand-jade-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
});

export default CarrierCard;