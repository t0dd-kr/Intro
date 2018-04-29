import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Modules from '@/components/Modules'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Modules',
      name: 'Modules',
      component: Modules
    }
  ]
})
