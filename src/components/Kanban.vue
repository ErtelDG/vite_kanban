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
         <div class="w-64 h-full px-1">
            <router-link to="/addtask" class="w-full h-6 flex justify-between"
               ><div class="text-slate-600 text-xl font-bold">To do</div>
               <div class="w-6 h-full flex justify-center items-center hover:cursor-pointer hover:bg-[#d1d5db] rounded-lg border-2 border-[#2A3647]">
                  <img src="../assets/add_plus_small.svg" alt="" srcset="" /></div
            ></router-link>
            <div class="w-full h-full flex flex-col justify-start gap-2 pt-4">
               <div class="w-64 h-64 p-4 bg-white rounded-3xl shadow flex-col justify-center items-center gap-2.5 inline-flex hover:cursor-pointer">
                  <div class="self-stretch h-56 flex-col justify-start items-start gap-6 flex">
                     <div class="px-4 py-1 bg-blue-700 rounded-lg justify-start items-start gap-2.5 inline-flex">
                        <div class="text-white text-base font-normal leading-tight">Category</div>
                     </div>
                     <div class="self-stretch h-20 rounded-lg flex-col justify-start items-start gap-2 flex">
                        <div class="self-stretch text-gray-700 text-base font-bold leading-tight">Title</div>
                        <div class="self-stretch text-neutral-400 text-base font-normal leading-tight">Description...</div>
                     </div>
                     <div class="w-56 h-4 relative">
                        <div class="h-2 pr-16 left-0 top-[4px] absolute bg-zinc-100 rounded-lg flex-col justify-center items-start gap-2.5 inline-flex">
                           <div class="self-stretch h-2 bg-blue-500 rounded-2xl"></div>
                        </div>
                        <div class="left-[139px] top-0 absolute text-black text-xs font-normal leading-none">1/2 Subtasks</div>
                     </div>
                     <div class="self-stretch justify-between items-center inline-flex">
                        <div class="justify-start items-start flex">
                           <div class="w-8 h-8 bg-white rounded-3xl justify-center items-center gap-2.5 flex">
                              <div class="grow shrink basis-0 self-stretch relative">
                                 <div class="w-8 h-8 left-0 top-0 absolute bg-orange-500 rounded-full border border-white"></div>
                                 <div class="w-5 h-2 left-[5.33px] top-[12.19px] absolute text-center text-white text-xs font-normal leading-none">U1</div>
                              </div>
                           </div>
                           <div class="w-8 h-8 bg-white rounded-3xl justify-center items-center gap-2.5 flex">
                              <div class="grow shrink basis-0 self-stretch relative">
                                 <div class="w-8 h-8 left-0 top-0 absolute bg-teal-400 rounded-full border border-white"></div>
                                 <div class="w-5 h-2 left-[5.33px] top-[12.19px] absolute text-center text-white text-xs font-normal leading-none">U2</div>
                              </div>
                           </div>
                           <div class="w-8 h-8 bg-white rounded-3xl justify-center items-center gap-2.5 flex">
                              <div class="grow shrink basis-0 self-stretch relative">
                                 <div class="w-8 h-8 left-0 top-0 absolute bg-violet-900 rounded-full border border-white"></div>
                                 <div class="w-5 h-2 left-[5.33px] top-[12.19px] absolute text-center text-white text-xs font-normal leading-none">U3</div>
                              </div>
                           </div>
                        </div>
                        <div class="w-8 h-8 px-4 py-2.5 justify-center items-center gap-2.5 flex">
                           <div class="w-4 h-1.5 relative">
                              <div class="w-4 h-1.5 left-0 top-0 absolute"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="w-64 h-full px-1">
            <router-link to="/addtask" class="w-full h-6 flex justify-between"
               ><div class="text-slate-600 text-xl font-bold">In progres</div>
               <div class="w-6 h-full flex justify-center items-center hover:cursor-pointer hover:bg-[#d1d5db] rounded-lg border-2 border-[#2A3647]">
                  <img src="../assets/add_plus_small.svg" alt="" srcset="" /></div
            ></router-link>
            <div class="w-full h-full flex flex-col justify-start gap-2 pt-4">
               <router-link
                  to="/addtask"
                  class="w-64 h-12 bg-neutral-200 rounded-lg shadow border border-neutral-400 flex-col justify-center items-center gap-2.5 inline-flex"
               >
                  <div class="text-neutral-400 text-base font-normal font-['Open Sans'] leading-tight">No tasks To do</div>
               </router-link>
            </div>
         </div>
         <div class="w-64 h-full px-1">
            <router-link to="/addtask" class="w-full h-6 flex justify-between"
               ><div class="text-slate-600 text-xl font-bold">Await feedback</div>
               <div class="w-6 h-full flex justify-center items-center hover:cursor-pointer hover:bg-[#d1d5db] rounded-lg border-2 border-[#2A3647]">
                  <img src="../assets/add_plus_small.svg" alt="" srcset="" /></div
            ></router-link>
            <div class="w-full h-full flex flex-col justify-start gap-2 pt-4"></div>
         </div>
         <div class="w-64 h-full px-1">
            <router-link to="/addtask" class="w-full h-6 flex justify-between"
               ><div class="text-slate-600 text-xl font-bold">Done</div>
               <div class="w-6 h-full flex justify-center items-center hover:cursor-pointer hover:bg-[#d1d5db] rounded-lg border-2 border-[#2A3647]">
                  <img src="../assets/add_plus_small.svg" alt="" srcset="" /></div
            ></router-link>
            <div class="w-full h-full flex flex-col justify-start gap-2 pt-4"></div>
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
</script>
<style scoped>
input::-webkit-calendar-picker-indicator {
   opacity: 0;
}
</style>
