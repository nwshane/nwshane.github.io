import React from 'react'
import Link from 'gatsby-link'

const BlogItem = ({node}) => {
  const {frontmatter} = node

  return (
    <li>
      <h2>
        <Link to={`/blog/${frontmatter.slug}`}>
          {frontmatter.title}
        </Link>
      </h2>
      <p>{frontmatter.date}</p>
      <div>{node.excerpt}</div>
    </li>
  )
}

export default BlogItem
