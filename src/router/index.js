import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MockupChoice from '@/components/simulator/MockupChoice'
import BaseSimulator from '@/components/simulator/BaseSimulator'
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
      path: '/simulador',
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
    {
      path: '/catalogo/modelo-01',
      name: 'Modelo01',
      component: Catalogo
    },
    {
      path: '/portfolio/confianca-fc',
      name: 'ConfiancaFC',
      component: Portfolio
    },
    {
      path: '/simulador/futebol',
      name: 'Futebol',
      component: BaseSimulator
    },
  ]
})
