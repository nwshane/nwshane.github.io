const blogFeed = require('./src/feeds/blog')

module.exports = {
  siteMetadata: {
    title: 'NathanShane.me',
    author: 'Nathan Shane',
    description: require('./package.json').description,
    siteUrl: 'https://nathanshane.me'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    // gatsby-plugin-offline uses sw-precache under the hood:
    // https://github.com/GoogleChromeLabs/sw-precache
    // TODO: enable gatsby-plugin-offline and ensure that it does not
    // over enthusiastically cache resources
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-66298356-2',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/projects`,
        name: 'projects',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'blogPosts',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-prismjs'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
        `,
        feeds: [blogFeed]
      }
    }
  ]
}
