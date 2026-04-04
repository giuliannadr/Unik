"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollAnimation = ({ children, className = "", delay = 0 }: ScrollAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ 
        duration: 1, 
        ease: [0.33, 1, 0.68, 1],
        delay: delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
