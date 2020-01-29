const path = require(`path`)
const fs = require('fs')
const R = require('ramda')
const yaml = require(`js-yaml`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const redirects = yaml.load(fs.readFileSync(`./redirects.yaml`))
// add additional info on the node for graphql queries
exports.onCreateNode = ({ node, getNode, actions }) => {
  // This function allows you to create additional fields on nodes created by other plugins.
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    // console.log(node)
    // The function handles finding the parent File node along with creating the slug.
    const slug = createFilePath({ node, getNode, basePath: `src/docs` })
    // console.log(slug)
    if (slug.match(/(eula|privacy)/)) {
      // console.log('match')
      return false
    }
    createNodeField({
      node,
      name: `slug`,
      value: `${slug.toLowerCase()}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions
  console.log(redirects)
  redirects.forEach((redirect) => {
    createRedirect({ isPermanent: true, redirectInBrowser: true, ...redirect })
  })
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              disableToc
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  result.data.allMdx.edges.forEach(({ node }) => {
    if (!node.fields || !node.fields.slug) {
      // console.log('no Create')
      return false
    }
    // console.log('createing page', node.fields.slug)
    // console.log(node.fields.slug.split('/'))
    const slugArray = R.compose(
      R.reject(R.equals('')),
      R.split('/')
    )(node.fields.slug)
    const parentPath = R.compose(R.init(), R.tail())(slugArray)
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/DocsLayout/index.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        title: node.frontmatter.title,
        disableToc: node.frontmatter.disableToc,
        id: node.id,
        parentPath,
      },
    })
  })
}
