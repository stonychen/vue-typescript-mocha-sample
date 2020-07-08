const fs = require('fs')
const path = require('path')
const appDirectory = fs.realpathSync(process.cwd())

const resolve = relativePath => path.resolve(appDirectory, relativePath)

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
      .set('@', resolve('src'))
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

