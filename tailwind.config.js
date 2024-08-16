/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-principal': '#1EA5E0',
        'blue-second':'#0E4069',
        'green': '#008000',
        'blue-dark': '#1A2D52',
        'green-light': '#C6DFCB',
      },
    },
  },
  plugins: [],
});

