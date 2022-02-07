import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/home/index.vue'
import { getHooks } from '../utils/getHooks'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../pages/about/index.vue'),
  },
  ...getHooks(),
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
