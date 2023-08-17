<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="flex font-sans px-4 py-2 gap-4 text-white items-center">
      <RouterLink :to="{ name: 'student-list', query: { page: 1 } }" class="text-2xl font-bold mr-4">STUDENT<span
          class="text-amber-400">CONNECT</span>
      </RouterLink>
    </nav>
  </header>
  <div class="font-serif text-white flex justify-center relative">
    <RouterView />
  </div>
</template>
