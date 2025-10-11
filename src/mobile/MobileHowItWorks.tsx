import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import styles from './MobileHowItWorksLuxury.module.css';
import './tokens.module.css';

const steps = [
  {
    title: 'Share your needs',
    description: 'Tell me about your health situation and budget—I\'ll cut through the insurance maze and find plans that actually make sense for your life',
    advantage: 'Same-day consultation available'
  },
  {
    title: 'Compare options',
    description: 'I personally review dozens of carrier options and present only the 2-3 plans perfect for your situation—no overwhelming choices or hidden surprises',
    advantage: 'Access to exclusive A+ carriers'
  },
  {
    title: 'Get covered',
    description: 'I handle all enrollment paperwork and remain your personal advocate for any questions, claims, or life changes that come up',
    advantage: 'Next-day protection possible'
  }
];

export default function MobileHowItWorks() {
  return (
    <section className={styles.luxuryHowSection} aria-label="How it works - process superiority">
      <div className={styles.howContainer}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.howHeading}>
            How It Works
          </h2>
          <div className={styles.competitiveAdvantage}>
            <span className={styles.clockEmoji}>⏰</span>
            <span className={styles.agentLabel}>Most agents:</span>
            <span className={styles.slowTime}>2-3 weeks</span>
            <span className={styles.separator}>•</span>
            <span className={styles.bradfordLabel}>Bradford:</span>
            <span className={styles.fastTime}>Same day decisions</span>
          </div>
        </motion.div>
        
        <div className={styles.luxuryHowSteps}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.luxuryHowStep}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className={styles.stepNumber}>{index + 1}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                <div className={styles.stepAdvantage}>
                  <Zap size={14} style={{ marginRight: '4px', display: 'inline' }} />
                  {step.advantage}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}