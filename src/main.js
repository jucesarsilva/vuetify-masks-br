import '@babel/polyfill'
import './plugins/vuetify'

import Vue from 'vue'
import App from './App.vue'
import { trim } from './../index'

Vue.config.productionTip = false

//directives
Vue.directive('trim', trim)

new Vue({
  render: h => h(App)
}).$mount('#app')
