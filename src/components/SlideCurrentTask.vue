<template>
   <div class="bgSlideNew relative w-full h-full" :class="{ bgSlideNewClose: closeSlider }"></div>

   <form
      class="bg-white rounded-3xl absolute slideNew w-full h-hull flex items-center justify-center"
      :class="{ slideClose: closeSlider }"
      @submit.prevent="updateCurrentTask"
   >
      <div class="w-[64rem] h-full flex flex-col items-center p-4">
         <div class="pb-4 w-full">
            <input
               class="text-black text-5xl font-bold w-full outline-none p-2"
               :class="{ 'rounded-lg': isEditable, border: isEditable, 'border-neutral-300': isEditable }"
               v-model="current_title"
               required
               :readonly="!isEditable"
            />

            <div class="w-full h-4 text-rose-400 text-xs font-normal leading-none pl-2" v-if="!current_title">This field is required</div>
         </div>
         <div class="flex h-full w-full justify-center">
            <div class="w-[27.5rem] h-full flex flex-col justify-between items-end">
               <div class="w-full justify-between items-start gap-2 inline-flex">
                  <div class="w-18">
                     <span class="text-gray-700 text-xl font-normal leading-normal">Due date:</span>
                  </div>
                  <div class="self-stretch h-16 flex-col justify-start items-start gap-1 flex w-3/4">
                     <div class="self-stretch px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex h-10 relative">
                        <input
                           v-model="current_date"
                           type="date"
                           class="text-gray-700 text-xl font-normal leading-normal outline-none"
                           required
                           :readonly="!isEditable"
                        />
                     </div>
                     <div class="self-stretch text-rose-400 text-xs font-normal leading-none" v-if="!current_date">This field is required</div>
                  </div>
               </div>
               <div class="w-full flex-col justify-between items-center gap-4">
                  <div class="text-black text-xl font-normal leading-normal pb-2">Priority:</div>
                  <div class="flex justify-between w-full">
                     <input @click="updatePrio('Urgent')" type="radio" id="urgent" value="Urgent" :disabled="!isEditable" />
                     <label
                        for="urgent"
                        :style="{ backgroundColor: current_prio === 'Urgent' ? 'lightgrey' : '' }"
                        class="flex justify-center items-center text-black text-xl font-normal leading-normal px-4 h-10 w-full py-1 grow shrink basis-0 rounded-lg shadow gap-2 mr-2 hover:cursor-pointer"
                        ><div>Urgent</div>
                        <img src="../assets/prio_alta_red.svg" alt="" srcset=""
                     /></label>

                     <input @click="updatePrio('Medium')" type="radio" id="medium" value="Medium" :disabled="!isEditable" />
                     <label
                        for="medium"
                        :style="{ backgroundColor: current_prio === 'Medium' ? 'lightgrey' : '' }"
                        class="flex justify-center items-center text-black text-xl font-normal leading-normal px-4 h-10 py-1 bg-white grow shrink basis-0 rounded-lg shadow gap-2 mx-2 hover:cursor-pointer"
                        ><div>Medium</div>
                        <img src="../assets/prio_media_white.svg" alt="" srcset=""
                     /></label>

                     <input @click="updatePrio('Low')" type="radio" id="low" value="Low" :disabled="!isEditable" />
                     <label
                        for="low"
                        :style="{ backgroundColor: current_prio === 'Low' ? 'lightgrey' : '' }"
                        class="flex justify-center items-center text-black text-xl font-normal leading-normal px-4 h-10 py-1 bg-white grow shrink basis-0 rounded-lg shadow gap-2 ml-2 hover:cursor-pointer"
                        ><div>Low</div>
                        <img src="../assets/prio_low_green.svg" alt="" srcset=""
                     /></label>
                  </div>
                  <div class="w-full h-3"></div>
               </div>
               <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
                  <div class="self-stretch text-gray-700 text-xl font-normal leading-normal">Description</div>
                  <div class="self-stretch h-full flex-col justify-start items-start gap-1 flex">
                     <div class="self-stretch h-40 px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-start items-start gap-2.5 inline-flex">
                        <textarea
                           v-model="current_description"
                           class="grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal outline-none h-full w-full"
                           placeholder="Enter a Description"
                           required
                           :readonly="!isEditable"
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
               <div class="w-full flex-col justify-start items-start gap-2 inline-flex pb-4">
                  <div class="grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal">Assigned to</div>
                  <select
                     v-model="current_assigned"
                     required
                     :disabled="!isEditable"
                     class="w-full px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex hover:cursor-pointer h-10"
                  >
                     <option label="Select contact to assign" class="text-[#9CA3AF] text-xl font-normal leading-normal"></option>

                     <option class="text-lg font-normal" v-for="(contact, id) in store_contacts" :key="id" :value="id" id="assigned-0">
                        {{ contact.last_name }}, {{ contact.first_name }} <input type="hidden" />
                     </option>
                  </select>
               </div>
            </div>
            <div class="w-24 h-full flex justify-center items-center"><div class="h-full w-1 rounded-3xl bg-[#D1D1D1]"></div></div>
            <div class="w-[27.5rem] h-full flex flex-col justify-between gap-4">
               <div class="w-full flex flex-col justify-between items-start gap-4 pb-4">
                  <div class="w-full flex-col justify-between items-center gap-4">
                     <div class="text-black text-xl font-normal leading-normal pb-2">Status:</div>
                     <div class="flex justify-between w-full">
                        <input @click="updateStatus('ToDo')" type="radio" id="todo" value="ToDo" :disabled="!isEditable" />
                        <label
                           for="todo"
                           :style="{ backgroundColor: current_status === 'ToDo' ? 'lightgrey' : '' }"
                           class="flex justify-center items-center text-black text-lg font-normal leading-normal px-4 h-8 w-full py-1 grow shrink basis-0 rounded-lg shadow gap-2 mr-2 hover:cursor-pointer"
                           ><div>ToDo</div>
                        </label>

                        <input @click="updateStatus('Progress')" type="radio" id="progress" value="Progress" :disabled="!isEditable" />
                        <label
                           for="progress"
                           :style="{ backgroundColor: current_status === 'Progress' ? 'lightgrey' : '' }"
                           class="flex justify-center items-center text-black text-lg font-normal leading-normal px-4 h-8 py-1 bg-white grow shrink basis-0 rounded-lg shadow gap-2 mx-2 hover:cursor-pointer"
                           ><div>Progress</div>
                        </label>

                        <input @click="updateStatus('Feedback')" type="radio" id="feedback" value="Feedback" :disabled="!isEditable" />
                        <label
                           for="feedback"
                           :style="{ backgroundColor: current_status === 'Feedback' ? 'lightgrey' : '' }"
                           class="flex justify-center items-center text-black text-lg font-normal leading-normal px-4 h-8 py-1 bg-white grow shrink basis-0 rounded-lg shadow gap-2 ml-2 hover:cursor-pointer"
                           ><div>Feedback</div>
                        </label>
                        <input @click="updateStatus('Done')" type="radio" id="done" value="Done" :disabled="!isEditable" />
                        <label
                           for="done"
                           :style="{ backgroundColor: current_status === 'Done' ? 'lightgrey' : '' }"
                           class="flex justify-center items-center text-black text-lg font-normal leading-normal px-4 h-8 py-1 bg-white grow shrink basis-0 rounded-lg shadow gap-2 ml-2 hover:cursor-pointer"
                           ><div>Done</div>
                        </label>
                     </div>
                     <div class="w-full h-3"></div>
                  </div>
                  <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
                     <div class="w-full grow shrink basis-0 text-gray-700 text-xl font-normal leading-normal">Category</div>
                     <select
                        v-model="current_category"
                        required
                        :disabled="!isEditable"
                        class="w-full px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex hover:cursor-pointer h-10"
                     >
                        <option label="Select task category" class="text-[#9CA3AF] text-xl font-normal leading-normal"></option>

                        <option class="text-lg font-normal" v-for="(category, id) in store_categories" :key="id" :value="id">{{ category }}</option>
                     </select>
                     <div class="w-full h-3"></div>
                  </div>
                  <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
                     <div class="w-full justify-between items-start gap-2 inline-flex">
                        <div class="w-18">
                           <span class="text-gray-700 text-xl font-normal leading-normal">Subtask:</span>
                        </div>
                        <div class="self-stretch flex-col justify-start items-start gap-1 flex w-3/4">
                           <div
                              class="self-stretch px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex h-8 relative"
                           >
                              <input
                                 :disabled="!isEditable"
                                 v-model="newItem"
                                 type="text"
                                 placeholder="Title..."
                                 class="text-gray-700 text-base font-normal leading-normal outline-none"
                              />
                           </div>
                        </div>
                        <span
                           @click="isEditable && addItem()"
                           class="flex justify-center items-center text-black text-xl font-normal leading-normal px-4 h-8 py-1 bg-white grow shrink basis-0 rounded-lg shadow gap-2 ml-2 hover:cursor-pointer hover:bg-[#D3D3D3]"
                           >Add</span
                        >
                     </div>
                  </div>
                  <div class="w-full h-24 overflow-auto">
                     <ul :class="{ 'no-select': !isEditable }">
                        <li
                           class="w-full flex"
                           v-for="(item, index) in currentSubtasks"
                           :key="index"
                           :class="{ checked: item.checked }"
                           @click="isEditable && toggleItem(index)"
                           :style="{ 'no-select': !isEditable }"
                        >
                           <div class="w-full ml-8">{{ item.title }}</div>
                           <span @click="removeItem(index)" class="w-8 flex items-center justify-center text-center">x</span>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="w-full h-8 flex justify-end items-center gap-4 pb-8">
                  <div @click="toggleSlideCurrentTask" class="h-full px-2 border-gray-700 justify-center items-center gap-1 flex hover:cursor-pointer">
                     <div class="w-4 h-4 flex justify-center items-center"><img src="../assets/iconoir_cancel.svg" alt="" srcset="" /></div>
                     <div class="w-8 text-gray-700 text-lg font-normal leading-normal hover:font-semibold">Close</div>
                  </div>
                  <div
                     @click="removeCurrentTask(current_ID_task)"
                     class="h-full px-2 border-l-2 border-gray-700 justify-center items-center gap-1 flex hover:cursor-pointer"
                  >
                     <div class="w-4 h-4 flex justify-center items-center"><img src="../assets/slider_current_task_deleted.svg" alt="" srcset="" /></div>
                     <div class="w-10 text-gray-700 text-lg font-normal leading-normal hover:font-semibold">Delete</div>
                  </div>
                  <div
                     v-if="!isEditable"
                     @click="editTask"
                     class="h-full px-2 border-l-2 border-gray-700 justify-center items-center gap-1 flex hover:cursor-pointer"
                  >
                     <div class="w-4 h-4 flex justify-center items-center"><img src="../assets/slider_current_task_edit.svg" alt="" srcset="" /></div>
                     <div class="w-24 text-gray-700 text-lg font-normal leading-normal hover:font-semibold">Edit</div>
                  </div>
                  <button
                     v-if="isEditable"
                     type="submit"
                     class="h-full px-2 border-l-2 border-gray-700 justify-center items-center gap-1 flex hover:cursor-pointer"
                  >
                     <div class="w-4 h-4 flex justify-center items-center"><img src="../assets/disk.svg" alt="" srcset="" /></div>
                     <div class="w-20 text-gray-700 text-lg font-normal leading-normal hover:font-semibold">Save Task</div>
                  </button>
               </div>
            </div>
         </div>
      </div>
   </form>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref, onMounted, watch } from "vue";

