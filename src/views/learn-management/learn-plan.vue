<template>
  <div class="learn-plan">
    <!-- 头部信息 -->
    <div class="head-title">
      <span class="head-icon"></span>
      <h5 class="head-text">用户学习计划</h5>
    </div>

    <!-- 表单栏 -->
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

    <!-- 表格 -->
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
              <el-button type="text" @click="handleClickDetail(scope)">查看计划详情</el-button>
              <!-- <span class="line"></span>
              <el-button type="text" @click="handleClickModify(scope)">修改</el-button> -->
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 分页器  -->
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
  <!-- 对话框 -->
  <el-dialog v-model="dialogVisible" width="66%" title="用户学习计划详情">
    <div class="detail-box">
      <div class="item">
        <p class="title">用户</p>
        <div class="user">
          <img :src="tableData[0].user.avatar" alt="" />
          <span>{{ tableData[0].user.nickname }}</span>
        </div>
      </div>
      <div class="item">
        <p class="title">关联学习计划</p>
        <div class="user"> Forest的学习计划 </div>
      </div>
      <div class="item">
        <p class="title">完成情况</p>
        <div class="user"> <span>80</span>/90 </div>
      </div>
      <div class="item">
        <p class="title">最长连续打卡时间</p>
        <div class="user"> 10个月 </div>
      </div>
    </div>
    <div class="detail-box">
      <div class="left">
        <!-- <div class="head">
          <div class="time">2020年7月</div>
          <div class="time">
            <el-button>上个月</el-button>
          </div>
        </div> -->
        <el-calendar v-model="date" />
      </div>
      <div class="right">
        <!-- TODO：内容展示是否需要限制行数？待确定 -->
        <el-table
          :data="learnData"
          tooltip-effect="dark"
          style="width: 100%; margin-top: 52px"
          border
          stripe
        >
          <el-table-column label="序列" width="80" align="center" prop="id"></el-table-column>
          <el-table-column label="学习内容" align="center" prop="content"></el-table-column>
          <el-table-column label="目标计划" prop="plan" align="center"></el-table-column>
          <el-table-column label="完成情况" align="center">
            <template #default="scope">
              <span>{{ scope.row.status ? '已完成' : '未完成' }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue'

  export default defineComponent({
    setup() {
      // 表格数据
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

      // 模拟学习情况的数据
      const learnData = reactive([
        { id: 0, content: '学习持续集成、持续部署', plan: '学习持续集成、持续部署', status: false },
        { id: 1, content: '学习持续集成、持续部署', plan: '学习持续集成、持续部署', status: true },
        { id: 2, content: '学习持续集成、持续部署', plan: '学习持续集成、持续部署', status: true },
        { id: 3, content: '学习持续集成、持续部署', plan: '学习持续集成、持续部署', status: false }
      ])

      // 日历
      const date = ref(new Date())

      // dialog show or hide
      const dialogVisible = ref(false)

      // 处理checkbox选择变更
      function handleSelectionChange() {}

      // 处理表格每页展示数
      function handleSizeChange() {}

      // 处理输入当前页数事件
      function handleCurrentChange() {}

      // 查看计划详情  类型暂定any
      function handleClickDetail(row: any) {
        console.log(row)
        dialogVisible.value = true
      }

      // 修改  类型暂定any
      // function handleClickModify(row: any) {
      //   console.log(row)
      // }

      return {
        user: '',
        value: '',
        date,
        tableData,
        learnData,
        dialogVisible,
        handleSelectionChange,
        handleSizeChange,
        handleCurrentChange,
        handleClickDetail
        // handleClickModify
      }
    }
  })
</script>

<style lang="scss" scoped>
  .learn-plan {
    flex: 1;
    padding: 0 0 24px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 8px;

    // 头部信息
    .head-title {
      display: flex;
      padding-top: 30px;
      padding-left: 24px;
      box-sizing: border-box;
      align-items: center;

      .head-icon {
        width: 4px;
        height: 16px;
        margin-right: 10px;
        background: #2590f9;
        border-radius: 2px;
        opacity: 1;
      }

      .head-text {
        margin: 0;
        font-size: 22px;
        font-weight: 400;
        line-height: 1;
        color: #333;
      }
    }

    // 表单栏
    .form {
      display: flex;
      padding: 0 24px;
      margin-top: 30px;
      box-sizing: border-box;
      align-items: center;

      .item {
        display: flex;
        align-items: center;
        margin-left: 24px;

        span {
          margin-right: 26px;
          white-space: nowrap;
        }

        &:nth-of-type(1) {
          margin-left: 0;
        }

        &:nth-last-child(1) {
          :deep(.el-button) {
            height: 32px;
            min-height: 32px;
            padding: 0 20px;
          }
        }
      }
    }

    .table {
      margin: 24px 24px 10px;

      // 用户信息
      .user-info {
        display: flex;
        align-items: center;
        justify-content: center;

        .avatar {
          width: 64px;
          height: 64px;
          margin-right: 12px;
          border-radius: 50%;
        }

        .nickname {
          font-size: 18px;
          letter-spacing: 1px;
          color: #333;
        }
      }

      // 操作
      .operating {
        display: flex;
        align-items: center;
        justify-content: center;

        .line {
          width: 1px;
          height: 14px;
          margin: 0 8px;
          overflow: hidden;
          background-color: #2b9afa;
          border-radius: 5px;
        }
      }
    }

    // 分页器
    .pagination {
      display: flex;
      padding-right: 15px;
      box-sizing: border-box;
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

  // dialog
  :deep(.el-dialog .el-dialog__header) {
    position: relative !important;

    &::after {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 98%;
      height: 1px;
      content: ' ';
      transform: translateX(-50%);
    }
  }

  .el-dialog__body {
    padding-top: 0 !important;
  }

  .detail-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &:nth-of-type(2) {
      display: grid;
      grid-template-rows: repeat(2, auto-fill);
      grid-template-columns: repeat(2, 50%);
      grid-gap: 0 10px;
      align-items: flex-start;
      margin-top: 20px;
    }

    .item {
      width: 220px;
      height: 120px;
      box-shadow: 1px 0 12px 10px #f5f6fa;

      .title {
        position: relative;
        height: 24px;
        padding-left: 20px;
        font-size: 18px;
        font-weight: 400;

        &::after {
          position: absolute;
          top: 50%;
          left: 10px;
          width: 4px;
          height: 24px;
          background-color: #2590f9;
          border-radius: 10px;
          content: ' ';
          transform: translateY(-50%);
        }
      }

      &:nth-of-type(2) {
        .user {
          font-size: 16px;
          font-weight: normal;
        }

        .right {
          padding-top: 30px;
          box-sizing: border-box;
        }
      }

      .user {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        font-size: 18px;

        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        span {
          max-width: 140px;
          margin-left: 10px;
          overflow: hidden;
          font-size: 16px;
          font-weight: 500;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
</style>
