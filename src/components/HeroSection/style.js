import { makeStyles } from '@material-ui/core'
import color from 'color'
export default makeStyles((theme) => ({
  wrapper: {
    display: 'grid',
    placeItems: 'center center',
  },
  image: {
    width: '100%',
    height: '60vh',
    gridArea: '1/1/2/2',
    filter: 'brightness(0.6)',
    [theme.breakpoints.up('sm')]: {
      height: '80vh',
    },
    [theme.breakpoints.up('lg')]: {
      height: '90vh',
    },
  },
  title: {
    color: theme.palette.primary.main,
    textShadow: `2px 2px 4px ${theme.palette.primary.dark}`,
    backgroundColor: color(theme.palette.grey[100])
      .alpha(0.6)
      .hsl()
      .string(),
    borderRadius: '12px',
    padding: theme.spacing(4, 4),
    fontWeight: 'bold',
    letterSpacing: '1px',
    gridArea: '1/1/2/2',
    zIndex: 10,
  },
}))
