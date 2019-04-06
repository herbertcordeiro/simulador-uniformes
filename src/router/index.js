import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/template/Navbar'
import MockupChoice from '@/components/simulator/MockupChoice'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navbar',
      component: Navbar
    },

  ]
})
