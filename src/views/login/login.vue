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
              <div class="login-way-label active" @click="switchLoginWay(0, $event)">密码登录</div>
              <div class="login-way-label" @click="switchLoginWay(1, $event)">验证码登录</div>
            </div>
            <div class="login-way__line"></div>
          </div>
          <div class="login-input-group">
            <el-form ref="form" :model="loginForm">
              <el-form-item label-width="0">
                <el-input
                  v-model="loginForm.account"
                  class="login-input"
                  placeholder="请输入手机号/账号"
                >
                  <template #prefix>
                    <i class="el-input__icon el-icon-s-custom login-input__icon"></i>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label-width="0">
                <el-input
                  v-model="loginForm.password"
                  type="password"
                  class="login-input"
                  placeholder="请输入密码"
                >
                  <template #prefix>
                    <i class="el-input__icon el-icon-lock login-input__icon"></i>
                  </template>
                </el-input>
              </el-form-item>
            </el-form>
          </div>

          <div class="login-btns">
            <el-button class="login-btn" :loading="loginBtnLoading" @click="login">登录</el-button>
          </div>
          <div class="login-opts">
            <el-link :underline="false" type="primary" class="login-opts-link">忘记密码？</el-link>
            <span>
              还没有账号？
              <el-link :underline="false" type="primary" class="login-opts-link">立即注册</el-link>
            </span>
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
      let loginForm = ref({
        account: '',
        password: ''
      })

      const login = () => {
        // ...validate here
        loginBtnLoading.value = true
        setTimeout(() => {
          router.push('home')
        }, 1500)
      }

      const switchLoginWay = (type: number, e: Event) => {
        let w = e.target.offsetLeft + e.target.offsetWidth / 2
      }

      onMounted(() => {})

      return {
        login,
        loginForm,
        switchLoginWay,
        loginBtnLoading
      }
    },

    computed: {}
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
            position: relative;

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
            transform: translateX(45px) translateX(-50%);
            transition-duration: 0.3s;
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
            margin-top: 20px;

            &:hover {
              transition: all 0.2s;
              background-color: #5eb4ff;
            }
          }
        }

        .login-input-group {
          .login-input {
            text-align: center;
          }
        }

        .login-opts {
          margin-top: 24px;
          font-size: 16px;
          color: #666;
          display: flex;
          align-items: center;
          justify-content: space-between;
          user-select: none;

          .login-opts-link {
            font-size: 16px;
          }
        }
      }
    }
  }

  :deep(.el-input__inner) {
    border: none;
    border-bottom: 2px solid #eee;
    outline: none;
    border-radius: 0;
    text-indent: 0.5em;
    transition: all 0.2s;
    font-size: 16px;

    &:focus {
      border-bottom: 2px solid #ccc;
    }
  }

  :deep(.el-form-item) {
    margin-bottom: 30px;
  }

  .login-input__icon {
    font-size: 20px;
  }
</style>
