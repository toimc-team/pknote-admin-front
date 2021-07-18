import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import 'normalize.css'

// 基础样式
import 'element-plus/packages/theme-chalk/src/base.scss'
import element from './plugins/element'

const app = createApp(App)

app.use(store)
app.use(element)
app.use(router)

app.mount('#app')
