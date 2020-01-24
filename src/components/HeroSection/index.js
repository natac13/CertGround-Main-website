import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, Typography } from '@material-ui/core'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * 
 * 
 * 
 * export default ({ data }) => {
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <div>
      <h1>Hello art-directed gatsby-image</h1>
      <Img fluid={sources} />
    </div>
  )
}

export const query = graphql`
  query {
    mobileImage: file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopImage: file(
      relativePath: { eq: "blog/avatars/kyle-mathews-desktop.jpeg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

import useStyles from './style'

const Image = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        # relativePath: { eq: "src/assets/images/AerialLandScape.jpg" }
        relativePath: { eq: "images/AerialLandScape.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={classes.wrapper}>
      <Img
        className={classes.image}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
      <Typography
        variant="h3"
        component="h1"
        className={classes.title}
        align="center"
      >
        {data.site.siteMetadata.title}
      </Typography>
    </div>
  )
}

export default Image
