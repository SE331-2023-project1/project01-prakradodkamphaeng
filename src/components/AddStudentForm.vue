<script setup lang="ts">
import {ref} from "vue";
// import Multiselect from '@vueform/multiselect'


const options = ref({
  '1':'A1',
  '2':'A2',
  '3':'A3',
})
const value = ref()
</script>

<template>
  <main class="w-full flex flex-col h-auto pb-4 items-center">

    <header class="text-black text-lg lg:text-2xl ">Student Form</header>

    <form class="grid grid-cols-2 gap-4 max-w-xl ">
      <div class="col-span-2 lg:col-span-1">
        <label class="text-xs text-stone-700">Last Name</label>
        <input type="text" class="md:text-xl w-full text-black" placeholder="First Name"/>
      </div>

      <div class="col-span-2 lg:col-span-1">
        <label class="text-xs text-stone-700">Last Name</label>
        <input type="text" class="md:text-xl w-full text-black" placeholder="Last Name"/>
      </div>

      <div class="col-span-2 lg:col-span-2">
        <label class="text-xs text-stone-700">Profile Image URL</label>
        <input type="text" class="md:text-xl w-full text-black" placeholder=""/>
      </div>

      <div class="col-span-2">
        <label class="text-xs text-stone-700">Advisor</label>
        <select id="advisor" class="md:text-xl w-full text-black">
          <option value="1">Dr.Sarin</option>
          <option value="1">Dr.Pond</option>
          <option value="1">Dr.Kan</option>
        </select>
        <!--        TODO: fetch advisor-->
      </div>

      <div class="col-span-2">
        <label class="text-xs text-stone-700">Enrolled Course</label>
<!--        <Multiselect class="text-black" @click="() => {console.log(value)}"-->
<!--            v-model="value"-->
<!--            :options="options"-->
<!--        />-->
      </div>

    </form>

  </main>

</template>

<style scoped></style>
