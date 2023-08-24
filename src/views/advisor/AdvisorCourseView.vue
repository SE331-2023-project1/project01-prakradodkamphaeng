<template>
    <main class="flex flex-col gap-4" v-if="course.length">
        <AdvisorCourseCard v-for="course of course" :key="course.id" :course="course"/>
    </main>
    <main class="flex flex-row justify-center" v-else>
        <img src="/svg/loading.svg" class="w-16">
    </main>
</template>

<script setup lang="ts">
import AdvisorCourseCard from '@/components/AdvisorCourseCard.vue'
import { useAdvisorStore } from '@/stores/advisor';
import type { Advisor, Course } from '@/types';
import { storeToRefs } from 'pinia';
import { computed, type Ref , toRef} from 'vue'
//const advisor = storeToRefs(useAdvisorStore()).advisor
//const courses = advisor.value.course

const { advisor } = storeToRefs(useAdvisorStore())
const course = toRef(advisor.value.course)
</script>
