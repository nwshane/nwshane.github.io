import Layout from '~/src/components/Layout'
import React from 'react'
import BlogItem from '~/src/components/BlogItem'

const BlogPage = ({data}) => {
  const blogPosts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <ul>
        {blogPosts.map((blogPost) => (
          <BlogItem key={blogPost.node.id} {...blogPost} />
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogPostsQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/pages/blog/"}},
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`
