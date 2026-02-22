import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, ShieldCheck } from 'lucide-react';

const standards = [
  {
    id: 'compassion',
    icon: Heart,
    title: 'Compassion',
    subtitle: 'Families First, Always.',
    description: 'We don’t serve algorithms; we serve families. Every recommendation is made as if it were for our own parents or children.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20'
  },
  {
    id: 'clarity',
    icon: Lightbulb,
    title: 'Clarity',
    subtitle: 'Zero Jargon. Zero BS.',
    description: 'We demystify the chaos. You will leave every conversation understanding exactly what you bought and why you need it.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20'
  },
  {
    id: 'compliance',
    icon: ShieldCheck,
    title: 'Compliance',
    subtitle: 'Regulatory Ironclad.',
    description: 'We operate with military precision regarding state laws and carrier protocols. Your protection is our license.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20'
  }
];

export default function AuthoritySection() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Our Operating System
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight"
          >
            The Bradford Standard.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            In an industry famous for confusion, we deal in absolute truth. <br className="hidden md:block" />
            Three non-negotiable pillars drive every decision we make.
          </motion.p>
        </div>

        {/* The 3 C's Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {standards.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative"
            >
              <div className={`h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 backdrop-blur-md transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/20 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] relative overflow-hidden`}>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${item.bg.replace('bg-', 'from-').replace('/10', '/30')} to-transparent pointer-events-none`} />

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-black/20`}>
                  <item.icon className={`w-8 h-8 ${item.color} drop-shadow-md`} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-3xl font-serif font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors">{item.title}</h3>
                <p className={`text-xs font-bold uppercase tracking-[0.15em] mb-6 ${item.color} opacity-90 group-hover:opacity-100 transition-opacity`}>
                  {item.subtitle}
                </p>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}