/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Navbar from '../Navbar'
import Footer from '../Footer'
import useStyles from './style'

const Layout = (props) => {
  const classes = useStyles()
  const { children, noNavbar, isLoggedIn } = props
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {!noNavbar && <Navbar siteTitle={data.site.siteMetadata.title} />}
      <main className={classes.main}>{children}</main>
      <Footer isLoggedIn={isLoggedIn} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isAdmin: PropTypes.bool,
  isMemberView: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  push: PropTypes.func,
  noMenu: PropTypes.bool,
  noNavbar: PropTypes.bool,
  // noFeedback: PropTypes.bool,
  // wrapperClassName: PropTypes.string
}

Layout.defaultProps = {
  noMenu: false,
  noNavbar: false,
  // noFeedback: false,
  isAdmin: false,
  isLoggedIn: false,
  isMemberView: false,
  push: () => false,
  // wrapperClassName: null
}

export default Layout
