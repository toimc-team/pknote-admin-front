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
        <div class="flex cross-center">
          <i class="el-icon-search"></i>
          <input type="text" placeholder="搜索" class="search-ipt" />
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
      <el-main class="flex">
        <div class="main-content grow">
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
      onMounted(() => {
        getCurrMenu()
        clickMenu()
      })

      return {
        menuConfig,
        openArr,
        clickMenu,
        changePath
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/assets/style/variable.scss';

  p {
    margin: 0;
  }
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
    font-size: $fz-sm-xx;
    height: 56px;
    line-height: 56px;
  }
  :deep(.el-menu-item-group) {
    .el-menu-item {
      font-size: $fz-sm-x;
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
    min-width: 0;
    min-height: 0;
  }
  .grow {
    flex: 1;
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
  .h-v-center {
    justify-content: center;
    align-items: center;
  }

  .main-padding-l {
    padding-left: 64px;
  }
  .logo-wrap {
    margin: 38px 0 46px 0;
  }
  .el-icon-search {
    font-size: $fz-big;
    color: #666;
  }
  .search-ipt {
    border: none;
    font-size: $fz-sm-x;
    margin-left: 7px;
    &:focus-visible,
    &:focus {
      outline: none;
    }
    &::-webkit-input-placeholder {
      color: #ccc;
    }
    &::-moz-input-placeholder {
      color: #ccc;
    }
    &::-moz-input-placeholder {
      color: #ccc;
    }
    &::-ms-input-placeholder {
      color: #ccc;
    }
  }
  .account-btn-wrap {
    .pipe {
      position: relative;
      &:before,
      &:after {
        content: '';
        width: 1px;
        height: 16px;
        background-color: #2d2d2d;
        position: absolute;
      }
      &:before {
        left: -21px;
      }
      &:after {
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
      font-size: $fz-big-xx;
    }
    .user-btn {
      &:after {
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
        font-size: $fz-sm;
        margin-left: 10px;
      }
    }
  }

  .main-content {
    // border-radius: 8px;
    // background: #fff;
    // overflow: auto;
    margin: 28px 94px 30px 44px;
  }
</style>
