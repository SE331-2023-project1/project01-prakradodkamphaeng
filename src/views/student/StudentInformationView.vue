<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStudentStore } from "@/stores/student";

const store = useStudentStore()
const { student } = storeToRefs(store)

</script>

<template>
  <main class="flex flex-col gap-4" v-if="student">
    <p>First Name: {{ student.first_name }}</p>
    <p>Last Name: {{ student.last_name }}</p>
  </main>
  <main v-else>
    <img src="/svg/loading.svg" class="w-16">
  </main>
</template>

<style scoped>
</style>
