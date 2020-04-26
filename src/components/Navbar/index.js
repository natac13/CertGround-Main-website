/** @jsx jsx */
import { jsx } from '@emotion/core'
// import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from '../../components/link'
import PropTypes from 'prop-types'

import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  MenuItem,
  Menu,
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Github,
  ChevronDoubleRight as ChevronIcon,
} from 'mdi-material-ui'
import Img from 'gatsby-image'

import useStyles from './style.js'
import { useState } from 'react'

const Navbar = ({ siteTitle }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        # relativePath: { eq: "src/assets/images/AerialLandScape.jpg" }
        relativePath: { eq: "logos/CertGround-Full-Logo-DarkBG-Blue.png" }
      ) {
        name
        id
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          authorLinkedIn
          authorGithub
          siteGithub
        }
      }
    }
  `)

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const mobileMenuId = 'navbar-mobile-menu'

  const renderMobileMenu = (
    <Menu
      // className={style.mobileMenu}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/docs" onClick={handleMobileMenuClose}>
        <IconButton>
          <ChevronIcon />
        </IconButton>
        <p>Docs</p>
      </MenuItem>
      <MenuItem
        component={Link}
        to="/#features"
        onClick={handleMobileMenuClose}
      >
        <IconButton>
          <ChevronIcon />
        </IconButton>
        <p>Features</p>
      </MenuItem>
      <MenuItem component={Link} to="/#clients" onClick={handleMobileMenuClose}>
        <IconButton>
          <ChevronIcon />
        </IconButton>
        <p>Clients</p>
      </MenuItem>
    </Menu>
  )

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.title}>
            <Img
              className={classes.image}
              fluid={data.placeholderImage.childImageSharp.fluid}
              // fixed={data.placeholderImage.childImageSharp.fixed}
              alt={data.placeholderImage.name}
            />
            {/* <Typography variant="h6" noWrap>
              {siteTitle}
            </Typography> */}
          </Link>
          <div className={classes.siteNav}>
            <Button className={classes.navLink} component={Link} to="/docs">
              Docs
            </Button>
            <Button
              className={classes.navLink}
              component={Link}
              to="/#features"
            >
              Features
            </Button>
            <Button className={classes.navLink} component={Link} to="/#clients">
              Clients
            </Button>
            {/* <Button
              className={classes.navLink}
              component={Link}
              to="/dashboard"
            >
              Dashboard
            </Button> */}
            {/* <Button className={classes.navLink} component={Link} to="/eula">
              EULA
            </Button>
            <Button
              className={classes.navLink}
              component={Link}
              to="/privacy-policy"
            >
              Privacy Policy
            </Button> */}
          </div>
          <div className={classes.sectionDesktop}>
            <a
              href={data.site.siteMetadata.siteGithub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className={classes.icon}>
                <Github />
              </IconButton>
            </a>
            {/* <Link to="/dashboard">
              <IconButton className={classes.icon}>
                <ViewDashboard />
              </IconButton>
            </Link> */}
            {/* <a
              href={data.site.siteMetadata.authorLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className={classes.icon}>
                <Linkedin />
              </IconButton>
            </a> */}
            {/* <IconButton className={classes.icon}>
              <ThemeLightDark />
            </IconButton> */}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              edge="end"
              className={classes.menuButton}
              color="inherit"
              onClick={handleMobileMenuOpen}
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
        {renderMobileMenu}
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
