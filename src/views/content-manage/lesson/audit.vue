<template>
  <div class="main">
    <!-- 顶部信息 -->
    <section class="top"><span>审核流程图</span></section>
    <!-- 表格 -->
    <section class="table">
      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column type="index" label="序列" width="100" align="center"> </el-table-column>
        <el-table-column prop="title" label="步骤名称" min-width="280"> </el-table-column>
        <el-table-column prop="state" label="状态" width="80" align="center"> </el-table-column>
        <el-table-column prop="sender" label="发送人" width="280" align="center"> </el-table-column>
        <el-table-column prop="handler" label="处理人" width="280" align="center">
          <template #default="scope">
            <p v-for="(item, index) in scope.row.handler" :key="index">
              {{ item }}
            </p>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="开始时间" width="200" align="center"> </el-table-column>
        <el-table-column prop="completionTime" label="完成时间" width="200" align="center">
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    setup() {
      const tableData = [
        {
          date: '2020/04/20 22:33:00',
          title: '文字校队审核',
          state: '运行',
          issue: 1,
          subscribers: 1, //订阅量
          sender: '张三(1546513452）/签约作者',
          handler: [
            '张三(1546513452）文字校对',
            '张三(1546513452）文字校对',
            '张三(1546513452）文字校对'
          ],
          completionTime: '2020/04/20 22:33:00'
        },
        {
          date: '2020/04/20 22:33:00',
          title: '文字校队审核',
          state: '运行',
          issue: 1,
          subscribers: 1, //订阅量
          sender: '张三(1546513452）/签约作者',
          handler: [
            '张三(1546513452）文字校对',
            '张三(1546513452）文字校对',
            '张三(1546513452）文字校对'
          ],
          completionTime: '2020/04/20 22:33:00'
        }
      ]
      const handleEdit = (index: number, row: object) => {
        console.log(index, row)
      }
      const handleDelete = (index: number, row: object) => {
        console.log(index, row)
      }
      const handleSizeChange = (val: number) => {
        console.log(`每页 ${val} 条`)
      }
      const handleCurrentChange = (val: number) => {
        console.log(`当前页: ${val}`)
      }

      return {
        tableData,
        handleEdit,
        handleDelete,
        handleSizeChange,
        handleCurrentChange,
        currentPage: 4
      }
    }
  })
</script>

<style scoped lang="scss">
  .main {
    background: #fff;
    padding: 32px 24px;
  }

  .top {
    height: 407px;
    background: #fff;
    text-align: center;

    span {
      font-size: 40px;
      font-family: PingFang, PingFang-SC-Bold;
      font-weight: sc-bold;
      color: #e3e3e3;
      padding-top: 160px;
      display: block;
    }
  }

  .table {
    margin-top: 32px;

    :deep(.el-table th > .cell) {
      text-align: center;
    }

    :deep(.el-table) {
      color: #333;
    }

    :deep(.el-table thead) {
      font-weight: normal;
      font-size: 16px;
      color: #333;
    }
  }
</style>
