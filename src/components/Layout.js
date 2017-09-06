import React, {Component} from 'react'
import Header from './Header'
import styled, {injectGlobal} from 'styled-components'
import WebFont from 'webfontloader'

injectGlobal`
  html {
    font-size: 10px;
    font-family: Lato,sans-serif;
  }
`

const Wrapper = styled.div`
  padding: 0 10px;
  font-size: 1.8rem;
`

const loadWebFonts = () => {
  WebFont.load({
    google: {
      families: ['Lato']
    }
  })
}

export default class Layout extends Component {
  componentDidMount () {
    loadWebFonts()
  }

  render () {
    return (
      <Wrapper>
        <Header />
        {this.props.children}
      </Wrapper>
    )
  }
}
