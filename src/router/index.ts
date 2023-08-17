import {createRouter, createWebHistory} from 'vue-router'
import StudentListView from '@/views/StudentListView.vue'
import StudentDetailView from '@/views/StudentDetailView.vue'
import StudentCoursesView from '@/views/student/StudentCoursesView.vue'
import StudentCommentView from '@/views/student/StudentCommentView.vue'
import {useStudentStore} from '@/stores/student'
import RegistryService from '@/services/RegistryService'
import CourseListView from "@/views/CourseListView.vue";
import CourseDetail from "@/views/CourseDetail.vue";
import type {Course} from "@/types";
import {useCourseStore} from "@/stores/course";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'student-list',
            component: StudentListView,
            props: (route) => ({page: parseInt(route.query?.page as string)}),
            beforeEnter: (to, _, next) => {
                if (
                    !to.query?.page ||
                    parseInt(to.query?.page as string) < 1 ||
                    isNaN(parseInt(to.query?.page as string))
                ) {
                    next({name: 'student-list', query: {page: 1}})
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
                            return router.push({name: 'student-list'})
                        else if (err.code === 'ERR_NETWORK') return router.push({name: 'student-list'})
                    })
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
                }
            ]
        },
        {
            path: '/course',
            name: 'course-list',
            component: CourseListView,
            props: (route) => ({page: parseInt(route.query?.page as string)}),
            beforeEnter: (to, _, next) => {
                if (
                    !to.query?.page ||
                    parseInt(to.query?.page as string) < 1 ||
                    isNaN(parseInt(to.query?.page as string))
                ) {
                    next({name: 'course-list', query: {page: 1}})
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
            beforeEnter: (to) => {
                const id: number = parseInt(to.params.id as string)
                const courseStore = useCourseStore()
                return RegistryService.getCourse(id)
                    .then(res => {
                        courseStore.setCourse(res.data as Course)
                    })
                    .catch(err => {
                        console.log(err)
                        if (err.response && err.response.status === 404) {
                            router.push({name: '404-resource', params: {resource: 'course'}})
                        } else {
                            router.push({name: 'network-error'})
                        }
                    })
            }
        }

    ]
})

export default router
