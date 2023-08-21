<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue';
import RegistryService from '@/services/RegistryService';
import type { Student } from '@/types';
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import PageDisplay from '@/components/PageDisplay.vue';
const students = ref<Student[]>([])
const students_count = ref<number>(0)
const router = useRouter()
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const maxPage = computed(() => {
  return Math.ceil(students_count.value / 10)
})
const pagesDisplay = computed(() => {
  return Array.from(
    { length: 3 },
    (_, index) => (hasNextPage.value ? (props.page === 1 ? 1 : props.page - 1) : props.page - 2) + index
  );
})

const hasNextPage = computed(() => {
  return props.page.valueOf() < maxPage.value
})

function changePage(page: number) {
  RegistryService.getStudents(10, page).then((res) => {
    students.value = res.data
    students_count.value = res.headers['x-total-count']
  }).catch(() => {
    router.push({ name: 'NetworkError' })
  })
}

onMounted(() => {
  changePage(props.page)
})

watch(() => props.page, (newPage) => {
  changePage(newPage)
})

</script>

<template>
  <main class="sm:w-1/2 w-full flex flex-col items-center gap-4">
    <div class="grid gap-4 w-full sm:grid-cols-2 grid-cols-1">
      <StudentCard :student="student" v-for="student in students" :key="student.id"></StudentCard>
    </div>
    <div class="flex justify-between w-full  items-center">
      <RouterLink class="p-2 border border-inherit hover:shadow-md hover:bg-stone-600"
        :to="{ name: 'student-list', query: { page: props.page - 1 } }" rel="prev" :class="{ 'invisible': props.page <= 1 }">
        &lt;</RouterLink>
      <div class="flex flex-row gap-4 font-sans items-center select-none">
        <PageDisplay v-if="!pagesDisplay.includes(1)" :page="1" />
        <p v-if="!pagesDisplay.includes(1)">⋯</p>
        <PageDisplay :page="pageDisplay" v-for="pageDisplay in pagesDisplay" :key="pageDisplay"
          :class="{ 'text-amber-400': page === pageDisplay, 'pointer-events-none': page === pageDisplay }" />
        <p v-if="!pagesDisplay.includes(maxPage)">⋯</p>
        <PageDisplay v-if="!pagesDisplay.includes(maxPage)" :page="maxPage" />
      </div>
      <RouterLink class="p-2 border border-inherit hover:shadow-md hover:bg-stone-600"
        :to="{ name: 'student-list', query: { page: props.page + 1 } }" rel="next" :class="{ 'invisible': !hasNextPage }">
        &gt;</RouterLink>
    </div>
  </main>
</template>
