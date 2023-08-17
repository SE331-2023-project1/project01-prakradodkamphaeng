<template>
    <main class="flex w-4/6 bg-stone-800 p-8" v-if="student">
        <div class="flex flex-row w-full gap-4">
            <div class="flex flex-col w-1/5 gap-4">
                <img :src="student.image" class="p-2 border border-white">
                <div class="flex flex-col">
                    <RouterLink :to="{ name: 'student-courses' }" class="[&.router-link-exact-active]:border-amber-500 text-lg [&.router-link-exact-active]:text-amber-500 px-2 py-1 border-l-2 hover:border-l-4 transition-all">Courses</RouterLink>
                    <RouterLink :to="{ name: 'student-comments' }" class="[&.router-link-exact-active]:border-amber-500 text-lg [&.router-link-exact-active]:text-amber-500 px-2 py-1 border-l-2 hover:border-l-4 transition-all">Comments</RouterLink>
                </div>
            </div>
            <div class="flex flex-col w-4/5 gap-4">
                <p class="text-3xl">{{ `${student.first_name} ${student.last_name}` }}</p>
                <hr />
                <RouterView />
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useStudentStore } from "@/stores/student"
import { storeToRefs } from "pinia";
const { student } = storeToRefs(useStudentStore())
</script>
