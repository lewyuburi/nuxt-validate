const { resolve } = require('path')
const hoge = require('../../..')

module.exports = {
  rootDir: resolve(__dirname, '../../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    { handler: require('../../..') }
  ],
  nuxtValidate: { rules: ["required", "min", "alpha"], lang: "ja" }
}
