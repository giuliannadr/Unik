// components/SmoothScroll.tsx
"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.1,         // Intensidad del suavizado (0.1 es estándar)
      duration: 1.5,     // Cuánto tarda en frenar
      smoothWheel: true 
    }}>
      {children}
    </ReactLenis>
  );
}