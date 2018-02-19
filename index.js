const { resolve } = require('path')

module.exports = function nuxtBootstrapVue (moduleOptions) {
  this.addPlugin({
    src: resolve(__dirname, 'veeValidate.js'),
    fileName: 'vee-validate.js',
    moduleOptions
  })
}

module.exports.meta = require('./package.json')
