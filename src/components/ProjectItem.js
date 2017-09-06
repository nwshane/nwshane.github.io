import React from 'react'
import Link from 'gatsby-link'

const ProjectItem = ({node: {id, frontmatter}}) => (
  <li key={id}>
    <Link to={frontmatter.path}>
      <h2>{frontmatter.title}</h2>
    </Link>
    <p>
      {frontmatter.tags}
    </p>
  </li>
)

export default ProjectItem
