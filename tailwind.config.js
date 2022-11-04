/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '375px',
      'md': '500px',
      'lg': '1024px',
      'xl': '1200px'
    },

    colors: {
      'blue': "#31D0C1",
      'green': "#8DE137",
      'black': "#000000",
      'white': "#FEFEFE",
      'gray': "#64748b",
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
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {},
  },
  plugins: [],
}
