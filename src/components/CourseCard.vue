<script setup lang="ts">
import type { PropType } from "vue";
import type { Course } from "@/types";

defineProps({
  course: {
    required: true,
    type: Object as PropType<Course>
  }
})
</script>

<template>
  <RouterLink :to="{ name: 'course-detail', params: { id: course.id } }">
    <div
      class="p-6 shadow-md bg-stone-800 w-full flex flex-col gap-2 group hover:border-l-4 hover:ml-[2px] border-emerald-400 transition-all">
      <div class="flex flex-row items-center gap-8">
        <p class="opacity-50">#{{ course.id }}</p>
        <p class="sm:text-2xl text-1xl font-bold text-white group-hover:text-emerald-400 transition-colors">{{
          course.course_name }}</p>
      </div>
      <p class="text-white hidden md:webkit-box md:line-clamp-2 lg:line-clamp-4 opacity-50 text-justify"> Lorem ipsum
        dolor sit amet,
        consectetur adipiscing elit. Donec leo est, rhoncus sed est
        in, pulvinar placerat ex. Aenean auctor, dui ac molestie congue, purus ante luctus justo, at dapibus turpis ipsum
        finibus felis. Suspendisse egestas odio a nisi pulvinar ornare. Donec est nibh, vehicula eget quam eu, ullamcorper
        ultrices leo. In hac habitasse platea dictumst. Suspendisse ac est ut augue consequat scelerisque. Vivamus at
        metus cursus est viverra aliquam. Sed blandit ultrices varius. Donec enim libero, auctor vel vehicula nec,
        tristique in nisl. Sed pulvinar leo in urna porttitor ullamcorper.</p>

    </div>
  </RouterLink>
</template>
