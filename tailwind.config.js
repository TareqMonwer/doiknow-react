module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  // remove unused styles in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '73p': '73%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
