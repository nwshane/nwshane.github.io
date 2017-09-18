import React from 'react'
import styled from 'styled-components'

const getSharpImageProps = (imageData) => {
  const {src, srcSet, sizes} = imageData.childImageSharp.responsiveSizes

  return {
    src,
    srcSet,
    sizes
  }
}

const Img = styled.img`
  max-width: 100%;
`

const SharpImage = ({imageData, ...props}) => (
  <Img {...getSharpImageProps(imageData)} {...props} />
)

export default SharpImage
