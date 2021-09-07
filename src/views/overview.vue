<template>
  <!-- 概览 -->
  <div class="full-height">
    <el-scrollbar>
      <div class="flex main-between">
        <div class="left-container">
          <!-- 用户基本信息 -->
          <div class="base-msg-wrap flex main-between">
            <!-- 新用户 -->
            <div class="normal-wrap base-msg-item user-num-wrap">
              <div class="main-num-wrap column-flex h-v-center">
                <h2>新用户</h2>
                <p>0</p>
              </div>
              <el-row class="item-num-wrap" align="middle">
                <el-col :span="12">普通用户：0</el-col>
                <span class="gap-line"></span>
                <el-col :span="12">会员用户：0</el-col>
              </el-row>
            </div>
            <!-- 总用户 -->
            <div class="normal-wrap base-msg-item user-num-wrap">
              <div class="main-num-wrap column-flex h-v-center">
                <h2>总用户</h2>
                <p>0</p>
              </div>
              <el-row class="item-num-wrap" align="middle">
                <el-col :span="12">普通用户：0</el-col>
                <span class="gap-line"></span>
                <el-col :span="12">会员用户：0</el-col>
              </el-row>
            </div>

            <div class="base-msg-item column-flex main-between">
              <div class="normal-wrap specific-msg flex main-between cross-center">
                <p>今日收入(元)</p>
                <p><span class="num">22.00</span></p>
              </div>
              <div class="normal-wrap specific-msg flex main-between cross-center">
                <p>可提现金额(元)</p>
                <p class="flex cross-center">
                  <span class="num">22.00</span>
                  <el-link type="primary" class="draw-money-btn">
                    提现<i class="el-icon-arrow-right"></i>
                  </el-link>
                </p>
              </div>
            </div>
          </div>

          <!-- 待办 -->
          <div class="normal-wrap agenda-container">
            <h1 class="container-tit">待办事宜</h1>
            <div class="tabs-wrap">
              <el-tabs @tab-click="() => {}">
                <el-tab-pane label="内容上架"></el-tab-pane>
                <el-tab-pane label="提现"></el-tab-pane>
                <el-tab-pane label="作者认证"></el-tab-pane>
                <el-tab-pane label="机构认证"></el-tab-pane>
                <el-tab-pane label="退款"></el-tab-pane>
                <el-tab-pane label=""></el-tab-pane>
              </el-tabs>
              <el-link type="primary" class="get-more-btn"
                >查看更多<i class="el-icon-arrow-right"></i
              ></el-link>
            </div>
            <!-- 表 -->
            <!-- TODO 后面应该移到 el-tab-pane 中 -->
            <el-table :data="tableData" style="width: 100%" stripe border>
              <el-table-column
                type="index"
                label="序列"
                align="center"
                width="60"
              ></el-table-column>
              <el-table-column
                prop="description"
                label="描述"
                align="center"
                width="520"
              ></el-table-column>
              <el-table-column prop="comeFrom" label="提交人/机构" align="center"></el-table-column>
              <el-table-column label="操作" align="center">
                <el-link type="primary" href="javascript:;"
                  ><i class="el-icon-s-tools"></i>处理</el-link
                >
              </el-table-column>
            </el-table>
          </div>

          <div class="normal-wrap commonly-used-container">
            <h1 class="container-tit flex cross-end">
              常用功能
              <el-link type="primary" href="javascript:;" class="attach-btn">自定义</el-link>
            </h1>
            <div class="link-list flex flex-wrap">
              <div v-for="(link, i) in links" :key="`lin-${i}`" class="link-item">
                <p class="icon-wrap">
                  <i :class="link.icon"></i>
                </p>
                <p class="tit">{{ link.title }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="right-container">
          <!-- 通知 -->
          <!-- 支持多通知滚动 -->
          <!-- TODO 滚动动画 -->
          <div class="notification-wrap normal-wrap flex cross-center">
            <i class="el-icon-bell no-shrink"></i>
            <div class="notification-list flex grow">
              <div class="notification-item flex grow main-between cross-center">
                <p class="text">关于tiomc系统升级的通知</p>
                <p class="time">2020-04-08 22:59:20</p>
              </div>
            </div>
          </div>

          <div class="normal-wrap customer-service-container">
            <h1 class="container-tit flex cross-end">在线客服</h1>
            <div class="service-wrap column-flex h-v-center">
              <p class="hot-line flex cross-center">
                <i class="el-icon-service"></i>
                400-820-82088
              </p>
              <a href="javascript:;" class="get-service-btn flex h-v-center">点击在线咨询</a>
            </div>
          </div>

          <!-- 微信 -->
          <div class="normal-wrap wechat-container flex">
            <img src="" title="微信公众号" class="code-img" />
            <div class="get-wechat-wrap">
              <p class="flex cross-center"><i class="el-icon-chat-dot-round"></i>微信搜一搜</p>
              <a href="javascript:;" class="flex h-v-center">
                <i class="el-icon-search"></i>toimc前端技术
              </a>
            </div>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
  export default {
    setup() {
      let tableData = [
        {
          description: '张三在JavaScript专栏中上架了新的图文内容《JavaScript函数》请审核！',
          comeFrom: '姜鹤'
        },
        {
          description: '张三在JavaScript专栏中上架了新的图文内容《JavaScript函数》请审核！',
          comeFrom: '姜鹤'
        },
        {
          description: '张三在JavaScript专栏中上架了新的图文内容《JavaScript函数》请审核！',
          comeFrom: '姜鹤'
        },
        {
          description: '张三在JavaScript专栏中上架了新的图文内容《JavaScript函数》请审核！',
          comeFrom: '姜鹤'
        }
      ]
      let links = [
        {
          icon: 'el-icon-edit-outline',
          title: '新建图文',
          src: ''
        },
        {
          icon: 'el-icon-mic',
          title: '新建音频',
          src: ''
        },
        {
          icon: 'el-icon-video-camera',
          title: '新建视频',
          src: ''
        },
        {
          icon: 'el-icon-chat-line-square',
          title: '用户评论',
          src: ''
        },
        {
          icon: 'el-icon-user',
          title: '我的用户',
          src: ''
        },
        {
          icon: 'el-icon-document',
          title: '新建专栏',
          src: ''
        },
        {
          icon: 'el-icon-message',
          title: '我的私信',
          src: ''
        },
        {
          icon: 'el-icon-collection',
          title: '新建微课',
          src: ''
        },
        {
          icon: 'el-icon-alarm-clock',
          title: '学习计划',
          src: ''
        }
      ]
      return {
        tableData,
        links
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/style/table.scss';

  .left-container {
    width: 70%;

    .base-msg-item {
      width: 32%;
      height: 144px;
      box-sizing: border-box;
    }
  }

  .user-num-wrap {
    padding: 0;
    overflow: hidden;

    .main-num-wrap {
      height: 104px;
      text-align: center;

      h2 {
        color: #999;
        border-width: none;
        font-weight: normal;
      }

      p {
        font-size: 32px;
        color: #333;
        font-weight: bold;
        margin-top: 12px;
      }
    }

    .item-num-wrap {
      width: 100%;
      height: 40px;
      background-color: #f8f9fb;
      color: #666;
      font-size: 14px;
      text-align: center;
      position: relative;

      .gap-line {
        width: 1px;
        height: 16px;
        background-color: #666;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
      }

      :deep(.el-link.el-link--primary) {
        font-size: 16px;
      }
    }
  }

  .specific-msg {
    height: 64px;
    color: #666;
    font-size: 16px;
    padding: 0 16px;

    .num {
      font-size: 20px;
    }

    .draw-money-btn {
      margin-left: 12px;
    }
  }

  :deep(.el-link.el-link--primary) {
    color: #2590f9;
  }

  h1.container-tit {
    color: #333;
    font-size: 22px;
    font-weight: normal;
    margin: 0;
    padding-top: 24px;

    .attach-btn {
      margin-left: 12px;
    }
  }

  .agenda-container {
    margin-top: 16px;
    padding-bottom: 24px;
    overflow: hidden;

    .tabs-wrap {
      position: relative;

      .get-more-btn {
        font-size: 16px;
        position: absolute;
        top: 26px;
        right: 0;
      }
    }

    :deep(.el-link.el-link--primary) {
      color: #2b9afa;
    }
  }

  .el-icon-s-tools {
    margin-right: 8px;
  }

  .commonly-used-container {
    margin-top: 16px;
    padding-bottom: 24px;

    .link-list {
      margin-top: 24px;
      padding: 0 40px;

      .link-item {
        margin-right: 87px;
      }

      .icon-wrap {
        width: 56px;
        height: 56px;
        line-height: 56px;
        border-radius: 50%;
        color: #333;
        background-color: #f0f0f0;
        text-align: center;
        font-size: 28px;
      }

      .tit {
        color: #666;
        font-size: 16px;
        margin-top: 14px;
        margin-bottom: 40px;
      }
    }
  }

  .right-container {
    width: 29%;
  }

  .notification-wrap {
    height: 64px;

    .notification-list {
      margin-left: 8px;
    }

    .notification-item {
      .text {
        color: #666;
        font-size: 14px;
      }

      .time {
        color: #999;
        font-size: 12px;
      }
    }
  }

  .customer-service-container {
    margin-top: 16px;

    .service-wrap {
      margin-top: 12px;
    }

    .hot-line {
      color: #666;
      margin-top: 20px;

      .el-icon-service {
        font-size: 32px;
        margin-right: 15px;
      }
    }

    .get-service-btn {
      width: 240px;
      height: 48px;
      color: #2590f9;
      border: 1px solid currentColor;
      border-radius: 8px;
      text-decoration: none;
      margin-top: 15px;
      margin-bottom: 24px;
    }
  }

  .wechat-container {
    margin-top: 16px;
    padding: 20px;

    .code-img {
      width: 120px;
      height: 120px;
    }

    .get-wechat-wrap {
      // width: 56%;
      margin-left: 32px;

      p {
        color: #333;
        font-size: 24px;

        i {
          font-size: 40px;
          color: #55b637; // 缺图标 将来用不着的样式
          margin-right: 16px;
        }
      }

      a {
        width: 240px;
        height: 48px;
        color: #666;
        border: 1px solid #333;
        border-radius: 8px;
        font-size: 20px;
        text-decoration: none;
        margin-top: 20px;
      }

      .el-icon-search {
        font-size: 24px;
      }
    }
  }
</style>
