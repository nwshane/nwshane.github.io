import React from 'react'
import Link from 'gatsby-link'
import Layout from '~/src/components/Layout'
import HelmetTitle from '~/src/components/HelmetTitle'
import gatsbyConfig from '~/gatsby-config'

const HomePage = () => (
  <Layout>
    <HelmetTitle title={gatsbyConfig.siteMetadata.title} />
    <main>
      <p>
        Hi, I'm Nathan.
      </p>
      <p>
        I like to build things on the world wide web. I also enjoy cooking, singing, and meditating.
      </p>
      <p>
        Check out my <Link to='/projects'>projects</Link> and <a target='_blank' href='https://github.com/nwshane'>Github profile</a>, and don't hesitate to <a target='_blank' href='mailto:nathanwshane@gmail.com'>get in touch</a>.
      </p>
    </main>
  </Layout>
)

export default HomePage
