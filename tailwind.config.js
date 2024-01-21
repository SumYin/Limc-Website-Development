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
        blue: {"50":"#fff7ed","100":"#ffedd5","200":"#fed7aa","300":"#fdba74","400":"#fb923c","500":"#f97316","600":"#ea580c","700":"#c2410c","800":"#9a3412","900":"#7c2d12"},
        primary: {"50":"#EFF6FF","100":"#DBEAFE","200":"#BFDBFE","300":"#93C5FD","400":"#60A5FA","500":"#3B82F6","600":"#2563EB","700":"#1D4ED8","800":"#1E40AF","900":"#1E3A8A"},
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