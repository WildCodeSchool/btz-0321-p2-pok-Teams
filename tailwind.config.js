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
        strp: '1fr 4fr 1fr',
      },

      gridTemplateColumns: {
        header: '1fr 3fr',
      },
    },

    fontFamily: {
      display: ['Roboto Mono', 'Menlo', 'monospace'],
      body: ['Roboto Mono', 'Menlo', 'monospace'],
    },

    variants: {},

    plugins: [],
  },
};
