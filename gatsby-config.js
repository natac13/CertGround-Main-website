const path = require(`path`)
require(`dotenv`).config({
  path: `.env`,
  // path: `.env.${process.env.NODE_ENV}`,
})
const siteAddress = new URL(`http://certground.com`)

// let mongoSourceOptions = {
//   collection: [`members`, `feedbacks`],
// }
// const isDev = process.env.NODE_ENV === 'development'
// const isProd = process.env.NODE_ENV === 'production'
// if (isDev) {
//   mongoSourceOptions = {
//     ...mongoSourceOptions,
//     dbName: 'ibew120',
//     clientOptions: { useUnifiedTopology: true },
//   }
// } else if (isProd) {
//   mongoSourceOptions = {
//     ...mongoSourceOptions,
//     dbName: 'ibew120',
//     connectionString: '',
//     auth: {
//       user: '',
//       pass: '',
//     },
//     clientOptions: {},
//   }
// }

module.exports = {
  siteMetadata: {
    title: `CertGround™️`,
    description: `Giving organizations a Training Center Management webapp. Built with the construction industry in mind to allow workers the ability to show their safety & skills certificates without physically sharing cards.`,
    author: `Sean Paul Campbell`,
    email: `sean.campbell13@gmail.com`,
    authorBio: `Creator, Designer, Mastermind`,
    authorLinkedIn: `https://www.linkedin.com/in/seancampbellnatac/`,
    authorGithub: `https://github.com/natac13`,
    siteGithub: `https://github.com/natac13/CertGround-Main-website`,
    siteUrl: `https://www.certground.com`,
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `Sean Paul Campbell`,
    'Mdx.frontmatter.author': `Sean Paul Campbell`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: `certground.com`,
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
        generateMatchPathRewrites: false,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteAddress.href.slice(0, -1),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin`],
            variants: [`400`, `500`],
          },
          {
            family: `Open Sans`,
            subsets: [`latin`],
            variants: [`300`, `400`, `400i`, `500`, `700`, `700i`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#1d5d99`,
        showSpinner: false,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `commonData`,
        path: `${__dirname}/common/`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: {
          docs: require.resolve('./src/components/DocsLayout/index.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 786,
              backgroundColor: `#ffffff`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.5rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 786,
              backgroundColor: `#ffffff`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.5rem`,
            },
          },

          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CertGround™️ Training Center Management`,
        short_name: `CertGround™️`,
        start_url: `/`,
        background_color: `#1d5d99`,
        theme_color: `#1d5d99`,
        display: `browser`,
        icon: `./src/assets/logos/CertGround-Monogram-White-BlueBG.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
