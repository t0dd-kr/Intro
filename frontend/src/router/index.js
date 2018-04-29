import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Modules from '@/components/Modules'
import ProjectBox from '@/components/ProjectBox'
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
    },
    {
      path: '/ProjectBox',
      name: 'ProjectBox',
      component: ProjectBox
    }
  ]
})
