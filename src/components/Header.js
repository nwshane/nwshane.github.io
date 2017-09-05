import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Ul = styled.ul`
  padding: 0;
`

const Li = styled.li`
  list-style-type: none;
`

const Header = () => (
  <nav>
    <Ul>
      <Li>
        <Link to='/'>
          Home
        </Link>
      </Li>
      <Li>
        <Link to='/projects'>
          Projects
        </Link>
      </Li>
    </Ul>
  </nav>
)

export default Header
