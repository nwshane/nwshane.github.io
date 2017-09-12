import React from 'react'
import Layout from '~/src/components/Layout'

const BlogPost = ({data}) => {
  const blogPost = data.markdownRemark
  const {frontmatter} = blogPost

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug }}) {
      frontmatter {
        title
      }
    }
  }
`
