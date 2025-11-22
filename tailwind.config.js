/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        medical: {
          50: '#F0F7FF',
          100: '#E0F0FF',
          500: '#0F4C81',
          600: '#0A3B66',
          900: '#051E36',
        },
        gold: {
          100: '#F9F1D8',
          400: '#D4AF37',
          600: '#AA8C2C',
        },
        dark: {
          900: '#1A1A1A',
        }
      }
    },
  },
  plugins: [],
}

