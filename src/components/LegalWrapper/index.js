import React from 'react'
import PropTypes from 'prop-types'
import useStyles from './style.js'

LegalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
export default function LegalWrapper({ children }) {
  const classes = useStyles()
  return <div className={classes.wrapper}>{children}</div>
}
