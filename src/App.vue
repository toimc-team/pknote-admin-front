<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <el-button type="primary" @click="add">加+1</el-button>
  {{ count }}
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import store from '@/store'
  export default defineComponent({
    name: 'App',
    setup() {
      const add = () => {
        console.log(123)
        store.commit('increase')
      }

      return {
        add,
        count: computed(() => store.state.count)
      }
    }
  })
</script>

<style lang="scss">
  @import 'element-plus/packages/theme-chalk/src/base.scss';
</style>
