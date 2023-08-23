import RegistryService from '@/services/RegistryService'
import type { Course } from '@/types'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
export const useCoursesStore = defineStore('courses', {
  state: () => ({
    courses: [] as Course[]
  }),
  actions: {
    async FetchCourses() {
      return RegistryService.getCourses(-1)
        .then((res) => {
          this.courses = res.data
        })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            router.push({ name: '404-resource', params: { resource: 'course' } })
          } else {
            router.push({ name: 'network-error' })
          }
        })
    }
  },
  getters: {
    getCourseById: (state) => {
      return (courseId: number) => state.courses.find((course) => course.id === courseId)
    },
    isEmpty: (state) => {
      return state.courses.length === 0
    }
  }
})
