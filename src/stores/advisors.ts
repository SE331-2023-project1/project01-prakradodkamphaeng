import RegistryService from '@/services/RegistryService'
import type { Advisor } from '@/types'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
export const useAdvisorsStore = defineStore('advisors', {
  state: () => ({
    advisors: [] as Advisor[]
  }),
  actions: {
    async FetchAdvisors() {
      return RegistryService.getAdvisors(-1)
        .then((res) => {
          this.advisors = res.data
        })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            router.push({ name: '404-resource', params: { resource: 'course' } })
          } else {
            router.push({ name: 'network-error' })
          }
        })
    },
    addAdvisor(advisor: Advisor) {
      this.advisors.push(advisor)
    }
  },
  getters: {
    getAdvisorById: (state) => {
      return (advisorId: number) => state.advisors.find((advisor) => advisor.id === advisorId)
    },
    isEmpty: (state) => {
      return state.advisors.length === 0
    }
  }
})
