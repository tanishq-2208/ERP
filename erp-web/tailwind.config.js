/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Roboto Serif', 'serif'],
      },
      colors: {
        'purple-custom': '#BD91EF',
        'purple-bg': '#EDE9FE',
        'purple-dark': '#4B2995',
        'purple-medium': '#9E69E8',
        'purple-pt':'#E1CCEC',
      },
    },
  },
  plugins: [],
}
