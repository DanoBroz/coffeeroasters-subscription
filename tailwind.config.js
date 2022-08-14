/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1280px',
      },
    },
    fontFamily: {
      'fraunces': ['Fraunces'],
      'barlow': ['Barlow'],
    },
    extend: {
      colors: {
        'darkCyan': '#0E8784',
        'darkGreyBlue': '#333D4B',
        'paleOrange': '#FDD6BA',
        'lightCream': '#FEFCF7',
        'grey': '#83888F'
      }
    },
  },
  plugins: [],
}
