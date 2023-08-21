<script setup lang="ts">


import {computed, onMounted, ref, watch} from "vue";
import RegistryService from "@/services/RegistryService";
import type {Advisor} from "@/types";
import {useRouter} from "vue-router";
import AdvisorCard from "@/components/AdvisorCard.vue";


const advisorCount = ref<number>(0);
const advisors = ref<Advisor[]>([])
const router = useRouter()
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

const maxPage = computed(() => {
  return Math.ceil(advisorCount.value / 4);
})


const hasNextPage = computed(() => {
  return props.page.valueOf() < maxPage.value
})

const changePage = (page: number) => {
  RegistryService.getAdvisors(4, page)
      .then(res => {
        advisors.value = res.data
        advisorCount.value = res.headers['x-total-count']
      })
      .catch(() => {
            router.push({name: 'NetworkError'})
          }
      )
}

onMounted(() => {
  changePage(props.page)
})

watch(() => props.page, (newPage : number) => {
  changePage(newPage)
})
</script>

<template>
  <main class="sm:w-1/2 w-60 flex flex-col items-center gap-4">
    <div class="grid gap-4 w-full sm:grid-cols-2 grid-cols-1">
      <AdvisorCard :advisor="advisor" v-for="advisor in advisors" :key="advisor.id"></AdvisorCard>
    </div>
    <div class="flex justify-between w-full  items-center">
      <RouterLink class="p-2 border border-inherit hover:shadow-md hover:bg-stone-600"
                  :to="{ name: 'advisor-list', query: { page: props.page - 1 } }" rel="prev"
                  :class="{ 'invisible': props.page <= 1 }">
        &lt;
      </RouterLink>
      <RouterLink class="p-2 border border-inherit hover:shadow-md hover:bg-stone-600"
                  :to="{ name: 'advisor-list', query: { page: props.page + 1 } }" rel="next"
                  :class="{ 'invisible': !hasNextPage }">
        &gt;
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>

</style>