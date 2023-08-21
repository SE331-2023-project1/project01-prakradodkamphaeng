<template>
  <main v-if="student" class="flex flex-col gap-4">
    <textarea class="w-full p-2 text-black" placeholder="Enter Comment"></textarea>
    <button type="submit" class="bg-green-700 text-white">Comment</button>
    <div class="flex flex-col">
      <div v-for="comment of student.comments" :key="comment"
           class="px-2 py-4 border-t last-of-type:border-b border-[#ffffff55]">
        {{ comment }}
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import {useStudentStore} from '@/stores/student';
import {storeToRefs} from 'pinia';

const {student} = storeToRefs(useStudentStore())

</script>
