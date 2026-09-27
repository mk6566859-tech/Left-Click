/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#E8E4DD',
          light: '#F0ECE5',
          dark: '#DBD6CD',
        },
        signal: {
          DEFAULT: '#E63B2E',
          hover: '#CF3226',
          dark: '#B0251A',
          glow: 'rgba(230, 59, 46, 0.35)',
          subtle: 'rgba(230, 59, 46, 0.08)',
        },
        offwhite: '#F5F3EE',
        charcoal: {
          DEFAULT: '#111111',
          card: '#161616',
          surface: '#1E1E1E',
          border: '#282828',
          muted: '#8E8E93',
        },
        cardborder: 'rgba(17, 17, 17, 0.08)',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        drama: ['"DM Serif Display"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem',
      },
      transitionTimingFunction: {
        'magnetic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }
    },
  },
  plugins: [],
}
