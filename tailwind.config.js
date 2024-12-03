/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de que Tailwind lea todos los archivos dentro de src/
  ],
  theme: {
    extend: {
      colors: {
        'mercado-brown': '#A66A4C',
        'mercado-beige': '#E4D7BE',
      },
    },
  },
  plugins: [],
}
