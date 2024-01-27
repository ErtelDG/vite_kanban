<template>
   <div class="p-4 sm:ml-64 h-full max-w-full bg-gray-50 dark:bg-gray-800">
      <h1>Legal Notice</h1>
      <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
         <div class="self-stretch">
            <span class="text-gray-700 text-xl font-normal leading-normal h-10">Subtasks</span>
         </div>
         <div class="self-stretch flex-col justify-start items-start gap-1 flex">
            <div class="self-stretch px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
               <input
                  v-model="inputSubtask"
                  class="grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal outline-none"
                  placeholder="Add new subtask"
               />
               <img src="../assets/subtasks_icon.svg" alt="" srcset="" class="hover:cursor-pointer" @click="addSubtask()" v-if="inputSubtask" />
            </div>
            <div v-for="subtask in listSubtasks" class="w-full h-8 px-4 py-1.5 justify-between items-center">
               <div class="text-black text-sm font-normal leading-tight list-item">{{ subtask }}</div>
               <div class="opacity-0 justify-start items-start gap-1 flex">
                  <div class="w-6 h-6 relative">
                     <div class="w-6 h-6 left-0 top-0 absolute bg-zinc-300"></div>
                  </div>
                  <div class="w-6 h-6 relative">
                     <div class="w-6 h-6 left-0 top-0 absolute bg-zinc-300"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
import { ref } from "vue";
const inputSubtask = ref("");
const listSubtasks = ref([]);


function addSubtask() {
   listSubtasks.value.push(inputSubtask.value);
   inputSubtask.value = "";
   alert(listSubtasks.value);
}
</script>
