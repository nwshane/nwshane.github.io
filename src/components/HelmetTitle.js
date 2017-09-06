import React from 'react'
import Helmet from 'react-helmet'
import gatsbyConfig from '~/gatsby-config'

const siteName = gatsbyConfig.siteMetadata.title

const getTitleTagText = (title) => (
  title === siteName
    ? siteName
    : `${title} | ${siteName}`
)
// Sets both the page title and the meta og:title tag to props.title.
// For title tag: If title passed in is the same as the site name, then
// just use the site name; otherwise, append site name to title
const HelmetTitle = ({title}) => (
  <Helmet
    title={getTitleTagText(title)}
    meta={[
      {property: 'og:title', content: title}
    ]}
  />
)

export default HelmetTitle
