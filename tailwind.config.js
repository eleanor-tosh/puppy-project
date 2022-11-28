/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './client/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // blue: '#O477BF',
        // grey: '#9CA1A6',
        // red: '#D90404',
        // white: '#F2F2F2',
      },
      fontFamily: {
        heading: ['abril-text', 'serif'],
        body: ['source-sans-pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
