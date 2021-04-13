module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        strp: '1fr 4fr 1fr',
      },

      gridTemplateColumns: {
        header: '1fr 3fr',
      },
    },
  },
  variants: {},
  plugins: [],
};
