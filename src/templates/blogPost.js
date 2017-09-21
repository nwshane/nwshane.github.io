import React from 'react'
import Layout from '~/src/components/Layout'
import styled from 'styled-components'
import BlogLayout from '~/src/components/BlogLayout'
import DateWithIcon from '~/src/components/DateWithIcon'

const Article = styled.article`
  margin-top: 50px;
`

const IntroSection = styled.section`
  margin-bottom: 50px;
`

const Heading = styled.h1`
  margin-bottom: 10px;
  font-size: 3.2rem;

  @media (min-width: 600px) {
    font-size: 4rem;
  }
`

const MainContent = styled.main`
  line-height: 1.2;

  ol, ul {
    margin: 40px 0;
  }

  ol li, ul li {
    margin-bottom: 15px;
  }

  h2 {
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 2.5rem;

    @media (min-width: 600px) {
      font-size: 3rem;
    }
  }
`

const BlogPost = ({data}) => {
  const blogPost = data.markdownRemark
  const {frontmatter} = blogPost

  return (
    <BlogLayout>
      <Article>
        <IntroSection>
          <Heading>{frontmatter.title}</Heading>
          {frontmatter.draft && (
            <p><em>(This is a draft, so it's not included in the blog index.)</em></p>
          )}
          <DateWithIcon date={frontmatter.date} />
        </IntroSection>
        <MainContent dangerouslySetInnerHTML={{__html: blogPost.html}} />
      </Article>
    </BlogLayout>
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
        draft
      }
    }
  }
`
