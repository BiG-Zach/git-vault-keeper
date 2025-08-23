import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Phone, Shield, Award, Users, MessageCircle } from 'lucide-react';

export default function ResourcesAuthorCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-blue-900/20" />
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-luxury-serif text-white mb-6">
            Ready to Secure Your Family's Future?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get personalized insurance guidance from Zach Bradford, your trusted Florida-licensed advisor
          </p>
        </motion.div>

        {/* Author credentials card */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2 font-luxury-serif">
              Zach Bradford
            </h3>
            <p className="text-emerald-300 font-semibold">
              Licensed Insurance Broker | FL License W347851
            </p>
          </div>

          {/* Quick credentials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-white font-semibold">Licensed & Bonded</div>
              <div className="text-slate-400 text-sm">Professional protection</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-white font-semibold">8+ Years Experience</div>
              <div className="text-slate-400 text-sm">Since 2016</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-white font-semibold">1,000+ Families</div>
              <div className="text-slate-400 text-sm">Helped since 2016</div>
            </div>
          </div>

          {/* Personal message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 rounded-2xl p-6 mb-8"
          >
            <div className="flex items-start gap-4">
              <MessageCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-white italic font-luxury-serif leading-relaxed">
                  "I believe every family deserves honest, expert guidance when it comes to protecting their financial future. My goal is to simplify the complex world of insurance and help you make confident decisions that serve your family's best interests."
                </p>
                <div className="text-emerald-300 font-semibold mt-3">
                  — Zach Bradford
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="https://calendly.com/bradfordinformedguidance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 font-luxury-sans"
          >
            <Calendar className="w-5 h-5 mr-3" />
            Schedule Free Consultation
          </a>
          
          <a
            href="tel:(689) 325-6570"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/15 transition-all duration-300 font-luxury-sans"
          >
            <Phone className="w-5 h-5 mr-3" />
            Call (689) 325-6570
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Licensed & Bonded Professional</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-400 rounded-full" />
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>A-Rated Carriers Only</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-400 rounded-full" />
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>No-Pressure Consultations</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}