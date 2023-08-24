<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStudentStore } from "@/stores/student";

const store = useStudentStore()
const { student } = storeToRefs(store)
const intl = new Intl.DisplayNames(['en'], {type: 'region'})

</script>

<template>
  <main class="flex flex-col gap-4" v-if="student">
    <div class="flex flex-col">
      <p class="text-sm opacity-50">Address</p>
      <p class="text-xl">{{ student.address }}</p>
    </div>
    <div class="flex flex-col">
      <p class="text-sm opacity-50">Birthday</p>
      <p class="text-xl">{{ new Date(student.birthday/1).toLocaleDateString() }}</p>
    </div>
    <div class="flex flex-col">
      <p class="text-sm opacity-50">Nationality</p>
      <p class="text-xl">{{ intl.of(student.nationality) }}</p>
    </div>
  </main>
  <main v-else>
    <img src="/svg/loading.svg" class="w-16">
  </main>
</template>

<style scoped>
</style>
