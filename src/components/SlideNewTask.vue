<template>
   <div class="bgSlideNew relative w-full h-full" :class="{ bgSlideNewClose: closeSlider }"></div>

   <form
      class="bg-white rounded-3xl absolute slideNew w-full h-hull flex flex-col items-center justify-center"
      :class="{ slideClose: closeSlider }"
      @submit.prevent="add_new_task"
   >
      <div class="">
         <div class="text-black text-6xl font-bold w-full pb-6">Add Task</div>
         <div class="flex h-[26rem] w-full">
            <div class="w-[27.5rem] h-full flex flex-col justify-between items-end">
               <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
                  <div class="self-stretch">
                     <span class="text-gray-700 text-xl font-normal leading-normal">Title</span>
                  </div>
                  <div class="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
                     <div class="self-stretch px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-start items-center gap-2.5 inline-flex h-10">
                        <input
                           v-model="add_title"
                           class="grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal outline-none"
                           placeholder="Enter a title"
                           required
                        />
                     </div>
                     <div class="w-28 text-rose-400 text-xs font-normal leading-none" v-if="!add_title">This field is required</div>
                  </div>
               </div>
               <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
                  <div class="self-stretch text-gray-700 text-xl font-normal leading-normal">Description</div>
                  <div class="self-stretch h-32 flex-col justify-start items-start gap-1 flex">
                     <div class="self-stretch h-28 px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                        <textarea
                           v-model="add_description"
                           class="grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal outline-none h-full w-full"
                           placeholder="Enter a Description"
                           required
                        ></textarea>
                        <div class="w-5 h-5 left-[26rem] top-24 absolute">
                           <div class="w-5 h-5 left-0 top-0 absolute"></div>
                        </div>
                     </div>
                     <div class="self-stretch text-rose-400 text-xs font-normal leading-none" v-if="!add_description">This field is required</div>
                  </div>
               </div>
               <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
                  <div class="grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal">Assigned to</div>
                  <select
                     v-model="add_assigned"
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
                        <input
                           v-model="add_date"
                           type="date"
                           class="grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal outline-none"
                           required
                        />
                     </div>
                     <div class="self-stretch text-rose-400 text-xs font-normal leading-none" v-if="!add_date">This field is required</div>
                  </div>
               </div>
               <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
                  <div class="text-black text-xl font-normal leading-normal">Prio</div>
                  <div class="flex justify-between w-full">
                     <input v-on:change="updatePrio('Urgent')" type="radio" id="urgent" name="add_prio" value="Urgent" required />
                     <label
                        for="urgent"
                        class="flex justify-center items-center text-black text-xl font-normal leading-normal px-6 h-14 py-1 bg-white grow shrink basis-0 rounded-lg shadow gap-2 mr-2 hover:cursor-pointer"
                        ><div>Urgent</div>
                        <img src="../assets/prio_alta_red.svg" alt="" srcset=""
                     /></label>

                     <input v-on:change="updatePrio('Medium')" type="radio" id="medium" name="add_prio" value="Medium" />
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
                  <div class="w-full h-3"></div>
               </div>
               <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
                  <div class="w-full grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal">Category</div>
                  <select
                     v-model="add_category"
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
                     @click="toggleSlideNewTask"
                     class="w-28 h-full p-4 bg-neutral-100 rounded-lg border border-gray-700 justify-center items-center gap-1 flex hover:cursor-pointer hover:bg-[#d1d5db]"
                  >
                     <div class="text-gray-700 text-xl font-normal leading-normal">Cancel</div>
                     <div class="w-6 h-6 flex justify-center items-center"><img src="../assets/iconoir_cancel.svg" alt="" srcset="" /></div>
                  </div>
                  <button
                     type="submit"
                     class="h-full p-4 bg-gray-700 rounded-lg justify-center items-center gap-1 flex w-48 hover:bg-gray-600 hover:cursor-pointer"
                  >
                     <div class="w-32 text-white text-xl font-normal leading-relaxed">Create Task</div>
                     <div class="w-6 h-6 relative">
                        <div class="w-6 h-6 left-0 top-0 absolute"><img src="../assets/check.svg" alt="" srcset="" /></div>
                     </div>
                  </button>
               </div>
            </div>
         </div>
      </div>
   </form>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";

const add_title = ref("");
const add_description = ref("");
const add_assigned = ref("");
const add_prio = ref("Medium");
const add_date = ref("");
const add_category = ref("");

const closeSlider = ref(false);

const store = useStore();

const add_new_task = () => {
   alert(add_title.value);
   alert(add_description.value);
   alert(add_assigned.value);
   alert(add_prio.value);
   alert(add_date.value);
   alert(add_category.value);
   closeSlider.value = true;
   toggleSlideNewTask();
};

const updatePrio = (value) => {
   add_prio.value = value;
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
