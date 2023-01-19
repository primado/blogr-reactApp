/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    colors: {
      // Primary colors

      'light-red': 'hsl(356, 100%, 66%)',
      'very-light-red': 'hsl(355, 100%, 74%)',
      'very-dark-blue': 'hsl(208, 49%, 24%)',

      // Neutral colors
      'white': 'hsl(0, 0%, 100%)',
      'greyish-blue': 'hsl(240, 2%, 79%)',
      'very-dark-grayish-blue': 'hsl(207, 13%, 34%)',
      'very-dark-black-blue': 'hsl(240, 10%, 16%)',

      // Gradient colors

      'very-light-red-gradient': 'hsl(13, 100%, 72%)',
      'light-red': 'hsl(353, 100%, 62%)',

      'very-dark-gray-blue': 'hsl(237, 17%, 21%)',
      'very-dark-desaturated-blue': 'hsl(237, 23%, 32%)',
    },

    fontFamily: {

      'overpass': ['Overpass', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'sans-serif'],

    },
  },
  plugins: [],
}
