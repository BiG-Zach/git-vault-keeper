import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Calendar, Mail, CheckCircle } from "lucide-react";
import Section from "../layout/Section";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

function ContactCard({ icon, title, subtitle, children, className = "" }: ContactCardProps) {
  return (
    <div className={`group relative bg-white/70 backdrop-blur-sm border border-white/20 shadow-luxury rounded-2xl p-6 hover:bg-white/80 hover:shadow-xl transition-all duration-300 ${className}`}>
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 font-luxury-serif">{title}</h3>
            {subtitle && <p className="text-teal-600 font-semibold">{subtitle}</p>}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function PremiumContactMethods() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-luxury-serif font-bold text-slate-900 mb-6"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Connect Directly with Zach Bradford
        </motion.h2>
        <motion.p 
          className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Multiple ways to reach me personally – no call centers, no middlemen
        </motion.p>
      </div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={prefersReducedMotion ? {} : containerVariants}
        initial={prefersReducedMotion ? {} : "hidden"}
        whileInView={prefersReducedMotion ? {} : "visible"}
        viewport={{ once: true }}
      >
        {/* Primary Phone Contact */}
        <motion.div variants={prefersReducedMotion ? {} : itemVariants} className="md:col-span-2 lg:col-span-1">
          <ContactCard
            icon={<Phone className="w-6 h-6" />}
            title="(689) 325-6570"
            subtitle="Call or Text Me Directly"
          >
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-slate-700">Speak with me personally, not a call center</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-slate-700">Available by phone 9 AM - 6 PM EST, Monday-Friday</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-slate-700">Text for after-hours questions - I'll respond quickly</span>
              </div>
            </div>
            <a
              href="tel:(689) 325-6570"
              className="group/btn inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
              Call Now
            </a>
          </ContactCard>
        </motion.div>

        {/* Consultation Booking */}
        <motion.div variants={prefersReducedMotion ? {} : itemVariants}>
          <ContactCard
            icon={<Calendar className="w-6 h-6" />}
            title="Schedule Time with Me"
            subtitle="Personal Consultation"
          >
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-slate-700">Phone consultations available</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-slate-700">Evenings and weekends by appointment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-slate-700">Usually available within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-slate-700">Free 15-30 minute consultations</span>
              </div>
            </div>
            <a
              href="https://calendly.com/bradfordinformedguidance"
              className="group/btn inline-flex items-center justify-center w-full px-6 py-4 bg-blue-500 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
              Schedule Free Consultation
            </a>
          </ContactCard>
        </motion.div>

        {/* Email Contact */}
        <motion.div variants={prefersReducedMotion ? {} : itemVariants}>
          <ContactCard
            icon={<Mail className="w-6 h-6" />}
            title="Email Me Directly"
            subtitle="zbradford@bradfordinformedguidance.com"
          >
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-slate-700">Detailed questions welcome - I read every email</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-slate-700">Personal response within 4 business hours</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-slate-700">Secure document sharing available</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-slate-700">Perfect for non-urgent questions</span>
              </div>
            </div>
            <a
              href="mailto:zbradford@bradfordinformedguidance.com"
              className="group/btn inline-flex items-center justify-center w-full px-6 py-4 bg-slate-600 text-white font-semibold rounded-xl shadow-lg hover:bg-slate-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
              Send Email
            </a>
          </ContactCard>
        </motion.div>
      </motion.div>
    </Section>
  );
}