import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MockupChoice from '@/components/simulator/MockupChoice'


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
  ]
})
