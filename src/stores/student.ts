import RegistryService from '@/services/RegistryService'
import type { Advisor, Course, Student } from '@/types'
import { defineStore } from 'pinia'
export const useStudentStore = defineStore('event', {
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
      this.courses = await Promise.all(
        student.courses.map(async (v, i) => {
          return RegistryService.getCourse(v).then(async (res) => {
            const course = res.data
            this.course_advisors[i] = await RegistryService.getAdvisor(course.advisor_id).then(
              (res) => res.data
            )
            return course
          })
        })
      )
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
