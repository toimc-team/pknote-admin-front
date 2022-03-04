<template>
  <el-container class="full-height">
    <!-- 左侧菜单 -->
    <el-aside class="full-height" width="200">
      <Menu></Menu>
    </el-aside>

    <!-- 右侧 -->
    <el-container>
      <!-- 头部 -->
      <el-header class="flex main-between main-padding-l" height="56px">
        <div v-show="isMenuRective" class="toggle-flod flex cross-center" @click="toggleFold">
          <span>
            <i class="el-icon-s-unfold"></i>
          </span>
        </div>
        <div class="flex cross-center seach-ipt-wrap">
          <el-input v-model="searchStr" placeholder="搜索">
            <template #prefix>
              <i class="el-input__icon el-icon-search"></i>
            </template>
          </el-input>
        </div>
        <div class="account-btn-wrap flex cross-center">
          <a href="javascript:;" class="home-btn">
            <i class="el-icon-house"></i>
          </a>
          <a href="javascript:;" class="notification-btn">
            <i class="el-icon-bell"></i>
          </a>
          <p class="pipe flex cross-center">
            <span class="header-img-wrap flex">
              <el-image :src="''" class="flex grow">
                <template #error>
                  <div class="flex h-v-center grow">
                    <i class="el-icon-picture-outline placeholder-img-icon"></i>
                  </div>
                </template>
              </el-image>
            </span>
            <el-popover>
              <template #reference>
                <a href="javascript:;" class="user-btn flex cross-center">admin</a>
              </template>
              <p class="user-operate-btn flex">
                <el-link href="javascript:;">账户主页</el-link>
              </p>
              <p class="user-operate-btn flex">
                <el-link href="javascript:;">退出登录</el-link>
              </p>
            </el-popover>
          </p>
          <a href="javascript:;" class="exit-btn">
            退出
            <i class="el-icon-switch-button"></i>
          </a>
        </div>
      </el-header>
      <el-main>
        <el-scrollbar>
          <div class="main-content column-flex">
            <!-- 子页面 -->
            <router-view></router-view>
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import Menu from '@/components/menu.vue'
  import menu from '@/utils/menu'
  export default defineComponent({
    components: {
      Menu
    },
    setup() {
      let { isMenuRective, toggleFold } = menu()

      const searchStr = ref('') // 搜索
      return {
        searchStr,
        isMenuRective,
        toggleFold
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/assets/style/mixin.scss';

  :deep(.el-container) {
    background-color: #f5f5f5;
  }

  :deep(.el-aside) {
    background-color: #273043;
  }

  :deep(.el-main) {
    padding: 0;
  }

  :deep(header) {
    padding-right: 0;
    background-color: #fff;
  }

  .flex {
    display: flex;
  }

  .main-padding-l {
    padding-left: 64px;
  }

  :deep(.el-header) {
    position: relative;
  }

  .toggle-flod {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 0 10px;
    font-size: 22px;
    color: #666;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  .el-icon-search {
    font-size: 18px;
    color: #666;
  }

  .seach-ipt-wrap {
    :deep(.el-input__inner) {
      @include placeholder {
        color: #ccc;
      }

      margin-left: 7px;
      font-size: 14px;
      border: none;

      &:focus-visible,
      &:focus {
        outline: none;
      }
    }
  }

  .account-btn-wrap {
    .pipe {
      position: relative;

      &::before,
      &::after {
        position: absolute;
        width: 1px;
        height: 16px;
        background-color: #2d2d2d;
        content: '';
      }

      &::before {
        left: -21px;
      }

      &::after {
        right: 21px;
      }
    }

    .header-img-wrap {
      width: 31px;
      height: 31px;
      margin-right: 10px;
      overflow: hidden;
      background-color: #f5f5f5;
      border-radius: 50%;

      :deep(.el-image) {
        display: flex;
      }

      .placeholder-img-icon {
        font-size: 16px;
        color: #666;
      }
    }

    a {
      margin-right: 42px;
      color: #353535;
      text-decoration: none;
    }

    i {
      font-size: 22px;
      color: inherit;
    }

    .user-btn {
      &::after {
        display: block;
        width: 0;
        height: 0;
        margin-top: 3px;
        margin-left: 10px;
        border: 5px solid currentcolor;
        border-bottom: none;
        border-right-color: transparent;
        border-left-color: transparent;
        content: '';
      }
    }

    .exit-btn {
      color: #343434;

      i {
        margin-left: 8px;
        font-size: 14px;
      }
    }
  }

  // 会影响到后面子页面的 el-scrollbar__view
  :deep(.el-scrollbar__view) {
    height: 100%;
  }

  .main-content {
    min-height: 100%;
    padding: 48px 114px 50px 44px;
    box-sizing: border-box;
  }

  .user-operate-btn {
    height: 30px;
    padding-left: 15px;
    font-size: 14px;
    text-decoration: none;

    :deep(.el-link) {
      color: #666;
    }
  }
</style>
<style lang="scss">
  // home 页，子页面中使用到的公共样式
  .normal-wrap {
    padding: 0 24px; // 注意：上下间距并不一定一致
    background-color: #fff;
    border-radius: 8px;
  }

  .flex {
    display: flex;
    min-width: 0;
    min-height: 0;
  }

  .column-flex {
    /* stylelint-disable scss/at-extend-no-missing-placeholder */
    @extend .flex;

    flex-direction: column;
  }

  .grow {
    flex-grow: 1;
  }

  .no-shrink {
    flex-shrink: 0;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .main-between {
    justify-content: space-between;
  }

  .main-center {
    justify-content: center;
  }

  .cross-center {
    align-items: center;
  }

  .cross-end {
    align-items: flex-end;
  }

  .h-v-center {
    align-items: center;
    justify-content: center;
  }
</style>
