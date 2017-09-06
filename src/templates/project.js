import React from 'react'
import Layout from '~/src/components/Layout'
import Helmet from 'react-helmet'
import SharpImage from '~/src/components/SharpImage'

const ProjectTemplate = ({data}) => {
  const siteTitle = data.site.siteMetadata.title
  const project = data.markdownRemark
  const {frontmatter} = project

  return (
    <Layout>
      <Helmet title={`${frontmatter.title} | ${siteTitle}`} />
      <h1>
        {frontmatter.title}
      </h1>
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
  query ProjectByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
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
