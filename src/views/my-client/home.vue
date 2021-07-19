<template>
  <div class="normal-wrap full-height">
    <el-tabs>
      <el-tab-pane label="图文" name="">
        <el-form :inline="true" :model="feild">
          <el-form-item>
            <el-select></el-select>
          </el-form-item>
          <el-form-item>
            <el-date-picker></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">筛选</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="音频" name="">音频</el-tab-pane>
      <el-tab-pane label="视频" name="">视频</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const feild = ref({})
      return {
        feild
      }
    }
  })
</script>

<style lang="scss" scoped></style>
