import React from 'react'
import Layout from '~/src/components/Layout'
import MeteoriteViz from '../pages/blog/2017-09-12-meteorites/MeteoriteViz'

const BlogPost = ({data}) => {
  const blogPost = data.markdownRemark
  const {frontmatter} = blogPost

  return (
    <Layout>
      <article>
        <h1>{frontmatter.title}</h1>
        <main dangerouslySetInnerHTML={{__html: blogPost.html}}></main>
        <MeteoriteViz />
      </article>
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
      }
    }
  }
`
