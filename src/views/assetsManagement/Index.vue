<template>
  <div class="bg">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'assetsManagement'
  }
</script>

<style lang="scss" scoped>
  .bg {
    width: 100%;
    height: 100%;
    background: #f5f6fa;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
</style>
