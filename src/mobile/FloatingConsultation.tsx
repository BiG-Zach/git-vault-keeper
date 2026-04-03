import React from 'react';
import { Calendar } from 'lucide-react';
import styles from './FloatingConsultation.module.css';
import './tokens.module.css';

export default function FloatingConsultation() {
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });

  React.useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Only show on mobile
  if (!isMobile) return null;

  return (
    <div className={styles.floatingConsultation}>
      <a
        href="https://calendly.com/bradfordinformedguidance"
        className={styles.consultationButton}
        aria-label="Schedule consultation with licensed agent"
        target="_blank"
        rel="noopener noreferrer"
        data-gtm="floating-consultation"
      >
        <Calendar className={styles.calendarIcon} />
        Schedule Consultation
      </a>
    </div>
  );
}