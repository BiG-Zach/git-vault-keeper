import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { COMPANY } from '../config/company';
import styles from '../mobile/Footer.module.css';
import footerMobile from './Footer.mobile.module.css';

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-slate-900 text-white ${styles.footer} ${footerMobile.mobileFooter}`}>
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 ${footerMobile.mobileColumnsToStack}`}>
          {/* Company Info */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h3 className="text-lg font-bold text-white mb-4">
              Bradford Informed Guidance
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Your health, your choice, your peace of mind.
            </p>
            
            {/* Social Proof Badges */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full"></span>
                Exclusive A+ Carrier Partnerships
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full"></span>
                Nationwide Provider Networks
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full"></span>
                Same-Day Decisions, Next-Day Protection
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/about" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                About
              </Link>
              <Link to="/carriers" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                Carriers
              </Link>
              <Link to="/our-process" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                Our Process
              </Link>
              <Link to="/contact" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                Contact
              </Link>
              <Link to="#faq-title" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                FAQs
              </Link>
              <Link to="/terms" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                Legal
              </Link>
            </nav>
          </motion.div>

          {/* Coverage Areas */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Coverage Areas</h4>
            <nav className="space-y-2">
              <Link to="/states/florida" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                Florida
              </Link>
              <Link to="/states/michigan" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                Michigan
              </Link>
              <Link to="/states/north-carolina" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                North Carolina
              </Link>
              <Link to="/states/arizona" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                Arizona
              </Link>
              <Link to="/states/texas" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                Texas
              </Link>
              <Link to="/states/georgia" className="block text-slate-300 hover:text-white transition-colors duration-200 text-sm">
                Georgia
              </Link>
              <span className="block text-slate-400 text-sm">
                Now serving six licensed states
              </span>
            </nav>
          </motion.div>

          {/* Mini-Contact */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div>
                <a
                  href={COMPANY.phoneHref}
                  className="text-white font-semibold hover:text-emerald-400 transition-colors duration-200 text-sm"
                  data-gtm="footer-phone"
                  rel="nofollow"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </div>
              <div>
                <a
                  href={COMPANY.emailHref}
                  className="text-white font-semibold hover:text-emerald-400 transition-colors duration-200 text-sm"
                  data-gtm="footer-email"
                  rel="nofollow"
                >
                  {COMPANY.email}
                </a>
              </div>
              <div className="text-sm text-slate-300">
                {COMPANY.hours}
              </div>
              <div className="pt-2">
                <a
                  href="https://calendly.com/bradfordinformedguidance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
                  data-gtm="footer-schedule"
                >
                  Schedule Consultation
                </a>
              </div>
              
              {/* License Verification - Dual Third-Party Sources */}
              <div className="pt-4 mt-4 border-t border-slate-700">
                <h5 className="flex items-center gap-2 text-sm font-semibold text-white tracking-wide">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.22 2.223a.75.75 0 00-.44 0l-6.5 2.167A.75.75 0 003 5.107v4.513c0 4.18 2.718 7.924 6.774 9.112a.75.75 0 00.452 0C14.282 17.544 17 13.8 17 9.62V5.107a.75.75 0 00-.28-.717l-6.5-2.167zM9 11.75l-2-2 1.06-1.06L9 9.627l2.94-2.937L13 7.75l-4 4z" clipRule="evenodd" />
                  </svg>
                  Dual Third-Party Verification
                </h5>
                <div className="space-y-4 mt-3">
                  <div className="text-sm text-slate-300 font-medium">
                    NPN: {COMPANY.npn} &bull; {COMPANY.licensed}
                  </div>

                  {/* Enhanced Verification Links - Desktop: Stack vertically | Mobile: Optimized layout */}
                  <div className="flex flex-col gap-2.5">
                    {/* TrustMyProducer Verification - Enhanced */}
                    <a
                      href={COMPANY.verification.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-sm font-semibold text-emerald-200 transition-all duration-200 hover:bg-emerald-500/20 hover:border-emerald-400/60 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(16,185,129,0.35)]"
                      data-gtm="footer-verify-trustmyproducer"
                    >
                      <svg className="w-4 h-4 shrink-0 text-emerald-300 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="flex-1">{COMPANY.verification.label}</span>
                      <svg className="w-3 h-3 shrink-0 opacity-70 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>

                    {/* NIPR Verification - Enhanced */}
                    <a
                      href={COMPANY.verification.nipr}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-blue-500/30 bg-blue-500/10 text-sm font-semibold text-blue-200 transition-all duration-200 hover:bg-blue-500/20 hover:border-blue-400/60 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(59,130,246,0.35)]"
                      data-gtm="footer-verify-nipr"
                    >
                      <svg className="w-4 h-4 shrink-0 text-blue-300 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      <span className="flex-1">{COMPANY.verification.labelNIPR}</span>
                      <svg className="w-3 h-3 shrink-0 opacity-70 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  <div className="text-xs text-slate-400 mt-2">
                    <span className="inline-flex items-center gap-1.5">
                      <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Two independent verification sources
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.4 }}
          className="divider-soft mt-8 pt-6"
        >
          <div className={`flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400 ${footerMobile.mobileFinePrint}`}>
            <p>&copy; {currentYear} Bradford Informed Guidance. All rights reserved.</p>
            <nav className={`flex items-center gap-6 ${styles.links}`}>
              <Link to="/privacy-policy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </nav>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
