<template>
   <div class="bgSlideNewContact relative w-full h-full" :class="{ bgSlideNewClose: closeSlider }"></div>

   <form class="bg-white rounded-3xl absolute slideNewContact flex" :class="{ slideClose: closeSlider }" @submit.prevent="add_new_contact">
      <div class="w-[30rem] h-full bg-gray-700 flex justify-center items-center rounded-l-3xl">
         <div class="flex flex-col justify-start items-center gap-4 w-[21rem] h-[37rem] pt-36">
            <div class="flex justify-start w-full"><img src="../assets/slider_add_contact_icon_join.svg" alt="" srcset="" /></div>
            <div class="text-white text-6xl font-bold text-justify w-full flex justify-between">
               <div>Add</div>
               <div>contact</div>
            </div>
            <div class="text-white text-2xl font-normal text-justify w-full flex justify-between">
               <div>Tasks</div>
               <div>are</div>
               <div>better</div>
               <div>with</div>
               <div>a</div>
               <div>team</div>
               !
            </div>
         </div>
      </div>
      <div class="p-12 h-full flex flex-col gap-y-12">
         <div class="w-full flex justify-end">
            <div @click="toggleSlideNewContact" class="w-8 h-8 flex justify-center items-center hover:cursor-pointer">
               <img src="../assets/close_slider_add_contact.svg" alt="" srcset="" />
            </div>
         </div>
         <div class="w-[38.5rem] gap-[4.5rem] flex">
            <div class="flex justify-center items-center">
               <div class="w-[7.5rem] h-[7.5rem] flex justify-center items-center rounded-full bg-[#D1D1D1]">
                  <img src="../assets/person_slider_add_contact.svg" alt="" srcset="" />
               </div>
            </div>
            <div class="flex flex-col justify-center w-full gap-y-8">
               <div class="w-full">
                  <div class="h-12 px-6 py-1 bg-white rounded-lg border border-neutral-300 flex justify-between items-center gap-2.5">
                     <input
                        type="text"
                        name=""
                        id=""
                        required
                        class="outline-none text-gray-700 text-xl font-normal leading-normal w-full"
                        v-model="add_contact_name"
                        placeholder="Name"
                     />

                     <div class="w-6 h-6 relative">
                        <div class="w-6 h-6 flex justify-center items-center absolute">
                           <img src="../assets/person_slider_add_contact_small.svg" alt="" srcset="" />
                        </div>
                     </div>
                  </div>
                  <div class="w-full h-6 pl-4 pt-2 text-rose-400 text-xs font-normal leading-none">
                     <div v-if="!add_contact_name">This field is required</div>
                  </div>
               </div>
               <div class="w-full">
                  <div class="h-12 px-6 py-1 bg-white rounded-lg border border-neutral-300 flex justify-between items-center gap-2.5">
                     <input
                        type="email"
                        name=""
                        id=""
                        required
                        class="outline-none text-gray-700 text-xl font-normal leading-normal w-full"
                        v-model="add_contact_email"
                        placeholder="Email"
                     />

                     <div class="w-6 h-6 relative">
                        <div class="w-6 h-6 flex justify-center items-center absolute">
                           <img src="../assets/mail_slider_add_contact_small.svg" alt="" srcset="" />
                        </div>
                     </div>
                  </div>
                  <div class="w-full h-6 pl-4 pt-2 text-rose-400 text-xs font-normal leading-none">
                     <div v-if="!add_contact_email">This field is required</div>
                  </div>
               </div>
               <div class="w-full">
                  <div class="h-12 px-6 py-1 bg-white rounded-lg border border-neutral-300 flex justify-between items-center gap-2.5">
                     <input
                        type="tel"
                        name=""
                        id=""
                        required
                        class="outline-none text-gray-700 text-xl font-normal leading-normal w-full"
                        v-model="add_contact_phone"
                        placeholder="Phone"
                     />

                     <div class="w-6 h-6 relative">
                        <div class="w-6 h-6 flex justify-center items-center absolute">
                           <img src="../assets/call_slider_add_contact_small.svg" alt="" srcset="" />
                        </div>
                     </div>
                  </div>
                  <div class="w-full h-6 pl-4 pt-2 text-rose-400 text-xs font-normal leading-none">
                     <div v-if="!add_contact_phone">This field is required</div>
                  </div>
               </div>
            </div>
         </div>
         <div class="w-full">
            <div class="pl-48 flex gap-x-6">
               <div
                  @click="toggleSlideNewContact"
                  class="w-32 h-14 p-4 rounded-lg border border-gray-700 flex justify-between items-center gap-1 hover:cursor-pointer hover:bg-gray-100"
               >
                  <div class="text-gray-700 text-xl font-normal leading-normal">Cancel</div>
                  <div class="w-6 h-6 flex justify-center items-center"><img src="../assets/iconoir_cancel_slider_add_contact.svg" alt="" srcset="" /></div>
               </div>
               <button
                  type="submit"
                  value="Submit"
                  class="w-52 h-14 p-4 bg-gray-700 rounded-lg flex justify-between items-center gap-1 hover:cursor-pointer hover:bg-gray-600"
               >
                  <div class="text-white text-xl font-boldleading-relaxed">Create contact</div>
                  <div class="w-6 h-6 flex justify-center items-center">
                     <img src="../assets/check_iconoir_cancel_slider_add_contact.svg" alt="" srcset="" />
                  </div>
               </button>
            </div>
         </div>
      </div>
   </form>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";

const add_contact_email = ref("");
const add_contact_name = ref("");
const add_contact_phone = ref("");
const store = useStore();
const closeSlider = ref(false);

const SlideNewContactActive = computed(() => store.state.SlideNewContactActive);

const toggleSlideNewContact = () => {
   closeSlider.value = true;
   setTimeout(() => {
      store.commit("toggleSlideNewContact");
   }, 1500);
};

const add_new_contact = () => {
   alert(add_contact_email.value);
   alert(add_contact_name.value);
   alert(add_contact_phone.value);
   closeSlider.value = true;
   toggleSlideNewContact();
};
</script>

<style scoped>
.bgSlideNewContact {
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
.slideNewContact {
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
</style>
