import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../Layout'
import { Typography } from '@material-ui/core'

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <div>
        <Typography variant="h2" component="h1">
          {mdx.frontmatter.title}
        </Typography>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query DocsQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
