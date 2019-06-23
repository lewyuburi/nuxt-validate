const { resolve } = require('path')

const defaults = {
  lang: 'en'
}

module.exports = function nuxtValidate (moduleOptions) {
  const options = Object.assign({}, defaults, this.options.nuxtValidate, moduleOptions)

  // Remove module options
  const nuxtValidateOptions = Object.assign({}, options)
  delete nuxtValidateOptions.lang
  delete nuxtValidateOptions.nuxti18n

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'vee-validate.js',
    options: {
      nuxtValidateOptions,
      lang: moduleOptions.lang,
      nuxti18n: moduleOptions.nuxti18n
    }
  })
}

module.exports.meta = require('./package.json')
