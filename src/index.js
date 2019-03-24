import Vue from 'vue'

import App from './App'
import store from './store'

// ignore message
Vue.config.productionTip = false

// render
const body = document.querySelector('body')
const el = body.insertBefore(document.createElement('div'), body.firstChild)

new Vue({
  el,
  store,
  render: h => h(App),
})
