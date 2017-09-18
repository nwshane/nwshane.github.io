import React from 'react'
import styled from 'styled-components'
import tagIcon from '~/assets/icons/tagIcon.svg'
import {primaryColor} from '~/src/styles'

const TagIcon = styled.span`
  max-width: 0.9em;
  max-height: 0.9em;
  display: inline;
  margin-right: 0.1em;

  svg {
    fill: ${primaryColor};
    max-width: inherit;
    max-height: inherit;
  }
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

const TagList = ({tags, className}) => (
  <div className={className}>
    <TagIcon dangerouslySetInnerHTML={{__html: tagIcon}} alt={'Tags'}/>
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
