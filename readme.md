# Nuxt Validate

<p align="center">
  <a href="https://circleci.com/gh/nuxt/nuxt.js"><img src="https://badgen.net/circleci/github/nuxt/nuxt.js/dev" alt="Build Status"></a>
  <a href="https://dev.azure.com/nuxt/nuxt.js/_build/latest?definitionId=1"><img src="https://dev.azure.com/nuxt/nuxt.js/_apis/build/status/nuxt.js" alt="Azure Build Status"></a>
  <a href="https://codecov.io/gh/nuxt/nuxt.js"><img src="https://badgen.net/codecov/c/github/nuxt/nuxt.js/dev" alt="Coverage Status"></a>
  <a href="https://www.npmjs.com/package/nuxt"><img src="https://badgen.net/npm/dm/nuxt" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/nuxt"><img src="https://badgen.net/npm/v/nuxt" alt="Version"></a>
  <a href="https://www.npmjs.com/package/nuxt"><img src="https://badgen.net/npm/license/nuxt" alt="License"></a>
  <a href="https://discord.nuxtjs.org/"><img src="https://badgen.net/badge/Discord/join-us/7289DA" alt="Discord"></a>
 </p>

Nuxt.js module for validations using [Vee-Validate](https://github.com/baianat/vee-validate)

## Install

```sh
npm i --save nuxt-validate
```

## Usage

Add module to nuxt.config.js

```js
module.exports = {
  modules: [
    ...
    ['nuxt-validate', {
      lang: 'es',
      ...
      // regular vee-validate options 
    }]
  ]
}
```

The `lang` option accepts the name file placed on the [locale dir](https://github.com/baianat/vee-validate/tree/master/locale) of Vee-Validate repository without the extension.

## Documentation

Read the [official Vee-Validate documentation and demos](http://vee-validate.logaretm.com/).
