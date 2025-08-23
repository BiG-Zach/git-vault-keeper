import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { Shield, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  {
    number: '8',
    label: 'Premium Carriers',
    description: 'A+ rated insurance companies',
    icon: Shield
  },
  {
    number: '1.3M+',
    label: 'Healthcare Providers',
    description: 'Nationwide PPO network access',
    icon: Users
  },
  {
    number: '$2,400',
    label: 'Average Annual Savings',
    description: 'Typical family savings with optimized coverage',
    icon: Award
  },
  {
    number: '98%',
    label: 'Client Satisfaction',
    description: 'Same-day approval rate',
    icon: TrendingUp
  }
];

export default function CarriersStatisticsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dark luxury background with patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Radial dot pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20 relative"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Decorative background glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-emerald-500/20 via-emerald-500/10 to-transparent rounded-full blur-3xl opacity-60" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-radial from-cyan-500/15 via-cyan-500/5 to-transparent rounded-full blur-2xl opacity-40" />
          </div>

          {/* Trust Badge */}
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full border border-emerald-400/30 backdrop-blur-md mb-8 shadow-glow"
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-glow" />
            <span className="text-sm font-semibold text-emerald-300 tracking-wide">LICENSED & BONDED PROFESSIONAL</span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-glow" />
          </motion.div>

          {/* Main Headline with Enhanced Typography */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight font-luxury-serif"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="inline-block">Trusted by </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent font-black">
                Thousands of Families
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/60 to-cyan-500/60 rounded-full opacity-80" />
            </span>
            <span className="block mt-2">Across </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-black">
                Three States
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/60 to-cyan-500/60 rounded-full opacity-80" />
            </span>
          </motion.h2>

          {/* Enhanced Subheadline */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-6">
              My <span className="relative inline-block text-white font-bold">
                proven track record delivers results
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full opacity-70" />
              </span>. 
            </p>
            <p className="text-lg lg:text-xl text-slate-400 leading-relaxed">
              <span className="text-emerald-300 font-semibold">Licensed and bonded professional</span> serving 
              <span className="text-white font-medium px-2 py-1 bg-white/10 rounded-md mx-1">Florida, Michigan, and North Carolina</span> with 
              <span className="text-emerald-300 font-medium">expanding nationwide reach</span>.
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div 
            className="flex justify-center items-center gap-8 mt-12"
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="hidden md:block w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-glow animate-pulse" />
              <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-glow animate-pulse delay-300" />
              <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-glow animate-pulse delay-700" />
            </div>
            <div className="hidden md:block w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  {/* Glass card */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-emerald-400/50">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-emerald-500/20 rounded-2xl group-hover:bg-emerald-500/30 transition-colors duration-300">
                        <Icon className="h-8 w-8 text-emerald-400" />
                      </div>
                    </div>
                    
                    {/* Number */}
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <div className="text-lg font-semibold text-slate-200 mb-2">
                      {stat.label}
                    </div>
                    
                    {/* Description */}
                    <div className="text-sm text-slate-400">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 text-lg">
            Ready to join our satisfied clients?{' '}
            <a 
              href="/quote" 
              className="text-emerald-400 hover:text-emerald-300 underline decoration-emerald-400 underline-offset-4 transition-colors duration-300"
            >
              Get your quote today
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}