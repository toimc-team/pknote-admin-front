import { createStore } from 'vuex'
import menuStore from './modules/menu'

interface State {
  count: number
}

const store = createStore({
  state() {
    return {
      count: 0
    } as State
  },
  mutations: {
    increase(state: State) {
      state.count++
    }
  },
  modules: {
    menuStore
  }
})

export default store
