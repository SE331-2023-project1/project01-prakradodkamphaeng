<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useStudentStore} from "@/stores/student";

const store = useStudentStore()
const student = storeToRefs(store).student

</script>

<template>
  <main class="flex flex-col gap-4">
    <div v-if="student">
      <p>First Name: {{student.first_name}}</p>
      <p>Last Name: {{student.last_name}}</p>
    </div>
  </main>
</template>

<style scoped>

</style>