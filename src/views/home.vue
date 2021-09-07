<template>
  <el-container class="full-height">
    <!-- 左侧菜单 -->
    <el-aside width="200px" class="full-height hidden-sm-and-down">
      <el-scrollbar>
        <el-menu
          class="full-height"
          :default-openeds="openArr"
          background-color="#273043"
          text-color="#fff"
        >
          <div class="logo-wrap flex main-center"><i class="icon icon-logo"></i></div>
          <component
            :is="menu.noSub ? 'el-menu-item' : 'el-submenu'"
            v-for="(menu, i) in menuConfig"
            :key="`sub-menu-${i}`"
            :index="i.toString()"
            :class="{ currMenuItem: menu.isCurrent }"
            @click="changePath(menu.path)"
          >
            <template #title>
              <i :class="menu.icon"></i>
              {{ menu.title }}
            </template>
            <el-menu-item-group v-if="menu.sub">
              <el-menu-item
                v-for="(sub, j) in menu.sub"
                :key="`group-${j}`"
                :index="`${i}-${j}`"
                :class="{ currMenuItem: sub.isCurrent }"
                @click="changePath(sub.path)"
                >{{ sub.title }}</el-menu-item
              >
            </el-menu-item-group>
          </component>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <!-- 右侧 -->
    <el-container>
      <!-- 头部 -->
      <el-header class="flex main-between main-padding-l" height="56px">
        <div class="flex cross-center seach-ipt-wrap">
          <el-input v-model="searchStr" placeholder="搜索">
            <template #prefix>
              <i class="el-input__icon el-icon-search"></i>
            </template>
          </el-input>
        </div>
        <div class="account-btn-wrap flex cross-center">
          <a href="javascript:;" class="home-btn"><i class="el-icon-house"></i></a>
          <a href="javascript:;" class="notification-btn"><i class="el-icon-bell"></i></a>
          <p class="pipe flex cross-center">
            <span class="header-img-wrap flex">
              <img src="" />
            </span>
            <a href="javascript:;" class="user-btn flex cross-center">admin</a>
          </p>
          <a href="javascript:;" class="exit-btn">退出<i class="el-icon-switch-button"></i></a>
        </div>
      </el-header>
      <el-main>
        <div class="main-content full-height">
          <!-- 子页面 -->
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import menu from '@/utils/menu'
  export default defineComponent({
    setup() {
      let { changePath, getCurrMenu, clickMenu, menuConfig } = menu()

      // 默认菜单全部展开
      const openArr = ref(
        menuConfig.map((item, i) => {
          return i.toString()
        })
      )
      const searchStr = ref('')
      onMounted(() => {
        getCurrMenu()
        clickMenu()
      })

      return {
        menuConfig,
        openArr,
        searchStr,
        clickMenu,
        changePath
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

  :deep(.el-menu) {
    border-right: none;
  }

  :deep(.el-menu-item),
  :deep(.el-submenu__title) {
    font-size: 16px;
    height: 56px;
    line-height: 56px;
  }

  :deep(.el-menu-item-group) {
    .el-menu-item {
      font-size: 14px;
      height: 40px;
      line-height: 40px;
    }
  }

  :deep(.el-menu-item-group__title) {
    display: none;
  }

  :deep(.el-menu-item i),
  :deep(.el-submenu__title i) {
    color: currentColor;
    vertical-align: -1px;
  }

  :deep(.el-menu-item.is-active) {
    color: #fff;
    background: rgba(255, 255, 255, 0.2) !important;
  }

  :deep(header) {
    background-color: #fff;
    padding-right: 0;
  }

  .icon {
    display: inline-block;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .icon-logo {
    width: 116px;
    height: 30px;
    background-image: url('@/assets/logo.png');
  }

  .flex {
    display: flex;
  }

  .main-padding-l {
    padding-left: 64px;
  }

  .logo-wrap {
    margin: 38px 0 46px 0;
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

      border: none;
      font-size: 14px;
      margin-left: 7px;

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
        content: '';
        width: 1px;
        height: 16px;
        background-color: #2d2d2d;
        position: absolute;
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
      border-radius: 50%;
      background-color: #f5f5f5;
      overflow: hidden;
      margin-right: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    a {
      color: #353535;
      margin-right: 42px;
      text-decoration: none;
    }

    i {
      color: inherit;
      font-size: 22px;
    }

    .user-btn {
      &::after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border: 5px solid currentColor;
        border-bottom: none;
        border-left-color: transparent;
        border-right-color: transparent;
        margin-left: 10px;
        margin-top: 3px;
      }
    }

    .exit-btn {
      color: #343434;

      i {
        font-size: 12px;
        margin-left: 10px;
      }
    }
  }

  .main-content {
    padding: 28px 94px 30px 44px;
    box-sizing: border-box;
  }
</style>
<style lang="scss">
  // home 页，子页面中使用到的公共样式
  .normal-wrap {
    background-color: #fff;
    border-radius: 8px;
    padding: 0 24px; // 注意：上下间距并不一定一致
  }

  .flex {
    display: flex;
    min-width: 0;
    min-height: 0;
  }

  .column-flex {
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
    justify-content: center;
    align-items: center;
  }
</style>
