<template>
    <RouterLink :to="{ name: 'student-information', params: { id: student.id } }">
      <div class="relative font-serif bg-stone-800 shadow-md flex flex-row gap-4 hover:border-l-4 hover:pl-[2px] transition-all border-emerald-400 duration-100 group">
        <img :src="student.image" class="h-16 w-16 object-cover" />
        <div class="flex flex-col py-2 justify-center">
            <p class="text-xs opacity-50">#{{ student.id }}</p>
            <p class="text-xl group-hover:text-emerald-400 transition-colors duration-100">{{ `${student.first_name} ${student.last_name}` }}</p>
        </div>
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
