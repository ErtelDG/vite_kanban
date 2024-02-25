<template>
   <div class="bgSlideNew absolute left-0 top-0 w-full h-full" :class="{ bgSlideNewClose: closeSlider }"></div>
   <div class="w-full h-full flex justify-center items-center">
      <div class="slideNew absolute left-0 top-0 w-full h-full flex justify-center pt-16 xl:-ml-12" :class="{ slideClose: closeSlider }">
         <form
            class="rounded-3xl p-4 w-full sm:w-[32rem] md2:w-[42rem] md3:w-[36rem] lg:w-[42rem] 1xl:w-[64rem] h-5/6 1xl:h-3/4 flex flex-col items-center 1xl:justify-center left-20 overflow-scroll bg-white"
            @submit.prevent="add_new_task"
         >
            <div class="flex flex-col w-full">
               <div class="text-black text-6xl font-bold w-full pb-6 text-center 1xl:text-start">Add Task</div>
               <div class="flex flex-col items-center 1xl:flex-row 1xl:items-stretch w-full gap-4">
                  <div class="w-full sm:w-[27.5rem] h-full flex flex-col justify-between items-end gap-4 1xl:gap-0">
                     <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
                        <div class="self-stretch">
                           <span class="text-gray-700 text-xl font-normal leading-normal">Title</span>
                        </div>
                        <div class="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
                           <div
                              class="self-stretch px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-start items-center gap-2.5 inline-flex h-10"
                           >
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

                           <option class="text-lg font-normal" v-for="(contact, id) in store_contacts" :key="id" :value="id" id="assigned-0">
                              {{ contact.last_name }}, {{ contact.first_name }} <input type="hidden" />
                           </option>
                        </select>
                     </div>
                  </div>
                  <div class="w-8 h-full flex justify-center items-center"><div class="h-full w-1 rounded-3xl bg-[#D1D1D1]"></div></div>
                  <div class="w-full sm:w-[27.5rem] h-full flex flex-col justify-between">
                     <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
                        <div>
                           <span class="text-gray-700 text-xl font-normal leading-normal">Due date</span>
                        </div>
                        <div class="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
                           <div
                              class="self-stretch px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex h-10 relative"
                           >
                              <input v-model="add_date" type="date" class="text-gray-700 text-xl font-normal leading-normal outline-none" required />
                           </div>
                           <div class="self-stretch text-rose-400 text-xs font-normal leading-none" v-if="!add_date">This field is required</div>
                        </div>
                     </div>
                     <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
                        <div class="text-black text-xl font-normal leading-normal">Prio</div>
                        <div class="flex flex-col sm:flex-row sm:justify-between w-full">
                           <input class="" v-on:change="updatePrio('Urgent')" type="radio" id="urgent" value="Urgent" required />
                           <label
                              for="urgent"
                              :style="{ backgroundColor: add_prio === 'Urgent' ? 'lightgrey' : '' }"
                              class="flex justify-center items-center text-black text-xl font-normal leading-normal px-6 h-14 w-full py-1 grow shrink basis-0 rounded-lg shadow gap-2 sm:mr-2 hover:cursor-pointer"
                              ><div>Urgent</div>
                              <img src="../assets/prio_alta_red.svg" alt="" srcset=""
                           /></label>

                           <input v-on:change="updatePrio('Medium')" type="radio" id="medium" value="Medium" />
                           <label
                              for="medium"
                              :style="{ backgroundColor: add_prio === 'Medium' ? 'lightgrey' : '' }"
                              class="flex justify-center items-center text-black text-xl font-normal leading-normal px-6 h-14 py-1 bg-white grow shrink basis-0 rounded-lg shadow gap-2 sm:mx-2 hover:cursor-pointer"
                              ><div>Medium</div>
                              <img src="../assets/prio_media_white.svg" alt="" srcset=""
                           /></label>

                           <input v-on:change="updatePrio('Low')" type="radio" id="low" value="Low" />
                           <label
                              for="low"
                              :style="{ backgroundColor: add_prio === 'Low' ? 'lightgrey' : '' }"
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

                           <option class="text-lg font-normal" v-for="(category, id) in store_categories" :key="id" :value="id">{{ category }}</option>
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
      </div>
   </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";

const store = useStore();

const store_contacts = computed(() => store.state.contacts);
const store_categories = computed(() => store.state.categories);

const add_title = ref("");
const add_description = ref("");
const add_assigned = ref("");
const add_prio = ref("Medium");
const add_date = ref("");
const add_category = ref("");

const closeSlider = ref(false);

const clear_input = () => {
   add_title.value = "";
   add_description.value = "";
   add_assigned.value = "";
   add_prio.value = "";
   add_date.value = "";
   add_category.value = "";
};

const add_new_task = async () => {
   const newTask = JSON.stringify({
      status: "ToDo",
      title: add_title.value,
      description: add_description.value,
      assigned: add_assigned.value,
      prio: add_prio.value,
      due_date: add_date.value,
      category: add_category.value,
      subtasks: [],
   });

   const requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: newTask,
   };

   await fetch("https://minibackendgo.denniscodeworld.de/add_task", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
   store.dispatch("fetchData", "tasks");
   toggleSlideNewTask();
   add_prio.value = "Medium";
   console.log("Created Task:", newTask);
};

const updatePrio = (value) => {
   add_prio.value = value;
};

const toggleSlideNewTask = () => {
   closeSlider.value = true;
   setTimeout(() => {
      store.commit("toggleSlideNewTask");
   }, 1500);
   clear_input();
};
</script>

<style scoped>
.bgSlideNew {
   background-color: rgb(229 231 235);
   opacity: 0.8;
   animation-name: bgSlideNewTaskAnimation;
   animation-duration: 1s;
   z-index: 0;
}

@keyframes bgSlideNewTaskAnimation {
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
   animation-name: slideNewTaskIn;
   animation-duration: 1.5s;
}

@keyframes slideNewTaskIn {
   from {
      left: 100%;
   }
   to {
      left: 0%;
   }
}

.slideClose {
   animation-name: slideCloseOut;
   animation-duration: 1.5s;
}

@keyframes slideCloseOut {
   from {
      left: 0%;
   }
   to {
      left: 100%;
   }
}

.font-condensed {
   font-stretch: expanded;
}

input[type="radio"] {
   visibility: hidden;
   width: 0;
}

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
</style>
