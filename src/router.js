import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/hello.vue'
import login from './components/login.vue'
import forgetPassword from './components/forgetPassword.vue'
import home from './components/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/login',
        name: 'login',
        component: login
      },
      {
        path: '/forgetPassword',
        name: 'forgetPassword',
        component: forgetPassword
      },
      {
        path: '/home',
        name: 'home',
        component: home
      }
  ]
})
