const {curry} = require('ramda')
module.exports = curry((testStr, nodes) => (
  nodes.filter(
    ({node: {fileAbsolutePath}}) => (fileAbsolutePath.includes(testStr))
  )
))
