import React from 'react'
import dateIcon from '~/assets/icons/dateIcon.svg'
import styled from 'styled-components'
import {primaryColor} from '~/src/styles'

const StyledDateIcon = styled.span`
  svg {
    fill: ${primaryColor};
    max-width: 0.9em;
    max-height: 0.9em;
  }
`

const DateWithIcon = ({date, ...props}) => (
  <span {...props}>
    <StyledDateIcon dangerouslySetInnerHTML={{__html: dateIcon}}/>
    <span>
      {date}
    </span>
  </span>
)

export default DateWithIcon
