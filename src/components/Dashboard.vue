<template>
   <div class="w-full h-full md3:pl-16 pt-8 flex flex-col items-center md3:items-start justify-start">
      <div class="flex justify-between items-center gap-7 md:2w-[40rem] h-[4.5rem]">
         <div class="h-full w-full sm2:w-64 font-bold text-6xl flex items-center p-2">Join 360</div>
         <div class="hidden sm2:flex items-center border-b-2 bg-[#29ABE2] w-1 h-16"></div>
         <div class="h-full w-72 p-2 hidden sm2:flex items-center text-2xl">Key Metrics at a Glance</div>
      </div>

      <div class="mt-12 1xl:w-[64rem] flex items-center gap-x-8">
         <div class="flex flex-col justify-between items-center w-[35rem] sm:h-[35rem] gap-8">
            <div class="w-full flex flex-col items-center sm:flex-row sm:items-stretch gap-8 justify-between">
               <router-link to="/kanban" class="hover:bg-[#d1d5db] shadow w-[16.5rem] h-[10.5rem] flex justify-center items-center rounded-3xl bg-white">
                  <div class="w-[14.5rem] h-full gap-x-5 flex items-center justify-center">
                     <div class="w-[4.5rem] h-[4.5rem] rounded-full bg-[#2A3647] flex justify-center items-center"><img src="../assets/pencil.svg" /></div>
                     <div class="flex flex-col items-center justify-center h-full">
                        <div class="text-[4rem] font-semibold" v-if="storeTasks['ToDo'] && storeTasks['ToDo'].length > 0">{{ storeTasks["ToDo"].length }}</div>
                        <div class="text-[4rem] font-semibold" v-if="!storeTasks['ToDo']">0</div>
                        <div class="text-center text-xl text-gray-700">To-do</div>
                     </div>
                  </div>
               </router-link>
               <router-link to="/kanban" class="hover:bg-[#d1d5db] w-[16.5rem] h-[10.5rem] flex justify-center items-center rounded-3xl bg-white shadow">
                  <div class="w-[14.5rem] h-full gap-x-5 flex items-center justify-center">
                     <div class="w-[4.5rem] h-[4.5rem] rounded-full bg-[#2A3647] flex justify-center items-center"><img src="../assets/check_board.svg" /></div>
                     <div class="flex flex-col items-center justify-center h-full">
                        <div class="text-[4rem] font-semibold" v-if="storeTasks['Done'] && storeTasks['Done'].length > 0">{{ storeTasks["Done"].length }}</div>
                        <div class="text-[4rem] font-semibold" v-if="!storeTasks['Done']">0</div>
                        <div class="text-center text-xl text-gray-700">Done</div>
                     </div>
                  </div>
               </router-link>
            </div>
            <div class="w-[16.5rem] sm:w-full flex sm:justify-between">
               <router-link
                  to="/kanban"
                  class="w-full sm:h-40 px-12 py-7 bg-white rounded-3xl shadow justify-center items-center gap-16 sm:inline-flex hover:bg-[#d1d5db]"
               >
                  <div class="justify-center sm:justify-start items-center gap-4 flex mb-8 sm:mb-0">
                     <div class="justify-center items-center gap-2.5 flex">
                        <div class="w-[4.5rem] h-[4.5rem] relative">
                           <div class="w-[4.5rem] h-[4.5rem] left-0 top-0 absolute bg-orange-600 rounded-full flex justify-center items-center">
                              <img src="../assets/prio_alta.svg" alt="" srcset="" />
                           </div>
                           <div class="w-9 h-6 left-[0.785rem] top-4 absolute">
                              <div class="w-9 h-6 left-[-0px] top-[-0px] absolute"></div>
                           </div>
                        </div>
                     </div>
                     <div class="flex-col justify-center items-center inline-flex gap-3">
                        <div class="w-12 text-center text-black text-6xl font-semibold leading-10">{{ urgentTasksDeadline }}</div>
                        <div class="text-center text-xl text-gray-700">Urgent</div>
                     </div>
                  </div>
                  <div class="flex-col justify-start items-center sm:items-start gap-3 inline-flex w-full">
                     <div class="text-gray-700 text-xl font-bold leading-relaxed text-center">{{ formattedDate }}</div>
                     <div class="text-center text-xl text-gray-700">Upcoming Deadline</div>
                  </div>
               </router-link>
            </div>
            <div class="w-full flex-col sm:flex-row flex items-center gap-8 sm:justify-between">
               <router-link
                  to="/kanban"
                  class="hover:bg-[#d1d5db] w-[16.5rem] sm:w-40 h-40 py-6 bg-white rounded-3xl shadow flex-col justify-center items-center gap-3 inline-flex"
               >
                  <div class="flex-col justify-center items-center flex gap-3">
                     <div
                        class="text-center text-black text-6xl font-semibold leading-10"
                        v-if="storeTasks['Done'] || storeTasks['Progress'] || (storeTasks['Feedback'] && Object.keys(storeTasks).length != undefined)"
                     >
                        {{ storeTasks["Done"].length + storeTasks["Progress"].length + storeTasks["ToDo"].length }}
                     </div>
                     <div class="text-center text-black text-6xl font-semibold leading-10" v-if="Object.keys(storeTasks).length == undefined">0</div>
                     <div class="text-center text-xl text-gray-700">Tasks In <br />Board</div>
                  </div>
               </router-link>
               <router-link
                  to="/kanban"
                  class="hover:bg-[#d1d5db] w-[16.5rem] sm:w-40 h-40 py-6 bg-white rounded-3xl shadow flex-col justify-center items-center gap-3 inline-flex"
               >
                  <div class="flex-col justify-center items-center flex gap-3">
                     <div class="text-center text-black text-6xl font-semibold leading-10" v-if="storeTasks['Progress'] && storeTasks['Progress'].length > 0">
                        {{ storeTasks["Progress"].length }}
                     </div>
                     <div class="text-center text-black text-6xl font-semibold leading-10" v-if="!storeTasks['Progress']">0</div>
                     <div class="text-center text-gray-700 text-xl font-normal leading-normal">Tasks in <br />Progress</div>
                  </div>
               </router-link>
               <router-link
                  to="/kanban"
                  class="hover:bg-[#d1d5db] w-[16.5rem] sm:w-40 h-40 py-6 bg-white rounded-3xl shadow flex-col justify-center items-center gap-3 inline-flex"
               >
                  <div class="flex-col justify-center items-center flex gap-3">
                     <div class="text-center text-black text-6xl font-semibold leading-10" v-if="storeTasks['Feedback'] && storeTasks['Feedback'].length > 0">
                        {{ storeTasks["Feedback"].length }}
                     </div>
                     <div class="text-center text-black text-6xl font-semibold leading-10" v-if="!storeTasks['Feedback']">0</div>
                     <div class="text-center text-gray-700 text-xl font-normal leading-normal">Awaiting <br />Feedback</div>
                  </div>
               </router-link>
            </div>
         </div>
         <div class="h-32 flex-col justify-center items-start gap-8 xl:inline-flex hidden">
            <div class="w-full text-gray-700 text-5xl font-medium leading-10">Hello,</div>
            <div class="w-full text-sky-500 text-6xl font-bold leading-10">Visitors</div>
         </div>
      </div>
   </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const storeTasks = computed(() => store.state.tasks);
const storeCategory = computed(() => store.state.categories);
const storeContacts = computed(() => store.state.contacts);
const urgentTasksDeadline = ref(0);

const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {
   year: "numeric",
   month: "long",
   day: "numeric",
});

watch(
   storeTasks,
   (newValue, oldValue) => {
      urgentTasksDeadline.value = getTotalFilteredTasks(newValue);
   },
   { immediate: true }
);

function getTotalFilteredTasks(data) {
   const today = new Date();
   let totalFilteredTasks = 0;

   Object.values(data).forEach((tasks) => {
      tasks.forEach((task) => {
         if (task.status !== "Done") {
            const dueDate = new Date(task.due_date);
            const diffInDays = Math.floor((dueDate - today) / (1000 * 60 * 60 * 24));
            if (diffInDays <= 3) {
               totalFilteredTasks++;
            }
         }
      });
   });

   return totalFilteredTasks;
}
</script>
<style scoped></style>
