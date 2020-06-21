import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  wrapper: {
    display: 'grid',
    // position: 'relative',
    gridTemplateColumns: '1fr',
    minHeight: '80vh',
    placeItems: 'baseline center',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 4fr',
    },
  },
  nav: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      height: '0',
      display: 'contents',
    },
  },
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  articleWrapper: {
    display: 'grid',
    placeItems: 'baseline center',
    gridTemplateRows: '10vh 1fr',
    [theme.breakpoints.up('sm')]: {
      gridTemplateRows: '8vh 1fr',
    },
    marginBottom: theme.spacing(6),
  },
  article: {
    margin: theme.spacing(1, 3, 1, 3),
    maxWidth: '660px',
    fontSize: theme.typography.body1.fontSize,
    '& a': {
      color: theme.palette.primary.main,
      '&:hover, &:focus': {
        color: theme.palette.primary.dark,
      },
      '&:visited': {
        color: theme.palette.secondary.main,
      },
    },
  },
  editThisPageBtn: {
    alignSelf: 'center',
    justifySelf: 'end',
    marginRight: '2rem',
  },
}))
