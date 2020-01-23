/** @jsx jsx */
import { jsx } from '@emotion/core'
// import React from 'react'
import { useTheme, Typography, makeStyles } from '@material-ui/core'
import Link from '../components/link'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroImage from '../components/HeroSection'
import { graphql } from 'gatsby'

const useStyles = makeStyles((theme) => ({
  hero: {
    position: 'relative',
  },
}))

const IndexPage = (props) => {
  console.log(props)
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <section id="hero" className={classes.hero}>
        <HeroImage />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query HomePage {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
