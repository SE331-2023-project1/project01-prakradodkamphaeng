<script setup lang="ts">
import { useAdvisorsStore } from "@/stores/advisors";
import { storeToRefs } from "pinia";
import { computed, ref, toRefs } from "vue";
import { type Advisor, type Course, type Student } from "@/types";
import { useCoursesStore } from "@/stores/courses";
import { useMessageStore } from "@/stores/message";
const advisorsStore = useAdvisorsStore()
const advisor = ref<Advisor>({
  id: -1,
  first_name: '',
  last_name: '',
  image: '',
})
function submitForm() {
  advisorsStore.addAdvisor(advisor.value)
  advisor.value = {
    id: -1,
    first_name: '',
    last_name: '',
    image: '',
  }
  useMessageStore().flashMessage('Added an advisor successfully.')
}
</script>

<template>
  <main class="w-full flex flex-col h-auto pb-4 items-center">

    <header class="text-black text-lg lg:text-2xl ">Student Form</header>

    <form class="grid grid-cols-2 gap-4 max-w-xl" @submit.prevent="submitForm">
      <div class="col-span-2 lg:col-span-1">
        <label class="text-xs text-stone-700">First Name</label>
        <input type="text"
          class="md:text-xl w-full text-black bg-transparent border-b border-stone-400 focus:outline-none focus:border-stone-700 transition-colors"
          placeholder="" v-model="advisor.first_name" required />
      </div>

      <div class="col-span-2 lg:col-span-1">
        <label class="text-xs text-stone-700">Last Name</label>
        <input type="text"
          class="md:text-xl w-full text-black bg-transparent border-b border-stone-400 focus:outline-none focus:border-stone-700 transition-colors"
          placeholder="" v-model="advisor.last_name" required />
      </div>

      <div class="col-span-2">
        <label class="text-xs text-stone-700">Profile Image URL</label>
        <input type="text"
          class="md:text-xl w-full text-black bg-transparent border-b border-stone-400 focus:outline-none focus:border-stone-700 transition-colors"
          v-model="advisor.image" placeholder="" required />
        <div class="w-[128px] h-[128px] border border-dashed mx-auto mt-4 border-stone-400">
          <img class="h-full w-full object-cover" :src="advisor.image" />
        </div>
      </div>

      <button class="bg-emerald-400 col-span-2 mx-[40%] px-2 py-1">Add</button>
    </form>

  </main>
</template>
