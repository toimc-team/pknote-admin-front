import { App } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import ElementPlus from 'element-plus'

const plugin = {
  install: (app: App) => {
    // Plugin code goes here
    app.use(ElementPlus, {
      locale: zhCn
    })
  }
}

export default plugin
