const webpack = require('webpack')
const path = require('path')
const dev = process.env.NODE_ENV === 'development';
const prod = process.env.NODE_ENV === 'production';

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.ts',
    }
  },
  lintOnSave: true,
  devServer: {
    port: 8080,
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.optimization.splitChunks({}).end()
    config.optimization.minimize(true)

    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))

    config.module
      .rule('tsx')
      .use('cache-loader')
      .loader('cache-loader')
      .loader('ts-loader')
      .end()
  },
};

