import { makeStyles } from '@material-ui/core/styles'
import color from 'color'
// const footerBG = '#131313'
export const styles = (theme) => ({
  footer: {
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    // backgroundColor: footerBG,
    borderTop: `1px solid ${color(theme.palette.background.default)
      .negate()
      .hex()}`,
    height: 'auto',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridAutoRows: 'auto',
    placeItems: 'center center',
    padding: theme.spacing(4),
    gap: theme.spacing(6) + 'px',
    zIndex: 10,
    gridTemplateAreas: `
      'title'
      'nav'
      'ack'
      'me'
      'copyright'
    `,
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateAreas: `
        'title title'
        'nav ack'
        'me copyright'
      `,
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateAreas: `
      'nav title me'
      'nav ack me'
      'nav ack me'
      'nav copyright me'
      `,
    },
    '@media print': {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridTemplateAreas: `
      'title'
      'nav'
      'ack'
      'me'
      'copyright'
    `,
      gap: theme.spacing(1) + 'px',
      padding: theme.spacing(1),
    },
  },
  ack: {
    gridArea: 'ack',
    display: 'grid',
    gap: theme.spacing(1) + 'px',
    alignSelf: 'start',
    '& ul': {
      display: 'grid',
      gap: theme.spacing(1) + 'px',
      padding: '0',
      '& li': {
        padding: '0',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
      },
    },
    '@media print': {
      display: 'none',
    },
  },
  ack__listItem: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.text.primary,
    // color: theme.palette.secondary.main,
    textAlign: 'center',
  },
  nav: {
    gridArea: 'nav',
    // backgroundColor: theme.palette.background.default,
    // backgroundColor: footerBG,
    width: '100%',
    padding: 0,
    placeItems: 'center baseline',
    display: 'grid',
    listStyle: 'none',
    gridTemplateColumns: 'repeat(2, 50%)',
    gap: theme.spacing(0.5) + 'px',
    '& div': {
      minWidth: theme.spacing(4),
    },
    '@media print': {
      display: 'none',
    },
  },
  title: {
    gridArea: 'title',
    '& a': {
      padding: theme.spacing(1, 1.6),
      color: theme.palette.text.primary,
    },
    '& a:hover, & a:focus': {
      // outline: `1px solid ${theme.palette.tertiary.main}`,
      boxShadow: `0 0 1px ${theme.palette.grey[300]}`,
      textDecoration: 'none',
      outline: 'none',
      // backgroundColor: 'rgba(0, 0, 0, .1)',
      color: theme.palette.text.primary,
    },
  },
  me: {
    gridArea: 'me',
    padding: theme.spacing(1, 1.6),
    color: theme.palette.text.secondary,
    '&:hover, &:focus': {
      outline: `1px solid ${theme.palette.text.disabled}`,
      // outline: `none`,
      // outlineBottom: `1px solid ${theme.palette.grey[300]}`,
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
  },
  copyright: {
    gridArea: 'copyright',
    color: theme.palette.text.secondary,
  },
  link: {
    textTransform: 'capitalize',
    // backgroundColor: footerBG,
    border: 0,
    backgroundColor: theme.palette.background.default,
    // fontSize: theme.typography.body1.fontSize,
    color: theme.palette.primary.main,
    // color: theme.palette.tertiary.main,
    // color: 'black',
    '&:hover, &:focus': {
      // color: theme.palette.secondary.main,
      outline: `1px solid ${theme.palette.primary.main}`,
      boxShadow: `0 0 6px ${theme.palette.primary.main}`,
      textDecoration: 'none',
      // backgroundColor: 'rgba(0, 0, 0, .1)',
    },
  },
  linkIcon: {
    color: 'currentColor',
    fontSize: theme.typography.h6.fontSize,
  },
})

const useStyles = makeStyles(styles)

export default useStyles
