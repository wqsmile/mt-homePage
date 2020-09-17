import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '@/layout/default'
import blankPage from '@/layout/blank'
import Index from '@/views/index'
import GoodList from '@/views/goodList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
    redirect: '/index',
    children: [
      {
        path: 's/:name',
        name: 'goods',
        component: GoodList
      },
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/changeCity',
        name: 'changeCity',
        component: () => import('@/components/changeCity/index')
      }
    ]
  },
  {
    path: '/blank',
    name: 'blankPage',
    component: blankPage
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/header/login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/components/header/register')
  }
]

const router = new VueRouter({
  routes
})

export default router
