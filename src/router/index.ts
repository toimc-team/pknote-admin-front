import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'
import ClientHome from '@/views/my-client/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      // 我的用户
      {
        path: '/client',
        redirect: '/client/home'
      },
      // 我的用户
      {
        path: '/client/home',
        component: ClientHome
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
