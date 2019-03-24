import Vue from 'vue'
import VueRouter from 'vue-router'

import TopPage from './pages/TopPage'
import AboutPage from './pages/AboutPage'
const NotFound = { template: '<div>Not found</div>' }

Vue.use(VueRouter)

const routes = [
  {path: '/', component: TopPage},
  {path: '/about', component: AboutPage},
  {path: '*', component: NotFound}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
