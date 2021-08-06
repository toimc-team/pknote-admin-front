<template>
  <el-container>
    <div class="login-area">
      <div class="login-left">
        <el-image class="login_figure" src="/src/assets/img/figure.png" fit="cover"></el-image>
      </div>
      <div class="login-right">
        <div class="login-header">
          <el-image
            class="wechat_login"
            src="/src/assets/img/wechat_login.png"
            fit="cover"
          ></el-image>
          <svg class="qr_thumbnail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M0 224h192V32H0v192zM64 96h64v64H64V96zm192-64v192h192V32H256zm128 128h-64V96h64v64zM0 480h192V288H0v192zm64-128h64v64H64v-64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"
            />
          </svg>
        </div>

        <div class="login-wrap">
          <div class="login-title">toimc后台管理系统</div>
          <div class="login-way">
            <div class="login-way-label-wrap">
              <div class="login-way-label active" @click="switchLoginWay(0)">密码登录</div>
              <div class="login-way-label" @click="switchLoginWay(1)">验证码登录</div>
            </div>
            <div class="login-way__line"></div>
          </div>
          <div class="login-input-group"> </div>

          <div class="login-btns">
            <el-button class="login-btn" :loading="loginBtnLoading" @click="login">登录</el-button>
          </div>
        </div>
      </div>
    </div>
  </el-container>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'

  export default defineComponent({
    setup() {
      const router = useRouter()
      let loginBtnLoading = ref(false)

      const login = () => {
        // ...validate here
        loginBtnLoading.value = true
        setTimeout(() => {
          router.push('home')
        }, 1500)
      }

      const switchLoginWay = (type: number) => {
        console.log(type)
      }

      onMounted(() => {})

      return {
        login,
        loginBtnLoading,
        switchLoginWay
      }
    }
  })
</script>

<style lang="scss" scoped>
  .el-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('@/assets/img/login_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .login-area {
    width: 1200px;
    height: 760px;
    background-color: #fff;
    border-radius: 16px;
    display: flex;
    flex-direction: row;

    .login-left {
      padding: 250px 20px 85px 85px;
    }

    .login-right {
      flex-grow: 1;

      .login-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .wechat_login {
          cursor: pointer;
          margin-right: 16px;
        }

        .qr_thumbnail {
          width: 48px;
          height: 48px;
          fill: #9c9c9c;
          margin: 4px;
          cursor: pointer;
        }
      }

      // 登录区
      .login-wrap {
        padding: 86px 126px 0 90px;

        .login-title {
          color: #333;
          font-size: 40px;
          text-align: left;
          margin-bottom: 40px;
          user-select: none;
        }

        .login-way {
          margin-bottom: 50px;
          user-select: none;

          .login-way-label-wrap {
            display: flex;
            font-size: 20px;

            .login-way-label {
              color: #999;
              cursor: pointer;

              &.active {
                color: #333;
              }

              &:last-child {
                margin-left: 50px;
              }
            }
          }

          .login-way__line {
            margin-top: 12px;
            width: 32px;
            height: 4px;
            border-radius: 4px;
            background-color: #2b9afa;
          }
        }

        .login-btns {
          .login-btn {
            width: 360px;
            height: 66px;
            border-radius: 8px;
            background-color: #2b9afa;
            color: #fff;
            font-size: 24px;
            box-shadow: 2px 5px 10px #64b7ff;
            border: none;

            &:hover {
              transition: all 0.2s;
              background-color: #5eb4ff;
            }
          }
        }
      }
    }
  }
</style>
