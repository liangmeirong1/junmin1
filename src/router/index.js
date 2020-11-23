import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import register from '../views/register.vue'
import login from '../views/login.vue'
import newinfo from '../views/newinfo'
import teamRegister from '../views/teamRegister'
import control from '../views/control'
import sendneed from '../views/sendneed.vue'
import Militaryprocure from '../views/Militaryprocure'
import junpindetails from '../views/junpindetails'
//多级路由
import demand from '../views/demand'
import demdetails from '../views/demdetails'
import notice from '../views/notice'
import news from '../views/news'
import works from '../views/works'
import team from '../views/team'
import resourceinfo from '../views/resourceinfo'
import teamDetail from '../views/teamDetail'
import newsDetail from '../views/newsDetail'
import store from '../store'

Vue.use(VueRouter)


const routes = [

/*   {
    path: '*',
    redirect: '/home'
  }, */
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/sendneed',
    name: 'sendneed',
    component: sendneed,
    meta: { 
      requireLogin:true
     }
  },
  {
    path: '/teamRegister',
    name: 'teamRegister',
    component: teamRegister,
    meta: { 
      requireLogin:true
     }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/control',
    name: 'control',
    component: control,
    meta: { 
      requireLogin:true
     }
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
      },
      {
      path: 'demdetails/:id',
      name: 'demdetails',
      component: demdetails,
      },
      {
        path: 'Militaryprocure/:id',
        name: 'Militaryprocure',
        component: Militaryprocure,
       
      
      },  
      {
        path: 'junpindetails/:id',
        name: 'junpindetails',
        component: junpindetails,
       
      
      },
      {
        path: 'team',
        name: 'team',
        component: team,
        children: [
          {
            path: 'resourceinfo',
            name: 'resourceinfo',
            component: resourceinfo
          },
          {
            path: 'teamDetail',
            name: 'teamDetail',
            component: teamDetail,
            meta: { 
              requireLogin: true
             }
          }
        ]
      },
      {
        path: 'notice',
        name: 'notice',
        component: notice,
        children: [
          {
            path: 'news',
            name: 'news',
            component: news
          },
          {
            path: 'works',
            name: 'works',
            component: works
          },
          {
            path: 'newsDetail',
            name: 'newsDetail',
            component: newsDetail
          }
        ]
      }
    ]
  },
]
 

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requireLogin && !store.state.user.ilLogin){
    alert('登陆后才能访问该页面')
    next({name:'login'})
  }else{
    next()
  }
})

export default router
