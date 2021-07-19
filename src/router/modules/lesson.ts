import content from '@/views/content-manage/lesson/content.vue'
import audit from '@/views/content-manage/lesson/audit.vue'
import comment from '@/views/content-manage/lesson/comment.vue'
import learning from '@/views/content-manage/lesson/learning.vue'
const lesson = [
  {
    path: '/content-manage/lesson/content',
    component: content
  },
  {
    path: '/content-manage/lesson/audit',
    component: audit
  },
  {
    path: '/content-manage/lesson/comment',
    component: comment
  },
  {
    path: '/content-manage/lesson/learning',
    component: learning
  }
]

export default lesson
