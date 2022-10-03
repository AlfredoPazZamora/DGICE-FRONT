/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '500px',
      'lg': '1024px'
    },

    colors: {
      // Paleta del logo
      // 'green': "#30b52f",
      'blue': "#208ea4",
      'blue_light': "#1fbbc8",
      // 'yellow': "#e8bc8b",
      // 'purple': "#74428d",

      //Con amarillo
      // 'yellow': "#ffd803", **
      // 'yellow_light': "#ffe866", **
      // 'purple': "#5702b3",
      // 'purple_light':"#7d03ff"

      //Verdes
      // 'blue_light': "#31D0C1",
      // 'blue': "#22928e",
      // 'green': "#249222", **
      // 'green_light': "#33d031", **

      //Rosas
      // 'pink': "#d925d9",
      // 'pink_light': "#e566e5a"

    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      'h1': "5rem",
      'h2': "2.5rem",
      'h3': "2rem",
      'base': "1.6rem",
      'small': "1.2rem",
      'sm': '0.875rem',
      'xs': '0.75rem',
      'xl': '1.25rem'
    },
    extend: {},
  },
  plugins: [],
}
