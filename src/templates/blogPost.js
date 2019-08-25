import React from 'react'
import Layout from '~/src/components/Layout'
import styled from 'styled-components'
import BlogLayout from '~/src/components/BlogLayout'
import DateWithIcon from '~/src/components/DateWithIcon'
import HelmetTitle from '~/src/components/HelmetTitle'
import BlogFooter from '~/src/components/BlogFooter'

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

  ol,
  ul {
    margin: 35px 0;
  }

  ol li,
  ul li {
    margin-bottom: 15px;
  }

  h2 {
    margin-top: 70px;
    margin-bottom: 30px;
    font-size: 2.5rem;

    @media (min-width: 600px) {
      font-size: 3rem;
    }
  }

  h3 {
    margin-top: 70px;
  }

  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }

  a[href*='footnote'] {
    font-size: 0.75em;
    vertical-align: top;
  }

  /* checklist items. Examples:
   - [ ] buy soy milk
   - [ ] eat cashewgurt
   */
  .task-list-item {
    list-style-type: none;
    margin-left: -23px;

    & input[type='checkbox'] {
      margin-right: 3px;
      position: relative;
      top: -2px;
    }
  }

  hr {
    margin: 30px 0;
  }
`

const BlogPost = ({ data }) => {
  const blogPost = data.markdownRemark
  const { frontmatter } = blogPost

  return (
    <BlogLayout>
      <HelmetTitle title={frontmatter.title} />
      <Article>
        <IntroSection>
          <Heading>{frontmatter.title}</Heading>
          {frontmatter.draft && (
            <p>
              <em>
                (This is a draft, so it's not included in the blog index.)
              </em>
            </p>
          )}
          <DateWithIcon date={frontmatter.date} />
        </IntroSection>
        <MainContent dangerouslySetInnerHTML={{ __html: blogPost.html }} />
      </Article>
      <BlogFooter />
    </BlogLayout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        draft
      }
    }
  }
`
