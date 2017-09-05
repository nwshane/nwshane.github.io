import React from 'react'
import Link from 'gatsby-link'
import Layout from '~/src/components/Layout'
import Helmet from 'react-helmet'

const ProjectsPage = ({data}) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Helmet
        title='Projects ~ Nathan Shane'
      />
      <ul>
        {console.log(projects)}
        {projects.map(({node: {id, frontmatter}}) => (
          <li key={id}>
            <Link to={frontmatter.path}>
              {frontmatter.title}
            </Link>
            <p>
              {frontmatter.tags}
            </p>
          </li>
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
          path
          tags
        }
      }
    }
  }
}
`
