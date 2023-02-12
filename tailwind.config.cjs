/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      neutral: {
        300: '#E3E3E3',
        700: '#4A4A4A'
      },
      blue: {
        100: '#9BC4EE',
        500: '#529EEB',
      },
      red: {
        100: '#EE7269',
        500: '#EB2E21'
      },
      green: {
        100: '#A1ED8E'
      }
    },
    extend: {
      fontFamily: {
        Shippori: ['Shippori Mincho', 'serif']
      },
      animation: {
        "fadeIn": 'fadeIn 0.5s ease-in forwards',
      },
      keyframes: {
        "fadeIn": {
          "0%": { transform: 'translateX(-50vw)', filter: "blur(0.5rem)", opacity: 0},
          "100%": { transform: 'translateX(0)', filter: "blur(0)", opacity: 1}
        }
      },
    },
  },
  plugins: [],
}