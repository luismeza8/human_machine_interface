/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './graphs/templates/graphs/**.html',
    './graphs/templates/graphs/charts/**.html',
    './graphs/templates/graphs/views/**.html'
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

