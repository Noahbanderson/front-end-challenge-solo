const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        blue: '#04a7ec',
        darkBlue: '#0589c0',
        lightGrey: '#f4f4f5',
        lighterGrey: '#f8f8f9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
