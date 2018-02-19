import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import <%= options.lang %> from 'vee-validate/dist/locale/<%= options.lang %>'

Validator.localize(<%= options.lang %>)

Vue.use(VeeValidate)
