exports.modifyBabelrc = ({ babelrc }) => {
  return {
    plugins: babelrc.plugins.concat([
      ['babel-plugin-root-import']
    ]),
  }
}
