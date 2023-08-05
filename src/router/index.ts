import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: (route) => ({ page: parseInt(route.query?.page as string) }),
      beforeEnter: (to, _, next) => {
        if (
          !to.query?.page ||
          parseInt(to.query?.page as string) < 1 ||
          isNaN(parseInt(to.query?.page as string))
        ) {
          next({ name: 'home', query: { page: 1 } })
        } else {
          next()
        }
      }
    }
  ]
})

export default router
