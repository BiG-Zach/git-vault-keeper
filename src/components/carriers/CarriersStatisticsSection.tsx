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
    number: '20+',
    label: 'Years Experience',
    description: 'Combined industry expertise',
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
          className="text-center mb-16"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by <span className="text-emerald-400">Thousands of Families</span> Across
            <span className="block text-emerald-400">Three States</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            My <span className="text-white font-semibold">proven track record delivers results</span>. 
            <span className="text-emerald-300 font-medium">Licensed and bonded professional</span> serving 
            <span className="text-white font-medium">Florida, Michigan, and North Carolina</span> with 
            <span className="text-emerald-300">expanding nationwide reach</span>.
          </p>
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