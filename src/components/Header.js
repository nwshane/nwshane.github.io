import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {secondaryColor} from '~/src/styles'

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

// can't use gatsby-link activeStyle prop here, because it makes home
// active when on any page
const isActive = (to) => {
  const currentPath = window.location.pathname
  if (currentPath === to) return true
  if (to === '/projects' && currentPath.includes('/projects')) return true
  if (to === '/blog' && currentPath.includes('/blog')) return true
  return false
}

const HeaderLink = styled(Link)`
  font-size: calc(1.6rem + 0.5vw);
  font-family: "Patua One",sans-serif;
  color: ${secondaryColor};
  padding-bottom: 2px;
  border-bottom: ${props => isActive(props.to) && '3px solid currentColor'};
  display: inline-block;
`

const Header = (props) => (
  <nav {...props}>
    <Ul>
      <Li>
        <HeaderLink to='/'>
          Home
        </HeaderLink>
      </Li>
      <Li>
        <HeaderLink to='/projects'>
          Projects
        </HeaderLink>
      </Li>
      <Li>
        <HeaderLink to='/blog'>
          Blog
        </HeaderLink>
      </Li>
    </Ul>
  </nav>
)

export default Header
