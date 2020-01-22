/** @jsx jsx */
import { jsx } from '@emotion/core'
// import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  header: {
    background: theme.palette.primary.main,
  },
  headerText: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    '&:hover': {
      color: '#333',
    },
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Link className={classes.headerText} css={{ color: 'white' }} to="/">
          {/* <p sx={{ color: 'secondary', fontSize: 8 }}>{siteTitle}</p> */}
          <Typography variant="h6">{siteTitle}</Typography>
          <Typography variant="h6">{process.env.GATSBY_CLIENT}</Typography>
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
