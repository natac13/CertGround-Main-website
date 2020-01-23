import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'relative',
    backgroundColor: '#222',
    height: 'auto',
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridAutoRows: 'auto',
    placeItems: 'center center',
    padding: theme.spacing(4),
    gap: theme.spacing(6) + 'px',
    zIndex: 10,
    gridTemplateAreas: `
      'ack'
      'nav'
      'me'
      'title'
      'copyright'
    `,
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateAreas: `
        'ack ack'
        'nav me'
        'title copyright'
      `,
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateAreas: `
        'nav ack me'
        'nav ack me'
        'nav title me'
        'nav copyright me'
      `,
    },
  },
  ack: {
    gridArea: 'ack',
    display: 'grid',
    gap: theme.spacing(1) + 'px',
    alignSelf: 'start',
    '& ul': {
      display: 'grid',
      gap: theme.spacing(0.5) + 'px',
      padding: '0',
      '& li': {
        padding: '0',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
      },
    },
  },
  nav: {
    gridArea: 'nav',
    width: '100%',
    // height: '100%',
    placeItems: 'center baseline',
    '& ul': {
      display: 'grid',
      width: '100%',
      listStyle: 'none',
      gridTemplateColumns: 'repeat(2, 50%)',
      placeItems: 'center baseline',
    },
    '& span': {
      color: 'currentColor',
    },
    '& div': {
      minWidth: theme.spacing(4),
    },
    '& svg': {
      color: 'currentColor',
      fontSize: theme.typography.h6.fontSize,
    },
  },
  title: {
    gridArea: 'title',
    color: theme.palette.grey[300],
  },
  me: {
    gridArea: 'me',
  },
  me__name: {
    color: theme.palette.grey[400],
  },
  me__bio: {
    color: theme.palette.grey[400],
  },
  copyright: {
    gridArea: 'copyright',
    color: theme.palette.grey[500],
  },
}))

export default useStyles
