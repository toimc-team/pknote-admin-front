import { App } from 'vue'
import * as Icons from '@element-plus/icons-vue'

const plugin = {
  install: (app: App) => {
    Object.keys(Icons).forEach((key) => {
      app.component(key, Icons[key as keyof typeof Icons])
    })
  }
}

export default plugin
