<template>
  <div class="wrapper">
    <div class="head">
      <div class="tip">
        <i class="icon"></i>
        <span class="iconText">数据统计</span>
      </div>
      <el-row :gutter="20">
        <el-col :sm="12" :md="8">
          <div class="card">
            <div class="title">累计收入(元)</div>
            <div class="cash">{{ allCash }}</div>
          </div>
        </el-col>
        <el-col :sm="12" :md="8">
          <div class="card">
            <div class="title">可用余额(元)</div>
            <div class="cash">{{ useCash }}</div>
          </div>
        </el-col>
        <el-col :sm="12" :md="8">
          <div class="card getCashBox">
            <div class="title">可提现金额(元)</div>
            <div class="cash">{{ useCash }}</div>
            <el-button type="text" size="small" class="getCash" @click="goGetCash">提现></el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bottom">
      <div class="tip">
        <i class="icon"></i>
        <span class="iconText">数据统计</span>
      </div>
      <div class="form">
        <el-form ref="form" :inline="true" :model="form" label-width="70px">
          <div class="formLine">
            <el-form-item label="申请人" class="formItem">
              <el-input v-model="form.user" placeholder="申请人"></el-input>
            </el-form-item>
            <div class="formInlineItem">
              <el-form-item label="申请时间" class="formItem">
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="开始时间"
                    v-model="form.date1"
                    style="width: 100%"
                  ></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="结束时间"
                    v-model="form.date1"
                    style="width: 100%"
                  ></el-date-picker>
                </el-col>
              </el-form-item>
            </div>
          </div>
          <div class="formLine">
            <el-form-item label="状态" class="formItem">
              <el-input v-model="form.user" placeholder="状态"></el-input>
            </el-form-item>
            <div class="formInlineItem">
              <el-form-item label="完成时间" class="formItem">
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="开始时间"
                    v-model="form.date1"
                    style="width: 100%"
                  ></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="结束时间"
                    v-model="form.date1"
                    style="width: 100%"
                  ></el-date-picker>
                </el-col>
              </el-form-item>
              <el-button type="primary" @click="onSubmit">筛选</el-button>
              <el-button>重置</el-button>
            </div>
          </div>
        </el-form>
      </div>
      <div class="table">
        <el-table border stripe height="300" :data="tableData" class="elTable">
          <el-table-column
            type="index"
            label="序列"
            width="60"
            :index="indexMethod"
          ></el-table-column>
          <el-table-column prop="date" label="申请时间" width="180"> </el-table-column>
          <el-table-column prop="name" label="到账微信号" width="180"> </el-table-column>
          <el-table-column prop="address" label="提现金额(元)"> </el-table-column>
          <el-table-column prop="address" label="状态"> </el-table-column>
          <el-table-column prop="address" label="驳回原因"> </el-table-column>
          <el-table-column prop="address" label="上架时间"> </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template #default="scope">
              <el-button type="text" @click="goApprovalProcess(scope.row)" class="handleTxt"
                >查看审批流程</el-button
              >
              <span class="handleTxt">|</span>
              <el-button type="text" @click="goGetCash(scope.row)" class="handleTxt"
                >修改</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="sizes, prev, pager, next"
          :total="1000"
          class="pagination"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { useRouter } from 'vue-router'
  export default {
    name: 'AssetsManagement',
    setup() {
      const router = useRouter()

      let allCash = 0
      let useCash = 0
      let canGetCash = 0

      function onSubmit() {}

      function goGetCash(row: Object | null) {
        console.log(row)
        router.push('/assetsManagement/getCash')
      }

      function goApprovalProcess(row: Object) {
        router.push('/assetsManagement/approvalProcess')
      }

      return {
        allCash,
        useCash,
        canGetCash,
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            tag: '家'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1517 弄',
            zip: 200333,
            tag: '公司'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            zip: 200333,
            tag: '家'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333,
            tag: '公司'
          }
        ],
        form: {},
        onSubmit,
        goGetCash,
        goApprovalProcess
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tip {
    .icon {
      display: inline-block;
      width: 4px;
      height: 16px;
      background: #2590f9;
      border-radius: 2px;
      margin-right: 8px;
    }
    .iconText {
      font-size: 22px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: #333333;
      line-height: 60px;
    }
  }
  .head {
    background: #ffffff;
    width: 90%;
    margin: 10px auto;
    border-radius: 8px;
    padding: 10px 10px 0;
    .card {
      height: 120px;
      background: #f8f9fb;
      border-radius: 8px;
      margin-bottom: 10px;
      text-align: center;
      overflow: hidden;
      .title {
        font-size: 24px;
        font-family: PingFang;
        font-weight: 500;
        color: #999999;
        margin: 10px 0;
      }
      .cash {
        font-size: 40px;
        font-family: PingFang;
        font-weight: bold;
        color: #333333;
      }
    }
  }
  .getCashBox {
    position: relative;
    .getCash {
      position: absolute;
      right: 10px;
      bottom: 20px;
      font-size: 20px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: #2590f9;
      text-decoration: none;
    }
  }
  .bottom {
    background: #ffffff;
    width: 90%;
    margin: 10px auto;
    border-radius: 8px;
    padding: 10px 10px 0;
    height: 560px;
    .form {
      margin-bottom: 10px;
      .formLine {
        margin-bottom: 10px;
      }
      .formInlineItem {
        display: inline-flex;
        align-items: center;
      }
      .formItem {
        margin-right: 10px;
      }
      .line {
        line-height: 36px;
        margin: 0 2px;
      }
    }
    .table {
      height: 360px;
      position: relative;
      .elTable {
        width: 100%;
      }
      .pagination {
        position: absolute;
        right: -10px;
        bottom: 10px;
      }
    }
    .handleTxt {
      font-size: 16px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: #2b9afa;
    }
  }
</style>
