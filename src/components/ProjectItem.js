import React from 'react'
import Link from 'gatsby-link'
import SharpImage from '~/src/components/SharpImage'
import styled from 'styled-components'
import tagIcon from './tagIcon.svg'

const H2 = styled.h2`
  font-family: "Patua One",sans-serif;
  margin-bottom: 10px;
`

const SLink = styled(Link)`
  text-decoration: none;
`

const TagIcon = styled.img`
  fill: currentColor;
  height: 0.9em;
  width: 0.9em;
  display: inline;
`

const Ul = styled.ul`
  display: inline;
`

const Li = styled.li`
  display: inline;
  margin-left: 0.7rem;

  :not(:last-child):after {
    content: ',';
  }
`

const TagList = ({tags}) => (
  <div>
    <TagIcon src={tagIcon} alt='Tags' />
    <Ul>
      {tags.map((tag) => (
        <Li>
          {tag}
        </Li>
      ))}
    </Ul>
  </div>
)

const ProjectItem = ({node: {frontmatter}, className}) => (
  <li {...{className}}>
    <SLink to={`/projects/${frontmatter.slug}`}>
      <H2>{frontmatter.title}</H2>
      {frontmatter.featuredImage && (
        <SharpImage imageData={frontmatter.featuredImage} alt='Featured Project Image' />
      )}
    </SLink>
    <p>
      <TagList tags={frontmatter.tags.split(' ')} />
    </p>
  </li>
)

export default ProjectItem
