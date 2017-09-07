import React, {Component} from 'react'
import Header from './Header'
import styled, {injectGlobal} from 'styled-components'
import WebFont from 'webfontloader'
import 'normalize.css'
import packageJson from '~/package.json'
import gatsbyConfig from '~/gatsby-config'
import Helmet from 'react-helmet'

injectGlobal`
  html {
    font-size: 10px;
    font-family: Lato,sans-serif;
  }

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
  }
`

const Wrapper = styled.div`
  padding: 0 10px;
  font-size: 1.8rem;
`

// https://github.com/DSchau/blog/blob/master/src/services/web-fonts.js
const loadWebFonts = () => {
  const families = ['Lato:300,400', 'Patua One']
  if (sessionStorage.fonts === families.join(' ')) {
    document.documentElement.classList.add('wf-active')
  }

  require.ensure(
    'webfontloader',
    () => {
      const WebFonts = require('webfontloader')

      WebFonts.load({
        active() {
          sessionStorage.fonts = families.join(' ')
        },
        google: {
          families
        },
        timeout: 2000
      })
    },
    'webfontloader'
  )
}

export default class Layout extends Component {
  componentDidMount () {
    loadWebFonts()
  }

  render () {
    return (
      <Wrapper>
        <Header />
        <Helmet
          meta={[
            {property: 'og:site_name', content: gatsbyConfig.siteMetadata.title},
            {property: 'og:description', content: packageJson.description},
            {property: 'og:type', content: 'website'}
          ]}
        />
        {this.props.children}
      </Wrapper>
    )
  }
}
