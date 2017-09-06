import React from 'react'
import Link from 'gatsby-link'
import SharpImage from '~/src/components/SharpImage'

const ProjectItem = ({node: {id, frontmatter}}) => (
  <li key={id}>
    <Link to={`/projects/${frontmatter.slug}`}>
      <h2>{frontmatter.title}</h2>
      {frontmatter.featuredImage && (
        <SharpImage imageData={frontmatter.featuredImage} alt='Featured Project Image' />
      )}
    </Link>
    <p>
      {frontmatter.tags}
    </p>
  </li>
)

export default ProjectItem
