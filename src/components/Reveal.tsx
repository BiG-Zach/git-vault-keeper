import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
  delay?: number;
};

const Reveal = React.memo(function Reveal({
  as = "div",
  className,
  children,
  delay = 0,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = as as keyof React.JSX.IntrinsicElements;

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.1, once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  );
});

export default Reveal;