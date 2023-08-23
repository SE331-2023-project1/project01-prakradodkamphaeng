import './assets/main.css'
import 'nprogress/nprogress.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useStudentsStore } from '@/stores/students'
import App from './App.vue'
import router from './router'
import { useAdvisorsStore } from './stores/advisors'
import { useCoursesStore } from './stores/courses'
import nProgress from 'nprogress'

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
const studentsStore = useStudentsStore()
const advisorsStore = useAdvisorsStore()
const coursesStore = useCoursesStore()
nProgress.configure({ trickle: false })
nProgress.start()
Promise.all([
  studentsStore.FetchStudents(),
  advisorsStore.FetchAdvisors(),
  coursesStore.FetchCourses()
])
  .catch((err) => {
    if (err.response && err.response.status === 404) {
      router.push({ name: '404-resource' })
    } else {
      router.push({ name: 'network-error' })
    }
  })
  .finally(() => {
    nProgress.done()
  })
