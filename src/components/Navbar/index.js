import React, { useState, useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from '../../components/link'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import ThemeContext from '../../themes/themeContext'
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  MenuItem,
  Menu,
  Tooltip,
  Hidden,
  Divider,
  Switch,
  FormControlLabel,
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Github,
  ChevronDoubleRight as ChevronIcon,
  WhiteBalanceSunny,
  Brightness3,
  // Linkedin,
  ExitToApp,
} from 'mdi-material-ui'
import Img from 'gatsby-image'

import useStyles from './style.js'
// import useIsMobile from '../../utils/isMobile'

const Navbar = ({ siteTitle }) => {
  const classes = useStyles()
  // const isMobile = useIsMobile()
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const data = useStaticQuery(graphql`
    query {
      CertGroundLogo: file(
        relativePath: {
          eq: "logos/CertGround-Logo-Full-White-TransparentBG.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 72) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CertGroundMonogram: file(
        relativePath: {
          eq: "logos/CertGround-Monogram-White-TransparentBG.png"
        }
      ) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
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

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.title}>
            <Img
              fluid={data.CertGroundLogo.childImageSharp.fluid}
              alt="CertGround Logo"
              className={classes.image}
            />
          </Link>
          <Hidden xsDown>
            <nav className={classes.siteNav} id="main-nav">
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
              <Button
                className={classes.navLink}
                component={Link}
                to="/#clients"
              >
                Clients
              </Button>
            </nav>
          </Hidden>
          <Hidden xsDown>
            <nav className={classes.iconsDesktop} id="icon-nav">
              <Tooltip
                arrow
                placement="bottom"
                title={`Toggle ${darkMode ? 'Light Mode' : 'Dark Mode'}`}
              >
                <IconButton
                  tabIndex={open ? '-1' : '0'}
                  color="primary"
                  onClick={() => setDarkMode(!darkMode)}
                  className={clsx(classes.icon, classes.darkModeIcon)}
                  aria-label={'Toggle Color mode'}
                >
                  {darkMode ? <WhiteBalanceSunny /> : <Brightness3 />}
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="bottom" title="Github">
                <IconButton
                  className={classes.icon}
                  href={data.site.siteMetadata.siteGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </IconButton>
              </Tooltip>
              {/* <Tooltip arrow placement="bottom" title="LinkedIn">
                <IconButton
                  className={classes.icon}
                  href={data.site.siteMetadata.authorLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </IconButton>
              </Tooltip> */}
              <Tooltip arrow placement="bottom" title="Demo App">
                <IconButton
                  className={classes.icon}
                  href="http://demo.certground.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExitToApp />
                </IconButton>
              </Tooltip>
            </nav>
          </Hidden>

          <Hidden smUp>
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
          </Hidden>
        </Toolbar>
        <Menu
          classes={{
            paper: classes.mobileMenu,
          }}
          id={mobileMenuId}
          onClose={handleMobileMenuClose}
          open={isMobileMenuOpen}
          anchorEl={mobileMoreAnchorEl}
          keepMounted
          getContentAnchorEl={null}
          elevation={0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <MenuItem
            component={Link}
            to="/docs/intro/"
            onClick={handleMobileMenuClose}
          >
            <IconButton>
              <ChevronIcon />
            </IconButton>
            <p>Documentation</p>
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
          <MenuItem
            component={Link}
            to="/#clients"
            onClick={handleMobileMenuClose}
          >
            <IconButton>
              <ChevronIcon />
            </IconButton>
            <p>Clients</p>
          </MenuItem>
          <Divider />
          <MenuItem className={classes.mobileDarkModeToggle}>
            <FormControlLabel
              control={
                <Switch
                  aria-label={'Toggle Color mode'}
                  onClick={() => setDarkMode(!darkMode)}
                  checked={darkMode}
                />
              }
              label={darkMode ? 'Dark Mode' : 'Light Mode'}
            />
          </MenuItem>
          <Divider />
          <MenuItem className={classes.mobileIcons}>
            <IconButton
              className={classes.mobileIcon}
              href={data.site.siteMetadata.siteGithub}
              target="_blank"
              rel="noopener noreferrer"
              size="medium"
            >
              <Github />
            </IconButton>
            {/* <IconButton
              className={classes.mobileIcon}
              href={data.site.siteMetadata.authorLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              size="medium"
            >
              <Linkedin />
            </IconButton> */}
            <IconButton
              className={classes.mobileIcon}
              href="http://demo.certground.com"
              target="_blank"
              rel="noopener noreferrer"
              size="medium"
            >
              <ExitToApp />
            </IconButton>
          </MenuItem>
        </Menu>
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
