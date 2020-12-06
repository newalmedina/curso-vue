import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import axios from 'axios'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.prototype.$axios = axios

Vue.config.productionTip = false


//routes
import Test from  "./components/Test"
import User from  "./components/User"
import UserApi from  "./components/UserApi"
import UserApiAxios from  "./components/UserApiAxios"

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes:[
    {
      path:'/',
      component: Test
    },
    {
      path:'/user',
      component: User
    },
    {
      path:'/userApi',
      component: UserApi
    },
    {
      path:'/userApiAxios',
      component: UserApiAxios
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
