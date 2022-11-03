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
      'white': "#ffffff",
      'blue_green': "#22928e",
      'blue_light': "#31D0C1",
      'blue': "#315cd0",
      'yellow': "#ffd803",
      'yellow_light':"#dcbd12",
      'green': "#249222",
      'white': '#fff',
      'black': '#000',
      'red': '#ff0000',
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    
    extend: {},
  },
  plugins: [],
}