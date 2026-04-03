import React from 'react';
import { Star, Shield, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

export type Carrier = {
  name: string;
  logoSrc: string;
  description: string;
  rating?: string;
  specialties: string[];
  citation?: string;
  badge?: string;
};

interface LuxuryCarrierCardProps {
  carrier: Carrier;
  index: number;
}

const LuxuryCarrierCard = React.memo(function LuxuryCarrierCard({ carrier, index }: LuxuryCarrierCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const getSpecialtyIcon = (specialty: string) => {
    if (specialty.toLowerCase().includes('health') || specialty.toLowerCase().includes('ppo')) {
      return Shield;
    }
    if (specialty.toLowerCase().includes('life') || specialty.toLowerCase().includes('supplemental')) {
      return Award;
    }
    return Star;
  };

  return (
    <motion.div
      className="group relative h-full"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="h-full flex flex-col rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 relative overflow-hidden">
        {/* Dark luxury background with glass morphism */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl" />
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 group-hover:border-emerald-400/30 transition-colors duration-500" />
        
        {/* Premium glow effects */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
        
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col">
          {/* Header with Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 mb-4 group-hover:bg-white transition-colors duration-300 shadow-lg">
              <img 
                src={carrier.logoSrc} 
                alt={`${carrier.name} logo`}
                className="h-32 w-auto object-contain filter brightness-90 contrast-120"
                loading="lazy"
              />
            </div>
            
            {carrier.rating && (
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-bold text-emerald-300 border border-emerald-500/30 backdrop-blur-sm">
                <Star className="h-4 w-4 fill-emerald-400 text-emerald-400" />
                <span className="text-emerald-200">{carrier.rating}</span>
              </div>
            )}
          </div>

          {/* Carrier Name */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
            {carrier.name}
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-base leading-relaxed font-medium mb-6 flex-1 group-hover:text-slate-200 transition-colors duration-300">
            {carrier.description}
          </p>

          {/* Specialties */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
              Specialties
            </h4>
            <div className="flex flex-wrap gap-2">
              {carrier.specialties.map((specialty, idx) => {
                const Icon = getSpecialtyIcon(specialty);
                const isService = specialty.toLowerCase().includes('service') || 
                                specialty.toLowerCase().includes('support') ||
                                specialty.toLowerCase().includes('fast') ||
                                specialty.toLowerCase().includes('cost-effective') ||
                                specialty.toLowerCase().includes('regional') ||
                                specialty.toLowerCase().includes('cash') ||
                                specialty.toLowerCase().includes('largest') ||
                                specialty.toLowerCase().includes('nationwide');
                
                return (
                  <div
                    key={idx}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 border ${
                      isService
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30 group-hover:bg-cyan-500/30 group-hover:border-cyan-400/50'
                        : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30 group-hover:bg-emerald-500/30 group-hover:border-emerald-400/50'
                    }`}
                  >
                    <Icon className="h-3 w-3" />
                    {specialty}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default LuxuryCarrierCard;