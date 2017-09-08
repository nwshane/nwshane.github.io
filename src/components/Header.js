import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Li = styled.li`
`

const SLink = styled(Link)`
  font-family: "Patua One",sans-serif;
`

const Header = () => (
  <nav>
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
  </nav>
)

export default Header
