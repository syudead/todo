import Vue from 'vue'

import App from './App'
import store from './store'
import router from './router'

// ignore message
Vue.config.productionTip = false

// render
const body = document.querySelector('body')
const el = body.insertBefore(document.createElement('div'), body.firstChild)

new Vue({
  el,
  store,
  router,
  render: h => h(App),
})
