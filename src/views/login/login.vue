<template>
  <el-container>
    <div class="login-area">
      <div class="login-left">
        <el-image class="login_figure" src="/src/assets/img/figure.png" fit="cover"></el-image>
      </div>
      <div class="login-right">
        <div class="login-header">
          <template v-if="loginMode === 0">
            <el-image
              class="wechat_login"
              src="/src/assets/img/wechat_login.png"
              fit="cover"
              @click="loginMode = 1"
            ></el-image>
            <svg class="qr_thumbnail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M0 224h192V32H0v192zM64 96h64v64H64V96zm192-64v192h192V32H256zm128 128h-64V96h64v64zM0 480h192V288H0v192zm64-128h64v64H64v-64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"
              />
            </svg>
          </template>
          <template v-if="loginMode === 1">
            <el-image
              class="wechat_login"
              src="/src/assets/img/loginway_pass.png"
              fit="cover"
              @click="loginMode = 0"
            ></el-image>
            <svg class="qr_thumbnail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
              />
            </svg>
          </template>
        </div>

        <div class="login-wrap">
          <div v-show="loginMode === 0" class="login-mode__account">
            <div class="login-title">toimc后台管理系统</div>
            <div class="login-way">
              <div class="login-way-label-wrap">
                <div
                  class="login-way-label"
                  :class="loginWay === 0 ? 'active' : ''"
                  @click="switchLoginWay(0, $event)"
                  >密码登录</div
                >
                <div
                  class="login-way-label"
                  :class="loginWay === 1 ? 'active' : ''"
                  @click="switchLoginWay(1, $event)"
                  >验证码登录</div
                >
              </div>
              <div
                class="login-way__line"
                :style="{ transform: `translateX(${lineOffset}px) translateX(-50%)` }"
              ></div>
            </div>
            <div class="login-input-group">
              <el-form
                v-show="loginWay === 0"
                ref="passLogin"
                :model="passLoginForm"
                :rules="passLoginRules"
                label-width="0"
              >
                <el-form-item prop="account">
                  <el-input
                    v-model="passLoginForm.account"
                    class="login-input"
                    placeholder="请输入手机号/账号"
                  >
                    <template #prefix>
                      <i class="el-input__icon el-icon-s-custom login-input__icon"></i>
                    </template>
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    v-model="passLoginForm.password"
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
              <el-form
                v-show="loginWay === 1"
                ref=""
                :model="codeLoginForm"
                :rules="codeLoginRules"
                label-width="0"
              >
                <el-form-item prop="phoneNumber">
                  <el-input
                    v-model="codeLoginForm.phoneNumber"
                    class="login-input"
                    placeholder="请输入手机号"
                  >
                    <template #prefix>
                      <i class="el-input__icon el-icon-s-custom login-input__icon"></i>
                    </template>
                  </el-input>
                </el-form-item>
                <el-form-item prop="code">
                  <el-input
                    v-model="codeLoginForm.code"
                    class="login-input"
                    placeholder="请输入验证码"
                  >
                    <template #prefix>
                      <i class="el-input__icon el-icon-message-solid login-input__icon"></i>
                    </template>
                    <template #suffix>
                      <span class="text-link" @click="getMsgCode">获取验证码</span>
                    </template>
                  </el-input>
                </el-form-item>
              </el-form>
            </div>

            <div class="login-btns">
              <el-button class="login-btn" :loading="loginBtnLoading" @click="login"
                >登录</el-button
              >
            </div>
            <div class="login-opts">
              <span class="text-link" @click="loginMode = 3">忘记密码？</span>
              <span>
                还没有账号？
                <span class="text-link" @click="loginMode = 2">立即注册></span>
              </span>
            </div>
          </div>
          <div v-show="loginMode === 1" class="login-mode__wechat">
            <div class="login-title">toimc后台管理系统</div>
            <div class="login-subtitle">微信登录</div>
            <div class="qr-code-wrap">
              <el-image
                src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
                fit="cover"
              ></el-image>
            </div>
            <div class="wx-login-tip">请使用微信扫描二维码进行登录</div>
            <div class="wx-login-bottom"
              >还没有账号？<span class="text-link" @click="loginMode = 2">立即注册></span></div
            >
          </div>

          <div v-show="loginMode === 2" class="login-mode__register">
            <div class="login-title">注册</div>
            <div class="login-input-group">
              <el-form ref="" :model="registerForm" :rules="registerRules" label-width="0">
                <el-form-item prop="phoneNumber">
                  <el-input
                    v-model="registerForm.phoneNumber"
                    class="login-input"
                    placeholder="请输入手机号"
                  >
                    <template #prefix>
                      <i class="el-input__icon el-icon-s-custom login-input__icon"></i>
                    </template>
                  </el-input>
                </el-form-item>
                <el-form-item prop="code">
                  <el-input
                    v-model="registerForm.code"
                    class="login-input"
                    placeholder="请输入验证码"
                  >
                    <template #prefix>
                      <i class="el-input__icon el-icon-message-solid login-input__icon"></i>
                    </template>
                    <template #suffix>
                      <span class="text-link" @click="getMsgCode">获取验证码</span>
                    </template>
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    v-model="registerForm.password"
                    class="login-input"
                    placeholder="设置密码"
                    type="password"
                  >
                    <template #prefix>
                      <i class="el-input__icon el-icon-lock login-input__icon"></i>
                    </template>
                  </el-input>
                </el-form-item>
              </el-form>
            </div>
            <div class="login-btns">
              <el-button class="login-btn" :loading="registerBtnLoading" @click="register"
                >注册</el-button
              >
            </div>
            <div class="login-opts">
              <span>
                已有账号？
                <span class="text-link" @click="loginMode = 0">立即登录></span>
              </span>
            </div>
          </div>

          <div v-show="loginMode === 3" class="login-mode__forget">
            <div class="login-title">忘记密码</div>
            <div class="login-input-group">
              <el-form ref="" :model="forgetForm" :rules="forgetRules" label-width="0">
                <el-form-item prop="phoneNumber">
                  <el-input
                    v-model="forgetForm.phoneNumber"
                    class="login-input"
                    placeholder="请输入手机号"
                  >
                    <template #prefix>
                      <i class="el-input__icon el-icon-s-custom login-input__icon"></i>
                    </template>
                  </el-input>
                </el-form-item>
                <el-form-item prop="code">
                  <el-input
                    v-model="forgetForm.code"
                    class="login-input"
                    placeholder="请输入验证码"
                  >
                    <template #prefix>
                      <i class="el-input__icon el-icon-message-solid login-input__icon"></i>
                    </template>
                    <template #suffix>
                      <span class="text-link" @click="getMsgCode">获取验证码</span>
                    </template>
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    v-model="forgetForm.password"
                    class="login-input"
                    placeholder="设置密码"
                    type="password"
                  >
                    <template #prefix>
                      <i class="el-input__icon el-icon-lock login-input__icon"></i>
                    </template>
                  </el-input>
                </el-form-item>
              </el-form>
            </div>
            <div class="login-btns">
              <el-button class="login-btn" :loading="registerBtnLoading" @click="register"
                >重置密码</el-button
              >
            </div>
            <div class="login-opts">
              <span>
                <span class="text-link" @click="loginMode = 0">返回登录></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-container>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs, computed } from 'vue'
  import { ElMessage as Message } from 'element-plus'
  import { useRouter } from 'vue-router'

  // form rules
  const passLoginRules = {
      account: [{ required: true, message: '请输入手机号/账号', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    },
    codeLoginRules = {
      phoneNumber: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
      code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
    },
    registerRules = {
      phoneNumber: [{ required: true, message: '请输入手机号' }],
      code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
      password: [{ required: true, message: '请设置密码', trigger: 'blur' }]
    },
    forgetRules = {
      phoneNumber: [{ required: true, message: '请输入手机号' }],
      code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
      password: [{ required: true, message: '请输入新密码', trigger: 'blur' }]
    }

  export default defineComponent({
    setup() {
      const router = useRouter(),
        state = reactive({
          /**
           * loginMode
           * 0 密码/验证码登录
           * 1 微信扫码
           * 2 注册
           * 3 忘记密码
           */
          loginMode: 0,
          loginBtnLoading: false,
          registerBtnLoading: false,
          lineOffset: 40,
          loginWay: 0
        }),
        passLoginForm = reactive({ account: '', password: '' }),
        codeLoginForm = reactive({ phoneNumber: '', code: '' }),
        registerForm = reactive({ phoneNumber: '', code: '', password: '' }),
        forgetForm = reactive({ phoneNumber: '', code: '', password: '' })

      const switchLoginMode = (loginMode: number) => {
        console.log(loginMode)
      }

      const login = async () => {
        // ...validate here
        state.loginBtnLoading = true
        setTimeout(() => {
          router.push('home')
          Message.success('登录成功')
        }, 1500)
      }

      const loginWayTransitionName = computed(() => {
        return 'slide-left'
      })

      const switchLoginWay = (type: number, e: Event) => {
        const { offsetLeft, offsetWidth } = e.target as HTMLElement
        const w = offsetLeft + offsetWidth / 2
        state.loginWay = type
        state.lineOffset = w
      }

      const register = () => {}

      const forgetPass = () => {}

      const getMsgCode = () => {}

      return {
        ...toRefs(state),
        passLoginForm,
        codeLoginForm,
        registerForm,
        forgetForm,
        passLoginRules,
        codeLoginRules,
        registerRules,
        forgetRules,
        switchLoginMode,
        login,
        switchLoginWay,
        register,
        forgetPass,
        getMsgCode,
        loginWayTransitionName
      }
    }
  })
</script>

<style lang="scss" scoped>
  // variable
  $text-link-color: #2b9afa;
  $text-link-hover-color: #62b6ff;

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
        height: 56px;

        .wechat_login {
          cursor: pointer;
          margin-right: 16px;
        }

        .qr_thumbnail {
          width: 48px;
          height: 48px;
          fill: #9c9c9c;
          margin: 4px;
        }
      }

      // 登录区
      .login-wrap {
        padding: 86px 126px 0 90px;

        // 账号登录
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
            background-color: $text-link-color;
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
        }

        // 微信登录
        .login-subtitle {
          text-align: center;
          font-size: 20px;
          color: #333;
        }

        .qr-code-wrap {
          width: 240px;
          height: 240px;
          padding: 10px;
          margin: 30px auto 16px;

          > .el-image {
            width: 100%;
            height: 100%;
          }
        }

        .wx-login-tip {
          font-size: 18px;
          color: #999;
          text-align: center;
          margin-bottom: 37px;
        }

        .wx-login-bottom {
          text-align: center;
        }

        // 注册
        .login-mode__register,
        .login-mode__forget {
          .login-title {
            font-size: 32px;
            color: #333;
            text-align: center;
          }

          .login-opts {
            justify-content: center;
          }
        }
      }
    }
  }

  .text-link {
    font-size: 16px;
    color: $text-link-color;
    cursor: pointer;

    &:hover {
      color: $text-link-hover-color;
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
      border-color: #ccc;
    }
  }

  :deep(.el-form-item) {
    margin-bottom: 30px;
  }

  .login-input__icon {
    font-size: 20px;
  }
</style>
