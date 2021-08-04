<template>
  <div class="clock-in">
    <!-- 顶部信息栏 -->
    <div class="head-box">
      <div class="head-title">
        <span class="head-icon"></span>
        <h5 class="head-text">数据统计</h5>
      </div>
      <div class="data-card">
        <div v-for="item in list" :key="item" class="card-item">
          <p class="peple-text">累计打卡人数</p>
          <p class="peple-number">500</p>
          <p class="peple-yesterday-number">昨日打卡人数 100</p>
        </div>
      </div>
    </div>

    <!-- 打卡记录 -->
    <div class="record-box">
      <div class="head-title">
        <span class="head-icon"></span>
        <h5 class="head-text">打卡记录</h5>
      </div>

      <!-- 表单栏 -->
      <div class="record-head">
        <div class="item">
          <span>用户</span>
          <el-input v-model="user" style="height: 32px" placeholder="请输入申请人昵称"></el-input>
        </div>
        <div class="item">
          <span>时间</span>
          <!-- <el-date-picker
            v-model="value2"
            type="datetimerange"
            :shortcuts="shortcuts"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          > 
          
          </el-date-picker>-->
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
          <el-button type="text">昨天</el-button>
          <el-button type="text">今天</el-button>
          <el-button type="text">近一周</el-button>
          <el-button type="text">近一个月</el-button>
        </div>
        <div class="item">
          <el-button type="primary">筛选</el-button>
          <el-button>重置</el-button>
        </div>
      </div>

      <!-- 表格 -->
      <div class="table">
        <el-table
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
          <el-table-column label="动态" align="center">
            <template #default="scope">
              <div class="dynamic">{{ scope.row.dynamic }}</div>
            </template>
          </el-table-column>
          <el-table-column label="学习时长（min）" prop="learnMin" align="center"></el-table-column>
          <el-table-column label="登录时间" align="center">
            <template #default="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="successive" label="连续打卡天数" width="120" align="center">
          </el-table-column>
        </el-table>
      </div>

      <!-- 分页器 -->
      <div class="pagination">
        <el-pagination
          background
          :current-page="currentPage4"
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
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue'

  export default defineComponent({
    setup() {
      // 模拟表单数据
      const tableData = reactive([
        {
          id: 1,
          user: {
            avatar: 'https://avatars.githubusercontent.com/u/56526369',
            nickname: 'Forest'
          },
          learnMin: 40,
          successive: 30,
          date: '2016-05-03',
          dynamic:
            '肌肉科技（Muscletech）全球运动补剂的神话。全球最知名品牌之一，肌肉科技明星团队包括了乔卡特，菲尔·希斯，德克斯特·杰克逊等超级明星。 肌肉科技产品无处不在，在美国任何一本健身杂志，每一场健美比赛，所有营养品专卖店，肌肉科技的标志都会矗立眼前。肌肉科技的追随者以几何速度每天增长。肌肉科技超级明星团队代表全球健美的辉煌，肌肉科技的竞争对手们也只能每天努力奋斗着甘居亚军，这就是肌肉科技文化。'
        },
        {
          id: 1,
          user: {
            avatar: 'https://avatars.githubusercontent.com/u/56526369',
            nickname: 'Forest'
          },
          learnMin: 40,
          successive: 30,
          date: '2016-05-03',
          dynamic:
            '肌肉科技（Muscletech）全球运动补剂的神话。全球最知名品牌之一，肌肉科技明星团队包括了乔卡特，菲尔·希斯，德克斯特·杰克逊等超级明星。 肌肉科技产品无处不在，在美国任何一本健身杂志，每一场健美比赛，所有营养品专卖店，肌肉科技的标志都会矗立眼前。肌肉科技的追随者以几何速度每天增长。肌肉科技超级明星团队代表全球健美的辉煌，肌肉科技的竞争对手们也只能每天努力奋斗着甘居亚军，这就是肌肉科技文化。'
        },
        {
          id: 1,
          user: {
            avatar: 'https://avatars.githubusercontent.com/u/56526369',
            nickname: 'Forest'
          },
          learnMin: 40,
          successive: 30,
          date: '2016-05-03',
          dynamic:
            '肌肉科技（Muscletech）全球运动补剂的神话。全球最知名品牌之一，肌肉科技明星团队包括了乔卡特，菲尔·希斯，德克斯特·杰克逊等超级明星。 肌肉科技产品无处不在，在美国任何一本健身杂志，每一场健美比赛，所有营养品专卖店，肌肉科技的标志都会矗立眼前。肌肉科技的追随者以几何速度每天增长。肌肉科技超级明星团队代表全球健美的辉煌，肌肉科技的竞争对手们也只能每天努力奋斗着甘居亚军，这就是肌肉科技文化。'
        },
        {
          id: 1,
          user: {
            avatar: 'https://avatars.githubusercontent.com/u/56526369',
            nickname: 'Forest'
          },
          learnMin: 40,
          successive: 30,
          date: '2016-05-03',
          dynamic:
            '肌肉科技（Muscletech）全球运动补剂的神话。全球最知名品牌之一，肌肉科技明星团队包括了乔卡特，菲尔·希斯，德克斯特·杰克逊等超级明星。 肌肉科技产品无处不在，在美国任何一本健身杂志，每一场健美比赛，所有营养品专卖店，肌肉科技的标志都会矗立眼前。肌肉科技的追随者以几何速度每天增长。肌肉科技超级明星团队代表全球健美的辉煌，肌肉科技的竞争对手们也只能每天努力奋斗着甘居亚军，这就是肌肉科技文化。'
        },
        {
          id: 1,
          user: {
            avatar: 'https://avatars.githubusercontent.com/u/56526369',
            nickname: 'Forest'
          },
          learnMin: 40,
          successive: 30,
          date: '2016-05-03',
          dynamic:
            '肌肉科技（Muscletech）全球运动补剂的神话。全球最知名品牌之一，肌肉科技明星团队包括了乔卡特，菲尔·希斯，德克斯特·杰克逊等超级明星。 肌肉科技产品无处不在，在美国任何一本健身杂志，每一场健美比赛，所有营养品专卖店，肌肉科技的标志都会矗立眼前。肌肉科技的追随者以几何速度每天增长。肌肉科技超级明星团队代表全球健美的辉煌，肌肉科技的竞争对手们也只能每天努力奋斗着甘居亚军，这就是肌肉科技文化。'
        }
      ])

      // 处理checkbox状态变更
      function handleSelectionChange() {}

      // 处理每页展示数条数
      function handleSizeChange(val: number) {
        console.log(`每页 ${val} 条`)
      }

      // 处理输入跳转页
      function handleCurrentChange(val: number) {
        console.log(`当前页: ${val}`)
      }

      return {
        handleSelectionChange,
        handleSizeChange,
        handleCurrentChange,
        list: [1, 2, 3],
        user: '',
        shortcuts: [
          {
            text: '最近一周',
            value: (() => {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              return [start, end]
            })()
          },
          {
            text: '最近一个月',
            value: (() => {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              return [start, end]
            })()
          },
          {
            text: '最近三个月',
            value: (() => {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              return [start, end]
            })()
          }
        ],
        value: '',
        tableData,
        currentPage4: 1
      }
    }
  })
</script>

<style lang="scss" scoped>
  // @import url(https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css);

  .clock-in {
    flex: 1;

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

    .head-box {
      background: #fff;
      border-radius: 8px;
      padding-bottom: 20px;

      .data-card {
        margin-top: 24px;
        padding: 0 24px;
        width: 100%;
        height: 172px;
        display: flex;
        box-sizing: border-box;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .card-item {
          margin: 0;
          width: 32.4%;
          height: 172px;
          background-color: #f8f9fb;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;

          .peple-text {
            margin: 0;
            font-size: 24px;
            color: #999;
          }

          .peple-number {
            margin: 0;
            font-size: 40px;
            font-weight: bold;
            color: #333;
          }

          .peple-yesterday-number {
            margin: 0;
            font-size: 20px;
            color: #666;
          }
        }
      }
    }

    .record-box {
      margin-top: 15px;
      width: 100%;
      border-radius: 8px;
      background-color: #fff;

      .record-head {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-left: 24px;
        margin-top: 24px;

        .form-inline {
          display: flex;
          align-items: center;
        }

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

        .dynamic {
          font-size: 14px;
          color: #333;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .pagination {
        padding-right: 15px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
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
</style>
