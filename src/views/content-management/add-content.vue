<template>
  <!-- 添加图文、音频、视频 -->
  <el-scrollbar>
    <div class="normal-wrap add-form-container">
      <el-form :model="form">
        <section>
          <h1 class="flex cross-center">基本信息</h1>
          <el-row>
            <el-col :span="18">
              <el-form-item label="课程名称:">
                <el-input v-model="form.name" placeholder="请输入名称"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="18">
              <el-form-item label="课程简介:">
                <el-input
                  v-model="form.intro"
                  placeholder="请输入简介"
                  maxlength="64"
                  show-word-limit
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <div class="form-item-tail flex cross-center">
                <el-link type="primary" class="example-help-btn">
                  查看示例
                  <i class="el-icon-question"></i>
                </el-link>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22">
              <el-form-item label="课程简介:">
                <div class="flex flex-wrap">
                  <el-upload
                    class="upload-img"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="uploadImgSuccess"
                    :before-upload="beforeImgUpload"
                    :on-error="uploadError"
                  >
                    <img v-if="imageUrl" src alt />
                    <i v-else class="el-icon-plus"></i>
                  </el-upload>
                  <p class="upload-tip">请上传16:9的png、jpg、gif格式图片，&lt;5M</p>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- TODO 控制显示和隐藏 -->
          <el-row>
            <el-col>
              <el-form-item class="upload-file-form" :label="fielLabel">
                <div class="flex flex-wrap">
                  <!-- TODO 回调方法，这里暂时用图片上传的 -->
                  <el-upload
                    class="upload-file"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="uploadImgSuccess"
                    :before-upload="beforeImgUpload"
                    :on-error="uploadError"
                  >
                    <el-button>上传文件</el-button>
                  </el-upload>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20">
              <el-form-item label="课程内容:">
                <tinymce-editor
                  ref="editor"
                  v-model="form.desc"
                  :disabled="disabled"
                  @onClick="onClick"
                ></tinymce-editor>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20">
              <el-form-item label="关联内容:">
                <el-select v-model="form.relationVal" placeholder="请选择">
                  <el-option
                    v-for="(option, i) in options"
                    :key="`关联内容选项-${i}`"
                    :label="option.label"
                    :value="option.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </section>
        <section>
          <h1 class="flex cross-center">上架信息</h1>
          <el-form-item label="售卖方式:">
            <el-radio v-model="form.sellType" label="0">支持单章节售卖</el-radio>
            <div class="price-choice-wrap">
              <p>
                <el-radio v-model="form.isPaid" label="0">付费</el-radio>
                <el-radio v-model="form.isPaid" label="1">免费</el-radio>
              </p>
              <div>
                <el-form-item label="课程价格">
                  <div class="flex">
                    <el-input v-model="form.price" type="number" placeholder="请输入价格"></el-input
                    >元
                  </div>
                </el-form-item>
              </div>
            </div>
            <el-form-item>
              <el-radio v-model="form.sellType" label="1">支持按阶段售卖</el-radio>
            </el-form-item>
            <el-form-item>
              <el-radio v-model="form.sellType" label="2">支持关联售卖</el-radio>
            </el-form-item>
          </el-form-item>
          <el-form-item class="negative-m-t" label="上架设置:">
            <el-form-item>
              <el-radio v-model="form.releaseType" label="0">立即上架</el-radio>
            </el-form-item>
            <el-form-item>
              <div class="flex cross-center set-release-time">
                <el-radio v-model="form.releaseType" label="1">定时上架</el-radio>
                <el-date-picker
                  v-model="form.releaseTime"
                  type="date"
                  placeholder="请设置上架时间"
                ></el-date-picker>
              </div>
            </el-form-item>
            <el-form-item>
              <el-radio v-model="form.releaseType" label="2">暂不上架</el-radio>
            </el-form-item>
          </el-form-item>
          <el-form-item>
            <div class="submit-btn-wrap">
              <el-button type="primary">保存</el-button>
            </div>
          </el-form-item>
        </section>
      </el-form>
    </div>
  </el-scrollbar>
</template>

