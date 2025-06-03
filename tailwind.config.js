/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B4B8C',
        secondary: '#6B7CB4',
        background: '#F5F7FF',
        surface: '#FFFFFF',
      }
    },
  },
  plugins: [],
}