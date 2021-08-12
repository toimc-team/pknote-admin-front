import { nextTick, reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import config from '@/utils/menu-config'

const WIDTH = 1200 // 菜单消失和出现阀值
const { body } = document
export default () => {
  const router = useRouter()
  const route = useRoute()
  const store = useStore()

  const menuConfig = reactive(config)

  /**
   * 获取当前路由对应的菜单位置，并标记
   * @returns {void}
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
     * @returns {Boolean} 是否完成标记
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

  const isMenuRective = computed(() => store.state.menuStore.isMenuRective) // 标记当前菜单栏是否可显示隐藏的
  const isFolded = computed(() => store.state.menuStore.isFolded) // 菜单栏隐藏
  /**
   * 判断当前菜单栏是否需要显示隐藏
   */
  const setMenuRective = () => {
    const rect = body.getBoundingClientRect()
    store.commit('setMenuRective', rect.width <= WIDTH)
    store.commit('setFolded', true)
  }
  /**
   * 切换菜单栏的隐藏显示
   */
  const toggleFold = () => {
    store.commit('setFolded', !isFolded.value)
  }
  return {
    menuConfig,
    isMenuRective,
    isFolded,
    getCurrMenu,
    clickMenu,
    changePath,
    setMenuRective,
    toggleFold
  }
}
