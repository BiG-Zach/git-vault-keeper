import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Zap, Users } from 'lucide-react';
import styles from './MobileTrust.module.css';

const trustFeatures = [
  {
    icon: Shield,
    title: 'Licensed & BBB Accredited',
    description: 'Licensed agents in FL, MI, NC with BBB A+ rating'
  },
  {
    icon: Star,
    title: 'Nationwide PPO Access',
    description: 'Access to top carrier networks and provider networks'
  },
  {
    icon: Zap,
    title: 'Fast Decisions',
    description: 'Get your first options within 45-90 minutes'
  },
  {
    icon: Users,
    title: 'Personal Guidance',
    description: 'Real agents who understand your unique needs'
  }
];

export default function MobileTrust() {
  return (
    <section className={styles.trustSection} aria-label="Why choose us">
      <div className={styles.trustContainer}>
        <motion.h2 
          className={styles.trustHeading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Choose Bradford Informed Guidance
        </motion.h2>
        
        <div className={styles.trustGrid}>
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.trustCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.trustIcon}>
                <feature.icon className={styles.trustIconSvg} />
              </div>
              <h3 className={styles.trustTitle}>{feature.title}</h3>
              <p className={styles.trustDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}