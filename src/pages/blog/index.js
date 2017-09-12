import Layout from '~/src/components/Layout'
import React from 'react'

const BlogPage = ({data}) => {
  const blogPosts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <ul>
        {blogPosts.map((blogPost) => (
          <li key={blogPost.node.id}>
            {blogPost.node.frontmatter.title}
          </li>
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
          frontmatter {
            title
          }
        }
      }
    }
  }
`
