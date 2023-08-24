<template>
    <RouterLink :to="{name:'course-detail' , params: { id: course.id }}">
      <div class="bg-stone-700 shadow-md p-4 flex flex-col gap-1 hover:border-l-2 border-emerald-400 group">
          <p class="text-xs opacity-50">
              #{{ course.id }}
          </p>
      </div>
    </RouterLink>
  </template>
  
  <script setup lang="ts">
  import type { Advisor, Course } from '@/types';
  import type { PropType } from 'vue';
  
  defineProps({
      course: {
          type: Object as PropType<Course>,
          required: true
      },
  })
  </script>
  