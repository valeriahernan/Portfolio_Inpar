/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          vivid: '#00D04B',
          light: '#00E855',
          dark: '#00A038',
        },
        magenta: {
          DEFAULT: '#FF00AA',
          light: '#FF44CC',
        },
        orange: {
          vivid: '#FF6B00',
          light: '#FF8833',
        },
        yellow: {
          vivid: '#FFE500',
          light: '#FFF176',
        },
        sky: {
          vivid: '#87CEEB',
          light: '#B0E0FF',
        },
        foreground: '#0A0A0A',
        background: '#FFFFFF',
        'off-white': '#F5F5F0',
        'neutral-mid': '#888888',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 10vw, 9rem)', { lineHeight: '0.88', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 7vw, 6rem)', { lineHeight: '0.92', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        'label': ['0.7rem', { lineHeight: '1', letterSpacing: '0.1em' }],
      },
      borderRadius: {
        pill: '9999px',
        blob1: '50% 40% 55% 45% / 45% 55% 40% 50%',
        blob2: '40% 60% 45% 55% / 55% 45% 60% 40%',
      },
      animation: {
        'float-slow': 'float-slow 5s ease-in-out infinite',
        'scan': 'scan-line 8s linear infinite',
        'color-shift': 'color-shift 8s ease-in-out infinite',
        'bar-dance': 'bar-dance 1.2s ease-in-out infinite',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};