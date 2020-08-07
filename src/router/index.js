import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('../views/People.vue')
  },
  {
    path: '/insects',
    name: 'Insects',
    component: () => import('../views/Insects.vue')
  },
  {
    path: '/texture',
    name: 'Texture',
    component: () => import('../views/Texture.vue')
  },
  {
    path: '/code',
    name: 'Code',
    component: () => import('../views/Code.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
