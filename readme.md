# Deprecated ⚠️

Use [Vee-validate](https://nuxt.com/modules/vee-validate)'s official module instead

# Nuxt Validate

<p>
  <a href="https://www.npmjs.com/package/nuxt-validate"><img src="https://badgen.net/npm/dm/nuxt-validate" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/nuxt-validate"><img src="https://badgen.net/npm/v/nuxt-validate" alt="Version"></a>
  <a href="https://www.npmjs.com/package/nuxt-validate"><img src="https://badgen.net/npm/license/nuxt-validate" alt="License"></a>
</p>

Nuxt.js module for validations using [Vee-Validate](https://github.com/logaretm/vee-validate)

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
      // https://github.com/logaretm/vee-validate/blob/master/docs/configuration.md
    }]
  ]
}
```

### Using top level options

```js
module.exports = {
  modules: [
    'nuxt-validate'
  ],
  nuxtValidate: {
    lang: 'es',
    nuxti18n: {
      locale: {
        'zh-CN': 'zh_CN'
      }
    }
  }
}
```

### Configuration

#### `lang`

- Default: `undefined`

The `lang` option accepts the name file placed on the [locale dir](https://github.com/logaretm/vee-validate/tree/main/packages/i18n/src/locale) of Vee-Validate repository without the extension.

#### `rules`

- Default: `undefined`

If `undefined`, importing all rules.
When listed from [validation-rules](https://logaretm.github.io/vee-validate/api/rules.html#validation-rules), importing it.

```js
nuxti18n: {
  rules: ['alpha_dash', 'min']
}
```

#### `nuxti18n`

- Default: `undefined`

When `nuxti18n` option is set as a `true`, Vee-Validate's locale changes with nuxt-i18n's locale.  
If nuxt-i18n's locale and Vee-Validate's [locale](https://github.com/logaretm/vee-validate/tree/master/locale) are different, set `locale` object to convert locale code.

```js
nuxti18n: {
  locale: {
    // nuxt-i18n's locale: Vee-Validate's locale
    'zh-cn': 'zh_CN',
    'zh-tw': 'zh_TW'
  }
}
```

:warning: **notice:** If you use nuxt-i18n module, declare the nuxt-validate module at before it.

## Documentation

Read the [official Vee-Validate documentation and demos](https://logaretm.github.io/vee-validate/).

## FAQ

### How to add custom validation methods?

We recommend using plugins.

`nuxt.config.js`

```js
module.exports = {
  plugins: ["~plugins/validate.js"],
}
```

`plugins/validate.js`

```js
import { extend } from "vee-validate";

extend("my-validation", {
  message: "This {_field_} is invalid.",
  validate: value => {
    // ...
    return true;
  }
});
```
