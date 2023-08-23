import RegistryService from '@/services/RegistryService'
import type { Student } from '@/types'
import nProgress from 'nprogress'
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
          if (nProgress.isStarted()) {
            nProgress.inc(0.33)
          }
        })
        .catch((err) => {
          return Promise.reject(err)
        })
    },
    addComment(id: number, comment: string) {
      this.students.find((student) => student.id === id)?.comments.push(comment)
    },
    addStudent(student: Student) {
      student.id = this.students[this.students.length - 1].id + 1
      this.students.push(student)
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
