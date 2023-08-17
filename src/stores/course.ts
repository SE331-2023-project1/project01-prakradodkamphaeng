import {defineStore} from "pinia";
import type {Advisor, Course} from "@/types";


export const useCourseStore = defineStore('course', {
    state: () => ({
        course: null as Course | null,
        lecturer: null as Advisor | null
    }),
    actions: {
        setCourse(course: Course) {
            this.course = course
        },
        setLecturer(lecturer: Advisor) {
            this.lecturer = lecturer
        }
    }
})