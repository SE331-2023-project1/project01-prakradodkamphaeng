export interface Student {
  id: number
  first_name: string
  last_name: string
  student_id: string
  image: string
  courses: Array<number>
  comments: Array<string>
}

export interface Advisor {
  id: number
  first_name: string
  last_name: string
  image: string
}

export interface Course {
  id: number
  teacher_id: number
  course_name: string
}
