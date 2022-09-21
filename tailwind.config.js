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
      'lg': '1024px',
      'xl': '1200px'
    },

    colors: {
      'blue': "#31D0C1",
      'green': "#8DE137",
      'black': "#000000",
      'white': "#FEFEFE",
      'gray': "#8fa8a6",
      'slate-100': "rgb(241 245 249);"
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      'h1': "3rem",
      'h2': "2.5rem",
      'h3': "1.75rem",
      'h4': '1.5rem',
      'h5': '1.25rem',
      'base': "1rem",
      'small': "1.2rem",
      'sm': '0.875rem',
      'xs': '0.75rem',
      'xl': '1.25rem'
    },
    fontWeight: {
      'bold': 700,
      'semibold': 600,
      'medium': 500,
      'thin': 100
    },
    borderWidth: {
      '50': '50px',
      '80': '80px'
    },
    extend: {},
  },
  plugins: [],
}
