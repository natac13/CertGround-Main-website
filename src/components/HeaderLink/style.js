import { makeStyles } from '@material-ui/core/styles'
// import color from 'color'

export default makeStyles((theme) => ({
  headerLink: {
    '& a': {
      // display: 'none',
      display: 'inline',
      opacity: 0,
      transition: 'opacity 400ms ease',
      '& svg': {
        transform: `translateY(${theme.spacing(0.5)}px) rotate(135deg)`,
        marginLeft: theme.spacing(0.25),
      },
    },
    '&:hover': {
      '& a': {
        opacity: 1,
      },
    },
  },
}))
