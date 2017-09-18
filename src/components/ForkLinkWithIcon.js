import React from 'react'
import githubIcon from '~/assets/icons/githubIcon.svg'
import styled from 'styled-components'
import {primaryColor} from '~/src/styles'

const GithubIcon = styled.span`
  svg {
    fill: ${primaryColor};
    max-width: 0.9em;
    max-height: 0.9em;
  }
`

const ForkLinkWithIcon = ({href, className}) => (
  <a href={href} className={className}>
    <GithubIcon dangerouslySetInnerHTML={{__html: githubIcon}} />
    Fork on Github
  </a>
)

export default ForkLinkWithIcon
