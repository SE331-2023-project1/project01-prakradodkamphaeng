import { createRouter, createWebHistory } from 'vue-router'
import StudentListView from '@/views/StudentListView.vue'
import StudentDetailView from '@/views/StudentDetailView.vue'
import StudentCoursesView from '@/views/student/StudentCoursesView.vue'
import StudentCommentView from '@/views/student/StudentCommentView.vue'
import { useStudentStore } from '@/stores/student'
import RegistryService from '@/services/RegistryService'
import HomeView from '../views/HomeView.vue'
import CourseView from "@/views/CourseListView.vue";
import CourseDetail from "@/views/Course/CourseDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'student-list',
      component: StudentListView,
      props: (route) => ({ page: parseInt(route.query?.page as string) }),
      beforeEnter: (to, _, next) => {
        if (
          !to.query?.page ||
          parseInt(to.query?.page as string) < 1 ||
          isNaN(parseInt(to.query?.page as string))
        ) {
          next({ name: 'student-list', query: { page: 1 } })
        } else {
          next()
        }
      }
    },
    {
      path: '/student/:id',
      name: 'student-detail',
      component: StudentDetailView,
      props: true,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
        const studentStore = useStudentStore()
        studentStore.clear()
        RegistryService.getStudent(id)
          .then((res) => {
            studentStore.setStudent(res.data)
          })
          .catch((err) => {
            console.log(err)
            if (err.response && err.response.status == 404)
              return router.push({ name: 'student-list' })
            else if (err.code === 'ERR_NETWORK') return router.push({ name: 'student-list' })
          })
      path: '/course',
      name: 'CourseList',
      component: CourseView,
      props: (route) => ({ page: parseInt(route.query?.page as string || '1' )}),
      beforeEnter: (to, _ , next)  => {
        if (
            !to.query?.page ||
            parseInt(to.query?.page as string) < 1 ||
            isNaN(parseInt(to.query?.page as string))
        ) {
          next({ name: 'CourseList', query: { page: 1 } })
        } else {
          next()
        }
      }
    },
    {
      path: '/course/:id',
      name: 'Course Layout',
      props: true,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
      },
      children: [
        {
          path: '',
          alias: 'courses',
          name: 'student-courses',
          component: StudentCoursesView
        },
        {
          path: 'comments',
          name: 'student-comments',
          component: StudentCommentView
          name: 'CourseDetail',
          component: CourseDetail,
          props: true
        }
      ]
    }
  ]
})

export default router
