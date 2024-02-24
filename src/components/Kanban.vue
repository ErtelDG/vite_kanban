<template>
   <div class="w-full h-full relative">
      <div class="w-full h-full pl-16 pr-16 flex flex-col justify-start pt-8 gap-y-6">
         <div class="max-w-[80rem] flex flex-col gap-4 sm:flex-row items-center justify-between">
            <div class="text-black text-6xl font-bold flex items-center justify-center">Board</div>

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
         <div class="3xl:w-[80rem] 3xl:h-[calc(100%-6rem)] flex flex-col 3xl:flex-row 3xl:justify-between overflow-scroll 3xl:overflow-hidden">
            <div class="w-full h-full md:px-2 md:border-x-2" v-for="(tasks, statusTask) in storeTasks" :key="statusTask">
               <button class="w-full h-8 flex justify-center md:justify-start 3xl:justify-center px-8">
                  <div class="text-slate-600 text-xl font-bold">{{ statusTask }}</div>
               </button>

               <div class="w-full max-h-full flex flex-wrap flex-1 justify-center md:justify-start 3xl:justify-center items-start gap-8 p-4 overflow-scroll">
                  <div
                     class="w-64 h-64 p-2 bg-white rounded-3xl shadow flex-col justify-center items-start inline-flex hover:cursor-pointer"
                     v-for="(task, task_id) in tasks"
                     :key="task_id"
                  >
                     <div class="self-stretch h-56 flex-col justify-start items-stretch gap-2 flex" @click="showCurrentTask(task.ID_task)">
                        <div class="px-2 py-1 w-full h-12 bg-gray-600 rounded-lg justify-start items-start inline-flex">
                           <div class="w-full h-12 text-white text-base font-normal leading-tight">{{ storeCategory[task.category] }}</div>
                        </div>
                        <div class="self-stretch h-full rounded-lg flex-col justify-start items-start gap-2 flex overflow-scroll">
                           <div class="h-4 self-stretch text-gray-700 text-xs font-bold leading-tight">{{ task.title }}</div>
                           <div class="h-12 self-stretch text-neutral-400 text-xs font-normal leading-tight">{{ task.description }}</div>
                        </div>
                        <div class="w-full h-4 relative flex justify-between items-center">
                           <div class="h-2 w-2/3">
                              <div class="h-full w-full rounded-lg border-2 border-gray-500" v-if="task.subtasks && task.subtasks.length > 0">
                                 <div
                                    class="h-full bg-blue-500"
                                    :style="{
                                       width: 'calc(100% / ' + task.subtasks.length + ' * ' + task.subtasks.filter((subtask) => subtask.checked).length + ')',
                                    }"
                                 ></div>
                              </div>
                           </div>
                           <div class="text-black text-xs font-normal leading-none" v-if="task.subtasks && task.subtasks.length > 0">
                              {{ task.subtasks.filter((subtask) => subtask.checked).length }}/{{ task.subtasks.length }} Subtasks
                           </div>
                        </div>
                        <div class="self-stretch justify-between items-center flex gap-x-2">
                           <div class="w-5/6 justify-start items-start flex">
                              <div class="w-full h-10 bg-gray-600 rounded-md justify-start px-2 items-center flex text-sm text-white gap-3">
                                 <img class="w-4 h-4" src="../assets/person_transparent.svg" alt="" srcset="" />
                                 <div class="w-full" v-if="storeContacts[task.assigned]">
                                    {{ storeContacts[task.assigned].last_name.substring(0, 1) }}. {{ storeContacts[task.assigned].last_name }}
                                 </div>
                              </div>
                           </div>
                           <div class="w-6 h-6 rounded-full justify-center items-center flex" :style="{ backgroundColor: prioBackgroundColor(task.prio) }">
                              <img class="w-4 h-4" :src="`../assets/${task.prio}_transparent.svg`" alt="" srcset="" />
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
   </div>
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

function showCurrentTask(id) {
   for (const key in storeTasks.value) {
      const task = storeTasks.value[key].find((task) => task.ID_task === id);
      if (task) {
         store.commit("setCurrentTask", task);
         return toggleSlideCurrentTask();
      }
   }
   console.log("Aufgabe nicht gefunden.");
   return null;
}

function addSubtask() {
   listSubtasks.value.push(inputSubtask.value);
   inputSubtask.value = "";
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

::-webkit-scrollbar {
   width: 0px;
   background: transparent; /* make scrollbar transparent */
}
</style>
