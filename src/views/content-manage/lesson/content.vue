<template>
  <div class="main">
    <!-- 顶部信息 -->
    <section class="top">
      <div class="left">
        <el-image
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        ></el-image>
        <section>
          <p>程序员说</p>
          <p> <span>会员免费</span> <span>更新至第10期｜更新中</span> </p>
        </section>
      </div>
      <el-button type="text" icon="el-icon-edit">编辑</el-button>
    </section>
    <!-- 表格 -->
    <section class="table">
      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column type="index" label="序列" width="100" align="center"> </el-table-column>
        <el-table-column label="课程标题" min-width="280">
          <template #default="scope">
            <div class="title">
              <el-image
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              ></el-image>
              <section
                ><p>{{ scope.row.title }}</p>
                <p>免费</p>
              </section>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="state" label="状态" width="80" align="center"> </el-table-column>
        <el-table-column prop="issue" label="期数" width="80" align="center"> </el-table-column>
        <el-table-column prop="date" label="上架时间" width="200" align="center"> </el-table-column>
        <el-table-column prop="subscribers" label="订阅量" width="80" align="center">
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="200" align="center">
          <template #default="scope">
            <div class="btn">
              <el-button type="text" @click="handleDelete(scope.$index, scope.row)"
                >移出每日一课</el-button
              >
              <span>|</span>
              <el-button type="text" @click="handleEdit(scope.$index, scope.row)"
                >设为试看</el-button
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <section class="page">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        prev-text="上一页"
        next-text="下一页"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
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
          title:
            '什么是JavaScript，它能用来做什么？什么是JavaScript，它能用来做什么？什么是JavaScript，它能用来做什么？',
          state: '已上架',
          issue: 1,
          subscribers: 1 //订阅量
        },
        {
          date: '2020/04/20 22:33:00',
          title: '什么是JavaScript，它能用来做什么？',
          state: '已上架',
          issue: 1,
          subscribers: 1 //订阅量
        },
        {
          date: '2020/04/20 22:33:00',
          title: '什么是JavaScript，它能用来做什么？',
          state: '已上架',
          issue: 1,
          subscribers: 1 //订阅量
        },
        {
          date: '2020/04/20 22:33:00',
          title: '什么是JavaScript，它能用来做什么？',
          state: '已上架',
          issue: 1,
          subscribers: 1 //订阅量
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
    height: 120px;
    padding: 16px;
    background: #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    -moz-box-sizing: border-box; /* Firefox */
    -webkit-box-sizing: border-box; /* Safari */
    .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #333;
      letter-spacing: 1px;

      section {
        padding-left: 10px;

        span {
          color: #666;
        }
      }
    }

    :deep(.el-image) {
      img {
        width: 136px;
        height: 88px;
      }
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

    .title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      letter-spacing: 1px;

      section {
        padding-left: 10px;
      }
    }

    :deep(.el-image) {
      img {
        width: 136px;
        height: 88px;
      }
    }

    .btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      color: #2b9afa;

      .el-button {
        font-size: 16px;
      }
    }
  }

  .page {
    text-align: right;
    margin-top: 30px;

    :deep(.el-select .el-input) {
      font-size: 16px;
    }

    :deep(.el-pagination__sizes .el-input .el-input__inner),
    :deep(.el-input__inner) {
      font-size: 16px;
    }

    :deep(.el-pager li) {
      font-size: 16px;
      height: 40px;
      line-height: 40px;
      background: #e1dfe0;
      border-radius: 4px;
      margin-right: 5px;
    }

    :deep(.el-pagination span:not([class*='suffix'])) {
      font-size: 16px;
      height: 40px;
      line-height: 40px;
    }

    :deep(.el-pagination button) {
      font-size: 16px;
      height: 40px;
      line-height: 40px;
      background-color: #e1dfe0;
      border-radius: 4px;
      margin-right: 5px;
    }

    :deep(.el-input--mini .el-input__inner) {
      height: 40px;
    }
  }
</style>
