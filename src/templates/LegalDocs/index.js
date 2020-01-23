// import React from 'react'
// import Layout from '../../components/Layout'
// import { graphql } from 'gatsby'
// import { Typography } from '@material-ui/core'

// const LegalDocsTemplate = (props) => {
//   const { data } = props
//   const page = data.markdownRemark
//   return (
//     <Layout>
//       <header>
//         <Typography variant="h2" align="center">
//           {page.frontmatter.title}
//         </Typography>
//       </header>
//       <section dangerouslySetInnerHTML={{ __html: page.html }}></section>
//     </Layout>
//   )
// }

// export default LegalDocsTemplate

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `
