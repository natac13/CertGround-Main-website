const headerFont = {
  fontFamily: ['Oswald', 'sans-serif'].join(','),
}

export const lightPalette = {
  palette: {
    type: 'light',
    primary: {
      main: '#1d5d99',
      light: '#4a7dad',
      dark: '#14416b',
      contrastText: '#fff',
    },
    secondary: {
      main: '#887400',
      light: '#9f8f33',
      dark: '#5f5100',
      contrastText: '#fff',
    },
    background: {
      default: '#fcfcfc',
    },
  },
}

export const darkPalette = {
  palette: {
    type: 'dark',
    primary: {
      main: '#2a85db',
      light: '#549de2',
      dark: '#1d5d99',
      contrastText: '#1a1a1a',
    },
    secondary: {
      main: '#B29700',
      light: '#c1ab33',
      dark: '#7c6900',
      contrastText: '#1a1a1a',
    },
    background: {
      default: '#1a1a1a',
      paper: '#2b2b2b',
    },
  },
}

export default {
  overrides: {
    // MuiLink: {
    //   root: {
    //     color: '#1A5999',

    //     '&:hover': {
    //       color: '#c1ab33',
    //       textDecoration: ['none', '!important'],
    //     },
    //   },
    // },
    MuiListItemIcon: {
      root: {
        color: 'none',
      },
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    fontSize: 14,
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
}
