<template>
    <div class="bg-stone-700 shadow-md p-4 flex flex-col gap-1">
        <p class="text-xs opacity-50">
            #{{ course.id }}
        </p>
        <div class="flex flex-row items-baseline gap-2">
            <p class="text-3xl font-bold">{{ course.course_name }}</p>
            <p class="text-xs opacity-75">{{ `Professor ${advisor.first_name} ${advisor.last_name}` }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Advisor, Course } from '@/types';
import type { PropType } from 'vue';

defineProps({
    course: {
        type: Object as PropType<Course>,
        required: true
    },
    advisor: {
        type: Object as PropType<Advisor>,
        required: true
    }
})
</script>
