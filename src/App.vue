<template>
   <div class="w-screen min-h-screen">
      <div class="1xl:h-24 w-full z-20 absolute top-0 left-0 right-0 1xl:flex py-5 pr-10 pl-80 bg-white dark:bg-gray-800">
         <Navbar></Navbar>
      </div>

      <div
         class="w-60 1xl:flex 1xl:h-screen bg-white dark:bg-gray-800 flex-col justify-between items-center flex-shrink-0 z-30 absolute left-0 top-0 bottom-0 hidden"
      >
         <Sidebar></Sidebar>
      </div>

      <div class="w-full 1xl:w-[calc(100%-15rem)] 1xl:min-h-screen pt-24 router_class absolute right-0 bottom-0 bg-gray-800"><router-view> </router-view></div>
   </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

import { onMounted } from "vue";

onMounted(() => {
   var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
   var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

   // Change the icons inside the button based on previous settings
   if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      themeToggleLightIcon.classList.remove("hidden");
   } else {
      themeToggleDarkIcon.classList.remove("hidden");
   }

   var themeToggleBtn = document.getElementById("theme-toggle");

   themeToggleBtn.addEventListener("click", function () {
      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");

      // if set via local storage previously
      if (localStorage.getItem("color-theme")) {
         if (localStorage.getItem("color-theme") === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
         } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
         }

         // if NOT set via local storage previously
      } else {
         if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
         } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
         }
      }
   });
});
</script>

<style scoped></style>
