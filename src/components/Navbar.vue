<script setup></script>

<template>
   <div class="w-full h-full flex justify-between items-center">
      <div class="text-xl font-medium text-black">Kanban Project Management Tool</div>
      <div class="flex items-center gap-4">
         <div class="w-8 h-8 rounded-full flex justify-center items-center hover:cursor-pointer">
            <img class="rounded-full" src="../assets/help.svg" alt="" srcset="" />
         </div>
         <div class="relative inline-block dropdown">
            <div class="flex flex-col items-center justify-center w-14 h-14 border-black border-4 rounded-full hover:bg-[#d2d7de] hover:cursor-pointer">
               <div class="text-base text-[#29ABE2]">SM</div>
            </div>
            <div
               class="dropdown-content absolute right-0 z-10 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
               role="menu"
               aria-orientation="vertical"
               aria-labelledby="menu-button"
               tabindex="-1"
            >
               <div class="gap-y-2 text-white" role="none">
                  <router-link to="/LegalNotice"  class="block px-4 py-2 text-base w-full hover:bg-[#8895a5] rounded-t-md" role="menuitem" tabindex="-1" id="menu-item-0">Legal Notice</router-link>
                  <router-link to="/PrivacyPolicy"  class="block px-4 py-2 text-base w-full hover:bg-[#8895a5]" role="menuitem" tabindex="-1" id="menu-item-1">Privacy Polic</router-link>
                  <router-link to="/"  class="block px-4 py-2 text-base w-full hover:bg-[#8895a5] rounded-b-md" role="menuitem" tabindex="-1" id="menu-item-2">Log out</router-link>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
.dropdown {
   position: relative;
   display: inline-block;
}

.dropdown-content {
   display: none;
   position: absolute;
   background-color: #2a3647;
   min-width: 160px;
   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
   z-index: 1;
}

.dropdown:hover .dropdown-content {
   display: block;
}
</style>
