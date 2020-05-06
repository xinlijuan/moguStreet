import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Find from '../views/shoppingCart/Find'
import Sort from '../views/category/Sort'
import About from '../views/shoppingCart/About'
import Mine from '../views/profile/Mine'
import Detail from '../views/detail/Detail'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'  //重定向
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Find',
    name: 'Find',
    component: Find
  },
  {
    path: '/Sort',
    name: 'Sort',
    component: Sort
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/Detail/:id',
    //动态路由
    name: 'Detail', 
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
