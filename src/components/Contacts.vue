<template>
   <div class="w-full h-full z-50 absolute top-0 left-0" v-if="SlideNewContactActive">
      <SlideNewContact></SlideNewContact>
   </div>

   <div class="w-full h-full sm:pl-16 pt-8 pb-8">
      <div class="max-w-[70rem] h-full sm:mr-8 flex flex-col justify-center">
         <div class="w-full flex justify-between items-center py-2 px-4 sm:pl-0">
            <button
               @click="toggleSlideNewContact"
               class="w-80 py-3 bg-gray-700 rounded-lg border border-gray-700 justify-center items-center gap-4 inline-flex hover:bg-gray-600 hover:cursor-pointer"
            >
               <div class="text-white text-xl font-bold leading-relaxed">Add new contact</div>
               <div class="w-8 h-8 relative">
                  <div class="w-8 h-8 left-0 top-0 absolute"><img src="../assets/person_add.svg" alt="" srcset="" /></div>
               </div>
            </button>
            <div class="h-20 hidden xl:flex justify-between items-center gap-7">
               <div class="text-black text-6xl font-bold leading-10">Contacts</div>
               <div class="h-5/6 rounded-lg w-1 bg-[#29ABE2]"></div>
               <div class="text-gray-700 text-2xl font-normal leading-loose">Better with a team</div>
            </div>
         </div>
         <div class="w-full h-[calc(100%-5rem)] overflow-scroll">
            <div class="w-full flex flex-col" v-for="(alpha, letter) in render_contacts" :ref="letter">
               <div class="w-full h-14 px-9 py-4 flex-col justify-center items-start gap-2 inline-flex border-b-2 border-[#D1D1D1] rounded-sm">
                  <div class="text-black text-xl font-normal leading-normal">{{ letter }}</div>
               </div>
               <div class="w-full p-3 flex flex-wrap justify-center sm:justify-start gap-4">
                  <div v-for="contacts in alpha">
                     <div
                        class="min-w-80 sm:min-w-96 sm:h-24 px-6 py-3.5 bg-white rounded-lg justify-start items-center gap-9 inline-flex shadow-sm"
                        v-for="(contact, id) in contacts"
                        :key="id"
                     >
                        <div class="bg-white rounded-3xl justify-center items-center gap-2.5 sm:flex hidden">
                           <div class="w-10 h-10">
                              <div class="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center bg-blue-600">
                                 <div class="text-white text-xs font-normal flex justify-center items-center">
                                    {{ contact["first_name"].substring(0, 1) }}{{ contact["last_name"].substring(0, 1) }}
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="flex-col justify-start items-start gap-1 inline-flex">
                           <div class="text-black text-xl font-normal leading-normal">{{ contact["first_name"] }} {{ contact["last_name"] }}</div>
                           <div class="text-sky-600 text-base font-normal leading-tight">Phone: {{ contact["phone"] }}</div>
                           <div class="text-sky-600 text-base font-normal leading-tight">Email: {{ contact["email"] }}</div>
                        </div>
                        <div class="bg-white rounded-3xl justify-center items-center gap-2.5 flex">
                           <div class="w-10 h-10">
                              <div
                                 @click="remove_contact(contact['ID_contact'])"
                                 class="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center bg-blue-600 hover:cursor-pointer hover:bg-blue-500"
                              >
                                 <img src="../assets/trash.svg" alt="" srcset="" />
                              </div>
                           </div>
                        </div>
                     </div>
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
import { computed, ref, watch } from "vue";

const store = useStore();
const SlideNewContactActive = computed(() => store.state.SlideNewContactActive);
const store_contacts = computed(() => store.state.contacts);
const render_contacts = ref(store.state.contacts);

const remove_contact = async (remove_contact) => {
   const removeTask = JSON.stringify({
      ID_contact: remove_contact,
   });

   const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: removeTask,
   };

   await fetch("https://minibackendgo.denniscodeworld.de/remove_contact", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
   store.dispatch("fetchData", "contacts");
   console.log("Remove Contact:", remove_contact);
};

// Hier verwendest du den watch-Handler
watch(
   store_contacts,
   (newValue, oldValue) => {
      // Diese Funktion wird aufgerufen, wenn sich der Wert von allContacts ändert
      // Gruppiere die Kontakte nach dem ersten Buchstaben des Vornamens und sortiere sie
      const groupedAndSortedContacts = Object.entries(newValue).reduce((result, [contactId, contact]) => {
         const firstLetter = contact.first_name.charAt(0).toUpperCase();
         result[firstLetter] = result[firstLetter] || [];
         result[firstLetter].push({ [contactId]: contact });
         return result;
      }, {});

      // Sortiere die Gruppen nach dem ersten Buchstaben
      const sortedLetters = Object.keys(groupedAndSortedContacts).sort();

      // Erstelle das resultierende Objekt / Array
      const resultObject = sortedLetters.reduce((result, letter) => {
         result[letter] = groupedAndSortedContacts[letter];
         return result;
      }, {});
      render_contacts.value = resultObject;
   },
   { immediate: true }
);

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

::-webkit-scrollbar {
   width: 0px;
   background: transparent; /* make scrollbar transparent */
}
</style>
