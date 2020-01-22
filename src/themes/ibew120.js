export default {
  // typography: {
  //   h1: {
  //     fontSize:
  //   }
  // }
  overrides: {
    MuiLink: {
      root: {
        color: '#00c853',
        '&:hover': {
          color: '#ffd600',
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
      main: '#388e3c',
      light: '#4caf50',
      dark: '#1b5e20',
      link: '#00c853',
    },
    secondary: {
      main: '#fbc02d',
      light: '#ffeb3b',
      dark: '#f57f17',
      link: '#ffd600',
    },
  },
}
