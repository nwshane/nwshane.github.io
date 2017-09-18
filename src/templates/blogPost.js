import React from 'react'
import Layout from '~/src/components/Layout'
import styled from 'styled-components'

const Article = styled.article`
  margin-top: 50px;
`

const MainContent = styled.main`
  line-height: 1.2;
`

const BlogPost = ({data}) => {
  const blogPost = data.markdownRemark
  const {frontmatter} = blogPost

  return (
    <Layout>
      <Article>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <MainContent dangerouslySetInnerHTML={{__html: blogPost.html}} />
      </Article>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug }}) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
