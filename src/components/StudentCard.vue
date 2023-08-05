<template>
    <RouterLink :to="{ name: 'home' }" class="relative font-serif bg-zinc-800 shadow-md flex flex-row gap-4 group">
        <img :src="student.image" class="h-16" />
        <div class="flex flex-col py-2 justify-center">
            <p class="text-xs opacity-50">{{ student.student_id }}</p>
            <p class="text-xl">{{ `${student.first_name} ${student.last_name}` }}</p>
        </div>
        <div
            class="absolute right-0 h-full bg-amber-400 group-hover:w-16 w-0 overflow-hidden transition-all duration-500 flex flex-col justify-center items-center text-black">
            <p class="group-hover:opacity-100 opacity-0 transition-all duration-500 text-center font-sans font-bold">View Details</p>
        </div>
    </RouterLink>
</template>
<script setup lang="ts">
import type { Student } from '@/types';
import type { PropType } from 'vue';

defineProps({
    student: {
        type: Object as PropType<Student>,
        required: true
    }
})
</script>
