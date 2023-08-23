import RegistryService from '@/services/RegistryService'
import type { Course } from '@/types'
import nProgress from 'nprogress'
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
          if (nProgress.isStarted()) {
            nProgress.inc(0.33)
          }
        })
        .catch((err) => {
          return Promise.reject(err)
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
