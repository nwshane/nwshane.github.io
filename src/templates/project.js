import React from 'react'
import Layout from '~/src/components/Layout'

const ProjectTemplate = ({data}) => {
  const project = data.markdownRemark
  return (
    <Layout>
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
        path
        title
      }
    }
  }
`
