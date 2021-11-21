module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'light-blue': '#f6f8fa',
      'github-green': '#2da44e',
    }),
    extend: {
      typography: (theme) => ({
        default: {
          css: {
            a: {
              color: theme('colors.blue.600'),
            },
            img: {
              display: 'inline-block',
            },
            hr: {
              borderColor: theme('colors.gray.600'),
              marginTop: '2em',
              marginBottom: '2em',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
