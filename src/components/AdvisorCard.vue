<script setup lang="ts">
import type {PropType} from "vue";
import type {Advisor} from "@/types";

defineProps({
  advisor: {
    required: true,
    type: Object as PropType<Advisor>
  }
})
</script>

<template>
<!--  <RouterLink :to="{ name: 'advisor-detail', params: { id: advisor.id } }">-->
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-800 hover:border-t-2 hover:pl-[2px] transition-all border-amber-400 duration-100 sm:w-3/4 w-full m-2">
      <div>
        <img :src=advisor.image class="w-full" alt="{{advisor.first_name}} {{advisor.last_name}}"/>
      </div>
      <div class="px-6 py-4">
        <p class="text-xs opacity-50">#{{ advisor.id }}</p>
        <p class="mb-2  sm:text-2xl text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{{advisor.last_name}} {{advisor.last_name}}</p>
      </div>
    </div>
<!--  </RouterLink>-->
</template>

<style scoped>

</style>