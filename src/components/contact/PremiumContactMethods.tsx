import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Calendar, Mail, CheckCircle } from "lucide-react";
import VerificationBadge from "../trust/VerificationBadge";
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
    <Section className="relative py-16 md:py-20 overflow-hidden">
      {/* Visual Masterpiece Background */}
      <div className="absolute inset-0">
        {/* Primary Luxury Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-100/80 to-transparent rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-blue-100/70 to-transparent rounded-full blur-3xl animate-pulse delay-1000 transform translate-x-1/2"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-cyan-100/60 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Premium Light Streaks */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-teal-300 via-transparent to-blue-300 transform rotate-12"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-blue-300 via-transparent to-cyan-300 transform -rotate-6"></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-cyan-200 via-transparent to-teal-200 transform rotate-3"></div>
        </div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/5 w-32 h-32 border border-teal-200/40 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-24 h-24 border border-blue-200/30 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/2 left-2/3 w-16 h-16 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-lg animate-pulse delay-1000 transform rotate-45"></div>
        </div>
        
        {/* Luxury Texture Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(20,184,166,0.08) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(59,130,246,0.06) 0%, transparent 50%),
              radial-gradient(circle at 50% 80%, rgba(6,182,212,0.05) 0%, transparent 50%),
              linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.05) 49%, rgba(255,255,255,0.05) 51%, transparent 52%),
              radial-gradient(2px 2px at 30px 40px, rgba(20,184,166,0.1), transparent),
              radial-gradient(1px 1px at 60px 80px, rgba(59,130,246,0.08), transparent)
            `,
            backgroundSize: '500px 500px, 400px 400px, 300px 300px, 100px 100px, 120px 120px, 80px 80px'
          }}
        />
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"
            style={{ 
              animation: 'shimmer 8s ease-in-out infinite',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)'
            }}
          ></div>
        </div>
      </div>
      
      {/* Content with enhanced backdrop */}
      <div className="relative z-10 backdrop-blur-[0.5px]">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-luxury-serif font-bold text-slate-900 mb-6"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Connect Directly
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
            <VerificationBadge className="mb-6" />
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
      </div>
    </Section>
  );
}

