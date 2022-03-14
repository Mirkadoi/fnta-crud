import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/ListComponent')
  },
  {
    path: '/student',
    name: 'create',
    component: () => import('../components/EditComponent')
  },
  {
    path: '/student/:id',
    name: 'edit',
    component: () => import('../components/EditComponent')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
