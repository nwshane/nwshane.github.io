import React from 'react'
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
  font-size: 1.6rem;
`

const Li = styled.li`
  display: inline-block;
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

export default TagList
