import React from 'react'
import styled from 'styled-components'
import tagIcon from './tagIcon.svg'

const TagIcon = styled.img`
  fill: currentColor;
  height: 0.9em;
  width: 0.9em;
  display: inline;
  margin-right: 0.7rem;
`

const Ul = styled.ul`
  display: inline;
  padding: 0;
`

const Li = styled.li`
  display: inline-block;
  margin-right: 0.7rem;

  :not(:last-child):after {
    content: ',';
  }
`

const Wrapper = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
`

const TagList = ({tags, className}) => (
  <Wrapper className={className}>
    <TagIcon src={tagIcon} alt='Tags' />
    <Ul>
      {tags.map((tag) => (
        <Li key={tag}>
          {tag}
        </Li>
      ))}
    </Ul>
  </Wrapper>
)

export default TagList
