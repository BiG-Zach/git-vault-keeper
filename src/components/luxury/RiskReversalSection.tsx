import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Clock, CheckCircle, Star, Phone } from 'lucide-react';
import { BRAND } from '../../lib/brand';

const RiskReversalSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const guarantees = [
    {
      icon: Shield,
      title: "100% Money-Back Guarantee",
      description: "If you're not completely satisfied with our service within 30 days, we'll refund every penny. No questions asked.",
      badge: "30-Day Promise"
    },
    {
      icon: Clock,
      title: "No-Obligation Quotes",
      description: "Get comprehensive quotes with zero commitment. Compare options at your own pace without any pressure or hidden fees.",
      badge: "Always Free"
    },
    {
      icon: CheckCircle,
      title: "Free Expert Consultation",
      description: "Receive personalized guidance from licensed professionals. Our experts review your needs and recommend the best options.",
      badge: "Licensed Pros"
    }
  ];

  const trustSignals = [
    { icon: Star, text: "A+ BBB Rating" },
    { icon: Shield, text: "Licensed & Bonded" },
    { icon: CheckCircle, text: "5,000+ Families Served" },
    { icon: Phone, text: `${BRAND.hours} Support` }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Luxury background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Risk-Free Promise</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-luxury-serif">
            Your Peace of Mind is
            <span className="block gradient-text-luxury">Guaranteed</span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We're so confident in our service that we remove all the risk. Experience the Bradford difference with complete confidence and zero obligation.
          </p>
        </motion.div>

        {/* Guarantees Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-500 group-hover:bg-white/10 h-full">
                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-xs font-semibold mb-6">
                  {guarantee.badge}
                </div>
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <guarantee.icon className="w-8 h-8 text-emerald-400" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 font-luxury-serif">
                  {guarantee.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 lg:p-12 border border-white/20 max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-luxury-serif">
              Ready to Experience the Difference?
            </h3>
            
            <p className="text-slate-300 mb-8 leading-relaxed">
              Join thousands of satisfied families who've discovered better coverage, significant savings, and exceptional service. 
              Your journey to better health insurance starts with a simple, no-obligation quote.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/lead"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
                data-gtm={`${BRAND.gtm.quote}_risk_reversal`}
              >
                Get Your Risk-Free Quote
              </a>
              
              <a
                href={BRAND.phoneTel}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 backdrop-blur-md transition-all duration-300"
                data-gtm={`${BRAND.gtm.call}_risk_reversal`}
              >
                <Phone className="w-4 h-4 mr-2" />
                {BRAND.phoneHuman}
              </a>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center justify-center gap-2 text-slate-300 text-sm">
                  <signal.icon className="w-4 h-4 text-emerald-400" />
                  <span>{signal.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RiskReversalSection;