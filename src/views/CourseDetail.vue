<script setup lang="ts">
import {useCourseStore} from "@/stores/course";
import {storeToRefs} from "pinia";

const store = useCourseStore()
const course = storeToRefs(store).course

const id = course.value?.id
</script>

<template>
  <div v-if="course">
    {{course.course_name}}
  </div>
</template>