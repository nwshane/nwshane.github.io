import React from 'react'
import Link from 'gatsby-link'
import SharpImage from '~/src/components/SharpImage'
import styled from 'styled-components'

const H2 = styled.h2`
  font-family: "Patua One",sans-serif;
`

const ProjectItem = ({node: {frontmatter}}) => (
  <li>
    <Link to={`/projects/${frontmatter.slug}`}>
      <H2>{frontmatter.title}</H2>
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
