/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
     screens: {
        'xs': '380px',  
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
    container:{center:true,},
    fontFamily: {
      "vazir":["vazirmatn FD","sans-serif","system-ui"]
      
    },
    extend: {
      colors: {
        "primary": "#818588",
        "secondary": "#ED1C24",
        "tertiery":"#52575B"
      }
    },
  },
  plugins: [require('daisyui'),],
   daisyui: {
    themes: ["light", "dark", "luxury"],
  },
}

