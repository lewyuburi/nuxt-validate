# Nuxt Validate

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
