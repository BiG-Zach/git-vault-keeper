import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MapPin, DollarSign } from 'lucide-react';

export default function TrustInfrastructure() {
  const stats = [
    {
      icon: CheckCircle,
      label: "Industry Leading",
      headline: "99% Success Rate",
      subhead: "Exceptional Claims Approval",
      desc: "Our proven track record of securing approvals and maximizing benefits means you get the coverage you deserve, when you need it most.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100"
    },
    {
      icon: MapPin,
      label: "Coast to Coast",
      headline: "Complete US Coverage",
      subhead: "1.4M+ Providers Nationwide",
      desc: "Access to 6 major PPO networks spanning all 50 states. See the doctors you want, anywhere in the country.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      icon: DollarSign,
      label: "Save More",
      headline: "Multi-Carrier Comparison",
      subhead: "Compare Rates from 10+ Carriers",
      desc: "We don't work for one company. We force carriers to compete for your business, ensuring you find the best value.",
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto px-4">
      {stats.map((stat, idx) => (
        <motion.div
          key={stat.headline}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className={`relative group bg-white rounded-3xl p-8 border ${stat.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
        >
          {/* Label Badge */}
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${stat.bg} ${stat.color} text-[10px] font-bold uppercase tracking-widest mb-6`}>
            <stat.icon className="w-3 h-3" />
            {stat.label}
          </div>

          {/* Headline */}
          <h3 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">
            {stat.headline}
          </h3>
          
          {/* Subhead */}
          <p className={`text-sm font-bold uppercase tracking-wide mb-4 ${stat.color} opacity-90`}>
            {stat.subhead}
          </p>
          
          {/* Description */}
          <p className="text-slate-500 leading-relaxed text-sm">
            {stat.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}