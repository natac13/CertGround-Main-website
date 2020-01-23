// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)
// // add additional info on the node for graphql queries
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   // This function allows you to create additional fields on nodes created by other plugins.
//   const { createNodeField } = actions
//   if (node.internal.type === `Mdx`) {
//     // The function handles finding the parent File node along with creating the slug.
//     const slug = createFilePath({ node, getNode, basePath: `src/legal` })
//     console.log(slug)
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug.toLowerCase(),
//     })
//   }
// }

// exports.createPages = async ({ graphql, actions }) => {
//   // **Note:** The graphql function call returns a Promise
//   // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//             }
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     console.log('createing page')
//     createPage({
//       path: node.fields.slug,
//       component: path.resolve(`./src/templates/LegalDocs/index.js`),
//       context: {
//         // Data passed to context is available
//         // in page queries as GraphQL variables.
//         slug: node.fields.slug,
//       },
//     })
//   })
// }
