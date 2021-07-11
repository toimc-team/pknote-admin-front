<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <el-button type="primary" @click="add">加+1</el-button>
    {{ count }}
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import store from '@/store'
  export default defineComponent({
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

<style scoped></style>
