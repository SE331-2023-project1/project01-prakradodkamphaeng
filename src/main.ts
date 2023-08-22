import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useStudentsStore } from '@/stores/students'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
const studentsStore = useStudentsStore()
studentsStore.FetchStudents()
