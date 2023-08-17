import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CourseView from "@/views/CourseListView.vue";
import CourseDetail from "@/views/Course/CourseDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: (route) => ({ page: parseInt(route.query?.page as string) }),
      beforeEnter: (to, _, next) => {
        if (
          !to.query?.page ||
          parseInt(to.query?.page as string) < 1 ||
          isNaN(parseInt(to.query?.page as string))
        ) {
          next({ name: 'home', query: { page: 1 } })
        } else {
          next()
        }
      }
    },
    {
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
          name: 'CourseDetail',
          component: CourseDetail,
          props: true
        }
      ]
    }
  ]
})

export default router
