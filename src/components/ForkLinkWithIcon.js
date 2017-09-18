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

const ForkLinkWithIcon = ({href}) => (
  <a href={href}>
    <GithubIcon dangerouslySetInnerHTML={{__html: githubIcon}} />
    Fork on Github
  </a>
)

export default ForkLinkWithIcon
