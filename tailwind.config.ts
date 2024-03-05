import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        primary: {
          500: '#42BBFF',
          800: '#0C3247',
          900: '#42BBFF1A',
        },
        black: {
          600: '#2E3757',
          700: '#1D2032',
          800: '#131625',
          900: '#10121E',
        },
        white: {
          100: '#FFFFFF',
          300: '#ADB3CC',
          500: '#55597D',
        },
        purple: {
          500: '#9542FF',
          900: '#9542FF1A',
        },
        green: {
          400: '#68D1BF',
          500: '#42FF77',
          900: '#42FF771A',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
