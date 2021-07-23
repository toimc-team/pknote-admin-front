import { nextTick, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import config from '@/utils/menu-config'

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
    // 循环菜单配置
    for (let i = 0; i < configLen; i++) {
      const item = menuConfig[i]
      // 没有子菜单
      if (item.noSub) {
        if (comparePath(item)) {
          return
        }
      } else if (item.sub) {
        const sub = item.sub
        const subLen = sub?.length
        // 循环子菜单配置
        for (let j = 0; j < subLen; j++) {
          const item = sub[j]
          if (comparePath(item)) {
            return
          }
        }
      }
    }
    /**
     * 标记当前菜单的位置
     * @param item 菜单配置
     * @returns 是否完成标记
     */
    function comparePath(item: any): boolean {
      if (currPath === item.path) {
        // 标记为当前菜单
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
      if (currMenuItem) {
        currMenuItem.dispatchEvent(new Event('click'))
      }
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
