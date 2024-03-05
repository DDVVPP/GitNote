import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
        }
      },
    },
  },
  plugins: [],
};
export default config;
