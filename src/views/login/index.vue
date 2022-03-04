<template>
  <div class="bg">
    <div class="outer">
      <div class="left">
        <div class="img"></div>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'LoginView'
  }
</script>

<style lang="scss" scoped>
  .bg {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: auto;
    line-height: 45px;
    background-color: #266bff;
  }

  .outer {
    display: flex;
    min-width: 960px;
    min-height: 610px;
    margin: 0 auto;
    background: #fff;
    border-radius: 8px;

    .left {
      width: 50%;
      height: inherit;

      .img {
        float: right;
        width: 80%;
        height: 100%;
        background: url('@/assets/image/index.png') no-repeat center 70%;
        background-size: contain;
      }
    }

    .right {
      display: flex;
      width: 50%;
    }
  }
</style>
