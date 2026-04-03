import React from 'react';
import { motion } from 'framer-motion';
import styles from './MobileCarriersLuxury.module.css';
import './tokens.module.css';

const logos = [
  { src: "/logos/carriers/unitedhealthcare.webp", alt: "UnitedHealthcare", rating: "A+" },
  { src: "/logos/carriers/mutualofomaha.webp", alt: "Mutual of Omaha", rating: "A+", badge: "TOP" },
  { src: "/logos/carriers/aflac.webp", alt: "Aflac", rating: "A+" },
  { src: "/logos/carriers/bluecrossblueshield.png", alt: "Blue Cross Blue Shield", rating: "A+" },
  { src: "/logos/carriers/allstate.webp", alt: "Allstate Health", rating: "A+" },
  { src: "/logos/carriers/aetna.webp", alt: "Aetna", rating: "A" },
  { src: "/logos/carriers/cigna.webp", alt: "Cigna", rating: "A" },
  { src: "/logos/carriers/medical-mutual.webp", alt: "Medical Mutual", rating: "A", badge: "NEW" },
  { src: "/logos/carriers/americo.webp", alt: "Americo", rating: "A" },
  { src: "/logos/carriers/illinois-mutual.webp", alt: "Illinois Mutual", rating: "A-", badge: "NEW" },
  { src: "/logos/carriers/pal.webp", alt: "Philadelphia American", rating: "A-" },
  { src: "/logos/carriers/sgic.webp", alt: "SGIC", rating: "B++" },
  { src: "/logos/carriers/multiplan.webp", alt: "MultiPlan PPO", isNetwork: true },
  { src: "/logos/carriers/firsthealth.webp", alt: "First Health PPO", isNetwork: true }
];

export default function MobileCarriers() {
  return (
    <section className={styles.luxuryCarriersSection} aria-label="Premium carrier network access">
      <div className={styles.carriersContainer}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.carriersHeading}>
            Nationwide Providers
          </h2>
          <p className={styles.carriersSubtitle}>
            Connected to 10 A to A+ rated carriers and 6 PPO networks for comprehensive coverage that goes where you go.
          </p>
          <div className={styles.trustCounter}>
            ✅
            Access to 2.4M+ providers through top-rated networks<sup className="text-blue-600">[44][47]</sup>
          </div>
        </motion.div>
        
        <div className={styles.luxuryCarriersGrid}>
          {logos.slice(0, 12).map((logo, index) => (
            <motion.div 
              key={index} 
              className={styles.luxuryCarrierCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={styles.luxuryCarrierLogo}
                loading="lazy"
                width="120"
                height="42"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}