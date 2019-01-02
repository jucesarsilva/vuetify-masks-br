import '@babel/polyfill'
import './plugins/vuetify'

import Vue from 'vue'
import App from './App.vue'
import { trim, cnpjcpf, cnpj, cpf, rg, phone, cep } from '../'

Vue.config.productionTip = false

//directives
Vue.directive('rg', rg)
Vue.directive('cpf', cpf)
Vue.directive('cep', cep)
Vue.directive('trim', trim)
Vue.directive('cnpj', cnpj)
Vue.directive('phone', phone)
Vue.directive('cnpjcpf', cnpjcpf)

new Vue({
  render: h => h(App)
}).$mount('#app')
