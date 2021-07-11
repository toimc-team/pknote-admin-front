import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'

import element from './plugins/element'

const app = createApp(App)

app.use(store)
app.use(element)

app.mount('#app')
