import { makeStyles } from '@material-ui/core/styles'
export default makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    placeContent: 'center center',
  },
  iframe: {
    // height: theme.spacing(48),
    // width: theme.spacing(1.618 * 48),
    width: '100%',
    height: '12rem',

    [`${theme.breakpoints.up('sm')}`]: {
      height: '18rem',
    },
    [`${theme.breakpoints.up('md')}`]: {
      height: '23rem',
    },
    [`${theme.breakpoints.up('lg')}`]: {
      height: '29rem',
    },
  },
}))
