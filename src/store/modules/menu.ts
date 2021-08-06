export default {
  state() {
    return {
      isMenuRective: false, // 标记当前菜单栏是否可显示隐藏的
      isFolded: true // 菜单栏隐藏
    }
  },
  mutations: {
    setMenuRective(state: { isMenuRective: Boolean }, isMenuRective: Boolean) {
      state.isMenuRective = isMenuRective
    },
    setFolded(state: { isFolded: Boolean }, isFolded: Boolean) {
      state.isFolded = isFolded
    }
  }
}
