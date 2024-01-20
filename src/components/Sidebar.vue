<script setup>
import DarkModeBtn from "./DarkModeBtn.vue";
</script>
<template>
   <div class="h-full w-full pt-16 flex flex-col items-center justify-between bg-[#2a3647]">
      <div class="w-full flex flex-col justify-between items-center">
         <div>
            <img src="../assets/Join_logo_vector.svg" alt="" />
         </div>
         <div class="flex flex-col justify-center items-center pt-16 w-full gap-y-4">
            <router-link to="/" class="w-full hover:bg-[#8895a5] hover:cursor-pointer p-4 px-10">
               <div class="flex justify-start">
                  <img src="../assets/summary_icon_side.svg" alt="Summary Button" />
                  <div class="text-white text-base font-normal pl-4">Summary</div>
               </div>
            </router-link>
            <router-link to="/addtask" class="w-full hover:bg-[#8895a5] hover:cursor-pointer p-4 px-10">
               <div class="flex justify-start">
                  <img src="../assets/add_task_icon_side.svg" alt="Add Task Button" />
                  <div class="text-white text-base font-normal pl-4">Add Task</div>
               </div>
            </router-link>
            <router-link to="/kanban" class="w-full hover:bg-[#8895a5] hover:cursor-pointer p-4 px-10">
               <div class="flex justify-start">
                  <img src="../assets/board_icon_side.svg" alt="Board Button" />
                  <div class="text-white text-base font-normal pl-4">Kanban</div>
               </div>
            </router-link>
            <router-link to="/contacts" class="w-full hover:bg-[#8895a5] hover:cursor-pointer p-4 px-10">
               <div class="flex justify-start">
                  <img src="../assets/contact_icon_side.svg" alt="Contacts Button" />
                  <div class="text-white text-base font-normal pl-4">Contacts</div>
               </div>
            </router-link>
         </div>
      </div>

      <div class="flex flex-col justify-start items-center gap-4 pb-16 w-full">
         <div class="hover:bg-[#8895a5] hover:cursor-pointer p-4 flex items-center justify-center w-full">
            <div class="text-white text-base font-normal">Privacy Policy</div>
         </div>
         <div class="hover:bg-[#8895a5] hover:cursor-pointer p-4 flex items-center justify-center w-full">
            <div class="text-white text-base font-normal">Legal notice</div>
         </div>
      </div>
   </div>
</template>
<style scoped></style>
<script setup></script>
