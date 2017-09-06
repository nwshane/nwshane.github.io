import React from 'react'
import Helmet from 'react-helmet'

// Sets both the page title and the meta og:title tag to props.title
const HelmetTitle = ({title}) => (
  <Helmet
    title={title}
    meta={[
      {property: 'og:title', content: title}
    ]}
  />
)

export default HelmetTitle