<script>
  import TinyMce from '@/components/tinymce/index.vue'
  import { getCurrentInstance, reactive, ref } from 'vue'
  export default {
    components: {
      'tinymce-editor': TinyMce
    },
    setup() {
      let imageUrl = ref('')

      const { proxy: _proxy } = getCurrentInstance() // getCurrentInstance 获取当前实例
      const form = reactive({})
      const options = [
        {
          value: '1',
          label: '每日一课'
        },
        {
          value: '2',
          label: '优质专栏'
        },
        {
          value: '3',
          label: '学习机会'
        },
        {
          value: '4',
          label: '精品微课'
        }
      ]
      const uploadImgSuccess = (res, file) => {
        imageUrl = URL.createObjectURL(file.raw)
      }
      const beforeImgUpload = (file) => {
        console.log('file: ', file)
        // 格式判断
        const { type, size } = file.type
        const isJPG = type === 'image/jpeg'
        const isPng = type === 'image/png'
        const isGif = type === 'image/gif'
        if (!isJPG && !isPng && !isGif) {
          _proxy.$message.error('只能上传 png、jpg、gif 格式的图片')
        }
        // 大小判断
        const level = 1024
        // size 单位是字节，要除以 1024 平方
        if (size / level / level >= 5) {
          _proxy.$message.error('请上传小于 5M 的图片')
        }
        // TODO 16:9
      }
      const uploadError = (err) => {
        console.log('err: ', err)
      }
      const fielLabel = ref('视频:')
      return {
        form,
        imageUrl,
        options,
        fielLabel,
        uploadImgSuccess,
        beforeImgUpload,
        uploadError
      }
    }
  }
</script>

<style lang="scss" scoped>
  .add-form-container {
    overflow: hidden;

    h1 {
      margin-top: 25px;
      margin-bottom: 30px;
      font-size: 22px;
      color: #333;

      &::before {
        width: 4px;
        height: 16px;
        margin-right: 12px;
        background: #2590f9;
        border-radius: 4px;
        content: '';
      }
    }
  }

  .form-item-tail {
    height: 40px;
    margin-left: 15px;

    .example-help-btn {
      font-size: 16px;
      color: #51acfb;

      i {
        margin-left: 8px;
      }
    }
  }

  .upload-img {
    width: 50%;
    height: 160px;
    max-width: 320px;
    margin-right: 16px;
    text-align: center;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    opacity: 1;

    :deep(.el-upload) {
      font-size: 32px;
      color: #dbdbdb;
    }

    .el-icon-plus {
      padding-top: 62px;
    }
  }

  .upload-file-form {
    :deep(.el-form-item__label) {
      width: 97px;
    }

    .upload-file {
      :deep(.el-button) {
        padding: 20px 40px;
        font-size: 20px;
        color: #2b9afa;
      }
    }
  }

  .upload-tip {
    font-size: 16px;
    color: #666;
  }

  .price-choice-wrap {
    max-width: 365px;
    padding: 3px 16px 11px;
    margin-top: 8px;
    margin-bottom: 12px;
    margin-left: 23px;
    color: #333;
    border: 1px solid #dbdbdb;
    border-radius: 10px;

    :deep(.el-input) {
      max-width: 120px;
      margin-right: 8px;
      font-size: 14px;
    }

    :deep(.el-form-item__label) {
      padding-right: 8px;
    }

    :deep(.el-input__inner) {
      height: 32px;
    }
  }

  .set-release-time {
    :deep(.el-radio) {
      margin-right: 16px;
    }

    :deep(.el-input) {
      max-width: 200px;
      font-size: 14px;
    }

    :deep(.el-input__inner) {
      height: 32px;
      line-height: 32px;
    }
  }

  :deep(.el-input) {
    font-size: 16px;
  }

  // 去掉 number input 上调下调按钮
  :deep(.el-input__inner) {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      appearance: none;
    }

    &[type='number'] {
      appearance: textfield;
    }
  }

  :deep(.el-radio) {
    color: #333;
  }

  :deep(.el-radio__label) {
    font-size: 16px;
  }

  :deep(.el-form-item__label) {
    font-size: 20px;
    color: #333;
  }

  .submit-btn-wrap {
    padding-left: 90px;
    margin-top: 38px;
    margin-bottom: 20px;

    :deep(.el-button) {
      width: 120px;
      height: 48px;
    }
  }

  .negative-m-t {
    margin-top: -12px;
  }

  section:last-child {
    margin-top: 25px;
    overflow: hidden;
  }
</style>
