import React from 'react'
import Link from 'gatsby-link'
import Layout from '~/src/components/Layout'

const HomePage = () => (
  <Layout>
    <main>
      <p>
        Hi, I'm Nathan.
      </p>
      <p>
        I like to build things on the world wide web. I also enjoy cooking, singing, and meditating.
      </p>
      <p>
        Check out my various <Link to='/projects'>creations</Link>, and don't hesitate to <Link to='/contact'>get in touch</Link>.
      </p>
    </main>
  </Layout>
)

export default HomePage
