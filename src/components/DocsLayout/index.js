import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../Layout'
import { Typography } from '@material-ui/core'
import useStyles from './style'
import DocsNav from '../DocsNav'
import EditThisPage from '../EditThisPage'

DocsTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      id: PropTypes.string,
      body: PropTypes.string,
      fileAbsolutePath: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
    toc: PropTypes.shape({
      nodes: PropTypes.shape({}),
    }),
    tocOrder: PropTypes.shape({
      nodes: PropTypes.shape({}),
    }),
  }).isRequired,
  path: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
}

export default function DocsTemplate(props) {
  const classes = useStyles()
  const {
    data: { mdx },
    path,
    uri,
  } = props

  return (
    <Layout>
      <section className={classes.wrapper}>
        <div className={classes.nav}>
          <DocsNav path={path} />
        </div>
        <div className={classes.articleWrapper}>
          <div className={classes.editThisPageBtn}>
            <EditThisPage
              slug={uri}
              isIndex={Boolean(mdx.fileAbsolutePath.match(/index.mdx$/i))}
            />
          </div>
          <article className={classes.article}>
            <Typography variant="h2" component="h1">
              {mdx.frontmatter.title}
            </Typography>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query DocsQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fileAbsolutePath
      frontmatter {
        title
      }
    }
  }
`
