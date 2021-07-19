<template>
  <div class="content">
    <div class="tip">
      <i class="icon"></i>
      <span class="iconText">资产管理</span>
    </div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="可提现金额(元)：">
        <span class="useCash">{{ useCash }}</span>
      </el-form-item>
      <el-form-item label="到账微信号：">
        <div class="wxBox">
          <el-image class="wxImg" :src="form.url" :fit="fit"></el-image>
          <span class="wxName">{{ form.wxName }}</span>
          <el-link
            type="primary"
            :underline="false"
            href="javascript:void(0);"
            class="switchAccount"
            @click="switchAccount"
            >切换账号</el-link
          >
        </div>
      </el-form-item>
      <el-form-item label="提现金额(元)：">
        <el-input-number
          v-model="getCash"
          :min="0"
          :precision="2"
          :controls="false"
          placeholder="请输入大于0的金额"
        ></el-input-number>
        <span class="getCash">实际到账金额 {{ getCash }} 元</span>
      </el-form-item>
      <el-form-item label="提现说明：" class="detail">
        <p class="detailP">1.根据微信官方要求，仅支持实名微信申请提现</p>
        <p class="detailP">2.每账号每天单笔提现限额5000元</p>
        <p class="detailP">3.按提现金额的0.6%收取提现费用</p>
        <p class="detailP">4.提现到账时间是T日18:00前申请，T+3日24:00前到账(T为工作日)</p>
        <el-table border stripe class="dateTable" height="354" :data="tableData">
          <el-table-column prop="withdrawalTime" label="提现时间"> </el-table-column>
          <el-table-column prop="accountingDate" label="到账时间"> </el-table-column>
        </el-table>
        <el-button type="primary" @click="submit" class="submit">确认提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
  import { computed, ref } from 'vue'
  export default {
    name: 'GetCash',

    setup() {
      let getCash = 502
      let useCash = 2000

      /* 切换账号 */
      function switchAccount() {}
      /* 提交 */
      function submit() {}

      return {
        form: {
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          wxName: 'LSP',
          getCash: 2066
        },
        useCash: ref(useCash),
        getCash: ref(getCash),
        tableData: [
          {
            withdrawalTime: '周一18:00以前',
            accountingDate: '周四'
          },
          {
            withdrawalTime: '周二18:00以前',
            accountingDate: '周五'
          },
          {
            withdrawalTime: '周三18:00以前',
            accountingDate: '周一'
          },
          {
            withdrawalTime: '周四18:00以前',
            accountingDate: '周二'
          },
          {
            withdrawalTime: '周五18:00以前',
            accountingDate: '周三'
          },
          {
            withdrawalTime: '周六-周日18:00以前',
            accountingDate: '周四'
          }
        ],
        switchAccount,
        submit
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    background: #ffffff;
    width: 90%;
    margin: 10px auto;
    height: 760px;
    padding: 10px 10px 0;
    overflow: auto;
  }
  .el-form-item {
    align-items: center;
  }
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
  .useCash {
    font-size: 18px;
    font-family: MicrosoftYaHei;
    font-weight: bolder;
    color: #333333;
  }
  .wxBox {
    display: flex;
    align-items: center;
    width: 240px;
    height: 80px;
    border: 1px solid #dddddd;
    border-radius: 8px;
    .wxImg {
      width: 48px;
      height: 48px;
      margin: 0 8px;
    }
    .wxName {
      width: 100px;
      overflow: hidden;
      font-size: 16px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: #333333;
      line-height: 60px;
    }
    .switchAccount {
      font-size: 14px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: #51acfb;
      line-height: 36px;
    }
  }
  .getCash {
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #666666;
    margin-left: 10px;
  }
  .detail {
    align-items: baseline;
  }
  .detailP {
    font-size: 18px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #666666;
  }
  .dateTable {
    width: 60%;
  }
  .submit {
    margin-top: 20px;
  }
</style>
