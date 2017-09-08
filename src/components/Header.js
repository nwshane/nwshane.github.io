import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav = styled.nav`
  max-width: 1000px;
`

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 400px;
  margin-left: auto;
`

const Li = styled.li`
`

const SLink = styled(Link)`
  font-size: calc(1.6rem + 0.5vw);
  font-family: "Patua One",sans-serif;
`

const Header = () => (
  <Nav>
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
