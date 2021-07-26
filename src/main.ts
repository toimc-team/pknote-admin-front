import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import 'reset-css'
import 'normalize.css'

// 基础样式
import 'element-plus/packages/theme-chalk/src/base.scss'
import element from './plugins/element'

// 断点的隐藏类
import 'element-plus/lib/theme-chalk/display.css'

const app = createApp(App)

app.use(store)
app.use(element)
app.use(router)

app.mount('#app')