const store_contacts = computed(() => store.state.contacts);
const store_categories = computed(() => store.state.categories);
const current_title = ref("");
const current_description = ref("");
const current_assigned = ref("");
const current_prio = ref("");
const current_date = ref("");
const current_category = ref("");
const current_ID_task = ref("");
const current_status = ref("");
const current_subtasks = ref("");
const storeCurrentTask = computed(() => store.state.currentTask);
const isEditable = ref(false);
const closeSlider = ref(false);
const statusTask = ref(["ToDo", "Progress", "Feedback", "Done"]);

const store = useStore();
const newItem = ref("");
const currentSubtasks = ref([]);

const addItem = () => {
   if (newItem.value.trim() === "") {
      alert("You must write something!");
      return;
   }
   currentSubtasks.value.push({ title: newItem.value.trim(), checked: false, subtaskId: Date.now() });

   newItem.value = "";
};

const toggleItem = (index) => {
   currentSubtasks.value[index].checked = !currentSubtasks.value[index].checked;
};

const removeItem = (index) => {
   currentSubtasks.value.splice(index, 1);
};
const updatePrio = (value) => {
   current_prio.value = value;
};

const updateStatus = (value) => {
   current_status.value = value;
};

watch(
   storeCurrentTask,
   (newValue, oldValue) => {
      current_title.value = newValue.title;
      current_description.value = newValue.description;
      current_assigned.value = newValue.assigned;
      current_prio.value = newValue.prio;
      current_date.value = newValue.due_date;
      current_category.value = newValue.category;
      current_ID_task.value = newValue.ID_task;
      current_status.value = newValue.status;
      current_subtasks.value = newValue.subtasks;
      currentSubtasks.value = newValue.subtasks;
   },
   { immediate: true }
);

