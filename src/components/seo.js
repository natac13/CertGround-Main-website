import R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import startCase from 'lodash/startCase'
import capitalize from 'lodash/capitalize'

function SEO({ description, lang, meta, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const createCrumbs = R.compose(
    R.map(R.compose(startCase, capitalize)),
    R.reject(R.isEmpty),
    R.split('/')
  )

  const createTitle = R.compose(
    R.join(' | '),
    R.append(`${site.siteMetadata.title}`),
    // R.reject(
    //   R.compose(
    //     R.lte(12), // 12 is less than or equal to the length of the crump in the array
    //     R.length
    //   )
    // ),
    R.reverse,
    createCrumbs
  )
  const title = createTitle(pathname || '')
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.title}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      titleTemplate={`${title}`}
      meta={[
        {
          name: 'viewport',
          content: 'minimum-scale=1, initial-scale=1, width=device-width',
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  pathname: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pathname: PropTypes.string,
}

export default SEO
