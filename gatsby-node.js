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
  const projectTemplate = resolve('./src/templates/project.js')

  return graphql(
    `
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
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

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      const {slug} = node.frontmatter
      createPage({
        path: `/projects/${slug}`,
        component: projectTemplate,
        context: {
          slug
        }
      })
    })
  }).catch((error) => {
    console.log(error)
  })
}
