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
      'blue_green': "#22928e",
      'blue_light': "#31D0C1",
      'blue': "#315cd0",
      'yellow': "#ffd803",
      'green': "#249222"
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