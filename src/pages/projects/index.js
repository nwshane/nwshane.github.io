import React from 'react'
import Layout from '~/src/components/Layout'
import HelmetTitle from '~/src/components/HelmetTitle'
import Helmet from 'react-helmet'
import ProjectItem from '~/src/components/ProjectItem'
import styled from 'styled-components'

// Move title off page but leave it in markup for accessibility
const H1 = styled.h1`
  width: 1px;
  height: 1px;
  position: absolute;
  top: -9999px;
  left: -9999px;
`

const SProjectItem = styled(ProjectItem)`
  margin-bottom: 45px;
`

const ProjectsPage = ({data}) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout>
      <HelmetTitle title='Projects' />
      <H1>Projects</H1>
      <ul>
        {projects.map((project) => (
          <SProjectItem key={project.node.id}{...project} />
        ))}
      </ul>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
query ProjectsQuery {
  allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/pages/projects/" }}
    sort: { order: DESC, fields: [frontmatter___date] }
  ) {
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
