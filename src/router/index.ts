import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/learn-management',
    name: 'LearnManagement',
    component: () => import('@/views/learn-management/clock-in.vue'),
    redirect: '/learn-management/clock-in',
    children: [
      {
        path: '/clock-in',
        name: 'ClockIn',
        component: () => import('@/views/learn-management/clock-in.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
