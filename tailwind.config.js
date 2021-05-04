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
      colors: {
        teal: {
          50: '#edfafa',
          100: '#d5f5f6',
          200: '#aae7ea',
          300: '#69c8ce',
          400: '#13a2ad',
          500: '#0d828d',
          600: '#056874',
          700: '#06505c',
          800: '#043744',
          900: '#01222f',
        },
      },

      gridTemplateRows: {
        PhoneRows: '0.1fr 1fr 0.8fr',
        PCRows: '',
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
