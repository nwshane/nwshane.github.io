import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Li = styled.li`
  margin-bottom: 50px;
`

const BlogItem = ({node, ...props}) => {
  const {frontmatter} = node

  return (
    <Li {...props}>
      <h2>
        <Link to={`/blog/${frontmatter.slug}`}>
          {frontmatter.title}
        </Link>
      </h2>
      <p>{frontmatter.date}</p>
      <div>{node.excerpt}</div>
    </Li>
  )
}

export default BlogItem
