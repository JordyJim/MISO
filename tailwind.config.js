/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#94318E',
        'custom-pink': '#d872b3',
      },
      borderWidth: {
        '16': '16px',
      },
    }
  },
  plugins: [],
}