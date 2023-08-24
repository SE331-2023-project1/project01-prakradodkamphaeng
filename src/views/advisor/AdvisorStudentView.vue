<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAdvisorStore } from "@/stores/advisor";

const store = useAdvisorStore()
const advisor = storeToRefs(store).advisor
const students = advisor.value.student

</script>

<template>
  <main v-for="student in students">
    <!-- TODO: Change to RouterLink -->
    <div class="flex flex-col lg:flex-row p-4 bg-stone-700 shadow-md gap-4">
      <img :src="student.image" class="w-32 shadow-md" />
      <div class="flex flex-col justify-between">
        <div>
          <p class="opacity-50 text-sm">#{{ student.id }}</p>
          <h2 class="text-3xl">{{ student.first_name }} {{ student.last_name }}</h2>
        </div>
      </div>
    </div>
  </main>
  <!-- <main v-if="null">
    <img src="/svg/loading.svg" class="w-16">
  </main> -->
</template>

<style scoped>
</style>
