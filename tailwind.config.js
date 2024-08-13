/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-principal': '#1EA5E0',
        'green': '#008000',
        'blue-dark': '#1A2D52',
        'green-light': '#C6DFCB',
      },
    },
  },
  plugins: [],
}

