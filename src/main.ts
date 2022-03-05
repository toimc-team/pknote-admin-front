import { createApp } from 'vue'
import App from './App.vue'

import store from '@/store'
import router from '@/router'
import 'reset-css'

import '@/assets/style/index.scss'
// import 'normalize.css'

// 取消全局导入
// 基础样式
// import 'element-plus/dist/index.css'
// import ElementPlus from 'element-plus'

// 导入所有的插件
import * as plugins from './plugins'

const app = createApp(App)

Object.keys(plugins).forEach((file) => {
  app.use(plugins[file as keyof typeof plugins])
})

app.use(store)
// app.use(ElementPlus)
app.use(router)

app.mount('#app')
