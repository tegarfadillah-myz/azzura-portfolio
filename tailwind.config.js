// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F5EFE6',
        'milk-white': '#FFFBF5',
        'light-brown': '#D4A57C',
        'warm-yellow': '#FFC94A',
        'dark-text': '#4A3933',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}