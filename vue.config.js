const webpack = require('webpack')
const resolveApp = require('./resolve-app')
const path = require('path')
const dev = process.env.NODE_ENV === 'development'
const prod = process.env.NODE_ENV === 'production'

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

module.exports = {
  publicPath: '',
  assetsDir: '',
  lintOnSave: true,
  devServer: {
    port: 8085,
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolveApp('src'))
      .end()

    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))
      .end()


    config.optimization.splitChunks({}).end()
    config.optimization.minimize(true)
  },
}

