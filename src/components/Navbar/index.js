/** @jsx jsx */
import { jsx } from '@emotion/core'
// import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { makeStyles, fade } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import { Magnify, Menu } from 'mdi-material-ui'
import Img from 'gatsby-image'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
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
}))

const Navbar = ({ siteTitle }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        # relativePath: { eq: "src/assets/images/AerialLandScape.jpg" }
        relativePath: { eq: "logos/CertGround-Full-Logo-DarkBG.png" }
      ) {
        name
        id
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
          # fixed(width: 120) {
          #   ...GatsbyImageSharpFixed
          # }
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
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
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Menu />
          </IconButton>
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
