<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStudentStore } from "@/stores/student";

const store = useStudentStore()
const advisor = storeToRefs(store).advisor

</script>

<template>
  <main v-if="advisor">
    <RouterLink :to="{ name: 'advisor-detail', params: { id: advisor.id } }"
      class="flex flex-col lg:flex-row p-4 bg-stone-700 shadow-md gap-4 hover:border-l-2 border-emerald-400">
      <img :src="advisor.image" class="w-32 aspect-square object-cover shadow-md" />
      <div class="flex flex-col justify-between">
        <div>
          <p class="opacity-50 text-sm">#{{ advisor.id }}</p>
          <h2 class="text-3xl">{{ advisor.first_name }} {{ advisor.last_name }}</h2>
        </div>
        <div class="flex flex-row">
          <p class="text-md">Contact Advisor:</p>
          <div class="flex flex-col">
            <p class="text-emerald-400 hover:brightness-75 underline cursor-pointer ml-2">Email</p>
            <p class="text-emerald-400 hover:brightness-75 underline cursor-pointer ml-2">Facebook</p>
          </div>
        </div>
      </div>
    </RouterLink>
  </main>
  <main v-else>
    <img src="/svg/loading.svg" class="w-16">
  </main>
</template>

<style scoped>
</style>
