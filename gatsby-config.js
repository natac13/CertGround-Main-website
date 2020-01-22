const path = require(`path`)
require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `CertGround™️`,
    description: `CertGround™️ Training Center Management SaaS. Built for the Construction industry.`,
    author: `Sean Paul Campbell`,
    email: `sean.campbell13@gmail.com`,
    authorBio: `Creator, Designer, Mastermind`,
    authorLinkedIn: `https://www.linkedin.com/in/seancampbellnatac/`,
    docsLink: `https://docs.certground.com`,
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `Sean Paul Campbell`,
    'Mdx.frontmatter.author': `Sean Paul Campbell`,
  },
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `commonData`,
        path: `./common/`,
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        // shouldBlockNodeFromTransformation(node) {
        //   return (
        //     [`NPMPackage`, `NPMPackageReadme`].includes(node.internal.type) ||
        //     (node.internal.type === `File` &&
        //       path.parse(node.dir).dir.endsWith(`packages`))
        //   )
        // },
        gatsbyRemarkPlugins: [
          //   `gatsby-remark-embedder`,
          //   `gatsby-remark-graphviz`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 786,
              backgroundColor: `#ffffff`,
            },
          },
          //   {
          //     resolve: `gatsby-remark-responsive-iframe`,
          //     options: {
          //       wrapperStyle: `margin-bottom: 1.5rem`,
          //     },
          //   },
          //   `gatsby-remark-autolink-headers`,
          //   `gatsby-remark-copy-linked-files`,
          //   `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-ramda`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CertGround™️ Training Center Management`,
        short_name: `CertGround™️`,
        start_url: `/`,
        background_color: `#123434`,
        theme_color: `#123434`,
        display: `browser`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
