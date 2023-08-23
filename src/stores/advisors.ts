import RegistryService from '@/services/RegistryService'
import type { Advisor } from '@/types'
import nProgress from 'nprogress'
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
          if (nProgress.isStarted()) {
            nProgress.inc(0.33)
          }
        })
        .catch((err) => {
          return Promise.reject(err)
        })
    },
    addAdvisor(advisor: Advisor) {
      advisor.id = this.advisors[this.advisors.length - 1].id + 1
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
