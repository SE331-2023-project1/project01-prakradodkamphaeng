<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="flex bg-stone-700 font-serif px-4 py-2 gap-4 text-white items-baseline">
      <RouterLink :to="{ name: 'home' }" class="text-xl font-bold">Stu<span class="text-amber-400">Connect</span></RouterLink>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    </nav>
  </header>
  <div class="font-serif text-white">
    <RouterView />
  </div>
</template>
