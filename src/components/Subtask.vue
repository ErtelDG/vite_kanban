<template>
   <div class="w-full flex-col justify-start items-start gap-2 inline-flex">
      <div class="w-full justify-between items-start gap-2 inline-flex">
         <div class="w-18">
            <span class="text-gray-700 text-xl font-normal leading-normal">Subtask:</span>
         </div>
         <div class="self-stretch h-16 flex-col justify-start items-start gap-1 flex w-3/4">
            <div class="self-stretch px-2 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex h-8 relative">
               <input v-model="newItem" type="text" placeholder="Title..." class="text-gray-700 text-base font-normal leading-normal outline-none" />
            </div>
         </div>
         <span
            @click="addItem"
            class="flex justify-center items-center text-black text-xl font-normal leading-normal px-4 h-8 py-1 bg-white grow shrink basis-0 rounded-lg shadow gap-2 ml-2 hover:cursor-pointer hover:bg-[#D3D3D3]"
            >Add</span
         >
      </div>
   </div>
   <div class="w-full h-24 overflow-auto">
      <ul>
         <li class="w-full flex" v-for="(item, index) in items" :key="index" :class="{ checked: item.checked }" @click="toggleItem(index)">
            <div class="w-full ml-8">{{ item.text }}</div>
            <span @click="removeItem(index)" class="w-8 flex items-center justify-center text-center">x</span>
         </li>
      </ul>
   </div>
</template>

<script setup>
import { ref } from "vue";

const newItem = ref("");
const items = ref([]);

const addItem = () => {
   if (newItem.value.trim() === "") {
      alert("You must write something!");
      return;
   }
   items.value.push({ text: newItem.value.trim(), subtaskId:Date.now(), checked: false });
   newItem.value = "";
};

const toggleItem = (index) => {
   items.value[index].checked = !items.value[index].checked;
};

const removeItem = (index) => {
   items.value.splice(index, 1);
};
</script>

<style scoped>
/* Style the list items */
ul li {
   cursor: pointer;
   position: relative;
   padding: 4px;
   background: #eee;
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
   background: #f9f9f9;
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
