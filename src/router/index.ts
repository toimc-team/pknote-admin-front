import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/assetsManagement',
    name: 'assetsManagement',
    component: () =>
      import(/* webpackChunkName: "assetsManagement" */ '@/views/assetsManagement/Index.vue'),
    children: [
      { path: '', redirect: { name: 'assetsManagementHome' } },
      {
        path: 'assetsManagementHome',
        component: () =>
          import(
            /* webpackChunkName: "assetsManagementHome" */ '@/views/assetsManagement/AssetsManagement.vue'
          ),
        name: 'assetsManagementHome'
      },
      {
        path: 'getCash',
        component: () =>
          import(/* webpackChunkName: "getCash" */ '@/views/assetsManagement/GetCash.vue'),
        name: 'getCash'
      },
      {
        path: 'approvalProcess',
        component: () =>
          import(/* webpackChunkName: "forget" */ '@/views/assetsManagement/ApprovalProcess.vue'),
        name: 'approvalProcess'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
