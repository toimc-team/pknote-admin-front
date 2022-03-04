import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'
import LoginView from '@/views/login/index.vue'
import LoginForm from '@/views/login/LoginForm.vue'

import lesson from './modules/lesson'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    children: [
      { path: '', redirect: { name: 'loginform' } },
      {
        path: 'login',
        component: LoginForm,
        name: 'loginform'
      },
      {
        path: 'reg',
        component: () => import(/* webpackChunkName: "reg" */ '@/views/login/RegisterForm.vue'),
        name: 'register'
      },
      {
        path: 'forget',
        component: () => import(/* webpackChunkName: "forget" */ '@/views/login/ForgetForm.vue'),
        name: 'forget'
      },
      {
        path: 'wechat',
        component: () => import(/* webpackChunkName: "wechat" */ '@/views/login/WechatLogin.vue'),
        name: 'wechat'
      }
    ]
  },
  {
    path: '/home',
    component: Home,
    redirect: '/overview',
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
      },
      // 新建图文
      {
        path: '/content/add-content',
        component: () => import('@/views/content-management/add-content.vue')
      }
    ]
  },
  ...lesson,
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
