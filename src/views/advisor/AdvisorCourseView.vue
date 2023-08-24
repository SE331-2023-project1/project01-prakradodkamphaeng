<template>
    <main class="flex flex-col gap-4" v-if="courses.length">
        <AdvisorCourseCard v-for="course_tuple of course_tuples" :key="course_tuple[0].id" :course="course_tuple[0]"
            :advisor="course_tuple[1]" />
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
import { computed, type Ref } from 'vue'
const { courses, course_advisors } = storeToRefs(useAdvisorStore())
let course_tuples: Ref<Array<[Course, Advisor]>> = computed(() => {
    let tuples: Array<[Course, Advisor]> = Array(courses.value.length)
    courses.value.forEach((v, i) => {
        tuples[i] = [courses.value[i], course_advisors.value[i]]
    })
    return tuples
})
</script>
