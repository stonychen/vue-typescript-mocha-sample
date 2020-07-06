
module.exports = (() => {

  return {
    presets: [
      require('@vue/cli-plugin-babel/preset')
    ],
    plugins: [
      require('babel-plugin-lodash'),
    ]
  };
})();
