<template>
   <div class="w-full h-full z-50 absolute top-0 left-0" v-if="SlideNewContactActive">
      <SlideNewContact></SlideNewContact>
   </div>
   <div class="w-full h-full pl-16 pt-8 pb-8">
      <div class="w-[70rem] h-full">
         <div class="w-full flex justify-between items-center py-2">
            <button
               @click="toggleSlideNewContact"
               class="w-80 py-3 bg-gray-700 rounded-lg border border-gray-700 justify-center items-center gap-4 inline-flex hover:bg-gray-600 hover:cursor-pointer"
            >
               <div class="text-white text-xl font-bold leading-relaxed">Add new contact</div>
               <div class="w-8 h-8 relative">
                  <div class="w-8 h-8 left-0 top-0 absolute"><img src="../assets/person_add.svg" alt="" srcset="" /></div>
               </div>
            </button>
            <div class="h-20 flex justify-between items-center gap-7">
               <div class="text-black text-6xl font-bold leading-10">Contacts</div>
               <div class="h-5/6 rounded-lg w-1 bg-[#29ABE2]"></div>
               <div class="text-gray-700 text-2xl font-normal leading-loose">Better with a team</div>
            </div>
         </div>
         <div class="w-full flex flex-col">
            <div class="w-full h-14 px-9 py-4 flex-col justify-center items-start gap-2 inline-flex border-b-2 border-[#D1D1D1] rounded-sm">
               <div class="text-black text-xl font-normal leading-normal">A</div>
            </div>
            <div class="w-full p-3 flexbox">
               <div class="w-80 h-20 px-6 py-3.5 bg-white rounded-lg justify-start items-start gap-9 inline-flex hover:cursor-pointer hover:bg-slate-100">
                  <div class="bg-white rounded-3xl justify-center items-center gap-2.5 flex">
                     <div class="w-10 h-10 relative">
                        <div class="w-10 h-10 left-0 top-0 absolute bg-purple-600 rounded-full border-2 border-white"></div>
                        <div class="w-7 h-2.5 left-[7px] top-[16px] absolute text-center text-white text-xs font-normal font-['Inter'] leading-none">AS</div>
                     </div>
                  </div>
                  <div class="flex-col justify-start items-start gap-1 inline-flex">
                     <div class="text-black text-xl font-normal font-['Inter'] leading-normal">Anja Schulz</div>
                     <div class="text-sky-600 text-base font-normal font-['Inter'] leading-tight">schulz@hotmail.com</div>
                  </div>
               </div>
               <div class="w-80 h-20 px-6 py-3.5 bg-white rounded-lg justify-start items-start gap-9 inline-flex hover:cursor-pointer hover:bg-slate-100">
                  <div class="bg-white rounded-3xl justify-center items-center gap-2.5 flex">
                     <div class="w-10 h-10 relative">
                        <div class="w-10 h-10 left-0 top-0 absolute bg-purple-600 rounded-full border-2 border-white"></div>
                        <div class="w-7 h-2.5 left-[7px] top-[16px] absolute text-center text-white text-xs font-normal font-['Inter'] leading-none">AS</div>
                     </div>
                  </div>
                  <div class="flex-col justify-start items-start gap-1 inline-flex">
                     <div class="text-black text-xl font-normal font-['Inter'] leading-normal">Anja Schulz</div>
                     <div class="text-sky-600 text-base font-normal font-['Inter'] leading-tight">schulz@hotmail.com</div>
                  </div>
               </div>
               <div class="w-80 h-20 px-6 py-3.5 bg-white rounded-lg justify-start items-start gap-9 inline-flex hover:cursor-pointer hover:bg-slate-100">
                  <div class="bg-white rounded-3xl justify-center items-center gap-2.5 flex">
                     <div class="w-10 h-10 relative">
                        <div class="w-10 h-10 left-0 top-0 absolute bg-purple-600 rounded-full border-2 border-white"></div>
                        <div class="w-7 h-2.5 left-[7px] top-[16px] absolute text-center text-white text-xs font-normal font-['Inter'] leading-none">AS</div>
                     </div>
                  </div>
                  <div class="flex-col justify-start items-start gap-1 inline-flex">
                     <div class="text-black text-xl font-normal font-['Inter'] leading-normal">Anja Schulz</div>
                     <div class="text-sky-600 text-base font-normal font-['Inter'] leading-tight">schulz@hotmail.com</div>
                  </div>
               </div>
               <div class="w-80 h-20 px-6 py-3.5 bg-white rounded-lg justify-start items-start gap-9 inline-flex hover:cursor-pointer hover:bg-slate-100">
                  <div class="bg-white rounded-3xl justify-center items-center gap-2.5 flex">
                     <div class="w-10 h-10 relative">
                        <div class="w-10 h-10 left-0 top-0 absolute bg-purple-600 rounded-full border-2 border-white"></div>
                        <div class="w-7 h-2.5 left-[7px] top-[16px] absolute text-center text-white text-xs font-normal font-['Inter'] leading-none">AS</div>
                     </div>
                  </div>
                  <div class="flex-col justify-start items-start gap-1 inline-flex">
                     <div class="text-black text-xl font-normal font-['Inter'] leading-normal">Anja Schulz</div>
                     <div class="text-sky-600 text-base font-normal font-['Inter'] leading-tight">schulz@hotmail.com</div>
                  </div>
               </div>
               <div class="w-80 h-20 px-6 py-3.5 bg-white rounded-lg justify-start items-start gap-9 inline-flex hover:cursor-pointer hover:bg-slate-100">
                  <div class="bg-white rounded-3xl justify-center items-center gap-2.5 flex">
                     <div class="w-10 h-10 relative">
                        <div class="w-10 h-10 left-0 top-0 absolute bg-purple-600 rounded-full border-2 border-white"></div>
                        <div class="w-7 h-2.5 left-[7px] top-[16px] absolute text-center text-white text-xs font-normal font-['Inter'] leading-none">AS</div>
                     </div>
                  </div>
                  <div class="flex-col justify-start items-start gap-1 inline-flex">
                     <div class="text-black text-xl font-normal font-['Inter'] leading-normal">Anja Schulz</div>
                     <div class="text-sky-600 text-base font-normal font-['Inter'] leading-tight">schulz@hotmail.com</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
import SlideNewContact from "./SlideNewContact.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const SlideNewContactActive = computed(() => store.state.SlideNewContactActive);

const toggleSlideNewContact = () => {
   store.commit("toggleSlideNewContact");
};
</script>

<style scoped>
.flexbox {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-between;
}

.flexbox > div {
   /*
    1/3  - 3 columns per row
    10px - spacing between columns 
  */
   box-sizing: border-box;
   margin: 1rem 1rem 0 0;

   width: calc(1 / 3 * 100% - (1 - 1 / 3) * 1rem);
}

/*
  align last row columns to the left
  3n - 3 columns per row
*/
.flexbox > div:nth-child(3n) {
   margin-right: 0;
}

.flexbox::after {
   content: "";
   flex: auto;
}

/*
  remove top margin from first row
  -n+3 - 3 columns per row 
*/
.flexbox > div:nth-child(-n + 3) {
   margin-top: 0;
}
</style>
