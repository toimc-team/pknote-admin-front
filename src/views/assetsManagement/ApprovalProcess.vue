<template>
  <div class="content">
    <div v-if="hasProcess"></div>
    <div class="processTop" v-else>审核流程图</div>
  </div>
  <div class="content tableBox">
    <el-table border stripe height="430" :data="tableData" class="table">
      <el-table-column type="index" label="序列" width="60" :index="indexMethod"></el-table-column>
      <el-table-column prop="date" label="步骤名称" width="180"> </el-table-column>
      <el-table-column prop="name" label="状态" width="180"> </el-table-column>
      <el-table-column prop="address" label="发送人"> </el-table-column>
      <el-table-column prop="address" label="处理人"> </el-table-column>
      <el-table-column prop="address" label="开始时间"> </el-table-column>
      <el-table-column prop="address" label="完成时间"> </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue'
  export default {
    setup() {
      let hasProcess = ref(false)
      let tableData = ref([{}, {}, {}])
      return {
        hasProcess,
        tableData
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    background: #ffffff;
    width: 90%;
    margin: 10px auto;
    height: 300px;
    padding: 10px 10px 0;
    overflow: auto;
  }
  .processTop {
    font-size: 40px;
    font-family: PingFang;
    font-weight: bold;
    color: #e3e3e3;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tableBox {
    height: 450px;
    .table {
      width: 100%;
    }
  }
</style>
