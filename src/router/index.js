import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Goods from '@/views/Goods'
import GoodsDetail from '@/views/GoodsDetail'
import User from '@/views/User'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: 'home',
    name: 'home',
    component: Index,
    children: [{
      path: '/home',
      component: Home
    }, {
      path: '/goods',
      component: Goods
    }, {
      path: '/goodsDetail',
      name: '/goodsDetail',
      component: GoodsDetail
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/user',
    name: '/user',
    component: User,
    meta: {
      auth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router