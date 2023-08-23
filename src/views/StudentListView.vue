<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue';
import { computed } from 'vue';
import { useStudentsStore } from '@/stores/students';
import { storeToRefs } from 'pinia';
const { students } = storeToRefs(useStudentsStore())
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const students_count = computed(() => students.value.length)
const students_slice = computed(() => {
  return students.value.slice(10 * (props.page - 1), 10 * (props.page - 1) + 10)
})
const maxPage = computed(() => {
  return Math.ceil(students_count.value / 10)
})

const hasNextPage = computed(() => {
  return props.page.valueOf() < maxPage.value
})

</script>

<template>
  <main class="w-full px-4 sm:p-0 sm:w-2/3  flex flex-col items-center gap-4">
    <div class="grid gap-4 w-full lg:grid-cols-2 grid-cols-1">
      <StudentCard :student="student" v-for="student in students_slice" :key="student.id"></StudentCard>
    </div>
    <div class="flex justify-between w-full  items-center">
      <RouterLink
        class="px-2 py-1 bg-emerald-400 text-black hover:shadow-md hover:brightness-75 flex group transition-all"
        :to="{ name: 'student-list', query: { page: props.page - 1 } }" rel="prev"
        :class="{ 'invisible': props.page <= 1 }">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg><span
          class="group overflow-hidden whitespace-nowrap max-w-0 opacity-0 group-hover:max-w-[10rem] group-hover:opacity-100 group-hover:ml-1 transition-all duration-500">Previous
          Page</span>
      </RouterLink>
      <RouterLink
        class="px-2 py-1 bg-emerald-400 text-black hover:shadow-md hover:brightness-75 flex group transition-all "
        :to="{ name: 'student-list', query: { page: props.page + 1 } }" rel="next" :class="{ 'invisible': !hasNextPage }">
        <span
          class="group overflow-hidden whitespace-nowrap opacity-0 max-w-0 group-hover:max-w-[10rem] group-hover:mr-1 group-hover:opacity-100 transition-all duration-500">
          Next Page
        </span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </RouterLink>
    </div>
  </main>
</template>
