const {compose, filter} = require('ramda')
const filterByPathIncludes = require('../helpers/filterByPathIncludes')

const getPostUrl = (siteUrl, postSlug) => (
  `${siteUrl}/blog/${postSlug}`
)

module.exports = {
  serialize: ({ query: { site, allMarkdownRemark } }) => {
    const {siteUrl} = site.siteMetadata

    const getPublishedBlogPosts = compose(
      filter(({node}) => {
        return !node.frontmatter.draft
      }),
      filterByPathIncludes('/pages/blog/')
    )

    return getPublishedBlogPosts(allMarkdownRemark.edges).map((edge) => {
      return Object.assign(
        {},
        edge.node.frontmatter,
        {
          description: edge.node.excerpt,
          url: getPostUrl(siteUrl, edge.node.frontmatter.slug),
          guid: getPostUrl(siteUrl, edge.node.frontmatter.slug),
          custom_elements: [{ 'content:encoded': edge.node.html }],
        }
      );
    });
  },
  query: `
  {
    allMarkdownRemark(
      limit: 1000,
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fileAbsolutePath
          excerpt
          html
          frontmatter {
            slug
            title
            date
            draft
          }
        }
      }
    }
  }
  `,
  output: '/blog/rss.xml'
}
