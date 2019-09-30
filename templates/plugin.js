import Vue from 'vue'
import VeeValidate from 'vee-validate'

<% if (options.lang) { %>
import <%= options.lang %> from 'vee-validate/dist/locale/<%= options.lang %>'
<% } %>

Vue.use(VeeValidate, <%= JSON.stringify(options.nuxtValidateOptions, null, 2) %>)

<% if (options.lang) { %>
VeeValidate.Validator.localize('<%= options.lang %>', <%= options.lang %>)
<% } %>

export default ({ app }, inject) => {
  app.validator = VeeValidate.Validator

  <% if (options.nuxti18n) { %>
  const getLocale = (opt, locale) => {
    if (typeof opt === 'object' && opt.locale[locale]) {
      return opt.locale[locale]
    }
    return locale
  }
  const nuxti18n = <%= JSON.stringify(options.nuxti18n) %>
  if (nuxti18n && app.i18n) {
    const validatorLocale = getLocale(nuxti18n, app.i18n.locale)
    if (app.validator.locale !== validatorLocale) {
      import(`vee-validate/dist/locale/${validatorLocale}`).then(dic => {
        app.validator.localize(validatorLocale, dic)
      })
    }

    const beforeLanguageSwitch = app.i18n.beforeLanguageSwitch
    app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
      beforeLanguageSwitch(oldLocale, newLocale)
      const newValidatorLocale = getLocale(nuxti18n, newLocale)
      import(`vee-validate/dist/locale/${newValidatorLocale}`).then(dic => {
        app.validator.localize(newValidatorLocale, dic)
      })
    };
  }
  <% } %>
}
