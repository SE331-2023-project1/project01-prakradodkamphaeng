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
  <RouterLink :to="{ name: 'course-detail', params: { id: course.id } }"
              class="relative font-serif bg-zinc-800 shadow-md flex flex-row gap-4 hover:border-l-4 hover:pl-[2px] transition-all border-amber-400 duration-100">
    <div class="flex flex-col py-2 justify-center">
      <p class="text-xs opacity-50">#{{ course.id }}</p>
      <p class="text-xl">{{ `${course.course_name}` }}</p>
    </div>
  </RouterLink>
</template>