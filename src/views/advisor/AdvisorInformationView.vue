<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAdvisorStore } from "@/stores/advisor";

const store = useAdvisorStore()
const advisor = storeToRefs(store).advisor

</script>

<template>
  <main class="flex flex-col gap-4" v-if="advisor">
    <p>First Name: {{ advisor.first_name }}</p>
    <p>Last Name: {{ advisor.last_name }}</p>
    <div class="flex flex-row">
          <p class="text-md">Contact Advisor:</p>
          <span class="text-emerald-400 hover:brightness-75 underline cursor-pointer ml-2">{{
            `${advisor.first_name.toLowerCase()}.${advisor.last_name.toLowerCase()[0]}@cmu.ac.th` }} </span>
    </div>
  </main>
  <main v-else>
    <img src="/svg/loading.svg" class="w-16">
  </main>
</template>

<style scoped>
</style>
