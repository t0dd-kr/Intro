import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Yoon from '@/components/Yoon'
import Yoon2 from '@/components/Yoon2'
import Young from '@/components/Young'
import Young2 from '@/components/Young2'

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
      path: '/yoon2',
      name: 'Yoon2',
      component: yoon2
    },
    {
      path: '/young',
      name: 'Young',
      component: Young
    },
    {
      path: '/young',
      name: 'Young2',
      component: Young2
    }
  ]
})
