import type { Student, Advisor, Course } from '@/types'
import axios, { type AxiosResponse } from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getStudents(pgSize: number, pgN: number): Promise<AxiosResponse<Student[]>> {
    return apiClient.get<Student[]>(`/students?_limit=${pgSize}&_page=${pgN}`)
  },
  getAdvisors(pgSize: number, pgN: number): Promise<AxiosResponse<Advisor[]>> {
    return apiClient.get<Advisor[]>(`/advisors?_limit=${pgSize}&_page=${pgN}`)
  },
  getCourses(pgSize: number, pgN: number): Promise<AxiosResponse<Course[]>> {
    return apiClient.get<Course[]>(`/courses?_limit=${pgSize}&_page=${pgN}`)
  },
  getStudent(id: number): Promise<AxiosResponse<Student>> {
    return apiClient.get<Student>(`/students/${id}`)
  },
  getAdvisor(id: number): Promise<AxiosResponse<Advisor>> {
    return apiClient.get<Advisor>(`/advisors/${id}`)
  },
  getCourse(id: number): Promise<AxiosResponse<Course>> {
    return apiClient.get<Course>(`/courses/${id}`)
  }
}
