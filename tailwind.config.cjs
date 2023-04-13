/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" //Le decimos que todos los archivos de todas las carpetas con estas extensiones busque clases de tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
