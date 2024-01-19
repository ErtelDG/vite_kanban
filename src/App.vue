<template>
   <div class="w-screen min-h-screen">
      <div class="h-20"><Navbar></Navbar></div>
      <div class="h-[calc(100vh-5rem)] lg:ml-64 lg:w-[calc(100vw-16rem)] w-screen bg-white dark:bg-gray-800">
         <Sidebar></Sidebar>
         <div class="w-full h-full p-4"><router-view> </router-view></div>
      </div>
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
