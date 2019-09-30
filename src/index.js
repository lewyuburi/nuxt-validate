const { resolve } = require('path')

module.exports = function nuxtValidate (moduleOptions) {
  const options = Object.assign({}, this.options.nuxtValidate, moduleOptions)

  this.nuxt.hook('build:before', () => {
    this.options.build.transpile.push('vee-validate/dist/rules')
  })

  // Remove module options
  const nuxtValidateOptions = Object.assign({}, options)
  delete nuxtValidateOptions.lang
  delete nuxtValidateOptions.nuxti18n
  delete nuxtValidateOptions.rules

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, '..', 'templates', 'plugin.js'),
    fileName: 'vee-validate.js',
    options: {
      nuxtValidateOptions,
      lang: moduleOptions.lang,
      nuxti18n: moduleOptions.nuxti18n,
      rules: moduleOptions.rules
    }
  })
}

module.exports.meta = require('../package.json')
