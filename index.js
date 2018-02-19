const { resolve } = require('path')

const defaults = {
  lang: 'en'
}

module.exports = function nuxtValidate (moduleOptions) {
  const options = Object.assign({}, defaults, this.options.nuxtValidate, moduleOptions)

  // Remove module options
  const nuxtValidateOptions = Object.assign({}, options)
  delete nuxtValidateOptions.lang

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'veeValidate.js'),
    fileName: 'vee-validate.js',
    options: {
      nuxtValidateOptions,
      lang: options.lang
    }
  })
}

module.exports.meta = require('./package.json')
