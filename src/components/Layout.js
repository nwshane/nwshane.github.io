import React, {Component} from 'react'
import Header from './Header'
import styled, {injectGlobal} from 'styled-components'
import 'normalize.css'
import packageJson from '~/package.json'
import gatsbyConfig from '~/gatsby-config'
import Helmet from 'react-helmet'
import {primaryColor, secondaryColor} from '~/src/styles'

injectGlobal`
  html {
    font-size: 10px;
    font-family: Lato,sans-serif;
  }

  a {
    text-decoration: none;
    color: ${primaryColor};

    :hover {
      filter: brightness(70%);
    }
  }
`

const StyledHeader = styled(Header)`
  max-width: calc(300px + 50%);
  margin: 0 auto;
`

const Wrapper = styled.div`
  padding: 0 20px;
  font-size: 2rem;
  color: #514d54;
  letter-spacing: .3px;

  p {
    line-height: 1.5;
  }
`

const ContentWrapper = styled.div`
  max-width: calc(300px + 50%);
  margin: 0 auto;
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
        <StyledHeader />
        <Helmet
          meta={[
            {property: 'og:site_name', content: gatsbyConfig.siteMetadata.title},
            {property: 'og:description', content: packageJson.description},
            {property: 'og:type', content: 'website'}
          ]}
        />
        <ContentWrapper
          className={this.props.className}
          fullWidth={this.props.fullWidth}
        >
          {this.props.children}
        </ContentWrapper>
      </Wrapper>
    )
  }
}
