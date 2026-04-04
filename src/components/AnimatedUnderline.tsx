"use client";

import { motion } from "framer-motion";

export const AnimatedUnderline = ({ color = "bg-unik-accent", height = "h-[4px]", delay = 0.5 }) => {
  return (
    <div className="relative inline-block group">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: [0.33, 1, 0.68, 1] }}
        className={`absolute -bottom-1 left-0 ${height} ${color} rounded-full -z-10`}
      />
    </div>
  );
};
