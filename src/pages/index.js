/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
// import React from 'react'
import { makeStyles, Typography, Link as MuiLink } from '@material-ui/core'
// import Link from '../components/link'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import HeroImage from '../components/HeroSection'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const useStyles = makeStyles((theme) => ({
  hero: {
    position: 'relative',
    display: 'grid',
    placeItems: 'center center',
  },
  clientsWrapper: {
    display: 'grid',
    gap: theme.spacing(3) + 'px',
  },
  clients: {
    display: 'grid',
    placeContent: 'center center',
  },
  wrapper: {
    marginBottom: theme.spacing(6),
  },
}))

const IndexPage = (props) => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.wrapper}>
        <section id="hero" className={classes.hero}>
          <HeroImage />
        </section>
        <section className={classes.clientsWrapper}>
          <Typography variant="h3" align="center">
            Clients
          </Typography>
          <div className={classes.clients} id="clients">
            {props.data.clients.nodes.map((node) => (
              <MuiLink
                href={node.website}
                className={classes.client}
                key={node.id}
              >
                <Img
                  className={classes.image}
                  fixed={
                    props.data[node.name.toLowerCase()].childImageSharp.fixed
                  }
                  // fixed={data.placeholderImage.childImageSharp.fixed}
                  alt={props.data[node.name.toLowerCase()].name}
                />
                {/* <Typography variant="h6" noWrap>
              {siteTitle}
            </Typography> */}
              </MuiLink>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
  // return (
  //   <section id="hero" className={classes.hero}>
  //     {props.data.site.siteMetadata.title}
  //   </section>
  // )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    clients: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          website: PropTypes.string,
          client: PropTypes.string,
          id: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
}

export const query = graphql`
  query HomePage {
    site {
      siteMetadata {
        title
      }
    }
    clients: allClientsYaml(filter: { name: { ne: "DEMO" } }) {
      nodes {
        name
        appUrl
        website
        logo
      }
    }
    ibew120: file(relativePath: { eq: "logos/ibew120.png" }) {
      name
      id
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
