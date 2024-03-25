/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        queijo: '#f4d122ff',
        mostarda: '#e19410ff',
        molho_de_tomate:' #890705ff',
        azeite: '#b3ae60ff',
        manjerona: '#5b5e0aff',
      }
    },
  },
  plugins: [],
}

