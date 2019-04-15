import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index.vue'
import button from './components/button.vue'
import toast from './components/toast.vue'
import list from './components/list.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
      path: '/button',
      name: 'Button',
      component: button
    },
    {
        path: '/toast',
        name: 'Toast',
        component: toast
    },
    {
        path: '/list',
        name: 'List',
        component: list
    }
  ]
})
