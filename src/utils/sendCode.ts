import { reactive, computed } from 'vue'

export default () => {
  const state = reactive({
    sending: false,
    count: 60
  })

  const leftCount = computed<string>(() => {
    return state.count < 10 ? '0' + state.count : state.count + ''
  })

  const sendCode = () => {
    state.sending = true
    const ctrl = setInterval(() => {
      state.count--
      if (state.count === 0) {
        clearInterval(ctrl)
        state.count = 60
        state.sending = false
      }
    }, 1000)
  }

  return {
    state,
    sendCode,
    leftCount
  }
}
