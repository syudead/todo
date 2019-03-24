import Vue from 'vue'
import VueApollo from 'vue-apollo'

import App from './App'
import store from './store'
import router from './router'
import defaultClient from './links'

// ignore message
Vue.config.productionTip = false

// apollo
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient,
})

// render
const body = document.querySelector('body')
const el = body.insertBefore(document.createElement('div'), body.firstChild)

new Vue({
  el,
  store,
  router,
  apolloProvider,
  render: h => h(App),
})
