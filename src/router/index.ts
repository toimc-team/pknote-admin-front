import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home.vue'
import lesson from './modules/lesson'
const routes = [
  {
    path: '/',
    component: Home
  },
  ...lesson
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
