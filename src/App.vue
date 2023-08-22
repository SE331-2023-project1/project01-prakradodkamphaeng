<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <nav class="flex flex-col sm:flex-row font-sans px-4 py-2 gap-4 text-white items-center">
      <RouterLink :to="{ name: 'student-list', query: { page: 1 } }" class="text-2xl font-bold mr-4">STUDENT<span
          class="text-emerald-400">CONNECT</span>
      </RouterLink>
      <div class="flex flex-row gap-8">
        <RouterLink :to="{ name: 'student-list' , query: {page: 1}}" class="text-xl [&.router-link-active]:text-emerald-400 hover:brightness-75"> Student</RouterLink>
        <RouterLink :to="{ name: 'advisor-list' , query: {page: 1}}" class="text-xl [&.router-link-active]:text-emerald-400 hover:brightness-75"> Advisor</RouterLink>
        <RouterLink :to="{ name: 'course-list' , query: {page: 1}}" class="text-xl [&.router-link-active]:text-emerald-400 hover:brightness-75"> Course</RouterLink>
      </div>
    </nav>
  </header>
  <div class="font-serif text-white flex justify-center relative mt-2">
    <RouterView/>
  </div>
</template>
