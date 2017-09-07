import React from 'react'
import Layout from '~/src/components/Layout'
import HelmetTitle from '~/src/components/HelmetTitle'
import SharpImage from '~/src/components/SharpImage'
import styled from 'styled-components'

const H1 = styled.h1`
  font-family: "Patua One",sans-serif;
`

const ProjectTemplate = ({data}) => {
  const project = data.markdownRemark
  const {frontmatter} = project

  return (
    <Layout>
      <HelmetTitle title={frontmatter.title} />
      <H1>
        {frontmatter.title}
      </H1>
      {frontmatter.featuredImage && (
        <SharpImage imageData={frontmatter.featuredImage} alt='Featured Project Image' />
      )}
      {frontmatter.mainUrl && (
        <p>
          <a target='_blank' href={frontmatter.mainUrl}>
            {frontmatter.mainUrl}
          </a>
        </p>
      )}
      {frontmatter.githubUrl && (
        <p>
          <a target='_blank' href={frontmatter.githubUrl}>
            Fork on Github
          </a>
        </p>
      )}
      <p>Date: {frontmatter.date}</p>
      <p>Tags: {frontmatter.tags}</p>
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </Layout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        mainUrl
        githubUrl
        featuredImage {
          childImageSharp {
            responsiveSizes(maxWidth: 600) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`
