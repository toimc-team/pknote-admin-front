import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'

import lesson from './modules/lesson'
const routes = [


const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    component: Home
  },
  ...lesson
  {
    path: '/learn-management',
    name: 'LearnManagement',
    component: () => import('@/views/learn-management/index.vue'),
    redirect: '/learn-management/clock-in',
    children: [
      {
        path: 'clock-in',
        name: 'ClockIn',
        component: () => import('@/views/learn-management/clock-in.vue')
      },
      {
        path: 'learn-plan',
        name: 'LearnPlan',
        component: () => import('@/views/learn-management/learn-plan.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
