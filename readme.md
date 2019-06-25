# Nuxt Validate

<p>
  <a href="https://www.npmjs.com/package/nuxt-validate"><img src="https://badgen.net/npm/dm/nuxt-validate" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/nuxt-validate"><img src="https://badgen.net/npm/v/nuxt-validate" alt="Version"></a>
  <a href="https://www.npmjs.com/package/nuxt-validate"><img src="https://badgen.net/npm/license/nuxt-validate" alt="License"></a>
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
      nuxti18n: {
        locale: {
          'zh-CN': 'zh_CN'
        }
      }
      ...
      // regular vee-validate options
    }]
  ]
}
```

### Configuration

#### `lang`

- Default: `en`

The `lang` option accepts the name file placed on the [locale dir](https://github.com/baianat/vee-validate/tree/master/locale) of Vee-Validate repository without the extension.

#### `nuxti18n`

- Default: `undefined`

When `nuxti18n` option is set as a `true`, Vee-Validate's locale changes with nuxt-i18n's locale.  
If nuxt-i18n's locale and Vee-Validate's [locale](https://github.com/baianat/vee-validate/tree/master/locale) are different, set `locale` object to convert locale code.

```js
nuxti18n: {
  locale: {
    // nuxt-i18n's locale: Vee-Validate's locale
    'zh-cn': 'zh_CN',
    'zh-tw': 'zh_TW'
  }
}
```

**notice:** If you use nuxt-i18n module, declare the nuxt-validate module at before it.

## Documentation

Read the [official Vee-Validate documentation and demos](https://baianat.github.io/vee-validate/).
