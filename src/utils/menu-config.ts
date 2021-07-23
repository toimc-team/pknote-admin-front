export default [
  {
    title: '概览',
    icon: 'el-icon-s-home',
    path: '/overview',
    noSub: true // 表示没有二级路由，有二级路由的会有 sub 数组
    // isCurrent: false // 是否是当前选中，通过浏览器输入地址时，用来标记菜单哪项处于 actived 状态
  },
  {
    title: '内容管理',
    icon: 'el-icon-s-management',
    sub: [
      {
        title: '我的内容',
        path: '/content/my-content'
      },
      {
        title: '每日一课'
      },
      {
        title: '优质专栏'
      },
      {
        title: '学习计划'
      },
      {
        title: '精品微课'
      }
    ]
  },
  {
    title: '学习管理',
    icon: 'el-icon-s-order',
    sub: [
      {
        title: '打卡'
      },
      {
        title: '用户学习计划'
      },
      {
        title: '学习小组'
      }
    ]
  },
  {
    title: '用户管理',
    icon: 'el-icon-user-solid',
    sub: [
      {
        title: '我的用户'
      },
      {
        title: '用户评论'
      },
      {
        title: '用户私信'
      }
    ]
  },
  {
    title: '交易管理',
    icon: 'el-icon-s-claim',
    sub: [
      {
        title: '订单管理'
      },
      {
        title: '资产管理'
      }
    ]
  }
]
