import React from 'react'
import Link from 'gatsby-link'
import SharpImage from '~/src/components/SharpImage'
import styled from 'styled-components'

const H2 = styled.h2`
  font-family: "Patua One",sans-serif;
  margin-bottom: 10px;
`

const SLink = styled(Link)`
  text-decoration: none;
`

const ProjectItem = ({node: {frontmatter}, className}) => (
  <li {...{className}}>
    <SLink to={`/projects/${frontmatter.slug}`}>
      <H2>{frontmatter.title}</H2>
      {frontmatter.featuredImage && (
        <SharpImage imageData={frontmatter.featuredImage} alt='Featured Project Image' />
      )}
    </SLink>
    <p>
      {frontmatter.tags}
    </p>
  </li>
)

export default ProjectItem
