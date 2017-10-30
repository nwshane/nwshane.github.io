import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import DateWithIcon from '~/src/components/DateWithIcon'

const Li = styled.li`
margin-bottom: 50px;
list-style-type: none;
`

const Heading = styled.h2`
  margin-bottom: 10px;
`

const StyledDateWithIcon = styled(DateWithIcon)`
  display: block;
  margin-bottom: 30px;
`

const BlogItem = ({node, ...props}) => {
  const {frontmatter} = node

  return (
    <Li {...props}>
      <Heading>
        <Link to={`/blog/${frontmatter.slug}`}>
          {frontmatter.title}
        </Link>
      </Heading>
      <StyledDateWithIcon date={frontmatter.date} />
      <div dangerouslySetInnerHTML={{__html: node.excerpt}} />
    </Li>
  )
}

export default BlogItem
