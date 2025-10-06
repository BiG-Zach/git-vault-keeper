import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Award, Clock, Users, MapPin, CheckCircle } from 'lucide-react';

const trustPoints = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Licensed in Six States",
    description: "Fully licensed across FL, GA, SC, TN, AL, and TX with local regulatory insight"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "15+ A-Rated Carriers",
    description: "Access to elite carrier lineups through Best Insurance Group partnership"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Education-First Approach",
    description: "No-pressure consultations focused on clarity before commitment"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "State-Specific Guidance",
    description: "Customized recommendations that respect each state's regulations"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24-Hour Response Promise",
    description: "Guaranteed follow-up on consultations and carrier questions"
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Ongoing Advocacy",
    description: "Claims, renewals, and escalations handled personally after enrollment"
  }
];

const credentials = [
  {
    icon: <Award className="w-10 h-10" />,
    label: "TrustMyProducer",
    value: "& NIPR Verified",
    description: "Dual verification for professional credibility"
  },
  {
    icon: <Clock className="w-10 h-10" />,
    label: "8+ Years",
    value: "Experience",
    description: "Serving multi-state families since 2016"
  },
  {
    icon: <Users className="w-10 h-10" />,
    label: "Best Insurance",
    value: "Group Partner",
    description: "Enterprise underwriting access and exclusive programs"
  }
];

export default function EnhancedProcessTrust() {
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
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-cyan-900/20" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-luxury-serif text-white mb-6">
            Why Families Across Six States Choose Me
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Multi-state credentials, no-pressure guidance, and enterprise-level support you can trust
          </p>
        </motion.div>

        {/* Trust points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: prefersReducedMotion ? 0 : index * 0.1 
              }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-emerald-500/25 transition-shadow duration-300">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      {point.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials showcase */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeOut", 
                    delay: prefersReducedMotion ? 0 : 0.4 + (index * 0.1)
                  }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-emerald-500/25 transition-shadow duration-300">
                      {credential.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white font-luxury-serif">
                    {credential.label}
                  </div>
                  <div className="text-xl font-semibold text-emerald-300 mb-2">
                    {credential.value}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {credential.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* NPN Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 pt-8 border-t border-white/20"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full px-6 py-3 text-white font-semibold shadow-lg">
                <Shield className="w-5 h-5" />
                <span>NPN: 18181266 - Best Insurance Group Partner</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}