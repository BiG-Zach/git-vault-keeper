import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Zap, Users } from 'lucide-react';
import styles from './MobileTrust.module.css';

const trustFeatures = [
  {
    icon: Shield,
    title: 'Your Licensed Insurance Expert',
    description: 'Exclusive A+ carrier partnerships.'
  },
  {
    icon: Star,
    title: 'Exclusive PPO Access',
    description: 'Nationwide provider freedom. Your doctors, better benefits.'
  },
  {
    icon: Zap,
    title: 'Fast Decisions',
    description: 'Same-day underwriting decisions. No waiting, no uncertainty.'
  },
  {
    icon: Users,
    title: 'Personal Guidance',
    description: 'End-to-end support. From quote to claim, I\'ve got you covered.'
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
          Why Choose Us
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