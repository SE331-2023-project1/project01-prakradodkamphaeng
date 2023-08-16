export interface Student {
  id: number
  first_name: string
  last_name: string
  image: string
  courses: Array<number>
  comments: Array<string>
  advisor_id: number
}

export interface Advisor {
  id: number
  first_name: string
  last_name: string
  image: string
}

export interface Course {
  id: number
  advisor_id: number
  course_name: string
}
