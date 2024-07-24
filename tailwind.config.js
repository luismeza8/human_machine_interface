/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './graphs/templates/graphs/**.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#31739E',
        secondary: '#BFDAED'
      }
    },
  },
  plugins: [],
}

