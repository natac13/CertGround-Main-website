const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
// add additional info on the node for graphql queries
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   // This function allows you to create additional fields on nodes created by other plugins.
//   const { createNodeField } = actions
//   if (node.internal.type === `Mdx`) {
//     // console.log(node)
//     // The function handles finding the parent File node along with creating the slug.
//     const slug = createFilePath({ node, getNode, basePath: `src/docs` })
//     console.log(slug)
//     if (slug.match(/(eula|privacy)/)) {
//       console.log('match')
//       return false
//     }
//     createNodeField({
//       node,
//       name: `slug`,
//       value: `/docs${slug.toLowerCase()}`,
//     })
//   }
// }

exports.createPages = async ({ graphql, actions, reporter }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              path
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
    if (!node.frontmatter.path.match(/docs/)) {
      console.log('no Create')
      return false
    }
    console.log('createing page', node.frontmatter.path)
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`./src/components/DocsLayout/index.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.frontmatter.path,
        title: node.frontmatter.title,
        id: node.id,
      },
    })
  })
}
