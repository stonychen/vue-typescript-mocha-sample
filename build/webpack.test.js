const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const nodeExternals = require('webpack-node-externals')

module.exports = merge(common, {
  devtool: 'inline-cheap-module-source-map',
  externals: [nodeExternals()],
  output: {
    // ...
    // use absolute paths in sourcemaps (important for debugging via IDE)
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  }
})
