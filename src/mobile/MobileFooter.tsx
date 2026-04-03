import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, FileCheck } from 'lucide-react';
import styles from './MobileFooterPolish.module.css';

const trustBadges = [
  {
    icon: Shield,
    title: 'Licensed Independent Agent',
    description: 'NPN: 18181266'
  },
  {
    icon: Award,
    title: 'Exclusive A+ Carrier Partnerships',
    description: 'Nationwide Provider Networks'
  },
  {
    icon: FileCheck,
    title: 'Same-Day Decisions',
    description: 'Next-Day Protection'
  }
];

const footerLinks = [
  { text: 'Privacy Policy', href: '/privacy' },
  { text: 'Terms of Service', href: '/terms' },
  { text: 'About Us', href: '/about' },
  { text: 'Contact', href: '/contact' },
  { text: 'Carriers', href: '/carriers' }
];

export default function MobileFooter() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.footerContainer}>
        {/* Trust badges */}
        <motion.div 
          className={styles.trustBadges}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {trustBadges.map((badge, index) => (
            <div key={index} className={styles.trustBadge}>
              <badge.icon className={styles.trustBadgeIcon} />
              <div className={styles.trustBadgeText}>
                <div className={styles.trustBadgeTitle}>{badge.title}</div>
                <div className={styles.trustBadgeDescription}>{badge.description}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Contact info */}
        <div className={styles.footerContact}>
          <a href="tel:+16893256570" className={styles.footerPhone}>
            (689) 325-6570
          </a>
          <div className={styles.footerHours}>
            Mon–Sun 8AM–8PM EST
          </div>
        </div>

        {/* Navigation links */}
        <nav className={styles.footerNav} aria-label="Footer navigation">
          {footerLinks.map((link, index) => (
            <a key={index} href={link.href} className={styles.footerLink}>
              {link.text}
            </a>
          ))}
        </nav>

        {/* Copyright and company info */}
        <div className={styles.footerCopyright}>
          <div className={styles.footerCompany}>
            Bradford Informed Guidance
          </div>
          <div className={styles.footerTagline}>
            Your health, your choice, your peace of mind.
          </div>
          <div className={styles.footerYear}>
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}