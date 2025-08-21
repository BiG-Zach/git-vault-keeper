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
                  ? 'bg-gradient-to-r from-big-navy-500/15 to-big-navy-600/15 text-big-navy-600 border-big-navy-500/30' 
                  : 'bg-gradient-to-r from-big-green-500/15 to-big-green-600/15 text-big-green-600 border-big-green-500/30'
              }`}>
                <Shield className="h-3 w-3" />
                {carrier.rating}
              </div>
            </div>
          )}
        </div>

        {/* Carrier Name */}
        <h3 className="text-2xl font-bold text-big-navy-500 mb-4 group-hover:text-big-navy-600 transition-colors duration-300">{carrier.name}</h3>
        
        {/* Description */}
        <p className="text-base text-big-neutral-800 mb-8 leading-relaxed font-medium">{carrier.description}</p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2">
          {carrier.specialties.map((specialty, index) => {
            const isServiceType = ['Health', 'PPO', 'Life', 'Supplemental'].includes(specialty);
            return (
              <span 
                key={index}
                className={`inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  isServiceType
                    ? 'bg-big-neutral-50 text-big-navy-500 border-big-navy-500/30' 
                    : 'bg-white text-big-neutral-800 border-big-neutral-800/20'
                }`}
              >
                {specialty}
              </span>
            );
          })}
        </div>
      </div>

      {/* Premium border glow */}
      <div className="absolute inset-0 rounded-2xl border border-big-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}