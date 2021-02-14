const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    enabled: true,
    content: ['./pages/**/*.js', './components/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    textColor: {
      gray: colors.coolGray,
      primary: colors.indigo[400],
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
    colors: {
      indigo: colors.indigo,
      white: colors.white,
      black: colors.black,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Teko', 'sans-serif'],
      serif: ['Roboto', 'serif'],
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      // let myCustomClasses = import('./classComponents')
      const myCustomClasses = {
        ':focus': {
          outline: 'none'
        },
        '.min-sidebar': {
          minWidth: '215px'
        },
        '.media': {
          widh: '100%',
        },
        '.top-header':{
          height: '75px',
          marginBottom: '23px'
        },
        '.icons':{
          fontSize: '25px'
        },
        '.divider':{
          width: '50%'
        },
        '.content': {
          padding: '5px 50px 0'
        },
        '.bg-dark-gray':{
          backgroundColor: '#f5f7fa',
        },
        '.btn': {
            display:'flex',
            flexFlow: 'row',
            alignItems:'end',
            marginLeft: '18px',
            borderRadius: '15px'
        },
        '.btn-menu': {
          display: "flex",
          fontFamily: 'Teko',
          fontSize: '1rem',
          lineHeight: '1.75rem'
        },
        '.btn-root': {
          color: 'rgba(0, 0, 0, 0.87)',
          padding: '4px 10px 0',
          minWidth: '64px',
          boxSizing: 'border-box',
          transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          fontWeight: '500',
          lineHeight: '1.75',
          borderRadius: '4px',
          letterSpacing: '0.02857em',
          textTransform: 'uppercase',
        },
        '.active': {
            outline: `5px auto ${colors.indigo[900]}`,
            color: colors.indigo[900]
        },
        '.bg-menu': {
            backgroundColor: 'transparent',
            color: colors.black,
          },
        '.bg-menu:hover': {
        backgroundColor: colors.indigo[600]
        },
        '.btn-indigo': {
          backgroundColor: colors.indigo[500],
          color: colors.gray[50],
          '&:hover': {
            backgroundColor: colors.indigo[600]
          },
        },
    }
      addComponents(myCustomClasses)
    })
  ],
}
