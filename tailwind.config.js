/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050816',
        flame: '#f97316',
      },
      boxShadow: {
        glow: '0 0 80px rgba(249, 115, 22, 0.18)',
      },
    },
  },
  plugins: [],
};
