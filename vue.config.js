const webpack = require('webpack')
const resolveApp = require('./resolve-app')
const path = require('path')
const dev = process.env.NODE_ENV === 'development';
const prod = process.env.NODE_ENV === 'production';

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

module.exports = {
  publicPath: '',
  assetsDir: '',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.ts',
    }
  },
  lintOnSave: true,
  devServer: {
    port: 8085,
  },
  productionSourceMap: false,
  chainWebpack: config => {
    // config
    //   .entry('app')
    //   .clear()
    //   .add('./src/app')
    //   .end();

    config.resolve.alias
      .set('@', resolveApp('src'))
      .end()

    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))
      .end()

    // config.module
    //   .rule('vue')
    //   .use('cache-loader')
    //   .loader('thread-loader')
    //   .loader('babel-loader')
    //   .loader('vue-loader')
    //   .end()

    // config.module
    //   .rule('ts')
    //   .use('cache-loader')
    //   .loader('thread-loader')
    //   .loader('babel-loader')
    //   .loader('ts-loader')
    //   .end()

    config.module
      .rule('tsx')
      .use('cache-loader')
      .loader('babel-loader')
      .loader('ts-loader')
      .end()



    config.optimization.splitChunks({}).end()
    config.optimization.minimize(true)
  },
};

