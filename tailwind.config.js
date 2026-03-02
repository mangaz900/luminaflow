/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#F4EFEA',
          'bg-2': '#EDE6DF',
          text: '#3B2E28',
          'text-2': '#7A6A62',
          gold: '#B8986A',
          'gold-light': '#D4B896',
          border: '#DDD4CB',
        },
        // keep for backwards compat with pages that still use these
        medical: {
          50: '#F4EFEA',
          100: '#EDE6DF',
          500: '#B8986A',
          600: '#9E7E52',
          800: '#7A6A62',
          900: '#3B2E28',
        },
        gold: {
          100: '#F9F1D8',
          400: '#B8986A',
          600: '#9E7E52',
        },
        dark: {
          900: '#3B2E28',
        }
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(20px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-15px, 15px) scale(0.95)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blob: 'blob 8s infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
