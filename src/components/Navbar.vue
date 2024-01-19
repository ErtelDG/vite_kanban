<script setup></script>

<template>
   <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-20">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
         <div class="flex items-center justify-between">
            <div class="w-screen flex items-center justify-between p-2">
               <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
               >
                  <span class="sr-only">Open sidebar</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                     ></path>
                  </svg>
               </button>
               <a href="#" class="flex ms-2 md:me-24">
                  <svg
                     class="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white w-10 h-10"
                     width="101"
                     height="122"
                     viewBox="0 0 101 122"
                     fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg"
                     aria-hidden="true"
                  >
                     <path d="M71.6721 0H49.5143V25.4923H71.6721V0Z" fill="currentColor" />
                     <path
                        d="M49.5142 46.2251H71.6721V82.1779C71.7733 90.8292 69.3112 99.3153 64.5986 106.557C59.9455 113.594 50.963 121.966 34.3446 121.966C16.2434 121.966 5.69286 113.406 0 108.715L13.9765 91.4743C19.533 96.0112 24.885 99.7435 34.4299 99.7435C41.6567 99.7435 44.5372 96.7988 46.2247 94.2307C48.5186 90.6637 49.7052 86.4923 49.6335 82.2464L49.5142 46.2251Z"
                        fill="currentColor"
                     />
                     <path d="M38.2137 30.1318H16.0559V52.3884H38.2137V30.1318Z" fill="#29ABE2" />
                     <path
                        d="M83.2793 111.522C83.2793 116.265 80.8761 118.815 77.5183 118.815C74.1605 118.815 71.9618 115.785 71.9618 111.762C71.9618 107.739 74.2287 104.554 77.7058 104.554C81.1829 104.554 83.2793 107.687 83.2793 111.522ZM74.5355 111.711C74.5355 114.57 75.6775 116.675 77.6376 116.675C79.5977 116.675 80.7056 114.45 80.7056 111.539C80.7056 108.988 79.6829 106.592 77.6376 106.592C75.5923 106.592 74.5355 108.903 74.5355 111.711Z"
                        fill="currentColor"
                     />
                     <path d="M87.6768 104.76V118.593H85.2224V104.76H87.6768Z" fill="currentColor" />
                     <path
                        d="M90.3358 118.593V104.76H93.0629L95.9946 110.461C96.7493 111.952 97.4207 113.483 98.0058 115.049C97.8524 113.337 97.7843 111.368 97.7843 109.177V104.76H100.034V118.593H97.4945L94.5288 112.772C93.7436 111.243 93.0437 109.671 92.4323 108.064C92.4323 109.776 92.5516 111.711 92.5516 114.09V118.576L90.3358 118.593Z"
                        fill="currentColor"
                     />
                  </svg>
               </a>

               <div class="flex items-center ms-3">
                  <div>
                     <button
                        type="button"
                        class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown-user"
                     >
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full" src="../assets/user.svg" alt="user photo" />
                     </button>
                  </div>
                  <div
                     class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                     id="dropdown-user"
                  >
                     <div class="px-4 py-3" role="none">
                        <p class="text-sm text-gray-900 dark:text-white" role="none">Neil Sims</p>
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">neil.sims@flowbite.com</p>
                     </div>
                     <ul class="py-1" role="none">
                        <li>
                           <a
                              href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                              >Dashboard</a
                           >
                        </li>
                        <li>
                           <a
                              href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                              >Settings</a
                           >
                        </li>
                        <li>
                           <a
                              href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                              >Earnings</a
                           >
                        </li>
                        <li>
                           <a
                              href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                              >Sign out</a
                           >
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </nav>
</template>

<style scoped></style>
