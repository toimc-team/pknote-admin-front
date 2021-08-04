<template>
  <el-container>
    <div class="login-area">
      <div class="login-left"> </div>
      <div class="login-right">
        <el-button @click="login" :loading="loginBtnLoading">登录</el-button>
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

      onMounted(() => {})

      return {
        login,
        loginBtnLoading
      }
    }
  })
</script>

<style lang="scss" scoped>
  .el-container {
    background-color: rgb(54, 54, 54);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('@/assets/img/login_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    // object-fit: fill;
  }

  .login-area {
    width: 1200px;
    height: 760px;
    background-color: #fff;
    border-radius: 16px;
  }
</style>
