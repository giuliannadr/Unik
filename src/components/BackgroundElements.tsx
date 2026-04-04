"use client";

import { motion } from "framer-motion";

const circles = [
  { size: "w-[400px] h-[400px]", color: "bg-[#FAD600]", top: "-100px", left: "-150px", delay: 0 },
  { size: "w-[500px] h-[500px]", color: "bg-[#3A2372]", top: "15%", right: "-250px", delay: 0.5 },
  { size: "w-[300px] h-[300px]", color: "bg-[#A0A0A0]", bottom: "10%", left: "-100px", delay: 1 },
  { size: "w-[600px] h-[600px]", color: "bg-[#3A2372]", bottom: "-300px", right: "5%", delay: 1.5 },
];

export const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#F3F3F3]">
      {circles.map((circle, i) => (
        <motion.div
           key={i}
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ 
             duration: 1, 
             delay: circle.delay,
             ease: [0.16, 1, 0.3, 1]
           }}
           className={`absolute rounded-full ${circle.color} ${circle.size} opacity-90 shadow-2xl`}
           style={{
             top: circle.top,
             left: circle.left,
             right: circle.right,
             bottom: circle.bottom,
           }}
        />
      ))}
    </div>
  );
};
