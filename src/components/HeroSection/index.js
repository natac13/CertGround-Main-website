import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Typography } from '@material-ui/core'

import useStyles from './style'

const Image = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "logos/CertGround-Monogram-Blue.png" }
      ) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <div className={classes.wrapper}>
      <Img
        className={classes.image}
        fixed={data.placeholderImage.childImageSharp.fixed}
      />
      <header className={classes.header}>
        <Typography
          variant="h3"
          component="h1"
          className={classes.title}
          align="center"
        >
          {data.site.siteMetadata.title}
        </Typography>
        <Typography variant="h5" className={classes.description} align="center">
          {data.site.siteMetadata.description}
        </Typography>
      </header>
    </div>
  )
}

export default Image
