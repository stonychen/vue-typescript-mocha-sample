const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const isDev = process.env.NODE_ENV === 'development'

console.log(`Project is running in ${process.env.NODE_ENV} mode.`)

const cssLoader = {
  loader: "css-loader",
  options: {
    modules: {
      auto: true,
      localIdentName: isDev ? '[path][name]-[local]-[hash:base64:5]' : '[hash:base64:5]',
    },
  }
}

const cssLoaders = isDev ? ["style-loader", cssLoader] : [cssLoader]

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: './src/main.ts'
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      title: 'Anno.js',
      template: 'public/index.html',
      templateParameters: {
        BASE_URL: '/'
      }
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(fs.realpathSync(process.cwd()), 'src')
    }
  },
  output: {
    filename: '[name].[hash:7].js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      { test: /\.scss$/, use: [...cssLoaders, "sass-loader"] },
      { test: /\.less$/, use: [...cssLoaders, "less-loader"] },
      { test: /\.css$/, use: cssLoaders },
      {
        test: /\.ts(x)?$/,
        use: [
          { loader: require.resolve('cache-loader') },
          { loader: require.resolve('babel-loader') },
          { loader: require.resolve('ts-loader') }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: ['file-loader']
      }
    ]
  }
}
