
module.exports = (() => {

  return {
    presets: [
      require('@vue/cli-plugin-babel/preset')
    ],
    plugins: [

      // In:
      // import _ from 'lodash'
      // _.map([1, 2, 3], addOne)
      //
      // Out:
      // import _map from 'lodash/map'
      // _map([1, 2, 3], addOne)

      require('babel-plugin-lodash'),
    ]
  }
})()
