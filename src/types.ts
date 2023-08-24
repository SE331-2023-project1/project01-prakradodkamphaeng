export interface Student {
  id?: number
  first_name: string
  last_name: string
  image: string
  courseId: Array<number>
  comments: Array<string>
  advisorId: number
}

export interface Advisor {
  id?: number
  first_name: string
  last_name: string
  image: string
  prefix: string
  student?: Student[]
  course?: Course[]
}

export interface Course {
  id?: number
  advisorId: number
  course_name: string
}
