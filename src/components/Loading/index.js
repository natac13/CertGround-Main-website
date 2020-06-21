import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'
import Loader from '../Loader'
// import { makeStyles, Paper } from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({
//   wrapper: {
//     width: '93vw',
//     height: '93%',
//     display: 'grid',
//     placeItems: 'center center',
//     [theme.breakpoints.up('sm')]: {
//       width: '70vw',
//     },
//     [theme.breakpoints.up('md')]: {
//       width: '60vw',
//     },
//     [theme.breakpoints.up('lg')]: {
//       width: '50vw',
//     },
//   },
// }))

const Loading = (props) => {
  // const { error, pastDelay, retry } = props
  // const classes = useStyles()
  return (
    <Layout noMenu>
      {/* <Paper className={classes.wrapper}> */}
      <Loader size={80} />
      {/* </Paper> */}
    </Layout>
  )
}

Loading.propTypes = {
  error: PropTypes.objectOf(PropTypes.any),
  pastDelay: PropTypes.bool,
  retry: PropTypes.func,
}

Loading.defaultProps = {
  error: null,
  pastDelay: false,
  retry: () => false,
}

export default Loading
