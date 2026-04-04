import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'unik-primary': '#40356F', // Deep Indigo
        'unik-secondary': '#D9C5E0', // Lavender
        'unik-accent': '#EBC41D', // Mustard/Gold
        'unik-surface': '#F3F3F3', // Off-White
        'unik-dark': '#1E1A34', // Warmer Darker Indigo
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        subheading: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3.5rem',
      },
      boxShadow: {
        'unik-soft': '0 20px 40px -10px rgba(64, 53, 111, 0.1)',
        'unik-glow': '0 0 20px -5px rgba(235, 196, 29, 0.3)',
      }
    },
  },
  plugins: [],
};

export default config;
