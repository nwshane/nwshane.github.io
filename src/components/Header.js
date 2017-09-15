import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {secondaryColor} from '~/src/styles'

const Nav = styled.nav`
`

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 400px;
  margin-left: auto;
  padding: 0;
`

const Li = styled.li`
  list-style-type: none;
`

const SLink = styled(Link)`
  font-size: calc(1.6rem + 0.5vw);
  font-family: "Patua One",sans-serif;
  color: ${secondaryColor};
`

const Header = (props) => (
  <Nav {...props}>
    <Ul>
      <Li>
        <SLink to='/'>
          Home
        </SLink>
      </Li>
      <Li>
        <SLink to='/projects'>
          Projects
        </SLink>
      </Li>
      <Li>
        <SLink to='/blog'>
          Blog
        </SLink>
      </Li>
    </Ul>
    </Nav>
)

export default Header
