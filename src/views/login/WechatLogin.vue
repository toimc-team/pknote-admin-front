<template>
  <div class="wrapper">
    <div class="login-type">
      <div class="tips">
        <span class="we"></span>
        <span>账号密码登录</span>
      </div>
      <router-link :to="{ name: 'loginform' }">
        <img src="@/assets/image/headportrait.png" class="img0" />
      </router-link>
    </div>
    <div class="form">
      <div class="title">
        <span>toimc后台管理系统</span>
      </div>
      <div class="content">
        <div class="center text-primary">微信登录</div>
        <img style="width: 120px; height: 120px" src="@/assets/image/code.jpg" />
        <span class="text-secondary font-hint">请使用微信扫描二维码进行登录</span>
      </div>
      <div class="tips">
        <div>
          还没有账号？
          <router-link class="link" :to="{ name: 'register' }">立即注册></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/mixin.scss';

  .wrapper {
    width: 100%;
    padding: 2px;
  }

  .login-type {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .img0 {
      position: relative;
      top: -2px;
      width: 48px;
      height: 48px;
      vertical-align: middle;
      cursor: pointer;
    }

    .tips {
      padding: 0 8px;
      margin-right: 8px;
      line-height: 30px;
      background: #ecfaf3;
      border-radius: 6px;

      // img {
      //   margin-right: 4px;
      //   width: 18px;
      //   height: 20px;
      //   vertical-align: middle;
      // }
      .we {
        display: inline-block;
        width: 19px;
        height: 19px;
        padding-right: 8px;
        vertical-align: middle;
        background: url('@/assets/image/security.png') no-repeat center center;
        background-size: contain;
      }

      span {
        font-size: 14px;
        color: rgb(7 193 96 / 100%);
      }
    }
  }

  .form {
    max-width: 330px;
    margin: 60px auto;

    .title {
      font-size: 20px;
      color: rgb(51 51 51 / 100%);
    }

    .flex {
      align-items: center;
    }

    .content {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
    }

    .tips {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #333;
    }

    .link {
      color: #2b9afa;
      cursor: pointer;
    }
  }
</style>
