import { makeStyles } from '@material-ui/core/styles'
export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '4rem',
    [theme.breakpoints.down('xs')]: {
      height: '3.5rem',
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: 'auto',
  },
  image: {
    width: '12rem',
    // height: '2rem',
    // padding: theme.spacing(1),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
  },
  title: {
    flex: 1,
    display: 'flex',
    placeContent: 'center flex-start',
  },
  siteNav: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  iconsDesktop: {
    flex: 1,
    display: 'flex',
    placeContent: 'center flex-end',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  darkModeIcon: {
    '& svg': {
      transform: 'rotate(33deg)',
    },
  },
  navLink: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  sectionMobile: {},
  icon: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  mobileMenu: {
    width: theme.spacing(36),
    border: `2px solid ${theme.palette.text.primary}`,
  },
  mobileDarkModeToggle: {
    display: 'flex',
    padding: theme.spacing(2),
    placeContent: 'center center',
  },
  mobileIcons: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: theme.spacing(2),
  },
}))
