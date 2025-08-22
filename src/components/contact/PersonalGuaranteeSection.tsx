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
                className="group relative"
                variants={prefersReducedMotion ? {} : itemVariants}
              >
                {/* Card Background with Enhanced Effects */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/8 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
                  {/* Animated Glow Effects */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/20 via-blue-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-300"></div>
                  
                  <div className="relative z-10">
                    {/* Enhanced State Code Display */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                      <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl transition-all duration-500">
                        <span className="text-2xl font-bold font-luxury-serif group-hover:scale-110 transition-transform duration-300">
                          {state.code}
                        </span>
                      </div>
                    </div>
                    
                    {/* Enhanced State Name */}
                    <h4 className="text-2xl font-bold text-white mb-3 font-luxury-serif group-hover:text-teal-200 transition-colors duration-300">
                      {state.name}
                    </h4>
                    
                    {/* Enhanced Description */}
                    <p className="text-slate-300 leading-relaxed group-hover:text-white/90 transition-colors duration-300 mb-4">
                      {state.description}
                    </p>
                    
                    {/* Premium Accent Line */}
                    <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 max-w-2xl mx-auto overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl"></div>
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
              
              <div className="relative z-10">
                {/* Enhanced Icon */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-blue-500/30 rounded-2xl blur-xl animate-pulse"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                {/* Enhanced Heading */}
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-4 font-luxury-serif">
                  <span className="block">Ready to Experience</span>
                  <span className="block bg-gradient-to-r from-teal-200 to-blue-200 bg-clip-text text-transparent">
                    the Difference?
                  </span>
                </h4>
                
                {/* Enhanced Description */}
                <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-lg mx-auto">
                  Join over{" "}
                  <span className="font-bold text-white bg-gradient-to-r from-teal-200 to-blue-200 bg-clip-text text-transparent">
                    1,500 families
                  </span>{" "}
                  who trust Zach Bradford for their insurance needs.
                </p>
                
                {/* Enhanced Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:(689) 325-6570"
                    className="group/btn relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 group-hover/btn:scale-110 transition-transform duration-300">
                      Call (689) 325-6570
                    </span>
                  </a>
                  <a
                    href="https://calendly.com/bradfordinformedguidance"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-xl border-2 border-white/20 hover:bg-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}