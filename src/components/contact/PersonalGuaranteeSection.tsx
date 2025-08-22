import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Shield, Clock, CheckCircle, Heart, Star, Users } from "lucide-react";
import Section from "../layout/Section";

const guarantees = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "4-Hour Response Guarantee",
    description: "I personally respond to every message within 4 business hours - no exceptions."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "No Pressure Promise",
    description: "I'll never pressure you into a policy. My job is to educate and guide, not sell."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Personal Service Commitment",
    description: "You'll work directly with me throughout the entire process - no handoffs to junior staff."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Best Rate Guarantee",
    description: "If you find a better rate elsewhere, I'll work to match it or explain why it might not be comparable."
  }
];

const states = [
  { code: "FL", name: "Florida", description: "My home base - full state coverage from Tampa" },
  { code: "MI", name: "Michigan", description: "Licensed and ready to serve Michigan residents" },
  { code: "NC", name: "North Carolina", description: "Expanding coverage to serve North Carolina families" }
];

export default function PersonalGuaranteeSection() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section className="relative bg-slate-900 overflow-hidden py-16 md:py-20">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--brand-sky-500) / 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(var(--brand-jade-500) / 0.15) 0%, transparent 50%),
                           radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.12), transparent),
                           radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.08), transparent)`,
          backgroundSize: '400px 400px, 400px 400px, 80px 80px, 80px 80px'
        }}
      />

      <div className="relative z-10">
        {/* Personal Guarantees */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-luxury-serif font-bold text-white mb-6"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              My Personal Service Guarantees
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              When you work with me, you're getting more than just insurance - you're getting a commitment to excellence
            </motion.p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={prefersReducedMotion ? {} : containerVariants}
            initial={prefersReducedMotion ? {} : "hidden"}
            whileInView={prefersReducedMotion ? {} : "visible"}
            viewport={{ once: true }}
          >
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                variants={prefersReducedMotion ? {} : itemVariants}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-jade-500/20 to-brand-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-jade-500 to-brand-sky-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {guarantee.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 font-luxury-serif">
                        {guarantee.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {guarantee.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* State Licensing */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center mb-12">
            <motion.h3 
              className="text-2xl md:text-3xl font-luxury-serif font-bold text-white mb-6"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Licensed to Help You in These States
            </motion.h3>
            <motion.p 
              className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Currently serving three states with plans for nationwide expansion
            </motion.p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={prefersReducedMotion ? {} : containerVariants}
            initial={prefersReducedMotion ? {} : "hidden"}
            whileInView={prefersReducedMotion ? {} : "visible"}
            viewport={{ once: true }}
          >
            {states.map((state, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                variants={prefersReducedMotion ? {} : itemVariants}
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-jade-400 mb-2 font-luxury-serif">
                  {state.code}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 font-luxury-serif">
                  {state.name}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {state.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-12"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-jade-500 to-brand-sky-500 rounded-xl flex items-center justify-center text-white">
                  <Users className="w-8 h-8" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-3 font-luxury-serif">
                Ready to Experience the Difference?
              </h4>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Join over 1,500 families who trust Zach Bradford for their insurance needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:(689) 325-6570"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-jade-600 to-brand-sky-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Call (689) 325-6570
                </a>
                <a
                  href="https://calendly.com/bradfordinformedguidance"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}