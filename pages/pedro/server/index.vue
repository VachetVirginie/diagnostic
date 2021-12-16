<template>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h2 class="sm:text-3xl text-2xl text-purple-500 tracking-widest font-medium title-font mb-1">{{$t('_pedro.problems.interface.title')}}</h2>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">{{$t('_pedro.problems.interface.white_page.title')}}</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">{{$t('_pedro.problems.interface.white_page.text')}}</p>
            <a class="mt-3 text-purple-500 inline-flex items-center"> <NuxtLink :to="localePath('/pedro/interface/pageBlanche')">{{$t('_commons.learn_more')}}</NuxtLink>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">{{$t('_pedro.problems.interface.non_validate_goal.title')}}</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">{{$t('_pedro.problems.interface.non_validate_goal.text')}}</p>
            <a class="mt-3 text-purple-500 inline-flex items-center"><NuxtLink :to="localePath('/pedro/interface/butNonValide')">{{$t('_commons.learn_more')}}</NuxtLink>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      </div>
        </div>
</section>
</template>
