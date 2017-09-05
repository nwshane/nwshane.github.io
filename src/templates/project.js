import React from 'react'
import Layout from '~/src/components/Layout'
import Helmet from 'react-helmet'

const getFeaturedImageProps = (featuredImage) => ({
  src: featuredImage.childImageSharp.responsiveSizes.src,
  alt: 'Featured Project Image'
})

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
        <img {...getFeaturedImageProps(frontmatter.featuredImage)} />
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
            {frontmatter.githubUrl}
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
        date
        tags
        mainUrl
        githubUrl
        featuredImage {
          childImageSharp {
            responsiveSizes(maxWidth: 600) {
              src
            }
          }
        }
      }
    }
  }
`
