import React from 'react'
import Layout from '~/src/components/Layout'
import HelmetTitle from '~/src/components/HelmetTitle'
import Helmet from 'react-helmet'
import ProjectItem from '~/src/components/ProjectItem'

const ProjectsPage = ({data}) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout>
      <HelmetTitle title='Projects | NathanShane.me' />
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <ProjectItem key={project.node.id}{...project} />
        ))}
      </ul>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
query ProjectsQuery {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        id
        frontmatter {
          title
          slug
          tags
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
  }
}
`
