<template>
  <div class="main">
    <section class="column">数据统计</section>
    <section class="statistics">
      <div><p class="name">总订阅量</p><p class="num">100</p></div>
      <div><p class="name">学习人数</p><p class="num">100</p></div>
      <div><p class="name">总完成数</p><p class="num">100</p></div>
      <div><p class="name">完成率(%）</p><p class="num">100</p></div>
    </section>
    <!-- 表格 -->
    <section class="column mt15">数据统计</section>
    <section class="table">
      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column type="index" label="序列" width="100" align="center"> </el-table-column>
        <el-table-column label="用户" min-width="280">
          <template #default="scope">
            <div class="title">
              <el-image
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              ></el-image>
              <section
                ><p class="name"
                  ><span>{{ scope.row.name }}</span>
                </p>
              </section>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="date" label="首次学习时间" width="200" align="center">
        </el-table-column>
        <el-table-column prop="duration" label="学习时长" width="200" align="center">
        </el-table-column>
        <el-table-column prop="progress" label="学习进度" width="200" align="center">
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="120" align="center">
          <template #default="scope">
            <div class="btn">
              <el-button type="text" @click="handleDelete(scope.$index, scope.row)"
                >学员详情</el-button
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
          name: '刘德华',
          duration: '28min',
          progress: '100%' //订阅量
        },
        {
          date: '2020/04/20 22:33:00',
          name: '刘德华',
          duration: '28min',
          progress: '100%' //订阅量
        },
        {
          date: '2020/04/20 22:33:00',
          name: '刘德华',
          duration: '28min',
          progress: '100%' //订阅量
        },
        {
          date: '2020/04/20 22:33:00',
          name: '刘德华',
          duration: '28min',
          progress: '100%' //订阅量
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
    padding: 32px 24px;
    background: #fff;
  }

  .mt15 {
    margin-top: 15px;
  }

  .column {
    position: relative;
    height: 60px;
    padding-left: 12px;
    font-size: 22px;
    line-height: 60px;
    color: #333;
    text-align: left;

    &::before {
      position: absolute;
      top: 23px;
      left: 0;
      width: 4px;
      height: 16px;
      background: #2590f9;
      border-radius: 2px;
      content: '';
      opacity: 1;
    }
  }

  .statistics {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;

    div {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      width: 25%;
      height: 172px;
      margin-right: 10px;
      background: #f8f9fb;
      border-radius: 8px;

      p {
        padding: 0;
        margin: 10px auto;
        text-align: center;

        &.name {
          font-size: 24px;
          color: #999;
        }

        &.num {
          font-size: 40px;
          color: #333;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .table {
    margin-top: 15px;

    :deep(.el-table th > .cell) {
      text-align: center;
    }

    :deep(.el-table) {
      color: #333;
    }

    :deep(.el-table thead) {
      font-size: 16px;
      font-weight: normal;
      color: #333;
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      letter-spacing: 1px;

      section {
        padding-left: 10px;

        .name {
          color: #999;

          span {
            font-weight: bold;
            color: #2590f9;
          }
        }
      }
    }

    :deep(.el-image) {
      img {
        width: 88px;
        height: 88px;
      }
    }

    .btn {
      font-size: 16px;
      color: #2b9afa;
      text-align: center;

      .el-button {
        font-size: 16px;
      }
    }
  }

  .page {
    margin-top: 30px;
    text-align: right;

    :deep(.el-select .el-input) {
      font-size: 16px;
    }

    :deep(.el-pagination__sizes .el-input .el-input__inner),
    :deep(.el-input__inner) {
      font-size: 16px;
    }

    :deep(.el-pager li) {
      height: 40px;
      margin-right: 5px;
      font-size: 16px;
      line-height: 40px;
      background: #e1dfe0;
      border-radius: 4px;
    }

    :deep(.el-pagination span:not([class*='suffix'])) {
      height: 40px;
      font-size: 16px;
      line-height: 40px;
    }

    :deep(.el-pagination button) {
      height: 40px;
      margin-right: 5px;
      font-size: 16px;
      line-height: 40px;
      background-color: #e1dfe0;
      border-radius: 4px;
    }

    :deep(.el-input--mini .el-input__inner) {
      height: 40px;
    }
  }
</style>
