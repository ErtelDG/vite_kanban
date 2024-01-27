<template>
   <div class="w-full h-full pl-16 flex flex-col justify-start pt-8">
      <div class="text-black text-6xl font-bold">Add Task</div>
      <form class="flex mt-12 h-[26rem]">
         <div class="w-[27.5rem] h-full flex flex-col justify-between items-end">
            <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
               <div class="self-stretch">
                  <span class="text-gray-700 text-xl font-normal leading-normal">Title</span>
               </div>
               <div class="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
                  <div class="self-stretch px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-start items-center gap-2.5 inline-flex h-10">
                     <input
                        v-model="title"
                        class="grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal outline-none"
                        placeholder="Enter a title"
                     />
                  </div>
                  <div class="w-28 text-rose-400 text-xs font-normal leading-none" v-if="!title">This field is required</div>
               </div>
            </div>
            <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
               <div class="self-stretch text-gray-700 text-xl font-normal leading-normal">Description</div>
               <div class="self-stretch h-32 flex-col justify-start items-start gap-1 flex">
                  <div class="self-stretch h-28 px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                     <textarea
                        v-model="description"
                        class="grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal outline-none h-full w-full"
                        placeholder="Enter a Description"
                     ></textarea>
                     <div class="w-5 h-5 left-[26rem] top-24 absolute">
                        <div class="w-5 h-5 left-0 top-0 absolute"></div>
                     </div>
                  </div>
                  <div class="self-stretch text-rose-400 text-xs font-normal leading-none" v-if="!description">This field is required</div>
               </div>
            </div>
            <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
               <div class="grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal">Assigned to</div>
               <select
                  v-model="assigned"
                  required
                  class="w-full px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex hover:cursor-pointer h-10"
               >
                  <option label="Select contact to assign" class="text-[#9CA3AF] text-xl font-normal leading-normal"></option>

                  <option value="Assignment_1" id="assigned-0">Assignment 1</option>
                  <option value="Assignment_2" id="assigned-1">Assignment 2</option>
                  <option value="Assignment_3" id="assigned-2">Assignment 3</option>
               </select>
            </div>
         </div>
         <div class="w-24 h-full flex justify-center items-center"><div class="h-full w-1 rounded-3xl bg-[#D1D1D1]"></div></div>
         <div class="w-[27.5rem] h-full flex flex-col justify-between">
            <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
               <div>
                  <span class="text-gray-700 text-xl font-normal leading-normal">Due date</span>
               </div>
               <div class="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
                  <div class="self-stretch px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex h-10">
                     <input v-model="date" type="date" class="grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal outline-none" />
                  </div>
                  <div class="self-stretch text-rose-400 text-xs font-normal leading-none" v-if="!date">This field is required</div>
               </div>
            </div>
            <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
               <div class="text-black text-xl font-normal leading-normal">Prio</div>
               <div class="flex justify-between w-full">
                  <input v-bind="prio" type="radio" id="urgent" name="prio" value="Urgent" />
                  <label
                     for="urgent"
                     class="flex justify-center items-center text-black text-xl font-normal leading-normal px-6 h-14 py-1 bg-white grow shrink basis-0 rounded-lg shadow gap-2 mr-2 hover:cursor-pointer"
                     ><div>Urgent</div>
                     <img src="../assets/prio_alta_red.svg" alt="" srcset=""
                  /></label>

                  <input v-bind="prio" type="radio" id="medium" name="prio" value="Mediun" checked="checked" />
                  <label
                     for="medium"
                     class="flex justify-center items-center text-black text-xl font-normal leading-normal px-6 h-14 py-1 bg-white grow shrink basis-0 rounded-lg shadow gap-2 mx-2 hover:cursor-pointer"
                     ><div>Medium</div>
                     <img src="../assets/prio_media_white.svg" alt="" srcset=""
                  /></label>

                  <input v-bind="prio" type="radio" id="low" name="prio" value="Low" />
                  <label
                     for="low"
                     class="flex justify-center items-center text-black text-xl font-normal leading-normal px-6 h-14 py-1 bg-white grow shrink basis-0 rounded-lg shadow gap-2 ml-2 hover:cursor-pointer"
                     ><div>Low</div>
                     <img src="../assets/prio_low_green.svg" alt="" srcset=""
                  /></label>
               </div>
               <div class="w-full h-3"></div>
            </div>
            <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
               <div class="w-full grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal">Category</div>
               <select
                  v-model="category"
                  required
                  class="w-full px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex hover:cursor-pointer h-10"
               >
                  <option label="Select task category" class="text-[#9CA3AF] text-xl font-normal leading-normal"></option>

                  <option id="category-0">Requirements Analysis</option>
                  <option id="category-1">Software Design and Prototyping</option>
                  <option id="category-2">Implementation and Coding</option>
                  <option id="category-3">Software Testing</option>
                  <option id="category-4">Maintenance and Support</option>
               </select>
               <div class="w-full h-3"></div>
            </div>
            <div class="h-14 flex justify-end items-center gap-4">
               <div
                  class="w-28 h-full p-4 bg-neutral-100 rounded-lg border border-gray-700 justify-center items-center gap-1 flex hover:cursor-pointer hover:bg-[#d1d5db]"
               >
                  <div class="text-gray-700 text-xl font-normal leading-normal">Clear</div>
                  <div class="w-6 h-6 relative"><img src="../assets/iconoir_cancel.svg" alt="" srcset="" /></div>
               </div>
               <div class="h-full p-4 bg-gray-700 rounded-lg justify-center items-center gap-1 flex w-48 hover:bg-gray-600 hover:cursor-pointer">
                  <div class="w-32 text-white text-xl font-normal leading-relaxed">Create Task</div>
                  <div class="w-6 h-6 relative">
                     <div class="w-6 h-6 left-0 top-0 absolute"><img src="../assets/check.svg" alt="" srcset="" /></div>
                  </div>
               </div>
            </div>
         </div>
      </form>
   </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("");
const description = ref("");
const assigned = ref("");
const prio = ref("");
const date = ref("");
const category = ref("");
</script>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
   background: transparent;
   bottom: 0;
   color: transparent;
   cursor: pointer;
   height: auto;
   left: 0;
   position: absolute;
   right: 0;
   top: 0;
   width: auto;
}
input[type="radio"] {
   visibility: hidden;
   width: 0;
}

input[type="radio"]:checked + label {
   background-color: #d1d5db;
}
</style>
