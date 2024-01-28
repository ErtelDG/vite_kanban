<template>
   <div class="bgSlideNew relative w-full h-full" :class="{ bgSlideNewClose: closeSlider }"></div>

   <form
      class="bg-white rounded-3xl absolute slideNew w-full h-hull flex items-center justify-center"
      :class="{ slideClose: closeSlider }"
      @submit.prevent="current_new_task"
   >
      <div class="w-[64rem] h-full flex flex-col items-center p-4">
         <div class="pb-6 w-full">
            <input class="text-black text-6xl font-bold w-full outline-none" :value="current_title" required readonly />

            <div class="w-full h-4 text-rose-400 text-xs font-normal leading-none pl-2" v-if="!current_title">This field is required</div>
         </div>
         <div class="flex h-full w-full justify-center">
            <div class="w-[27.5rem] h-full flex flex-col justify-between items-end">
               <div class="w-full flex justify-between items-center gap-2">
                  <div class="w-36 flex flex-col justify-center items-stretch">
                     <span class="text-gray-700 text-xl font-normal leading-normal">Due date:</span>
                     <div class="self-stretch text-rose-400 text-xs font-normal leading-none h-4"></div>
                  </div>

                  <div class="self-stretch h-16 flex-col justify-center items-center gap-1 flex w-full">
                     <div class="self-stretch px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex h-10 w-full">
                        <input
                           v-model="current_date"
                           type="date"
                           class="grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal outline-none w-full"
                           required
                           readonly
                        />
                     </div>
                     <div class="self-stretch text-rose-400 text-xs font-normal leading-none h-4"><div v-if="!current_date">This field is required</div></div>
                  </div>
               </div>
               <div class="w-full flex justify-between items-center gap-4 pb-4">
                  <div class="text-black text-xl font-normal leading-normal">Prio:</div>
                  <div class="flex justify-between w-full">
                     <input v-on:change="updatePrio('Urgent')" type="radio" id="urgent" name="current_prio" value="Urgent" required readonly />
                     <label
                        for="urgent"
                        class="flex justify-center items-center text-black text-xl font-normal leading-normal px-6 h-14 py-1 bg-white grow shrink basis-0 rounded-lg shadow gap-2 mr-2 hover:cursor-pointer"
                        ><div>Urgent</div>
                        <img src="../assets/prio_alta_red.svg" alt="" srcset=""
                     /></label>

                     <input v-on:change="updatePrio('Medium')" type="radio" id="medium" name="current_prio" value="Medium" />
                     <label
                        for="medium"
                        class="flex justify-center items-center text-black text-xl font-normal leading-normal px-6 h-14 py-1 bg-white grow shrink basis-0 rounded-lg shadow gap-2 mx-2 hover:cursor-pointer"
                        ><div>Medium</div>
                        <img src="../assets/prio_media_white.svg" alt="" srcset=""
                     /></label>

                     <input v-on:change="updatePrio('Low')" type="radio" id="low" name="prio" value="Low" />
                     <label
                        for="low"
                        class="flex justify-center items-center text-black text-xl font-normal leading-normal px-6 h-14 py-1 bg-white grow shrink basis-0 rounded-lg shadow gap-2 ml-2 hover:cursor-pointer"
                        ><div>Low</div>
                        <img src="../assets/prio_low_green.svg" alt="" srcset=""
                     /></label>
                  </div>
               </div>
               <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
                  <div class="self-stretch text-gray-700 text-xl font-normal leading-normal">Description</div>
                  <div class="self-stretch h-18 flex-col justify-start items-start gap-1 flex">
                     <div class="self-stretch h-14 px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                        <textarea
                           v-model="current_description"
                           class="grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal outline-none h-full w-full"
                           placeholder="Enter a Description"
                           required
                           readonly
                        ></textarea>
                        <div class="w-5 h-5 left-[26rem] top-24 absolute">
                           <div class="w-5 h-5 left-0 top-0 absolute"></div>
                        </div>
                     </div>
                     <div class="self-stretch text-rose-400 text-xs font-normal leading-none h-4">
                        <div v-if="!current_description">This field is required</div>
                     </div>
                  </div>
               </div>
               <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
                  <div class="grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal">Assigned to</div>
                  <select
                     v-model="current_assigned"
                     required
                     class="w-full px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex hover:cursor-pointer h-10"
                  >
                     <option label="Select contact to assign" class="text-[#9CA3AF] text-xl font-normal leading-normal"></option>

                     <option value="Assignment_1" id="assigned-0">Assignment 1</option>
                     <option value="Assignment_2" id="assigned-1">Assignment 2</option>
                     <option value="Assignment_3" id="assigned-2">Assignment 3</option>
                  </select>
                  <div class="self-stretch text-rose-400 text-xs font-normal leading-none h-4"></div>
               </div>
               <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
                  <div class="w-full grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal">Category</div>
                  <select
                     v-model="current_category"
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
                  <div class="self-stretch text-rose-400 text-xs font-normal leading-none h-4"></div>
               </div>
            </div>
            <div class="w-24 h-full flex justify-center items-center"><div class="h-full w-1 rounded-3xl bg-[#D1D1D1]"></div></div>
            <div class="w-[27.5rem] h-full flex flex-col justify-between">
               <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
                  <div class="w-full grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal">Category</div>
                  <select
                     v-model="current_category"
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
               <div class="w-full h-8 flex justify-end items-center gap-4 pb-4">
                  <div
                     @click="toggleSlideNewTask"
                     class="h-full px-2  border-gray-700 justify-center items-center gap-1 flex hover:cursor-pointer hover:bg-[#d1d5db]"
                  >
                     <div class="w-4 h-4 flex justify-center items-center"><img src="../assets/iconoir_cancel.svg" alt="" srcset="" /></div>
                     <div class="text-gray-700 text-lg font-normal leading-normal">Close</div>
                  </div>
                  <div
                     @click="toggleSlideNewTask"
                     class="h-full px-2 border-l-2 border-gray-700 justify-center items-center gap-1 flex hover:cursor-pointer hover:bg-[#d1d5db]"
                  >
                     <div class="w-4 h-4 flex justify-center items-center"><img src="../assets/slider_current_task_deleted.svg" alt="" srcset="" /></div>
                     <div class="text-gray-700 text-lg font-normal leading-normal">Delete</div>
                  </div>
                  <div
                     @click="toggleSlideNewTask"
                     class="h-full px-2 border-l-2 border-gray-700 justify-center items-center gap-1 flex hover:cursor-pointer hover:bg-[#d1d5db]"
                  >
                     <div class="w-4 h-4 flex justify-center items-center"><img src="../assets/slider_current_task_edit.svg" alt="" srcset="" /></div>
                     <div class="text-gray-700 text-lg font-normal leading-normal">Edit</div>
                  </div>
                  <button
                     type="submit"
                     class="h-full px-2 border-l-2 border-gray-700 justify-center items-center gap-1 flex hover:cursor-pointer hover:bg-[#d1d5db]"
                  >
                     <div class="w-6 h-6 flex justify-center items-center"><img src="../assets/disk.svg" alt="" srcset="" /></div>
                     <div class="text-gray-700 text-lg font-normal leading-normal">Save Task</div>
                  </button>
               </div>
            </div>
         </div>
      </div>
   </form>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";

