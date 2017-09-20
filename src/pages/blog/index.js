import React from 'react'
import BlogItem from '~/src/components/BlogItem'
import BlogLayout from '~/src/components/BlogLayout'
import styled from 'styled-components'

const Ul = styled.ul`
  padding: 0;
`

const isNotDraft = ({node: {frontmatter: {draft}}}) => (draft)

const BlogPage = ({data}) => {
  const blogPosts = data.allMarkdownRemark.edges

  return (
    <BlogLayout>
      <Ul>
        {blogPosts.filter(isNotDraft).map((blogPost) => (
          <BlogItem key={blogPost.node.id} {...blogPost} />
        ))}
      </Ul>
    </BlogLayout>
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
            draft
          }
        }
      }
    }
  }
`
