import {defineStore} from "pinia";
import type {Course} from "@/types";


export const useCourseStore = defineStore('course', {
    state: () => ({
        course: null as Course | null
    }),
    actions: {
        setCourse(course: Course) {
            this.course = course
        }
    }
})