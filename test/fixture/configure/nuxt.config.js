const { resolve } = require('path')
const mod = require('../../..')

module.exports = {
  rootDir: resolve(__dirname, '../../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    [
      mod, {
        classes: {
          valid: 'is-valid',
          invalid: ['is-invalid', 'bad']
        },
        lang: "es"
      }
    ]
  ]
}
