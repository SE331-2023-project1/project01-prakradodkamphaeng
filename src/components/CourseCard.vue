<script setup lang="ts">
import type {PropType} from "vue";
import type {Course} from "@/types";

defineProps( {
  course: {
    required: true ,
    type: Object as PropType<Course>
  }
})
</script>

<template>
  <RouterLink :to="{ name: 'course-detail', params: { id: course.id } }">
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-32 w-full">
      <p class="text-xs opacity-50">#{{ course.id }}</p>
      <p class="mb-2  sm:text-2xl text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{{course.course_name}}</p>
    </div>
  </RouterLink>
</template>