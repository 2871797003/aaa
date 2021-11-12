import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      a : () => import('../views/Home.vue')
    },
  },
  {
    path: '/about',
    name: 'About',
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    components: {
      b : () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
  },
  {
    path : '/login',
    name : 'login',
    component : ()=> import('../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
