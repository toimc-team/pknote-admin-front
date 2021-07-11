import { createStore } from 'vuex'

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
  }
})

export default store
