<template>
   <div class="w-full h-full pl-20 flex flex-col justify-center">
      <div class="flex justify-between items-center gap-7 w-40rem h-4_5rem">
         <div class="h-full w-64 font-bold text-6xl flex items-center p-2">Join 360</div>
         <div class="flex items-center border-b-2 bg-[#29ABE2] w-1 h-16"></div>
         <div class="h-full w-72 p-2 flex items-center text-2xl">Key Metrics at a Glance</div>
      </div>
      <div class="mt-14 w-[64rem] flex items-center justify-between">
         <div class="flex flex-col justify-between w-[35rem] h-[35rem]">
            <div class="w-full flex justify-between">
               <div class="w-[16.5rem] h-[10.5rem] flex justify-center items-center rounded-3xl bg-white">
                  <div class="w-[14.5rem] h-full gap-x-5 flex items-center justify-center">
                     <div class="w-[4.5rem] h-[4.5rem] rounded-full bg-[#2A3647] flex justify-center items-center"><img src="../assets/pencil.svg" /></div>
                     <div class="flex flex-col items-center justify-center h-full">
                        <div class="text-[4rem] font-semibold">1</div>
                        <div class="text-center text-xl text-gray-700">To-do</div>
                     </div>
                  </div>
               </div>
               <div class="w-[16.5rem] h-[10.5rem] flex justify-center items-center rounded-3xl bg-white">
                  <div class="w-[14.5rem] h-full gap-x-5 flex items-center justify-center">
                     <div class="w-[4.5rem] h-[4.5rem] rounded-full bg-[#2A3647] flex justify-center items-center"><img src="../assets/check.svg" /></div>
                     <div class="flex flex-col items-center justify-center h-full">
                        <div class="text-[4rem] font-semibold">1</div>
                        <div class="text-center text-xl text-gray-700">Done</div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="w-full flex justify-between">
               <div class="w-full h-40 px-12 py-7 bg-white rounded-3xl shadow justify-center items-center gap-16 inline-flex">
                  <div class="justify-start items-center gap-4 flex">
                     <div class="justify-center items-center gap-2.5 flex">
                        <div class="w-14 h-14 relative">
                           <div class="w-14 h-14 left-0 top-0 absolute bg-orange-600 rounded-full flex justify-center items-center">
                              <img src="../assets/prio_alta.svg" alt="" srcset="" />
                           </div>
                           <div class="w-9 h-6 left-[0.785rem] top-4 absolute">
                              <div class="w-9 h-6 left-[-0px] top-[-0px] absolute"></div>
                           </div>
                        </div>
                     </div>
                     <div class="flex-col justify-center items-center inline-flex gap-3">
                        <div class="w-12 text-center text-black text-6xl font-semibold leading-10">1</div>
                        <div class="text-center text-xl text-gray-700">Urgent</div>
                     </div>
                  </div>
                  <div class="flex-col justify-start items-start gap-3 inline-flex">
                     <div class="text-gray-700 text-xl font-bold leading-relaxed">October 16, 2022</div>
                     <div class="text-center text-xl text-gray-700">Upcoming Deadline</div>
                  </div>
               </div>
            </div>
            <div class="w-full flex justify-between">
               <div class="w-40 h-40 py-6 bg-white rounded-3xl shadow flex-col justify-center items-center gap-3 inline-flex">
                  <div class="flex-col justify-center items-center flex gap-3">
                     <div class="text-center text-black text-6xl font-semibold leading-10">5</div>
                     <div class="text-center text-xl text-gray-700">Tasks in <br />Board</div>
                  </div>
               </div>
               <div class="w-40 h-40 py-6 bg-white rounded-3xl shadow flex-col justify-center items-center gap-3 inline-flex">
                  <div class="flex-col justify-center items-center flex gap-3">
                     <div class="text-center text-black text-6xl font-semibold leading-10">5</div>
                     <div class="text-center text-gray-700 text-xl font-normal leading-normal">Tasks in <br />Board</div>
                  </div>
               </div>
               <div class="w-40 h-40 py-6 bg-white rounded-3xl shadow flex-col justify-center items-center gap-3 inline-flex">
                  <div class="flex-col justify-center items-center flex gap-3">
                     <div class="text-center text-black text-6xl font-semibold leading-10">5</div>
                     <div class="text-center text-gray-700 text-xl font-normal leading-normal">Tasks in <br />Board</div>
                  </div>
               </div>
            </div>
         </div>
         <div class="w-96 h-32 flex-col justify-center items-start gap-3 inline-flex">
            <div class="w-full text-gray-700 text-5xl font-medium leading-10">Good morning,</div>
            <div class="w-full text-sky-500 text-6xl font-bold leading-10">Sofia Müller</div>
         </div>
      </div>
   </div>
</template>
<script setup></script>
<style scoped>
.h-4_5rem {
   height: 4.5rem;
}

.w-40rem {
   width: 40rem;
}
</style>
