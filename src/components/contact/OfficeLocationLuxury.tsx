import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Shield, Clock } from "lucide-react";
import Section from "../layout/Section";

export default function OfficeLocationLuxury() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const mapVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, delay: 0.3 }
    }
  };

  return (
    <Section className="relative bg-slate-900 overflow-hidden py-16 md:py-20">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--brand-sky-500) / 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(var(--brand-jade-500) / 0.15) 0%, transparent 50%),
                           radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.1), transparent),
                           radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.08), transparent)`,
          backgroundSize: '400px 400px, 400px 400px, 80px 80px, 80px 80px'
        }}
      />

      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={prefersReducedMotion ? {} : containerVariants}
            initial={prefersReducedMotion ? {} : "hidden"}
            whileInView={prefersReducedMotion ? {} : "visible"}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-luxury-serif font-bold text-white mb-8"
              variants={prefersReducedMotion ? {} : itemVariants}
            >
              Tampa Office Location
            </motion.h2>

            <div className="space-y-6">
              <motion.div 
                className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                variants={prefersReducedMotion ? {} : itemVariants}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-brand-jade-500 to-brand-sky-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg mb-1">4200 W Cypress St, Tampa, FL 33607</div>
                  <div className="text-slate-300 leading-relaxed">Best Insurance Group - where I proudly serve clients across Florida and beyond.</div>
                </div>
              </motion.div>

              <motion.div 
                className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                variants={prefersReducedMotion ? {} : itemVariants}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-brand-jade-500 to-brand-sky-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg mb-1">Licensed in Multiple States</div>
                  <div className="text-slate-300 leading-relaxed">Serving Florida, Georgia, South Carolina, Tennessee, Alabama, and Texas.</div>
                </div>
              </motion.div>

              <motion.div 
                className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                variants={prefersReducedMotion ? {} : itemVariants}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-brand-jade-500 to-brand-sky-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-white text-lg mb-1">Office Hours</div>
                  <div className="text-slate-300 leading-relaxed">Monday – Friday, 8:00 AM – 8:00 PM EST<br />Weekend appointments available upon request</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          <motion.div 
            className="relative"
            variants={prefersReducedMotion ? {} : mapVariants}
            initial={prefersReducedMotion ? {} : "hidden"}
            whileInView={prefersReducedMotion ? {} : "visible"}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              {/* Gradient overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-jade-500/20 to-brand-sky-500/20 mix-blend-overlay z-10" />
              
              <iframe
                title="Office map: 4200 W Cypress St, Tampa, FL 33607"
                loading="lazy"
                className="w-full h-80 md:h-96 lg:h-[28rem]"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=4200%20W%20Cypress%20St,%20Tampa,%20FL%2033607&output=embed"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-jade-500/20 to-brand-sky-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-brand-sky-500/20 to-brand-jade-500/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}