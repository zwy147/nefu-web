import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/lab',
    name: 'lab',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Lab.vue'),
    children: [
      {
        path:'/lab/lab923',
        name:'lab923',
        component: () => import(/* webpackChunkName: "about" */ '../views/Lab923.vue'),
      },
      {
        path:'/lab/lab926',
        name:'lab926',
        component: () => import(/* webpackChunkName: "about" */ '../views/Lab926.vue'),
      },
      {
        path:'/lab/lab925',
        name:'lab925',
        component: () => import(/* webpackChunkName: "about" */ '../views/Lab925.vue'),
      }
    ]
  },
  {
    path: '/tea',
    name: 'tea',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tea.vue'),
    children: [
      {
        path:'/tea/tea1',
        name:'tea1',
        component: () => import(/* webpackChunkName: "about" */ '../views/Tea1.vue'),
      },
      {
        path:'/tea/tea2',
        name:'tea2',
        component: () => import(/* webpackChunkName: "about" */ '../views/Tea2.vue'),
      },
      {
        path:'/tea/tea3',
        name:'tea3',
        component: () => import(/* webpackChunkName: "about" */ '../views/Tea3.vue'),
      },
    ]
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue'),
  },
  {
    path: '/push',
    name: 'push',
    component: () => import(/* webpackChunkName: "about" */ '../views/Push.vue'),
  },
  {
    path: '/change',
    name: 'change',
    component: () => import(/* webpackChunkName: "about" */ '../views/Change.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
