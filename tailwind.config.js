/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#fff7ed","100":"#ffedd5","200":"#fed7aa","300":"#fdba74","400":"#fb923c","500":"#f97316","600":"#ea580c","700":"#c2410c","800":"#9a3412","900":"#7c2d12"},
        darkprimary: {"50":"#2D3239", "100": "#161B22","150":"#11161C" , "200":"#0D1117" , "300":"#080C12" , "400":"#04060D" , "500":"#000207" , "600":"#000000" , "700":"#000000" , "800":"#000000" , "900":"#000000" },
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}