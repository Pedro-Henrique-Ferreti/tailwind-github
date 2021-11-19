module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'light-blue': '#f6f8fa',
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
