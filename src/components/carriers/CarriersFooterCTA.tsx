import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { Calendar, FileText, Shield, Award, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { BRAND } from '../../lib/brand';

const features = [
  {
    icon: Shield,
    text: 'Licensed & Bonded in FL, MI, NC'
  },
  {
    icon: Award,
    text: 'A+ Rated Insurance Carriers'
  },
  {
    icon: Clock,
    text: 'Next-Day Approval Available'
  }
];

export default function CarriersFooterCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Premium light background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white">
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(34, 197, 94, 0.1) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
        {/* Premium gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 via-transparent to-cyan-50/50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Glass card container */}
          <div className="bg-white/80 backdrop-blur-md border border-white/60 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white/20 to-cyan-50/50 rounded-3xl" />
            
            <div className="relative z-10">
              {/* Header */}
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                  Ready to Find Your
                  <span className="block gradient-text-luxury">Perfect Coverage?</span>
                </h2>
                
                <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-12 leading-relaxed">
                  Our licensed brokers are standing by to help you compare options from our premium carrier network. 
                  Get personalized recommendations that fit your budget and healthcare needs.
                </p>
              </motion.div>

              {/* Features */}
              <motion.div 
                className="flex flex-wrap justify-center gap-6 mb-12"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 bg-emerald-50/80 rounded-2xl px-6 py-3 border border-emerald-100">
                      <div className="p-2 bg-emerald-100 rounded-xl">
                        <Icon className="h-5 w-5 text-emerald-600" />
                      </div>
                      <span className="text-slate-700 font-semibold">{feature.text}</span>
                    </div>
                  );
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 px-12 py-6 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border-0"
                >
                  <a
                    href={BRAND.phoneTel}
                    data-gtm="carriers_footer_cta"
                    data-action="schedule"
                  >
                    <Calendar className="h-6 w-6 mr-3" />
                    Schedule Free Consultation
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 bg-white/90 text-slate-700 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-800 px-12 py-6 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <a
                    href="/quote"
                    data-gtm="carriers_footer_cta" 
                    data-action="quote"
                  >
                    <FileText className="h-6 w-6 mr-3" />
                    Get Instant Quote
                  </a>
                </Button>
              </motion.div>

              {/* Trust indicator */}
              <motion.p 
                className="text-sm text-slate-600 mt-10 max-w-lg mx-auto"
                initial={shouldReduceMotion ? undefined : { opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Licensed and bonded insurance brokers serving Florida, Michigan, and North Carolina. 
                Plans to expand nationwide coming soon.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}