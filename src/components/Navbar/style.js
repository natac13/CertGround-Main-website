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
  title: {
    // flexGrow: 1,
    display: 'flex',
    color: theme.palette.common.white,
    textDecoration: 'none',
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
  siteNav: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    display: 'block',
    justifySelf: 'flex-start',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  navLink: {
    color: theme.palette.common.offWhite,
  },
  sectionDesktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateRows: '1fr',
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  sectionMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  icon: {
    color: theme.palette.common.offWhite,
  },
}))
