import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MockupChoice from '@/components/simulator/MockupChoice'
import Portfolio from '@/components/template/Portfolio'
import Catalogo from '@/components/template/Catalogo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mockups',
      name: 'MockupChoice',
      component: MockupChoice
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/catalogo',
      name: 'Catalogo',
      component: Catalogo
    },
  ]
})
