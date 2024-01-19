<template>
   <div class="flex justify-center items-center p-4 2xl:justify-start">
      <div class="flex flex-col justify-center xl:items-start items-center gap-16">
         <div class="w-full" style="height: 73px; justify-content: center; align-items: center; gap: 30px; display: inline-flex" >
            <div class="sm2:block hidden" style="color: black; font-size: 58px; font-weight: 700; line-height: 73.2px; word-wrap: break-word">Join 360</div>
            <div class="sm2:block hidden" style="width: 0px; height: 59px; border: 3px #29abe2 solid"></div>
            <div class="sm2:block hidden" style="color: #2a3647; font-size: 27px; font-weight: 400; line-height: 32.4px; word-wrap: break-word">Key Metrics at a Glance</div>
            <div class="sm2:hidden underline" style="color: #2a3647; font-size: 28px; font-weight: 400; line-height: 32.4px; word-wrap: break-word">Key Metrics at a Glance</div>
         </div>

         <div class="flex items-center gap-16">
            <div class="w-[560px] h-[562px] flex-col justify-center items-start gap-7 sm:inline-flex hidden">
               <div class="self-stretch h-[168px] justify-center items-start gap-8 inline-flex">
                  <div
                     class="grow shrink basis-0 self-stretch px-[38px] py-[38px] bg-white rounded-[30px] shadow justify-center items-center gap-[18px] inline-flex"
                  >
                     <div class="flex-col justify-center items-center gap-2.5 inline-flex">
                        <div class="w-[69px] h-[69px] relative">
                           <div class="w-[69px] h-[69px] left-0 top-0 absolute bg-gray-700 rounded-full"></div>
                           <div class="w-8 h-8 left-[18.50px] top-[18.50px] absolute">
                              <div class="w-8 h-8 left-0 top-0 absolute bg-zinc-300"></div>
                           </div>
                        </div>
                     </div>
                     <div class="flex-col justify-start items-center inline-flex">
                        <div class="text-center text-black text-[64px] font-semibold font-['Inter'] leading-[76.80px]">1</div>
                        <div class="text-gray-700 text-xl font-normal font-['Inter'] leading-normal">To-do</div>
                     </div>
                  </div>
                  <div
                     class="grow shrink basis-0 self-stretch px-[38px] py-[38px] bg-white rounded-[30px] shadow justify-center items-center gap-[18px] inline-flex"
                  >
                     <div class="justify-start items-start gap-2.5 flex">
                        <div class="w-[69px] h-[69px] relative">
                           <div class="w-[69px] h-[69px] left-0 top-0 absolute bg-gray-700 rounded-full"></div>
                        </div>
                     </div>
                     <div class="self-stretch flex-col justify-center items-center inline-flex">
                        <div class="w-[50px] text-center text-black text-[64px] font-semibold font-['Inter'] leading-[76.80px]">1</div>
                        <div class="text-gray-700 text-xl font-normal font-['Inter'] leading-normal">Done</div>
                     </div>
                  </div>
               </div>
               <div class="self-stretch h-[168px] px-12 py-7 bg-white rounded-[30px] shadow justify-center items-center gap-[61px] inline-flex">
                  <div class="justify-start items-center gap-[18px] flex">
                     <div class="justify-center items-center gap-2.5 flex">
                        <div class="w-[60px] h-[60px] relative">
                           <div class="w-[60px] h-[60px] left-0 top-0 absolute bg-orange-600 rounded-full"></div>
                           <div class="w-[34.19px] h-[25.12px] left-[12.56px] top-[16.05px] absolute">
                              <div class="w-[34.19px] h-[25.12px] left-[-0px] top-[-0px] absolute"></div>
                           </div>
                        </div>
                     </div>
                     <div class="flex-col justify-center items-center inline-flex">
                        <div class="w-[50px] text-center text-black text-[64px] font-semibold font-['Inter'] leading-[76.80px]">1</div>
                        <div class="text-gray-700 text-base font-normal font-['Inter'] leading-tight">Urgent</div>
                     </div>
                  </div>
                  <div class="flex-col justify-start items-start gap-[13px] inline-flex">
                     <div class="text-gray-700 text-[21px] font-bold font-['Inter'] leading-relaxed">October 16, 2022</div>
                     <div class="text-gray-700 text-base font-normal font-['Inter'] leading-tight">Upcoming Deadline</div>
                  </div>
               </div>
               <div class="self-stretch h-[170px] py-px justify-center items-start gap-7 inline-flex">
                  <div
                     class="grow shrink basis-0 self-stretch py-[25px] bg-white rounded-[30px] shadow flex-col justify-center items-center gap-[13px] inline-flex"
                  >
                     <div class="flex-col justify-center items-center flex">
                        <div class="text-center text-black text-[64px] font-semibold font-['Inter'] leading-[76.80px]">5</div>
                        <div class="text-center text-gray-700 text-xl font-normal font-['Inter'] leading-normal">Tasks in <br />Board</div>
                     </div>
                  </div>
                  <div
                     class="grow shrink basis-0 self-stretch py-[25px] bg-white rounded-[30px] shadow flex-col justify-center items-center gap-[13px] inline-flex"
                  >
                     <div class="flex-col justify-center items-center flex">
                        <div class="text-center text-black text-[64px] font-semibold font-['Inter'] leading-[76.80px]">2</div>
                        <div class="text-center text-gray-700 text-[21px] font-normal font-['Open Sans'] leading-relaxed">Tasks In<br />Progress</div>
                     </div>
                  </div>
                  <div
                     class="grow shrink basis-0 self-stretch py-[25px] bg-white rounded-[30px] shadow flex-col justify-center items-center gap-[13px] inline-flex"
                  >
                     <div class="flex-col justify-center items-center flex">
                        <div class="text-center text-black text-[64px] font-semibold font-['Inter'] leading-[76.80px]">2</div>
                        <div class="text-gray-700 text-xl font-normal font-['Inter'] leading-normal">Awaiting<br />Feedback</div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="w-[396px] h-96 relative sm:hidden">
               <div class="w-[396px] h-[116px] left-0 top-[268px] absolute">
                  <div
                     class="w-[116px] h-[116px] py-[25px] left-0 top-0 absolute bg-white rounded-[20px] shadow flex-col justify-center items-center gap-[13px] inline-flex"
                  >
                     <div class="flex-col justify-center items-center flex">
                        <div class="text-center text-black text-[47px] font-semibold font-['Inter'] leading-[56.40px]">5</div>
                        <div class="text-center text-gray-700 text-sm font-normal font-['Inter'] leading-[16.80px]">Tasks in<br />Board</div>
                     </div>
                  </div>
                  <div
                     class="w-[116px] h-[116px] py-[25px] left-[140px] top-0 absolute bg-white rounded-[20px] shadow flex-col justify-center items-center gap-[13px] inline-flex"
                  >
                     <div class="flex-col justify-center items-center flex">
                        <div class="text-center text-black text-[47px] font-semibold font-['Inter'] leading-[56.40px]">2</div>
                        <div class="text-center text-gray-700 text-sm font-normal font-['Inter'] leading-[16.80px]">Tasks In<br />Progress</div>
                     </div>
                  </div>
                  <div
                     class="w-[116px] h-[116px] py-[25px] left-[280px] top-0 absolute bg-white rounded-[20px] shadow flex-col justify-center items-center gap-[13px] inline-flex"
                  >
                     <div class="flex-col justify-center items-center flex">
                        <div class="text-center text-black text-[47px] font-semibold font-['Inter'] leading-[56.40px]">2</div>
                        <div class="text-center text-gray-700 text-sm font-normal font-['Inter'] leading-[16.80px]">Awaiting <br />feedback</div>
                     </div>
                  </div>
               </div>
               <div class="w-[396px] h-[110px] py-7 left-0 top-[140px] absolute bg-white rounded-[20px] shadow justify-center items-center gap-5 inline-flex">
                  <div class="justify-start items-center gap-[18px] flex">
                     <div class="justify-center items-center gap-2.5 flex">
                        <div class="w-10 h-10 relative">
                           <div class="w-10 h-10 left-0 top-0 absolute bg-orange-600 rounded-full"></div>
                           <div class="w-[22.79px] h-[16.74px] left-[8.37px] top-[10.70px] absolute">
                              <div class="w-[22.79px] h-[16.75px] left-[-0px] top-[-0px] absolute"></div>
                           </div>
                        </div>
                     </div>
                     <div class="flex-col justify-center items-center inline-flex">
                        <div class="w-[50px] text-center text-black text-[47px] font-semibold font-['Inter'] leading-[56.40px]">1</div>
                        <div class="text-gray-700 text-sm font-normal font-['Inter'] leading-[16.80px]">Urgent</div>
                     </div>
                  </div>
                  <div class="flex-col justify-start items-start gap-2 inline-flex">
                     <div class="text-gray-700 text-base font-bold font-['Inter'] leading-tight">October 16, 2022</div>
                     <div class="text-gray-700 text-sm font-normal font-['Inter'] leading-[16.80px]">Upcoming Deadline</div>
                  </div>
               </div>
               <div class="w-[396px] h-[110px] left-0 top-0 absolute">
                  <div
                     class="w-[186px] h-[110px] px-[19px] py-[38px] left-0 top-0 absolute bg-white rounded-[20px] shadow justify-center items-center gap-2.5 inline-flex"
                  >
                     <div class="flex-col justify-center items-center gap-2.5 inline-flex">
                        <div class="w-10 h-10 relative">
                           <div class="w-10 h-10 left-0 top-0 absolute bg-gray-700 rounded-full"></div>
                           <div class="origin-top-left rotate-[31.25deg] w-[3.77px] h-[19.62px] left-[23.48px] top-[10.63px] absolute"></div>
                        </div>
                     </div>
                     <div class="flex-col justify-start items-center inline-flex">
                        <div class="text-center text-black text-[47px] font-semibold font-['Inter'] leading-[56.40px]">1</div>
                        <div class="text-gray-700 text-sm font-normal font-['Inter'] leading-[16.80px]">To-do</div>
                     </div>
                  </div>
                  <div
                     class="w-[186px] h-[110px] px-[58px] py-[38px] left-[210px] top-0 absolute bg-white rounded-[20px] shadow justify-center items-center gap-2.5 inline-flex"
                  >
                     <div class="justify-start items-start gap-2.5 flex">
                        <div class="w-10 h-10 relative">
                           <div class="w-10 h-10 left-0 top-0 absolute bg-gray-700 rounded-full"></div>
                        </div>
                     </div>
                     <div class="flex-col justify-center items-center inline-flex">
                        <div class="w-[50px] text-center text-black text-[47px] font-semibold font-['Inter'] leading-[56.40px]">1</div>
                        <div class="text-gray-700 text-sm font-normal font-['Inter'] leading-[16.80px]">Done</div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="xl:block hidden">
               <div
                  style="width: 385px; height: 136px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 3px; display: inline-flex"
               >
                  <div style="width: 338px; color: #2a3647; font-size: 47px; font-weight: 500; line-height: 56.4px; word-wrap: break-word">Good morning,</div>
                  <div style="width: 385px; color: #29abe2; font-size: 64px; font-weight: 700; line-height: 76.8px; word-wrap: break-word">Sofia Müller</div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup></script>
