<template>
   <div class="w-full h-full pl-16 flex flex-col justify-start pt-8">
      <div class="w-[70rem] flex items-center justify-between">
         <div class="text-black text-6xl font-bold flex items-center justify-center">Board</div>
         <div class="w-[31.5rem] gap-x-8 flex justify-between items-center">
            <div class="w-80 h-12 bg-white rounded-lg border border-neutral-400 justify-start items-center gap-2.5 inline-flex">
               <div class="h-full w-full justify-between items-center flex">
                  <input
                     type="text"
                     class="mx-2 outline-none ring-0 focus:outline-none focus:ring-0"
                     list="allTasks"
                     v-model="searchTask"
                     onblur="this.value = ''"
                  />
                  <datalist id="allTasks">
                     <option value="Task1"></option>
                     <option value="Task2"></option>
                  </datalist>
                  <div
                     class="px-3 py-2 h-full flex justify-center items-center relative hover:bg-[#D1D5DB] border-l rounded-r-lg border-neutral-400 hover:cursor-pointer"
                  >
                     <div class="w-8 h-8"><img src="../assets/search.svg" alt="" srcset="" /></div>
                  </div>
               </div>
            </div>
            <div
               @click="toggleSlideNewTask"
               class="w-40 pl-3 pr-1 py-2 bg-gray-700 rounded-lg border border-gray-700 justify-center items-center gap-2 inline-flex hover:bg-gray-600 hover:cursor-pointer"
            >
               <div class="w-24 h-full text-white text-xl font-bold leading-relaxed flex items-center">Add task</div>
               <div class="w-8 h-8 flex justify-center items-center">
                  <div class="w-full h-full flex justify-center items-center"><img src="../assets/add.svg" alt="" srcset="" /></div>
               </div>
            </div>
         </div>
      </div>
      <div class="w-[70rem] mt-12 mb-8 h-full flex justify-between">
         <div class="w-64 h-full px-1" v-for="(tasks, statusTask) in storeTasks" :key="statusTask">
            <button class="w-full h-6 flex justify-between">
               <div class="text-slate-600 text-xl font-bold">{{ statusTask }}</div>
               <div
                  class="w-6 h-full flex justify-center items-center hover:cursor-pointer hover:bg-[#d1d5db] rounded-lg border-2 border-[#2A3647]"
                  @click="toggleSlideNewTask"
               >
                  <img src="../assets/add_plus_small.svg" alt="" srcset="" />
               </div>
            </button>
            <div class="w-full h-full flex flex-col justify-start gap-2 pt-6" v-if="!statusTask">
               <router-link
                  to="/addtask"
                  class="w-64 h-12 bg-neutral-200 rounded-lg shadow border border-neutral-400 flex-col justify-center items-center gap-2.5 inline-flex"
               >
                  <div class="text-neutral-400 text-base font-normal leading-tight">No tasks To do</div>
               </router-link>
            </div>
            <div class="w-full h-full flex flex-col justify-start gap-2 pt-4">
               <div
                  class="w-full h-64 px-4 py-2 bg-white rounded-3xl shadow flex-col justify-center items-start inline-flex hover:cursor-pointer"
                  v-for="(task, task_id) in tasks"
                  :key="task_id"
               >
                  <div class="self-stretch h-56 flex-col justify-start items-stretch gap-2 flex">
                     <div class="px-2 py-1 w-full h-12 bg-gray-600 rounded-lg justify-start items-start inline-flex">
                        <div class="w-full h-12 text-white text-base font-normal leading-tight">{{ storeCategory[task.category] }}</div>
                     </div>
                     <div class="self-stretch h-full rounded-lg flex-col justify-start items-start gap-2 flex">
                        <div class="h-4 self-stretch text-gray-700 text-base font-bold leading-tight">{{ task.title }}</div>
                        <div class="h-12 self-stretch text-neutral-400 text-base font-normal leading-tight">{{ task.description }}</div>
                     </div>
                     <div class="w-full h-4 relative flex justify-between items-center">
                        <div class="h-2 w-1/2">
                           <div class="h-full w-full rounded-lg border-2 border-gray-500" v-if="subtask in task.subtasks">
                              <div class="h-full w-1/2 bg-blue-500"></div>
                           </div>
                        </div>
                        <div class="text-black text-xs font-normal leading-none" v-if="subtask in task.subtasks">1/2 Subtasks</div>
                     </div>
                     <div class="self-stretch justify-between items-center flex gap-x-2">
                        <div class="w-5/6 justify-start items-start flex px-2">
                           <div class="w-full h-10 bg-gray-600 rounded-md justify-start px-2 items-center flex text-sm text-white gap-3">
                              <img class="w-4 h-4" src="/src/assets/person_transparent.svg" alt="" srcset="" />
                              <div class="w-full">
                                 {{ storeContacts[task.assigned].last_name.substring(0, 1) }}. {{ storeContacts[task.assigned].last_name }}
                              </div>
                           </div>
                        </div>
                        <div class="w-6 h-6 rounded-full justify-center items-center flex" :style="{ backgroundColor: prioBackgroundColor(task.prio) }">
                           <img class="w-4 h-4" :src="`/src/assets/${task.prio}_transparent.svg`" alt="" srcset="" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="w-full h-full z-50 absolute top-0 left-0" v-if="SlideNewTaskActive">
      <SlideNewTask></SlideNewTask>
   </div>
   <div class="w-full h-full z-50 absolute top-0 left-0" v-if="SlideCurrentTaskActive">
      <SlideCurrentTask></SlideCurrentTask>
   </div>
   <!--  <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
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
   </div> -->
</template>
<script setup>
import SlideNewTask from "./SlideNewTask.vue";
import SlideCurrentTask from "./SlideCurrentTask.vue";

import { ref } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";

const searchTask = ref("");

const inputSubtask = ref("");
const listSubtasks = ref([]);

const store = useStore();
const SlideNewTaskActive = computed(() => store.state.SlideNewTaskActive);
const SlideCurrentTaskActive = computed(() => store.state.SlideCurrentTaskActive);
const storeTasks = computed(() => store.state.tasks);
const storeCategory = computed(() => store.state.categories);
const storeContacts = computed(() => store.state.contacts);

const toggleSlideNewTask = () => {
   store.commit("toggleSlideNewTask");
};

const toggleSlideCurrentTask = () => {
   store.commit("toggleSlideCurrentTask");
};

function addSubtask() {
   listSubtasks.value.push(inputSubtask.value);
   inputSubtask.value = "";
   alert(listSubtasks.value);
}
function prioBackgroundColor(prio) {
   switch (prio) {
      case "Urgent":
         return "red";
      case "Medium":
         return "orange";
      case "Low":
         return "green";
      default:
         return "transparent";
   }
}
</script>
<style scoped>
input::-webkit-calendar-picker-indicator {
   opacity: 0;
}
</style>
