import React from 'react'
import Layout from '~/src/components/Layout'

const ProjectTemplate = ({data}) => {
  const project = data.markdownRemark
  const {frontmatter} = project
  return (
    <Layout>
      <h1>
        {frontmatter.title}
      </h1>
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
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        tags
        path
        title
        mainUrl
        githubUrl
      }
    }
  }
`
