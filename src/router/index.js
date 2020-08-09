import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('@/views/People.vue')
  },
  {
    path: '/insects',
    name: 'Insects',
    component: () => import('@/views/Insects.vue')
  },
  {
    path: '/texture',
    name: 'Texture',
    component: () => import('@/views/Texture.vue')
  },
  {
    path: '/code',
    name: 'Code',
    component: () => import('@/views/Code.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/contact/confirmed',
    name: 'ConfirmContact',
    component: () => import('@/components/ConfirmContact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
