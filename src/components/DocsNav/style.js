import { makeStyles } from '@material-ui/core'
// import color from 'color'
const drawerWidth = '100%'
export default makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'grid',
    placeItems: 'center center',
  },
  drawerWrapper: {
    height: '100%',
  },
  drawerPaper: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
    width: '70%',
    minHeight: '100%',
    position: 'relative',
  },
  mobileMenuBtn: {
    position: 'fixed',
    zIndex: theme.zIndex.modal + 1,
    right: '2rem',
    bottom: '4rem',
    // backgroundColor: theme.palette.primary.light,
    // color: theme.palette.common.offWhite,
    '& svg': {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  docked: {
    height: '100%',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))
