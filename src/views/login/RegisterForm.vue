<template>
  <div class="wrapper">
    <div class="form">
      <div class="title">
        <span>注册</span>
      </div>
      <ul class="content">
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
        <li>
          <img src="@/assets/image/password.png" />
          <input type="password" placeholder="设置密码" />
        </li>
      </ul>
      <button class="btn" type="button">注册</button>
      <div class="tips">
        <div>
          已有账号？
          <router-link class="link" :to="{ name: 'loginform' }">立即登录></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import sendUtils from '@/utils/sendCode'
  import { ref } from 'vue'
  export default {
    name: 'RegisterForm',
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
      font-size: 14px;
      color: #333;
      text-align: center;
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
