import { makeStyles } from '@material-ui/core'
export default makeStyles((theme) => ({
  wrapper: {
    display: 'grid',
    placeItems: 'end center',
    gap: theme.spacing(2) + 'px',
    width: '100%',
    height: '80vh',
    maxWidth: '900px',
    backgroundColor: theme.palette.common.offWhite,
    marginBottom: theme.spacing(6),
  },
  header: {
    placeSelf: 'start center',
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    letterSpacing: '1px',
    gridArea: '2/2/3/3',
    zIndex: 10,
  },
}))
