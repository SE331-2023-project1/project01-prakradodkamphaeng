<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue";
import RegistryService from "@/services/RegistryService";
import type {Course} from "@/types";
import {useRouter} from "vue-router";
import PageDisplay from '@/components/PageDisplay.vue';
import CourseCard from "@/components/CourseCard.vue";

const courseCount = ref<number>(0);
const courses = ref<Course[]>([])
const router = useRouter()
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

const maxPage = computed(() => {
  return Math.ceil(courseCount.value / 6);
})

const pagesDisplay = computed(() => {
  return Array.from(
      {length: 3},
      (_, i) => (hasNextPage.value ? (props.page === 1 ? 1 : props.page - 1) : props.page - 2) + i
  )
})

const hasNextPage = computed(() => {
  return props.page.valueOf() < maxPage.value
})

const changePage = (page: number) => {
  RegistryService.getCourses(6, page)
      .then(res => {
        courses.value = res.data
        courseCount.value = res.headers['x-total-count']
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
  <main class="w-1/4 flex flex-col items-center gap-4">
    <div class="grid gap-4 w-full">
      <CourseCard :course="course" v-for="course in courses" :key="course.id"></CourseCard>
    </div>
    <div class="flex justify-between w-full  items-center">
      <RouterLink class="p-2 border border-inherit hover:shadow-md hover:bg-stone-600"
                  :to="{ name: 'course-list', query: { page: props.page - 1 } }" rel="prev" :class="{ 'invisible': props.page <= 1 }">
        &lt;</RouterLink>
      <RouterLink class="p-2 border border-inherit hover:shadow-md hover:bg-stone-600"
                  :to="{ name: 'course-list', query: { page: props.page + 1 } }" rel="next" :class="{ 'invisible': !hasNextPage }">
        &gt;</RouterLink>
    </div>
  </main>
</template>

<style scoped>

</style>