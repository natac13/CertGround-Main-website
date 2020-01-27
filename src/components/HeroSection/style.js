import { makeStyles } from '@material-ui/core'
import color from 'color'
export default makeStyles((theme) => ({
  wrapper: {
    display: 'grid',
    placeItems: 'baseline center',
    width: '100%',
    height: '80vh',
    backgroundColor: theme.palette.common.offWhite,
  },
  header: {
    placeSelf: 'end center',
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    letterSpacing: '1px',
    gridArea: '1/1/2/2',
    zIndex: 10,
  },
}))
