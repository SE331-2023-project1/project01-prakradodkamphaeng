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
// {
//     "id": 4,
//     "first_name": "Lev",
//     "last_name": "Hebden",
//     "image": "https://randomuser.me/api/portraits/women/33.jpg",
//     "courses": [
//     10,
//     9,
//     13,
//     6
// ],
//     "comments": [
//     "Outstanding problem-solving skills."
// ],
//     "advisor_id": 4
// },
