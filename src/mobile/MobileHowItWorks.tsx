import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, CheckCircle, Clock, Zap } from 'lucide-react';
import styles from './MobileHowItWorksLuxury.module.css';
import './tokens.module.css';

const steps = [
  {
    title: 'Tell us your needs',
    description: 'Share your health needs, budget, and coverage preferences with our licensed agents',
    advantage: 'Same-day consultation available'
  },
  {
    title: 'Compare options',
    description: 'We research and compare plans from top carriers to find your best matches',
    advantage: 'Access to exclusive A+ carriers'
  },
  {
    title: 'Get covered',
    description: 'Enroll in your chosen plan with ongoing support and expert guidance',
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
            <Clock size={16} style={{ marginRight: '6px', display: 'inline' }} />
            Most agents: 2-3 weeks • Bradford: Same day decisions
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

        <motion.div 
          className={styles.processTimeline}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.timelineTitle}>Speed Advantage</h3>
          <div className={styles.timelineComparison}>
            <div className={`${styles.timelineItem} ${styles.timelineCompetitor}`}>
              <div className={styles.timelineLabel}>Other Agents</div>
              <div className={styles.timelineTime}>2-3 weeks</div>
            </div>
            <div className={`${styles.timelineItem} ${styles.timelineBradford}`}>
              <div className={styles.timelineLabel}>Bradford</div>
              <div className={styles.timelineTime}>Same day</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}