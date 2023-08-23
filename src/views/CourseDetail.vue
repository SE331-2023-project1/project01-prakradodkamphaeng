<script setup lang="ts">
import {useCourseStore} from "@/stores/course";
import {storeToRefs} from "pinia";

const store = useCourseStore()
const course = storeToRefs(store).course
const lecturer = storeToRefs(store).lecturer
</script>

<template>
  <main class="w-full max-w-6xl bg-stone-800 p-4 sm:p-8" v-if="course && lecturer">
    <p class="text-sm opacity-50">#{{ course.id }}</p>
    <p class="text-3xl">{{course.course_name}}</p>
    <hr class="my-4" />
    <div class="flex flex-col gap-4">

      <p class="text-emerald-400">Course Description:
        <span class="text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo est, rhoncus sed est in, pulvinar placerat ex. Aenean auctor, dui ac molestie congue, purus ante luctus justo, at dapibus turpis ipsum finibus felis. Suspendisse egestas odio a nisi pulvinar ornare. Donec est nibh, vehicula eget quam eu, ullamcorper ultrices leo. In hac habitasse platea dictumst. Suspendisse ac est ut augue consequat scelerisque. Vivamus at metus cursus est viverra aliquam. Sed blandit ultrices varius. Donec enim libero, auctor vel vehicula nec, tristique in nisl. Sed pulvinar leo in urna porttitor ullamcorper.</span>
      </p>
      <p class="text-emerald-400"> Taught by: <span class="text-white">{{lecturer.first_name}} {{lecturer.last_name}}</span></p>
    </div>
  </main>
</template>
