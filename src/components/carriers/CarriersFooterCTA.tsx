import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { Calendar, FileText, Shield, Award, Clock } from 'lucide-react';
import { Button } from '../ui/button';

const features = [
  {
    icon: Shield,
    text: 'Licensed & Bonded: FL, MI, NC, AZ, TX, GA'
  },
  {
    icon: Award,
    text: 'Exclusive A+ Rated Carriers'
  },
  {
    icon: Clock,
    text: 'Up to 50% Savings (If You Qualify)'
  }
];

export default function CarriersFooterCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
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
          <div className="bg-white/90 backdrop-blur-md border-2 border-emerald-100/50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-white/10 to-cyan-50/40 rounded-3xl" />
            
            <div className="relative z-10">
              {/* Header */}
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-900 leading-tight">
                  Ready to Find Your
                  <span className="block gradient-text-luxury">Perfect Coverage?</span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
                  Get personalized carrier recommendations from my exclusive Best Insurance Group network.
                  <strong className="text-slate-900">Qualified healthy applicants can save up to 50%</strong> compared to unsubsidized marketplace plans, plus get priority underwriting and claims advocacy.
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
                    <div key={index} className="flex items-center gap-2 md:gap-3 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl md:rounded-2xl px-4 md:px-6 py-2 md:py-3 border-2 border-emerald-200/50">
                      <div className="p-1.5 md:p-2 bg-emerald-100 rounded-lg md:rounded-xl">
                        <Icon className="h-4 w-4 md:h-5 md:w-5 text-emerald-600" />
                      </div>
                      <span className="text-xs sm:text-sm md:text-base text-slate-700 font-semibold">{feature.text}</span>
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
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-600 hover:to-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border-0 w-full sm:w-auto"
                >
                  <a
                    href="https://calendly.com/bradfordinformedguidance"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-gtm="carriers_footer_cta"
                    data-action="schedule"
                    className="flex items-center justify-center"
                  >
                    <Calendar className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                    <span>Get Personalized Recommendations</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-emerald-300 bg-white text-slate-700 hover:bg-emerald-50 hover:border-emerald-400 hover:text-slate-800 px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  <a
                    href="/quote"
                    data-gtm="carriers_footer_cta"
                    data-action="quote"
                    className="flex items-center justify-center"
                  >
                    <FileText className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                    <span>Preview Carrier Options</span>
                  </a>
                </Button>
              </motion.div>

              {/* Trust indicator */}
              <motion.p
                className="text-xs sm:text-sm text-slate-600 mt-8 md:mt-10 max-w-2xl mx-auto px-4"
                initial={shouldReduceMotion ? undefined : { opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Licensed and bonded insurance broker serving Florida, Michigan, North Carolina, Arizona, Texas, and Georgia.
                <strong className="text-slate-700">Best Insurance Group partnership since 2020</strong> delivers exclusive carrier access and preferred rates.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

