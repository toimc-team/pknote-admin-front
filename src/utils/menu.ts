import { nextTick, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import config from '@/utils/menuConfig'

export default () => {
  const router = useRouter()
  const route = useRoute()

  const menuConfig = reactive(config)

  /**
   * 获取当前路由对应的菜单位置，并标记
   * @returns void
   */
  const getCurrMenu = () => {
    const currPath = route.path
    const configLen = menuConfig.length
    // 两层循环
    for (let i = 0; i < configLen; i++) {
      const item = menuConfig[i]
      if (item.noSub) {
        if (comparePath(item)) {
          return
        }
      } else if (item.sub) {
        const sub = item.sub
        const subLen = sub?.length
        for (let j = 0; j < subLen; j++) {
          const item = sub[j]
          if (comparePath(item)) {
            return
          }
        }
      }
    }
    /**
     * 标记位置
     * @param item 菜单配置
     * @returns 是否完成标记
     */
    function comparePath(item: any): boolean {
      if (currPath === item.path) {
        item.isCurrent = true
        return true
      }
      return false
    }
  }

  /**
   * 在当前菜单条目上，模拟点击事件
   */
  const clickMenu = () => {
    nextTick(() => {
      const currMenuItem = document.getElementsByClassName('currMenuItem')[0]
      currMenuItem.dispatchEvent(new Event('click'))
    })
  }

  /**
   * 切换菜单路由
   * @param path 路由地址
   */
  const changePath = (path: string) => {
    if (path) {
      router.push(path)
    }
  }
  return {
    menuConfig,
    getCurrMenu,
    clickMenu,
    changePath
  }
}
