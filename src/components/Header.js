import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to='/'>
          Home
        </Link>
      </li>
      <li>
        <Link to='/projects'>
          Projects
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
