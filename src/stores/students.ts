import RegistryService from '@/services/RegistryService'
import type { Advisor, Course, Student } from '@/types'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
export const useStudentsStore = defineStore('students', {
  state: () => ({
    students: [] as Student[]
  }),
  actions: {
    async FetchStudents() {
      return RegistryService.getStudents(-1)
        .then((res) => {
          this.students = res.data
        })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            router.push({ name: '404-resource', params: { resource: 'course' } })
          } else {
            router.push({ name: 'network-error' })
          }
        })
    },
    addComment(id: number, comment: string) {
        this.students.find((student) => student.id === id)?.comments.push(comment)
    }
  },
  getters: {
    getStudentById: (state) => {
      return (studentId: number) => state.students.find((student) => student.id === studentId)
    },
    isEmpty: (state) => {
      return state.students.length === 0
    }
  }
})