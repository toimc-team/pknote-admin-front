<template>
  <div class="menu-wrap full-height" :class="{ reactive: isMenuRective, unfold: !isFolded }">
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
  </div>
  <div v-if="isMenuRective && !isFolded" class="menu-overlay" @click="toggleFold"></div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
  // import { useStore } from 'vuex'
  import menu from '@/utils/menu'
  export default defineComponent({
    name: 'Menu',
    setup() {
      let {
        menuConfig,
        isMenuRective,
        isFolded,
        changePath, // 切换菜单路由
        getCurrMenu,
        clickMenu,
        setMenuRective, // 设置菜单的响应式布局
        toggleFold // 切换菜单栏显示隐藏
      } = menu()

      // 默认菜单全部展开
      const openArr = ref(
        menuConfig.map((item, i) => {
          return i.toString()
        })
      )
      onMounted(() => {
        getCurrMenu()
        clickMenu()
        setMenuRective()
        window.addEventListener('resize', setMenuRective) // 菜单响应式
      })
      onUnmounted(() => {
        window.removeEventListener('resize', setMenuRective)
      })

      return {
        menuConfig,
        openArr,
        isFolded,
        isMenuRective,
        clickMenu,
        changePath,
        toggleFold
      }
    }
  })
</script>

<style lang="scss" scoped>
  .logo-wrap {
    margin: 38px 0 46px 0;
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

  :deep(.el-menu) {
    border-right: none;
  }

  :deep(.el-menu-item),
  :deep(.el-submenu__title) {
    font-size: 16px;
    height: 56px;
    line-height: 56px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2) !important;
    }
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
    color: #333;
    background-color: #f5f6fa !important;
  }

  .reactive {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2005;
    transform: translate3d(-200px, 0, 0);
    transition: transform 0.3s linear;

    &.unfold {
      transform: translate3d(0, 0, 0);
    }
  }

  .menu-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2000;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: auto;
  }
</style>
