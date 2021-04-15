module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: 'media',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
      gridTemplateRows: {
        strp: '0.4fr 2fr 1fr',
      },

      gridTemplateColumns: {
        header: '2fr 2fr',
      },
    },

    variants: {},

    plugins: [],
  },
};
