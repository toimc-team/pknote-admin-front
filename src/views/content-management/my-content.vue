<template>
  <div class="normal-wrap full-height">
    <el-scrollbar>
      <el-tabs>
        <el-tab-pane label="图文" name=""></el-tab-pane>
        <el-tab-pane label="音频" name=""></el-tab-pane>
        <el-tab-pane label="视频" name=""></el-tab-pane>
      </el-tabs>

      <!-- 表单 -->
      <el-row justify="space-between">
        <el-col :span="20">
          <!-- TODO 解决 console 中的类型警告 -->
          <el-form :inline="true">
            <el-form-item>
              <el-select v-model="sourceStatus" placeholder="请选择">
                <el-option
                  v-for="(status, i) in statusOptions"
                  :key="`资源状态-${i}`"
                  :label="status.label"
                  :value="status.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-date-picker
                v-model="createTime"
                type="date"
                placeholder="上架时间"
              ></el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="sourceName"
                :placeholder="'请输入课程名称'"
                class="name-ipt"
              ></el-input>
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
      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        style="width: 100%"
        stripe
        tooltip-effect="dark"
        @selection-change="() => {}"
      >
        <el-table-column type="selection" width1="48" align="center"></el-table-column>
        <el-table-column label="序列" type="index" width1="79" align="center"></el-table-column>
        <el-table-column label="课程标题" width="400" align="center">
          <template #default="scope">
            <div class="flex">
              <span class="course-img no-shrink">
                <img src="" alt="" />
              </span>
              <div class="column-flex main-between course-info">
                <p>{{ scope.row.name }}</p>
                <p class="status">{{ scope.row.price }}</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="sellNum"
          label="订阅量"
          width1="119"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" width1="119" align="center"></el-table-column>
        <el-table-column label="关联类容" width="400" align="center">
          <template #default="scope">
            <div class="flex">
              <span class="course-img no-shrink">
                <img src="" alt="" />
              </span>
              <div class="column-flex main-between course-info">
                <p>{{ scope.row.related.name }}</p>
                <p class="status">{{ scope.row.related.type }}</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="214" align="center">
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
      <el-row justify="end" class="pagination-rap">
        <el-pagination
          background
          layout="total, sizes, prev, pager, next"
          :page-size="100"
          :total="1000"
        >
        </el-pagination>
      </el-row>
    </el-scrollbar>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const field = {}
      const statusOptions = [
        {
          value: '1',
          label: '全部状态'
        },
        {
          value: '2',
          label: '草稿'
        },
        {
          value: '3',
          label: '审核中'
        },
        {
          value: '4',
          label: '已上架'
        },
        {
          value: '5',
          label: '已下架'
        }
      ]
      let sourceStatus = ref(statusOptions[0].value)
      let createTime = ref('')
      let sourceName = ref('')
      const tableData = [
        {
          name: '什么是JavaScript，它能用来做什么？',
          price: '免费',
          img: '',
          sellNum: 100,
          status: '已上架',
          related: {
            name: 'JavaScript基础讲解',
            type: '优质专栏'
          }
        },
        {
          name: '什么是JavaScript，它能用来做什么？',
          price: '免费',
          img: '',
          sellNum: 100,
          status: '已上架',
          related: {
            name: 'JavaScript基础讲解',
            type: '优质专栏'
          }
        }
      ]
      return {
        field,
        sourceStatus,
        createTime,
        sourceName,
        statusOptions,
        tableData
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '@/assets/style/mixin.scss';
  @import '@/assets/style/table.scss';

  :deep(.el-tabs__item) {
    height: 63px;
    line-height: 63px;
  }

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

  :deep(.el-form-item .el-input__inner) {
    width: 200px;
  }

  :deep(.el-input__inner) {
    // padding: 0 12px;
    @include placeholder {
      color: #ccc;
    }

    color: #262626;
    border-color: #d9d9d9;
  }

  :deep(.el-button) {
    min-height: 0;
    padding: 0 16px;
  }

  :deep(.el-button--primary) {
    background-color: #2b9afa;
    border-color: #2b9afa;
    // color: #fff;
  }

  .name-ipt {
    :deep(.el-input__inner) {
      width: 320px;
    }
  }

  :deep(.el-link.el-link--primary) {
    color: #2b9afa;
  }

  .operate-btn-wrap {
    padding: 0 4px;
  }

  :deep(.el-link) {
    font-size: 16px;
  }

  .course-img {
    width: 136px;
    height: 88px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .course-info {
    padding: 11px 0 12px 0;
    margin-left: 16px;
    line-height: 20px;
    text-align: left;

    .status {
      color: #666;
    }
  }

  .gap-line {
    width: 1px;
    height: 18px;
    background: #2b9afa;
  }

  .pagination-rap {
    margin: 30px 0;
  }
</style>
