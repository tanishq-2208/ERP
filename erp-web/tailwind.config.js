/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      serif: ['Roboto Serif', 'serif'],

    },
  },
  plugins: [],
}
}