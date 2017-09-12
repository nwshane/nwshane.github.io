import React from 'react'
import Link from 'gatsby-link'
import SharpImage from '~/src/components/SharpImage'
import styled from 'styled-components'
import tagIcon from './tagIcon.svg'

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
  font-weight: 300;

  :not(:last-child):after {
    content: ',';
  }
`

const TagList = ({tags}) => (
  <div>
    <TagIcon src={tagIcon} alt='Tags' />
    <Ul>
      {tags.map((tag) => (
        <Li key={tag}>
          {tag}
        </Li>
      ))}
    </Ul>
  </div>
)

const H2 = styled.h2`
  font-family: "Patua One",sans-serif;
  margin-bottom: 10px;
`

const TitleLink = styled(Link)`
  text-decoration: none;
`

const ImageLink = styled(Link)`
  :hover {
    filter: none;
  }
`

const ProjectItem = ({node: {frontmatter}, className}) => (
  <li {...{className}}>
    <H2>
      <TitleLink to={`/projects/${frontmatter.slug}`}>{frontmatter.title}</TitleLink>
    </H2>
    {frontmatter.featuredImage && (
      <ImageLink to={`/projects/${frontmatter.slug}`}>
        <SharpImage imageData={frontmatter.featuredImage} alt='Featured Project Image' />
      </ImageLink>
    )}
    {frontmatter.tags && (
      <TagList tags={frontmatter.tags.split(' ')} />
    )}
  </li>
)

export default ProjectItem
