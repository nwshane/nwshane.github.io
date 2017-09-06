import React from 'react'
import Helmet from 'react-helmet'

const getTitleTagText = (title) => (
  title === 'NathanShane.me'
    ? 'NathanShane.me'
    : `${title} | NathanShane.me`
)
// Sets both the page title and the meta og:title tag to props.title
const HelmetTitle = ({title}) => (
  <Helmet
    title={getTitleTagText(title)}
    meta={[
      {property: 'og:title', content: title}
    ]}
  />
)

export default HelmetTitle
