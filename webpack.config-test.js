const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  externals: [nodeExternals()],
  output: {
    // ...
    // use absolute paths in sourcemaps (important for debugging via IDE)
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ['css-loader?modules', 'sass-loader'] },
      { test: /\.less$/, use: ['css-loader', 'less-loader'] },
      { test: /\.css$/, use: ['css-loader'] },
      {
        test: /\.tsx$/,
        use: [
          { loader: require.resolve('cache-loader') },
          { loader: require.resolve('babel-loader') },
          { loader: require.resolve('ts-loader') }
        ]
      }
    ]
  }
}
