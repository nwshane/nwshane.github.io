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

const getProjectGridSpan = ({node: {frontmatter: {featured}}})=> ({
  gridColumn: featured ? 'span 2' : 'span 1',
  gridRow: featured ? 'span 3' : 'span 2'
})

const SProjectItem = styled(ProjectItem)`
  margin-bottom: 50px;

  @supports (grid-area: auto) {
    @media (min-width: 600px) {
      margin-bottom: 0;
      grid-column: ${(props) => (getProjectGridSpan(props).gridColumn)};
      grid-row: ${(props) => (getProjectGridSpan(props).gridRow)};
    }
  }
`

const Ul = styled.ul`
  padding: 0;

  @supports (grid-area: auto) {
    @media (min-width: 600px) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      grid-gap: 30px;
    }
  }
`

const ProjectsLayout = styled(Layout)`
  @supports (grid-area: auto) {
    max-width: initial;
    margin: initial;
  }
`

const ProjectsPage = ({data}) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <ProjectsLayout>
      <HelmetTitle title='Projects' />
      <H1>Projects</H1>
      <Ul>
        {projects.map((project) => (
          <SProjectItem key={project.node.id}{...project} />
        ))}
      </Ul>
    </ProjectsLayout>
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
            featured
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
