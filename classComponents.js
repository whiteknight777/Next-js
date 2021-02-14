const colors = require('tailwindcss/colors')

module.exports = {
    '.btn': {
        display:'flex',
        flexFlow: 'row',
        alignItems:'end',
        justifyContent:'center'
    },
    '.btn-menu': {
      display: "flex",
      fontFamily: 'Teko',
      fontSize: '1rem',
      lineHeight: '1.75rem'
    },
    '.btn-root': {
      color: 'rgba(0, 0, 0, 0.87)',
      padding: '4px 5px 0',
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
        backgroundColor: colors.indigo[900],
        color: colors.gray[50]
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
