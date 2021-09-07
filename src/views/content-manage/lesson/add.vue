<template>
  <div class="main">
    <section class="form">
      <el-form ref="form" :model="form" label-width="100px">
        <section class="column">基本信息</section>
        <el-form-item label="课程名称:">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="课程简介:">
          <el-input v-model="form.brief"></el-input>
        </el-form-item>
        <el-form-item label="课程封面:">
          <div class="flex">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <div class="tip"> 只能上传 jpg/png 文件，且不超过 500kb </div></div
          >
        </el-form-item>
        <el-form-item label="课程描述:">
          <tinymce-editor ref="editor" v-model="form.desc" :disabled="disabled" @onClick="onClick">
          </tinymce-editor>
        </el-form-item>
        <el-form-item label="所属分类:">
          <el-select v-model="form.type" placeholder="请选择" @change="changeType">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <section class="column">基本信息</section>
        <el-form-item label="关联内容:">
          <div class="relation">
            <el-radio v-model="form.radio" label="1">支持单章节售卖</el-radio>
            <section class="select-radio">
              <el-radio v-model="form.radio1" label="1">付费</el-radio>
              <el-radio v-model="form.radio1" label="2">免费</el-radio>
              <el-radio v-model="form.radio1" label="3">会员免费</el-radio>
              <div class="price">
                <span>课程价格</span
                ><el-input v-model="form.price" placeholder="请输入价格"></el-input><span>元</span>
              </div>
            </section>
            <el-radio v-model="form.radio" label="2">支持单章节售卖</el-radio>
            <el-radio v-model="form.radio" label="3">支持单章节售卖</el-radio></div
          >
        </el-form-item>
        <el-form-item label="关联内容:">
          <div class="relation">
            <el-radio v-model="form.radio2" label="1">立即上架</el-radio>
            <div class="setTime">
              <el-radio v-model="form.radio2" label="2">请设置上架时间</el-radio>
              <el-date-picker v-model="form.time" type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
            <el-radio v-model="form.radio2" label="3">暂不上架</el-radio></div
          >
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script lang="ts">
  import TinyMce from '@/components/tinymce/index.vue'
  import { ElMessage } from 'element-plus'
  import { defineComponent } from 'vue'
  export default defineComponent({
    components: {
      'tinymce-editor': TinyMce
    },
    setup() {
      const onSubmit = () => {
        console.log('submit!')
      }
      return {
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          },
          {
            value: '选项3',
            label: '蚵仔煎'
          },
          {
            value: '选项4',
            label: '龙须面'
          },
          {
            value: '选项5',
            label: '北京烤鸭'
          }
        ],
        onSubmit
      }
    },
    data() {
      return {
        form: {
          name: '',
          type: '',
          desc: '',
          imageUrl: '',
          radio: '1',
          radio1: '1',
          radio2: '1',
          time: '',
          price: ''
        }
      }
    },
    methods: {
      changeType(val: any) {
        this.form.type = val
      },
      //鼠标单击的事件
      onClick(e: any, editor: any) {
        console.log('Element clicked')
        console.log(e)
        console.log(editor)
      },
      handleAvatarSuccess(res: any, file: any) {
        this.form.imageUrl = URL.createObjectURL(file.raw)
      },
      beforeAvatarUpload(file: any) {
        const isJPG = file.type === 'image/jpeg'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG) {
          ElMessage.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          ElMessage.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPG && isLt2M
      }
    }
  })
</script>

<style scoped lang="scss">
  .main {
    background: #fff;
    padding: 32px 24px;
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

  .flex {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .tip {
    padding-left: 20px;
    font-size: 16px;
    color: #666;
    line-height: 36px;
  }

  .avatar-uploader {
    width: 320px;
    height: 160px;
    opacity: 1;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    text-align: center;

    :deep(.el-upload) {
      color: #dbdbdb;
      font-size: 32px;
    }

    .el-icon-plus {
      padding-top: 62px;
    }
  }

  :deep(.el-form-item__label) {
    font-size: 20px;
    color: #333;
  }

  .relation {
    box-sizing: border-box;
    display: flex;
    flex-flow: column;

    :deep(.el-radio) {
      margin-top: 13px;
      margin-bottom: 10px;

      .el-radio__label {
        font-size: 16px;
      }
    }
  }

  .select-radio {
    width: 365px;
    height: 96px;
    opacity: 1;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;

    :deep(.el-radio__label) {
      font-size: 16px;
    }

    .price {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 32px;
      line-height: 32px;
      font-size: 16px;

      :deep(.el-input) {
        margin: 0 10px;
        width: 120px;
        height: 32px;
        line-height: 32px;
        border-radius: 4px;

        .el-input__inner {
          height: 32px;
          line-height: 32px;
          border: 1px solid #d9d9d9;
        }
      }
    }
  }
</style>
