/** @type {import('tailwindcss').Config} */

export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5925d1',
        'secondary': '#087f36',
        'accent':"#584",
        'base': "#2c2c2c"
      }
    },

  },
  plugins: [require("daisyui")],
    daisyui: {
        themes: [
          {
            
    }
  ],
  },



}


