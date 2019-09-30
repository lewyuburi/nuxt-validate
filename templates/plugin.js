import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate'
<% if (options.lang) { %>
import <%= options.lang %> from 'vee-validate/dist/locale/<%= options.lang %>.json'
<% } %>
<%
if (Array.isArray(options.rules)) {
  for (let rule in rules) {
%>
import <%= rule %> from 'vee-validate/dist/rules/<%= rule %>'
<%
  }
  for (let rule in rules) {
%>
<% if (options.lang) { %>
    extend('<%= rule %>', {
      ...<%= rule %>,
      message: <%= options.lang %>.messages['<%= rule %>']
    });
<% } else { %>
    extend('<%= rule %>', <%= rule %>)
<% } %>
<%
  }
} else {
%>
import * as rules from 'vee-validate/dist/rules'

for (let rule in rules) {
<% if (options.lang) { %>
  extend(rule, {
    ...rules[rule],
    message: <%= options.lang %>.messages[rule]
  });
<% } else { %>
  extend(rule, rules[rule])
<% } %>
}
<%
}
%>

const getLocale = (opt, locale) => {
  if (typeof opt === 'object' && opt.locale[locale]) {
    return opt.locale[locale]
  }
  return locale
}

<% if (options.nuxtValidateOptions && Object.keys(options.nuxtValidateOptions).length > 0) { %>
// https://github.com/logaretm/vee-validate/blob/master/docs/configuration.md
configure(<%= JSON.stringify(options.nuxtValidateOptions) %>);
<% } %>

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

export default ({ app }, inject) => {
  const nuxti18n = <%= JSON.stringify(options.nuxti18n) %>
  if (nuxti18n && app.i18n) {
    const validatorLocale = getLocale(nuxti18n, app.i18n.locale)
    import(`vee-validate/dist/locale/${validatorLocale}.json`).then(dic => {
      localize(validatorLocale, dic)
    })

    const beforeLanguageSwitch = app.i18n.beforeLanguageSwitch
    app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
      beforeLanguageSwitch(oldLocale, newLocale)
      const newValidatorLocale = getLocale(nuxti18n, newLocale)
      import(`vee-validate/dist/locale/${newValidatorLocale}.json`).then(dic => {
        localize(newValidatorLocale, dic)
      })
    }
  }
}
