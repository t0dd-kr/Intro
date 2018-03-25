import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Yoon from '@/components/Yoon'
import Young from '@/components/Young'
import Yoon2 from '@/components/Yoon2'

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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/yoon',
      name: 'Yoon',
      component: Yoon
    },
    {
      path: '/young',
      name: 'Young',
      component: Young
    },
    {
      path: '/yoon2',
      name: 'Yoon2',
      component: Yoon2
    }
  ]
})
