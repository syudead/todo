import Vue from 'vue'

import App from './App'

// ignore message
Vue.config.productionTip = false

// render
const body = document.querySelector('body')
const el = body.insertBefore(document.createElement('div'), body.firstChild)

new Vue({
  el,
  components: { App },
  template: '<App/>',
})
