<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAdvisorStore } from "@/stores/advisor";

const store = useAdvisorStore()
const advisors = storeToRefs(store).advisor

</script>

<template>
  <main v-for="advisor in advisors">
    <!-- TODO: Change to RouterLink -->
    <div class="flex flex-col lg:flex-row p-4 bg-stone-700 shadow-md gap-4">
      <img :src="advisor.student.image" class="w-32 shadow-md" />
      <div class="flex flex-col justify-between">
        <div>
          <p class="opacity-50 text-sm">#{{ advisor.student.id }}</p>
          <h2 class="text-3xl">{{ advisor.student.first_name }} {{ advisor.student.last_name }}</h2>
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
