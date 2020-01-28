/** @jsx jsx */
import { jsx } from '@emotion/core'
// import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from '../../components/link'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core'
import { Menu, GithubCircle, ViewDashboard } from 'mdi-material-ui'
import Img from 'gatsby-image'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: 'auto',
  },
  title: {
    // flexGrow: 1,
    display: 'flex',
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
  image: {
    width: '12rem',
    // height: '2rem',
    // padding: theme.spacing(1),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
  },
  siteNav: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    display: 'block',
    justifySelf: 'flex-start',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  navLink: {
    color: theme.palette.common.offWhite,
  },
  sectionDesktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateRows: '1fr',
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  sectionMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  icon: {
    color: theme.palette.common.offWhite,
  },
}))

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
                <GithubCircle />
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
              aria-label="open drawer"
            >
              <Menu />
            </IconButton>
          </div>
        </Toolbar>
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
