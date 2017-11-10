import Layout from '~/src/components/Layout'
import styled from 'styled-components'

// Style is written with && {} so that the class is output as .class.class,
// causing it to override Layout's style
// Source: https://github.com/styled-components/styled-components/issues/85#issuecomment-253965711
const BlogLayout = styled(Layout)`
  && {
    max-width: 75rem;
  }
`

export default BlogLayout
