import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Main = styled.main`
  @media (min-width: 768px) {
    max-width: 80%;
  }
`

const Greeting = styled.p`
  font-size: calc(2.2rem + 4vw);
  font-family: 'Patua One', sans-serif;
  margin-top: calc(2.2em - 3vw);
  margin-bottom: 1.1em;
  margin-left: auto;
  margin-right: auto;
`

const IntroP = styled.p`
  font-size: calc(1.3rem + 1.6vw);
  line-height: 1.35em;
  margin-left: auto;
  margin-right: auto;
`

const IntroText = () => (
  <Main>
    <Greeting>Hi, I'm Nathan.</Greeting>
    <IntroP>
      I'm a software engineer, musician, and meditator on a journey to help
      people heal through a deeper understanding of mind, body, and heart.
    </IntroP>
    <IntroP>
      Check out my <Link to="/projects">work</Link> and{' '}
      <Link to="/blog">writing</Link>, and don't hesitate to{' '}
      <a target="_blank" href="mailto:nathanwshane@gmail.com">
        get in touch
      </a>
      .
    </IntroP>
  </Main>
)

export default IntroText
