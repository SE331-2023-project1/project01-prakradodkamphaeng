<script setup lang="ts">
import { useStudentStore } from '@/stores/student';
import { storeToRefs } from 'pinia';
import { ref } from "vue";
import RegistryService from "@/services/RegistryService";


const { student } = storeToRefs(useStudentStore())
const comments = student.value?.comments || []
const comment = ref<string>("")
const submitHandler = async () => {
  if (comment.value === "" || comment.value.trim().length <= 0) return
  if (!student.value?.id) return;
  comments.unshift(comment.value)
  const { id, first_name, last_name, image, courses, advisor_id } = student.value
  const payload = {
    id,
    first_name,
    last_name,
    image,
    courses,
    advisor_id,
    comments
  }

  await RegistryService.updateStudent(id, payload)

  comment.value = ""
}

</script>

<template>
  <main v-if="student" class="flex flex-col gap-4">
    <div class="flex flex-col">
      <textarea class="w-full p-2 text-white bg-stone-900 placeholder-stone-500 resize-none" placeholder="Enter Comment"
        v-model="comment"></textarea>
      <button type="submit" class="bg-emerald-400 hover:brightness-75 text-black font-sans"
        @click="submitHandler">Comment</button>
    </div>


    <div class="flex flex-col">
      <div v-for="comment of comments" :key="comment" class="px-2 py-4 border-t last-of-type:border-b border-stone-700">
        {{ comment }}
      </div>
    </div>
  </main>
  <main v-else>
    <img src="/svg/loading.svg" class="w-16">
  </main>
</template>


