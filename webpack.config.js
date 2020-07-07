//const nodeExternals = require('webpack-node-externals')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack')

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

const cssLoader = {
  loader: "css-loader",
  options: {
    modules: {
      auto: true,
      localIdentName: '[path][name]-[hash:base64:5]',
    },
  }
}


module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: './src/main.ts'
  },
  //externals: [nodeExternals()],
  devtool: 'inline-source-map',
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      title: 'Anno.js',
      // BASE_URL: 'public',
      template: 'public/index.html',
      templateParameters: {
        BASE_URL: 'http://localhost:3000'
      }
      // inject: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].[hash:7].js',
    path: path.resolve(process.cwd(), 'dist'),
    //publicPath: './public',
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", cssLoader, "sass-loader"] },
      { test: /\.less$/, use: ["style-loader", cssLoader, "less-loader"] },
      { test: /\.css$/, use: [cssLoader] },
      {
        test: /\.ts(x)?$/,
        use: [
          { loader: require.resolve('cache-loader') },
          { loader: require.resolve('babel-loader') },
          { loader: require.resolve('ts-loader') }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