const current_title = ref("");
const current_description = ref("");
const current_assigned = ref("");
const current_prio = ref("");
const current_date = ref("");
const current_category = ref("");

const closeSlider = ref(false);

const store = useStore();

const initialValues = () => {
   current_title.value = "Current Title";
   current_description.value = "Current Description";
   current_assigned.value = "Assignment_3";
   current_prio.value = "Medium";
   current_date.value = "2024-01-01";
   current_category.value = "Software Testing";
};

onMounted(() => {
   initialValues();
});

const current_new_task = () => {
   alert(current_title.value);
   alert(current_description.value);
   alert(current_assigned.value);
   alert(current_prio.value);
   alert(current_date.value);
   alert(current_category.value);
   closeSlider.value = true;
   toggleSlideNewTask();
};

const updatePrio = (value) => {
   current_prio.value = value;
};

const toggleSlideNewTask = () => {
   closeSlider.value = true;
   setTimeout(() => {
      store.commit("toggleSlideNewTask");
   }, 1500);
};
</script>

<style scoped>
.bgSlideNew {
   background-color: rgb(229 231 235);
   opacity: 0.8;
   animation-name: bgSlideNewContactAnimation;
   animation-duration: 1s;
}

@keyframes bgSlideNewContactAnimation {
   from {
      background-color: rgb(229 231 235);
      opacity: 0;
   }
   to {
      background-color: rgb(229 231 235);
      opacity: 0.8;
   }
}

.bgSlideNewClose {
   opacity: 0;
   background-color: rgb(229 231 235);
   animation-name: bgSlideNewCloseAnimation;
   animation-duration: 1.5s;
}

@keyframes bgSlideNewCloseAnimation {
   from {
      background-color: rgb(229 231 235);
      opacity: 0.8;
   }
   to {
      background-color: rgb(229 231 235);
      opacity: 0;
   }
}
.slideNew {
   left: calc(50% - (76rem / 2) - 7.5rem);
   top: 4rem;
   width: 76rem;
   height: 37rem;
   background-color: white;
   animation-name: slideNewContactIn;
   animation-duration: 1.5s;
}

@keyframes slideNewContactIn {
   from {
      left: 100%;
   }
   to {
      left: calc(50% - (76rem / 2) - 7.5rem);
   }
}

.slideClose {
   left: 100vw;
   animation-name: slideCloseOut;
   animation-duration: 1.5s;
}

@keyframes slideCloseOut {
   from {
      left: calc(50% - (76rem / 2) - 7.5rem);
   }
   to {
      left: 100vw;
   }
}

.font-condensed {
   font-stretch: expanded;
}

input[type="radio"] {
   visibility: hidden;
   width: 0;
}

input[type="radio"]:checked + label {
   background-color: #d1d5db;
}
</style>
