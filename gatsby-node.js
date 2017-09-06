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
              path
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
      const {path} = node.frontmatter
      createPage({
        path,
        component: projectTemplate,
        context: {
          path
        }
      })
    })
  }).catch((error) => {
    console.log(error)
  })
}
