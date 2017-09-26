const {resolve} = require('path')
const filterByPathIncludes = require('./src/helpers/filterByPathIncludes')

exports.modifyBabelrc = ({ babelrc }) => {
  return {
    plugins: babelrc.plugins.concat([
      ['babel-plugin-root-import']
    ]),
  }
}

exports.modifyWebpackConfig = ({config}) => {
  config._loaders['url-loader'].config.test = new RegExp(
    config._loaders['url-loader'].config.test.toString().replace('svg|', '')
  )

  config._loaders.svg = {
    config: {
      test: /\.svg$/,
      loader: 'svg-inline'
    }
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
              draft
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

    const getBlogPostPath = ({draft, slug}) => (
      draft ? `/blog/drafts/${slug}` : `/blog/${slug}`
    )

    blogPosts.forEach(({node}) => {
      createPage({
        path: getBlogPostPath(node.frontmatter),
        component: resolve('./src/templates/blogPost.js'),
        context: {
          slug: node.frontmatter.slug
        }
      })
    })
  }).catch((error) => {
    console.log(error)
  })
}