const updateCurrentTask = async () => {
   const updateTask = JSON.stringify({
      Id_task: current_ID_task.value,
      status: current_status.value,
      title: current_title.value,
      description: current_description.value,
      assigned: current_assigned.value,
      prio: current_prio.value,
      due_date: current_date.value,
      category: current_category.value,
      subtasks: currentSubtasks.value,
   });
   console.log(currentSubtasks.value);
   const requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: updateTask,
   };

   await fetch("https://minibackendgo.denniscodeworld.de/update_task", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
   store.dispatch("fetchData", "tasks");
   toggleSlideCurrentTask();
   console.log("Update Task:", updateTask);
};

const editTask = () => {
   isEditable.value ? (isEditable.value = false) : (isEditable.value = true);
};

const toggleSlideCurrentTask = () => {
   closeSlider.value = true;
   setTimeout(() => {
      store.commit("toggleSlideCurrentTask");
      store.commit("deletedCurrentTaskValues");
   }, 1500);
};

const removeCurrentTask = async (id) => {
   const delTask = JSON.stringify({
      task_ID: id,
   });

   const requestOptions = {
      method: "DELETE",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: delTask,
   };

   await fetch("https://minibackendgo.denniscodeworld.de/del_task", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
   store.dispatch("fetchData", "tasks");
   toggleSlideCurrentTask();
   console.log("Delete Task:", delTask);
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

/* Style the list items */
ul li {
   cursor: pointer;
   position: relative;
   padding: 4px;
   background: #d3d3d3;
   font-size: 1rem;
   transition: 0.2s;
   /* make the list items unselectable */
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
ul li:nth-child(odd) {
   background: #eee;
}

/* Darker background-color on hover */
ul li:hover {
   background: #ddd;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
   width: 100%;
   background: #888;
   color: #fff;
   text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
   content: "";
   position: absolute;
   border-color: #fff;
   border-style: solid;
   border-width: 0 2px 2px 0;
   top: 0.3rem;
   left: 1rem;
   transform: rotate(45deg);
   height: 1rem;
   width: 0.5rem;
}

/* Style the close button */
.close {
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   right: 0;
   top: 0;
   padding: 0.75rem 1rem 0.75rem 1rem;
}

.close:hover {
   background-color: #f44336;
   color: white;
}

/* Clear floats after the header */
.header:after {
   content: "";
   display: table;
   clear: both;
}

/* Style the "Add" button */
.addBtn {
   padding: 0.5rem;
   width: 25%;
   background: #d9d9d9;
   color: #555;
   float: left;
   text-align: center;
   font-size: 1rem;
   cursor: pointer;
   transition: 0.3s;
   border-radius: 0;
}

.addBtn:hover {
   background-color: #bbb;
}
</style>
