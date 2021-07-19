<template>
  <router-view></router-view>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'App'
  })
</script>

<style lang="scss">
  .full-height {
    height: 100%;
  }

  // home 页，子页面中使用到的公共样式
  .normal-wrap {
    background-color: #fff;
    border-radius: 8px;
    padding: 0 24px; // 上下间距并不一致
  }
</style>
