import RegistryService from '@/services/RegistryService'
import type { Advisor, Course, Student } from '@/types'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()

export const useStudentStore = defineStore('student', {
  state: () => ({
    student: null as Student | null,
    advisor: null as Advisor | null,
    courses: [] as Course[],
    course_advisors: [] as Advisor[]
  }),
  actions: {
    async setStudent(student: Student) {
      this.student = student
      this.course_advisors = Array(student.courses.length)
      this.courses =
        (await Promise.all(
          student.courses.map(async (v, i) => {
            return RegistryService.getCourse(v)
              .then(async (res) => {
                const course = res.data
                this.course_advisors[i] = await RegistryService.getAdvisor(course.advisor_id).then(
                  (res) => res.data
                )
                return course
              })
              .catch((err) => {
                return Promise.reject(err)
              })
          })
        ).catch((err) => {
          if (err.response && err.response.status == 404) router.push({ name: 'student-list' })
          else if (err.code === 'ERR_NETWORK') router.push({ name: 'student-list' })
        })) || []
      this.advisor = await RegistryService.getAdvisor(student.advisor_id).then((res) => res.data)
    },
    clear() {
      this.student = null
      this.advisor = null
      this.courses = []
      this.course_advisors = []
    }
  }
})
