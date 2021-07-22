<template>
  <div class="learn-plan">
    <div class="head-title">
      <span class="head-icon"></span>
      <h5 class="head-text">用户学习计划</h5>
    </div>
    <div class="form">
      <div class="item">
        <span>用户</span>
        <el-input v-model="user" style="height: 32px" placeholder="请输入申请人昵称"></el-input>
      </div>
      <div class="item">
        <span>计划创建时间</span>
        <el-date-picker
          v-model="value"
          style="height: 32px"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
      <div class="item">
        <el-button type="primary">筛选</el-button>
        <el-button>重置</el-button>
      </div>
    </div>
    <div class="table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
        stripe
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="48" align="center"> </el-table-column>
        <el-table-column label="序列" prop="id" width="80" align="center"></el-table-column>
        <el-table-column label="用户" align="center">
          <template #default="scope">
            <div class="user-info">
              <img class="avatar" :src="scope.row.user.avatar" alt="" />
              <span>{{ scope.row.user.nickname }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="关联学习计划" align="center" prop="plan"></el-table-column>
        <el-table-column label="计划创建时间" prop="createAt" align="center"></el-table-column>
        <el-table-column label="完成情况" align="center">
          <template #default="scope">
            <span>{{ scope.row.status.done }}/{{ scope.row.status.total }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="longClockIn"
          label="最长连续打卡天数"
          width="120"
          align="center"
        ></el-table-column>
        <el-table-column align="center" label="操作">
          <template #default="scope">
            <div class="operating">
              <el-button type="text" @click="handleClickApprove(scope)">查看审批流程</el-button>
              <span class="line"></span>
              <el-button type="text" @click="handleClickModify(scope)">修改</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        background
        :current-page="0"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      const tableData = [
        {
          id: 1,
          user: {
            avatar: 'https://avatars.githubusercontent.com/u/56526369',
            nickname: 'Forest'
          },
          plan: 40, // 关联学习计划
          createAt: 30, // 创建时间
          status: {
            total: 90,
            done: 10
          },
          longClockIn: 30
        },
        {
          id: 1,
          user: {
            avatar: 'https://avatars.githubusercontent.com/u/56526369',
            nickname: 'Forest'
          },
          plan: 40, // 关联学习计划
          createAt: 30, // 创建时间
          status: {
            total: 90,
            done: 10
          },
          longClockIn: 30
        },
        {
          id: 1,
          user: {
            avatar: 'https://avatars.githubusercontent.com/u/56526369',
            nickname: 'Forest'
          },
          plan: 40, // 关联学习计划
          createAt: 30, // 创建时间
          status: {
            total: 90,
            done: 10
          },
          longClockIn: 30
        },
        {
          id: 1,
          user: {
            avatar: 'https://avatars.githubusercontent.com/u/56526369',
            nickname: 'Forest'
          },
          plan: 40, // 关联学习计划
          createAt: 30, // 创建时间
          status: {
            total: 90,
            done: 10
          },
          longClockIn: 30
        }
      ]
      function handleSelectionChange() {}
      function handleSizeChange() {}
      function handleCurrentChange() {}

      // 查看审批流程  类型暂定any
      function handleClickApprove(row: any) {
        console.log(row)
      }

      // 修改  类型暂定any
      function handleClickModify(row: any) {
        console.log(row)
      }
      return {
        user: '',
        value: '',
        tableData,
        handleSelectionChange,
        handleSizeChange,
        handleCurrentChange,
        handleClickApprove,
        handleClickModify
      }
    }
  })
</script>

<style lang="scss" scoped>
  .learn-plan {
    flex: 1;
    border-radius: 8px;
    background-color: #fff;
    padding: 0 0 24px;
    overflow: hidden;

    .head-title {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding-left: 24px;
      padding-top: 30px;
      .head-icon {
        width: 4px;
        height: 16px;
        opacity: 1;
        background: #2590f9;
        border-radius: 2px;
        margin-right: 10px;
      }
      .head-text {
        margin: 0;
        font-size: 22px;
        font-weight: 400;
        color: #333;
        line-height: 1;
      }
    }

    .form {
      box-sizing: border-box;
      padding: 0 24px;
      margin-top: 30px;
      display: flex;
      align-items: center;
      .item {
        display: flex;
        align-items: center;
        margin-left: 24px;
        span {
          white-space: nowrap;
          margin-right: 26px;
        }
        &:nth-of-type(1) {
          margin-left: 0;
        }
        &:nth-last-child(1) {
          :deep(.el-button) {
            min-height: 32px;
            height: 32px;
            padding: 0 20px;
          }
        }
      }
    }
    .table {
      margin: 24px 24px 10px;

      .user-info {
        display: flex;
        align-items: center;
        justify-content: center;
        .avatar {
          border-radius: 50%;
          width: 64px;
          height: 64px;
          margin-right: 12px;
        }
        .nickname {
          font-size: 18px;
          color: #333;
          letter-spacing: 1px;
        }
      }

      .operating {
        display: flex;
        align-items: center;
        justify-content: center;
        .line {
          height: 14px;
          width: 1px;
          border-radius: 5px;
          background-color: #2b9afa;
          margin: 0 8px;
          overflow: hidden;
        }
      }
    }
    .pagination {
      padding-right: 15px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    :deep(.el-date-editor .el-range-separator) {
      height: 32px;
    }
    :deep(.el-input) {
      line-height: 32px;
    }
    :deep(.el-input__inner) {
      height: 32px;
      line-height: 32px;
    }
  }
</style>
