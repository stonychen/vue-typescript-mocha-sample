const path = require('path')
const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-cheap-module-source-map',
  // node: {
  //   fs: 'empty'
  // },
  stats: "errors-only",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    // ...
    // use absolute paths in sourcemaps (important for debugging via IDE)
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  }
})
