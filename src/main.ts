import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useStudentsStore } from '@/stores/students'
import App from './App.vue'
import router from './router'
import { useAdvisorsStore } from './stores/advisors'
import { useCoursesStore } from './stores/courses'

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
const studentsStore = useStudentsStore()
const advisorsStore = useAdvisorsStore()
const coursesStore = useCoursesStore()
studentsStore.FetchStudents()
advisorsStore.FetchAdvisors()
console.log(advisorsStore)
console.log(coursesStore)
coursesStore.FetchCourses()
