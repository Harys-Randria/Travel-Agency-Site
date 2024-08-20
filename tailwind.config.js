/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pearl': '#FBFCF8',
        'Off-white' : '#FAF9F6',
        'blue-principal': '#1EA5E0',
        'blue-second':'#0E4069',
        'green': '#008000',
        'blue-dark': '#1A2D52',
        'green-light': '#C6DFCB',
      },

      fontFamily: {
        Spinnaker: ['Spinnaker', 'sans-serif'],
        GreatVibes: ['Great Vibes', 'cursive'],
      },

    },
  },
  plugins: [],
});

