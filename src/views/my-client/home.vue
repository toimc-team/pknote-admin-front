<template>
  <div class="normal-wrap full-height">
    <el-tabs>
      <el-tab-pane label="图文" name=""></el-tab-pane>
      <el-tab-pane label="音频" name=""></el-tab-pane>
      <el-tab-pane label="视频" name=""></el-tab-pane>
    </el-tabs>

    <!-- 表单 -->
    <el-row justify="space-between">
      <el-col :span="20">
        <el-form :inline="true" :model="feild">
          <el-form-item>
            <el-select></el-select>
          </el-form-item>
          <el-form-item>
            <el-date-picker></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-input :placeholder="'请输入课程名称'" class="name-ipt"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">筛选</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-button type="primary">新建图文</el-button>
    </el-row>

    <!-- table -->
    <el-table ref="multipleTable" :data="tableData" border style="width: 100%" stripe>
      <el-table-column type="selection" width1="48"></el-table-column>
      <el-table-column label="序列" type="index" width1="79"></el-table-column>
      <el-table-column prop="" label="课程标题" width1="455"> </el-table-column>
      <el-table-column prop="" label="订阅量" width1="119"></el-table-column>
      <el-table-column prop="" label="状态" width1="119"></el-table-column>
      <el-table-column prop="" label="课程标题" width1="454"></el-table-column>
      <el-table-column prop="" label="操作" width="214">
        <div class="operate-btn-wrap">
          <el-row justify="space-between" align="middle">
            <el-link type="primary" class="operate-btn">编辑</el-link>
            <span class="gap-line"></span>
            <el-link type="primary" class="operate-btn">上架</el-link>
            <span class="gap-line"></span>
            <el-link type="primary" class="operate-btn">分享</el-link>
            <span class="gap-line"></span>
            <el-link type="primary" class="operate-btn">更多</el-link>
          </el-row>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const feild = ref({})
      const tableData = ref([
        {
          course: {
            name: '什么是JavaScript，它能用来做什么？',
            price: 0,
            image: '',
            subscribeNum: 100,
            status: 1 // 1 已上架
          }
        },
        {
          course: {
            name: '什么是JavaScript，它能用来做什么？',
            price: 0,
            image: '',
            subscribeNum: 100,
            status: 1 // 1 已上架
          }
        }
      ])
      return {
        feild,
        tableData
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/assets/style/variable.scss';
  @import '@/assets/style/_mixin.scss';
  :deep(.el-form-item__content),
  :deep(.el-select),
  :deep(.el-input),
  :deep(.el-input__inner),
  :deep(.el-button),
  :deep(.el-input__icon) {
    line-height: 32px;
  }
  :deep(.el-input__inner),
  :deep(.el-button) {
    height: 32px;
  }
  :deep(.el-date-editor.el-input, .el-date-editor.el-input__inner) {
    width: 200px;
  }
  :deep(.el-form--inline .el-form-item) {
    margin-right: 8px;
  }
  :deep(.el-button + .el-button) {
    margin-left: 8px;
  }
  :deep(.el-input__inner) {
    width: 200px;
  }
  :deep(.el-input__inner) {
    color: $gray-s;
    border-color: #d9d9d9;
    padding: 0 12px;
    @include placeholder {
      color: $gray-xx;
    }
  }
  :deep(.el-button) {
    min-height: 0;
    padding: 0 16px;
  }
  :deep(.el-button--primary) {
    background-color: $blue-x;
    border-color: $blue-x;
    // color: #fff;
  }
  .name-ipt {
    :deep(.el-input__inner) {
      width: 320px;
    }
  }
  :deep(.el-link.el-link--primary) {
    color: $blue-x;
  }
  .operate-btn-wrap {
    padding: 0 4px;
  }
  :deep(.el-link) {
    font-size: $fz-sm-xx;
  }
  .gap-line {
    width: 1px;
    height: 18px;
    background: $blue-x;
  }
</style>
