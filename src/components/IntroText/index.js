import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Greeting = styled.p`
  font-size: calc(2.6rem + 4vw);
  font-family: "Patua One",sans-serif;
  margin-top: 1.9em;
  margin-bottom: 1.1em;
  margin-left: auto;
  margin-right: auto;
`

const IntroP = styled.p`
  font-size: calc(1.2rem + 2vw);
  line-height: 1.35em;
  margin-left: auto;
  margin-right: auto;
`

const IntroText = () => (
  <main>
    <Greeting>
      Hi, I'm Nathan.
    </Greeting>
    <IntroP>
      I like to build things on the world wide web. I also enjoy cooking, singing, and meditating.
    </IntroP>
    <IntroP>
      Check out my <Link to='/projects'>work</Link>, my <Link to='/blog'>writing</Link>, and my <a target='_blank' href='https://github.com/nwshane'>Github profile</a>, and don't hesitate to <a target='_blank' href='mailto:nathanwshane@gmail.com'>get in touch</a>.
    </IntroP>
  </main>
)

export default IntroText
