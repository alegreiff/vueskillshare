import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store'
import Accounting from 'accounting-js'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      return {x: 0, y: 0}
    }
  }
})

Vue.config.productionTip = false
Vue.filter('currency', function(val){
  return Accounting.formatMoney(val)
})

//Vue.component('global-components', () => import ('./components/Menu.vue'))
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
