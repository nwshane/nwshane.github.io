const {resolve} = require('path')

exports.modifyBabelrc = ({ babelrc }) => {
  return {
    plugins: babelrc.plugins.concat([
      ['babel-plugin-root-import']
    ]),
  }
}

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators

  return graphql(
    `
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              slug
            }
          }
        }
      }
    }
    `
  ).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const nodes = result.data.allMarkdownRemark.edges

    const filterByPathIncludes = (testStr, nodes) => (
      nodes.filter(
        ({node: {fileAbsolutePath}}) => (fileAbsolutePath.includes(testStr))
      )
    )

    const projects = filterByPathIncludes('/pages/projects/', nodes)

    projects.forEach(({node}) => {
      const {slug} = node.frontmatter
      createPage({
        path: `/projects/${slug}`,
        component: resolve('./src/templates/project.js'),
        context: {
          slug
        }
      })
    })

    const blogPosts = filterByPathIncludes('/pages/blog/', nodes)

    blogPosts.forEach(({node}) => {
      const {slug} = node.frontmatter
      createPage({
        path: `/blog/${slug}`,
        component: resolve('./src/templates/blogPost.js'),
        context: {
          slug
        }
      })
    })
  }).catch((error) => {
    console.log(error)
  })
}
