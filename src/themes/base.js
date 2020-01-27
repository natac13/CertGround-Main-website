const headerFont = {
  fontFamily: ['Oswald', 'sans-serif'].join(','),
}

export default {
  overrides: {
    MuiLink: {
      root: {
        color: '#1A5999',

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
  typography: {
    fontFamily: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
      ...headerFont,
    },
    h2: {
      ...headerFont,
    },
    h3: {
      ...headerFont,
    },
    h4: {
      ...headerFont,
    },
    h5: {
      ...headerFont,
    },
    h6: {
      ...headerFont,
    },
    subtitle1: {
      ...headerFont,
    },
    subtitle2: {
      ...headerFont,
    },
  },
  palette: {
    type: 'light',
    // primary: {
    //   main: '#123434',
    //   light: '#415c5c',
    //   dark: '#0c2424',
    // },
    common: {
      offWhite: '#FBFBFF',
      offBlack: '#060705',
    },
    primary: {
      main: '#132246',
      light: '#424e6b',
      dark: '#0d1731',
    },
    secondary: {
      main: '#B29700',
      light: '#c1ab33',
      dark: '#7c6900',
    },
    // tertiary: {
    //   main: '#086375',
    //   light: '#398290',
    //   dark: '#054551',
    // },
    tertiary: {
      main: '#1A5999',
      light: '#477aad',
      dark: '#123e6b',
    },
  },
}
