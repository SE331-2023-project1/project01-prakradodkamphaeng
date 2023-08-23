<script setup lang="ts">
import type { PropType } from "vue";
import type { Advisor } from '@/types';

defineProps({
  advisor: {
    required: true,
    type: Object as PropType<Advisor>
  }
})
</script>

<template>
  <RouterLink :to="{ name: 'advisor-detail', params: { id: advisor.id } }">
    <div
      class="flex flex-row sm:flex-col overflow-hidden shadow-md bg-stone-800 hover:border-b-2 hover:pb-[2px] transition-all border-emerald-400 duration-100 group">
      <div>
        <img :src=advisor.image class="w-full aspect-square" alt="{{advisor.first_name}} {{advisor.last_name}}" />
      </div>
      <div class="px-6 py-4">
        <p class="text-xs opacity-50">#{{ advisor.id }}</p>
        <p class="text-xl group-hover:text-emerald-400 transition-colors text-ellipsis">{{ advisor.first_name }}
          {{ advisor.last_name }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
</style>
