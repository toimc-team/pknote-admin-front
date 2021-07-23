import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      // 概览
      {
        path: '/overview',
        component: () => import('@/views/overview.vue')
      },
      // 我的内容
      {
        path: '/content/my-content',
        component: () => import('@/views/content-management/my-content.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
