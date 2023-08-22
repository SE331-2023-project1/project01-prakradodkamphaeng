<template>
    <main class="flex sm:w-4/6 w-fit bg-stone-800 p-8" v-if="student">
        <div class="flex sm:flex-row w-full gap-4 flex-col">
            <div class="flex sm:flex-col flex-row sm:w-1/5  w-3/5 gap-4">
                <img :src="student.image" class="p-2 border border-white">
                <div class="flex flex-col">
                    <RouterLink :to="{ name:'student-information' }" class="[&.router-link-exact-active]:border-emerald-400 text-lg [&.router-link-exact-active]:text-emerald-400 px-2 py-1 border-l-2 hover:border-l-4 transition-all">Information</RouterLink>
                    <RouterLink :to="{ name:'student-advisor' }" class="[&.router-link-exact-active]:border-emerald-400 text-lg [&.router-link-exact-active]:text-emerald-400 px-2 py-1 border-l-2 hover:border-l-4 transition-all">Advisor</RouterLink>
                    <RouterLink :to="{ name: 'student-courses' }" class="[&.router-link-exact-active]:border-emerald-400 text-lg [&.router-link-exact-active]:text-emerald-400 px-2 py-1 border-l-2 hover:border-l-4 transition-all">Courses</RouterLink>
                    <RouterLink :to="{ name: 'student-comments' }" class="[&.router-link-exact-active]:border-emerald-400 text-lg [&.router-link-exact-active]:text-emerald-400 px-2 py-1 border-l-2 hover:border-l-4 transition-all">Comments</RouterLink>
                </div>
            </div>
            <div class="flex flex-col w-4/5 gap-4">
                <p class="text-3xl">{{ `${student.first_name} ${student.last_name}` }}</p>
                <hr />
                <RouterView />
            </div>
        </div>
    </main>
    <main v-else>
        <img src="/svg/loading.svg" class="w-16">
    </main>
</template>

<script setup lang="ts">
import { useStudentStore } from "@/stores/student"
import { storeToRefs } from "pinia";
const { student } = storeToRefs(useStudentStore())
</script>
