<template>
   <div class="w-screen min-h-screen" style="overflow: hidden; overflow-x: hidden; overflow-y: hidden">
      <div class="1xl:h-24 w-full z-20 absolute top-0 left-0 right-0 1xl:flex py-5 pr-10 pl-80 bg-white">
         <Navbar></Navbar>
      </div>

      <div class="w-60 1xl:flex 1xl:h-screen bg-white flex-col justify-between items-center flex-shrink-0 z-30 absolute left-0 top-0 bottom-0 hidden">
         <Sidebar></Sidebar>
      </div>

      <div class="w-full 1xl:w-[calc(100%-15rem)] 1xl:h-[calc(100vh-6rem)] flex justify-center items-center absolute right-0 bottom-0 bg-[#F6F7F8]">
         <router-view> </router-view>
      </div>
   </div>
</template>

<script setup>
import { onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

onMounted(() => {
   alert(
      "Information / please note: This site is still under development. Technologies used: VueJS for the frontend. Golang for backend. Tailwind CSS for the design."
   );
});
</script>

<style scoped></style>
