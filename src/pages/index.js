import React from 'react'
import Layout from '~/src/components/Layout'
import HelmetTitle from '~/src/components/HelmetTitle'
import gatsbyConfig from '~/gatsby-config'
import IntroText from '~/src/components/IntroText'

const HomePage = () => (
  <Layout>
    <HelmetTitle title={gatsbyConfig.siteMetadata.title} />
    <IntroText />
  </Layout>
)

export default HomePage
