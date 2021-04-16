module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: 'media',
  theme: {
    screens: {
      pc: '1024px',
    },

    extend: {
      gridTemplateRows: {
        PhoneRows: '0.2fr 1fr 0.8fr',
        PCRows: '0.1fr 1fr 0.4fr',
      },

      gridTemplateColumns: {
        PhoneHeaderCol: '2fr 2fr',
        PhoneFooterCol: '0.3fr 1fr 0.3fr',
        PCFooterCol: '1fr 1fr 1fr',
      },

      fontFamily: {
        Quantico: ['Quantico', 'sans-serif'],
      },
    },

    variants: {},

    plugins: [],
  },
};
