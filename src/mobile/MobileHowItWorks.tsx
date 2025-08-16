import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, CheckCircle } from 'lucide-react';
import styles from './MobileHowItWorksPolish.module.css';

const steps = [
  {
    icon: MessageSquare,
    title: 'Tell us your needs',
    description: 'Share your health needs, budget, and coverage preferences with our licensed agents'
  },
  {
    icon: Search,
    title: 'Compare options',
    description: 'We research and compare plans from top carriers to find your best matches'
  },
  {
    icon: CheckCircle,
    title: 'Get covered',
    description: 'Enroll in your chosen plan with ongoing support and guidance'
  }
];

export default function MobileHowItWorks() {
  return (
    <section className={styles.howSection} aria-label="How it works">
      <div className={styles.howContainer}>
        <motion.h2 
          className={styles.howHeading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>
        
        <div className={styles.howSteps}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.howStep}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className={styles.howStepNumber}>{index + 1}</div>
              <div className={styles.howStepContent}>
                <div className={styles.howStepIcon}>
                  <step.icon className={styles.howStepIconSvg} />
                </div>
                <h3 className={styles.howStepTitle}>{step.title}</h3>
                <p className={styles.howStepDescription}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}