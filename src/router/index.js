import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import register from '../views/register.vue'
import login from '../views/login.vue'
import newinfo from '../views/newinfo'
import demand from '../views/demand'
import demdetails from '../views/demdetails'

Vue.use(VueRouter)


const routes = [

  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/newinfo',
    name: 'newinfo',
    component: newinfo,
    children: [
      {
        path: 'demand/:id',
        name: 'demand',
        component: demand,
       
     
  }]},
  {
    path: '/newinfo',
    name: 'newinfo',
    component: newinfo,
    children: [
      {
        path: 'demdetails/:id',
        name: 'demdetails',
        component: demdetails,
       
     
  }]},

  ]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router
