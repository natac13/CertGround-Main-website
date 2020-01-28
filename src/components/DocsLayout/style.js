import { makeStyles } from '@material-ui/core'
// import color from 'color'
const drawerWidth = '100%'
export default makeStyles((theme) => ({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    // columnGap: theme.spacing(3),
  },
  tableOfContents: {
    width: '100%',
    height: '100%',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // appBar: {
  //   [theme.breakpoints.up('sm')]: {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     marginLeft: drawerWidth,
  //   },
  // },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'grid',
    placeItems: 'center center',
  },
  drawerPaper: {
    width: drawerWidth,
    minHeight: '80vh',
    position: 'relative',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  articleWrapper: {
    display: 'grid',
    placeItems: 'baseline center',
  },
  article: {
    margin: theme.spacing(1, 3, 1, 3),
    maxWidth: '660px',
  },
}))
