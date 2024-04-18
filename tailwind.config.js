/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        queijo: '#F3F0D9',
        mostarda: '#457431',
        molho_de_tomate:'#A4240E',
        azeite: '#4D7836',
        manjerona: '#457431',
      }
    },
  },
  plugins: [],
}

