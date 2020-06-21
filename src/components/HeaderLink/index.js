import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import useStyles from './style.js'
import { Typography, Tooltip } from '@material-ui/core'
import Link from '../link.js'
import LinkIcon from 'mdi-material-ui/Link'

const HeaderLink = (props) => {
  const classes = useStyles()
  const { header, to, className, tooltipText, ...rest } = props
  return (
    <Typography
      variant="h5"
      className={clsx(classes.headerLink, className)}
      {...rest}
    >
      <span>{header}</span>
      <Link to={to} aria-label={`${header} url link`}>
        <Tooltip title={tooltipText} arrow>
          <LinkIcon />
        </Tooltip>
      </Link>
    </Typography>
  )
}

HeaderLink.propTypes = {
  header: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  tooltipText: PropTypes.string,
}

export default HeaderLink
