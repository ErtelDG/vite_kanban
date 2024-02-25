<template>
   <div class="w-screen md3:min-h-screen md3:overflow-hidden">
      <div class="h-24 w-full z-20 absolute top-0 left-0 right-0 py-5 pr-10 md3:pl-80 bg-white">
         <Navbar></Navbar>
      </div>

      <div class="w-60 md3:flex 1xl:h-screen bg-white flex-col justify-between items-center flex-shrink-0 z-30 absolute left-0 top-0 bottom-0 hidden">
         <Sidebar></Sidebar>
      </div>
      <div
         class="w-full md3:w-[calc(100%-15rem)] h-[calc(100%-6rem)] md3:h-[calc(100vh-6rem)] flex justify-center items-center absolute right-0 bottom-0 bg-[#F6F7F8] overflow-hidden"
      >
         <router-view> </router-view>
      </div>
   </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

const store = useStore();

onMounted(() => {
   store.dispatch("fetchData", "contacts");
   store.dispatch("fetchData", "categories");
   store.dispatch("fetchData", "tasks");
});
</script>

<style scoped>
::-webkit-scrollbar {
   width: 0px;
   background: #f6f7f8; /* make scrollbar transparent */
}
</style>
