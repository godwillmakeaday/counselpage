/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0E1B2C', deep: '#13263B' },
        ivory: { DEFAULT: '#F5F1E8', deep: '#EFE9DB' },
        brass: { DEFAULT: '#B08D4F', soft: '#C9A968' },
        ink: '#16202B',
        mute: '#5B6675',
        line: '#E4DECF',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
