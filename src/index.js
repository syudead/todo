import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueApollo from 'vue-apollo'

import App from './App'
import store from './store'
import router from './router'
import defaultClient from './links'

import IconLogo from './component/IconLogo'

// ignore message
Vue.config.productionTip = false

// apollo
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient,
})

// design
Vue.use(Vuetify, {
  icons: {
    logo: {
      component: IconLogo,
      props: {
        name: 'logo',
      },
    }
  }
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
