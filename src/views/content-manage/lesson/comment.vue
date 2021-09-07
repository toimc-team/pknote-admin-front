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
    <section class="column mt15">数据统计</section>
    <section class="statistics">
      <div><p class="name">总浏览量</p><p class="num">100</p></div>
      <div><p class="name">用户量</p><p class="num">100</p></div>
      <div><p class="name">评论数</p><p class="num">100</p></div>
      <div><p class="name">销售额(元）</p><p class="num">100</p></div>
    </section>
    <!-- 表格 -->
    <section class="column mt15">数据统计</section>
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
                ><p class="name"
                  ><span>{{ scope.row.name }}</span> 评论了{{ scope.row.courseName }}</p
                >
                <p class="abstract">{{ scope.row.abstract }}</p>
              </section>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="date" label="评论时间" width="200" align="center"> </el-table-column>
        <el-table-column prop="likes" label="点赞数" width="80" align="center"> </el-table-column>
        <el-table-column label="操作" fixed="right" width="120" align="center">
          <template #default="scope">
            <div class="btn">
              <el-button type="text" @click="handleDelete(scope.$index, scope.row)">回复</el-button>
              <span>|</span>
              <el-button type="text" @click="handleEdit(scope.$index, scope.row)">精选</el-button>
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
          courseName: 'JavaScript基础课程',
          abstract:
            '以动物形象为基础的Logo可以产生强烈的感染力与艺术趣味，对动物的图腾崇拜可以追溯到远古，每一个动物的秉性都代表着一种精神信仰',
          likes: 1 //订阅量
        },
        {
          date: '2020/04/20 22:33:00',
          name: '刘德华',
          courseName: 'JavaScript基础课程',
          abstract:
            '以动物形象为基础的Logo可以产生强烈的感染力与艺术趣味，对动物的图腾崇拜可以追溯到远古，每一个动物的秉性都代表着一种精神信仰',
          likes: 1 //订阅量
        },
        {
          date: '2020/04/20 22:33:00',
          name: '刘德华',
          courseName: 'JavaScript基础课程',
          abstract:
            '以动物形象为基础的Logo可以产生强烈的感染力与艺术趣味，对动物的图腾崇拜可以追溯到远古，每一个动物的秉性都代表着一种精神信仰',
          likes: 1 //订阅量
        },
        {
          date: '2020/04/20 22:33:00',
          name: '刘德华',
          courseName: 'JavaScript基础课程',
          abstract:
            '以动物形象为基础的Logo可以产生强烈的感染力与艺术趣味，对动物的图腾崇拜可以追溯到远古，每一个动物的秉性都代表着一种精神信仰',
          likes: 1 //订阅量
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

  .mt15 {
    margin-top: 15px;
  }

  .column {
    font-size: 22px;
    text-align: left;
    color: #333;
    line-height: 60px;
    position: relative;
    height: 60px;
    padding-left: 12px;

    &::before {
      content: '';
      width: 4px;
      height: 16px;
      opacity: 1;
      background: #2590f9;
      border-radius: 2px;
      position: absolute;
      top: 23px;
      left: 0;
    }
  }

  .statistics {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      height: 172px;
      background: #f8f9fb;
      border-radius: 8px;
      width: 25%;
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;

      p {
        text-align: center;
        margin: 10px auto;
        padding: 0;

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

        .name {
          color: #999;

          span {
            color: #2590f9;
            font-weight: bold;
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
