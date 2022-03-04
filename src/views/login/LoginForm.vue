<template>
  <div class="wrapper">
    <div class="login-type">
      <div class="tips">
        <span class="we"></span>
        <span>微信扫码登录</span>
      </div>
      <router-link :to="{ name: 'wechat' }">
        <img class="img0" src="@/assets/image/qr.png" />
      </router-link>
    </div>
    <div class="form">
      <div class="title">toimc后台管理系统</div>
      <ul class="tabs">
        <li :class="{ active: current == 0 }" @click="() => (current = 0)">密码登录</li>
        <li :class="{ active: current == 1 }" @click="() => (current = 1)">验证码登录</li>
      </ul>
      <ul v-if="current == 0" class="content">
        <li>
          <img src="@/assets/image/my.png" />
          <input type="text" placeholder="请输入手机号/账号" />
        </li>
        <li>
          <img src="@/assets/image/password.png" />
          <input type="password" placeholder="请输入密码" />
        </li>
      </ul>
      <ul v-else class="content">
        <li>
          <img src="@/assets/image/my.png" />
          <input type="text" placeholder="请输入手机号" />
        </li>
        <li>
          <div class="flex">
            <img src="@/assets/image/code.png" />
            <input type="text" placeholder="请输入验证码" />
          </div>
          <div class="code">
            <span v-if="!state.sending" class="link" @click="sendCode">获取验证码</span>
            <span v-else class="seconds">已发送{{ leftCount }}秒</span>
          </div>
        </li>
      </ul>
      <button type="button" class="btn" @click="login">登录</button>
      <div class="tips">
        <router-link class="link" :to="{ name: 'forget' }">忘记密码？</router-link>
        <div>
          还没有账号？
          <router-link class="link" :to="{ name: 'register' }">立即注册></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue'
  import sendUtils from '@/utils/sendCode'
  export default {
    name: 'LoginForm',
    setup() {
      const current = ref(0)
      const { state, sendCode, leftCount } = sendUtils()
      return {
        current,
        state,
        sendCode,
        leftCount
      }
    }
  }
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

    .tabs {
      display: flex;
      flex-flow: row nowrap;

      li {
        margin-right: 20px;
        font-size: 14px;
        color: #999;

        &.active {
          position: relative;
          color: #333;

          &::after {
            position: absolute;
            bottom: 5px;
            left: 50%;
            width: 16px;
            height: 2px;
            margin-left: -8px;
            background-color: #2b9afa;
            border-radius: 2px;
            content: '';
          }
        }
      }
    }

    .flex {
      align-items: center;
    }

    .content {
      img {
        width: 14px;
        height: 14px;
      }

      input {
        @include placeholder {
          color: #ccc;
        }

        width: 100%;
        padding-left: 8px;
        line-height: 35px;
        border: none;
        outline: none;
      }

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 42px;
        margin: 20px 0;
        border-bottom: 1px solid #eee;
      }
    }

    button {
      width: 100%;
      height: 45px;
      margin-top: 25px;
      color: #fff;
      cursor: pointer;
      background: #2b9afa;
      border: 0;
      border-radius: 4px;
      box-shadow: 0 2px 3px 0 rgb(43 154 250 / 24%);
    }

    .tips {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #333;
    }

    .code {
      width: 120px;
      font-size: 14px;
      text-align: center;
    }

    .link {
      color: #2b9afa;
      cursor: pointer;
    }

    .seconds {
      color: #999;

      span {
        display: inline-block;
        width: 20px;
        text-align: center;
      }
    }
  }
</style>
