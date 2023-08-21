<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useStudentStore} from "@/stores/student";

const store = useStudentStore()
const advisor = storeToRefs(store).advisor

</script>

<template>
  <main v-if="advisor">
    <div class="flex flex-col sm:w-1/2 w-full ">
      <h2 class="text-lg pb-2">Advisor: {{ advisor.first_name }} {{ advisor.last_name }}</h2>

      <img :src="advisor.image" class="w-35 mb-2"/>
      <div class="flex flex-col">
        <p class="text-md">Contact Advisor</p>
        <p class="text-blue-600 cursor-pointer ml-2">Email</p>
        <p class="text-blue-600 cursor-pointer ml-2">Facebook</p>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>