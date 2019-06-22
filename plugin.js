import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
<% if (options.lang) { %>
import <%= options.lang %> from 'vee-validate/dist/locale/<%= options.lang %>'
<% } %>
Vue.use(VeeValidate, <%= JSON.stringify(options.nuxtValidateOptions, null, 2) %>)
<% if (options.lang) { %>
Validator.localize('<%= options.lang %>', <%= options.lang %>)
<% } %>

export default ({ app }, inject) => {
  app.validator = Validator

  <% if (options.nuxti18n) { %>
  const nuxti18n = <%= JSON.stringify(options.nuxti18n) %>
  if (nuxti18n.locale) {
    const validatorLocale = nuxti18n.locale[app.i18n.locale] ? nuxti18n.locale[app.i18n.locale] : app.i18n.locale
    if (app.validator.locale !== validatorLocale) {
      import(`vee-validate/dist/locale/${validatorLocale}`).then(dic => {
        app.validator.localize(validatorLocale, dic)
      })
    }

    app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
      const newValidatorLocale = nuxti18n.locale[newLocale] ? nuxti18n.locale[newLocale] : newLocale
      import(`vee-validate/dist/locale/${newValidatorLocale}`).then(dic => {
        app.validator.localize(newValidatorLocale, dic)
      })
    };
  }
  <% } %>
}
