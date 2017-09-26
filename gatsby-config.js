module.exports = {
  siteMetadata: {
    title: 'NathanShane.me',
    author: 'Nathan Shane',
    description: require('./package.json').description
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
            resolve: `gatsby-remark-images`
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-prismjs'
        ]
      }
    }
  ]
}
