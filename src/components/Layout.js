import React from 'react'
import Header from './Header'
import styled, {injectGlobal} from 'styled-components'

injectGlobal`
  html {
    font-size: 10px;
  }
`

const Wrapper = styled.div`
  padding: 0 10px;
  font-size: 1.8rem;
`

const Layout = (props) => (
  <Wrapper>
    <Header />
    {props.children}
  </Wrapper>
)

export default Layout
