import { createRouter, createWebHistory } from 'vue-router'
import StudentListView from '@/views/StudentListView.vue'
import StudentDetailView from '@/views/StudentDetailView.vue'
import StudentCoursesView from '@/views/student/StudentCoursesView.vue'
import StudentCommentView from '@/views/student/StudentCommentView.vue'
import { useStudentStore } from '@/stores/student'
import CourseListView from '@/views/CourseListView.vue'
import CourseDetail from '@/views/CourseDetail.vue'
import { useCourseStore } from '@/stores/course'
import AdvisorListView from '@/views/AdvisorListView.vue'
import StudentAdvisorView from '@/views/student/StudentAdvisorView.vue'
import StudentInformationView from '@/views/student/StudentInformationView.vue'
import { useStudentsStore } from '@/stores/students'
import AddPersonLayoutVue from '@/views/AddPersonLayout.vue'
import AdvisorDetailView from '@/views/AdvisorDetailView.vue'
import { useCoursesStore } from '@/stores/courses'
import { useAdvisorsStore } from '@/stores/advisors'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/advisor',
      name: 'advisor-list',
      component: AdvisorListView,
      props: (route) => ({ page: parseInt(route.query?.page as string) }),
      beforeEnter: (to, _, next) => {
        if (
          !to.query?.page ||
          parseInt(to.query?.page as string) < 1 ||
          isNaN(parseInt(to.query?.page as string))
        ) {
          next({ name: 'advisor-list', query: { page: 1 } })
        } else {
          next()
        }
      }
    },
    {
      path: '/advisor/:id',
      name: 'advisor-detail',
      component: AdvisorDetailView,
      props: true
    },
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
      beforeEnter: async (to) => {
        const id: number = parseInt(to.params.id as string)
        const studentStore = useStudentStore()
        const studentsStore = useStudentsStore()
        if (studentsStore.isEmpty) {
          await studentsStore.FetchStudents().then(() => {
            studentStore.clear()
            const student = studentsStore.getStudentById(id)
            student ? studentStore.setStudent(student) : router.push({ name: 'student-list' })
          })
        } else {
          studentStore.clear()
          const student = studentsStore.getStudentById(id)
          student ? studentStore.setStudent(student) : router.push({ name: 'student-list' })
        }
      },
      children: [
        {
          path: '',
          alias: 'information',
          name: 'student-information',
          component: StudentInformationView
        },
        {
          path: 'courses',
          alias: 'courses',
          name: 'student-courses',
          component: StudentCoursesView
        },
        {
          path: 'comments',
          name: 'student-comments',
          component: StudentCommentView
        },
        {
          path: 'advisor',
          alias: 'advisor',
          name: 'student-advisor',
          component: StudentAdvisorView
        }
      ]
    },
    {
      path: '/course',
      name: 'course-list',
      component: CourseListView,
      props: (route) => ({ page: parseInt(route.query?.page as string) }),
      beforeEnter: (to, _, next) => {
        if (
          !to.query?.page ||
          parseInt(to.query?.page as string) < 1 ||
          isNaN(parseInt(to.query?.page as string))
        ) {
          next({ name: 'course-list', query: { page: 1 } })
        } else {
          next()
        }
      }
    },
    {
      path: '/course/:id',
      name: 'course-detail',
      component: CourseDetail,
      props: true,
      beforeEnter: async (to) => {
        const id: number = parseInt(to.params.id as string)
        const courseStore = useCourseStore()
        const coursesStore = useCoursesStore()
        courseStore.clear()
        if (coursesStore.isEmpty) {
          await coursesStore.FetchCourses().then(() => {
            const course = coursesStore.getCourseById(id)
            if (course) {
              courseStore.setCourse(course)
              const advisor = useAdvisorsStore().getAdvisorById(course.advisor_id)
              advisor ? courseStore.setLecturer(advisor) : null
            } else {
              router.push({ name: 'student-list' })
            }
          })
        } else {
          const course = coursesStore.getCourseById(id)
          if (course) {
            courseStore.setCourse(course)
            const advisor = useAdvisorsStore().getAdvisorById(course.advisor_id)
            advisor ? courseStore.setLecturer(advisor) : null
          } else {
            router.push({ name: 'student-list' })
          }
        }
      }
    },
    {
      name: 'add-person',
      path: '/add',
      component: AddPersonLayoutVue
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    else return { top: 0 }
  }
})

export default router
