module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      pc: '1024px',
    },

    extend: {
      gridTemplateRows: {
        PhoneRows: '0.1fr 1fr 0.8fr',
        PCRows: '0.1fr 1fr 0.2fr',
      },

      gridTemplateColumns: {
        PhoneHeaderCol: '2fr 2fr',
        PCHeaderCol: '1fr 3fr',
      },

      fontFamily: {
        Quantico: ['Quantico', 'sans-serif'],
      },
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },

    variants: {
      translate: ['responsive', 'hover', 'focus'],
    },

    plugins: [],
  },
};
