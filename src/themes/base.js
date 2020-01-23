export default {
  overrides: {
    MuiLink: {
      root: {
        color: '#398290',

        '&:hover': {
          color: '#c1ab33',
          textDecoration: ['none', '!important'],
        },
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'none',
      },
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#123434',
      light: '#415c5c',
      dark: '#0c2424',
    },
    secondary: {
      main: '#B29700',
      light: '#c1ab33',
      dark: '#7c6900',
    },
    tertiary: {
      main: '#086375',
      light: '#398290',
      dark: '#054551',
    },
  },
}
