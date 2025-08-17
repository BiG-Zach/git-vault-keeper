import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users } from 'lucide-react';
import styles from './MobileCarriersLuxury.module.css';
import './tokens.module.css';

const logos = [
  { src: "/logos/carriers/aetna.webp", alt: "Aetna" },
  { src: "/logos/carriers/cigna.webp", alt: "Cigna" },
  { src: "/logos/carriers/americo.webp", alt: "Americo" },
  { src: "/logos/carriers/multiplan.webp", alt: "MultiPlan" },
  { src: "/logos/carriers/allstate.webp", alt: "Allstate" },
  { src: "/logos/carriers/unitedhealthcare.webp", alt: "UnitedHealthcare" },
  { src: "/logos/carriers/firsthealth.webp", alt: "First Health" },
  { src: "/logos/carriers/bluecrossblueshield.png", alt: "Blue Cross Blue Shield" },
  { src: "/logos/carriers/sgic.webp", alt: "SGIC" },
  { src: "/logos/carriers/mutualofomaha.webp", alt: "Mutual of Omaha" },
  { src: "/logos/carriers/pal.webp", alt: "Philadelphia American" },
  { src: "/logos/carriers/aflac.webp", alt: "Aflac" }
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
            Premium Carrier Network Access
          </h2>
          <p className={styles.carriersSubtitle}>
            Partnered with America's top-rated health and life insurance carriers.
          </p>
          <div className={styles.trustCounter}>
            <Users size={16} />
            Trusted by 2,847+ Florida families
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