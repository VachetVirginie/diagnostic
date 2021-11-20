<template>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-primary-light dark:text-primary-light">Probleme serveur.</h1>
    </div>
    <div class="flex flex-wrap -m-4 text-center">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-200 p-6 rounded-lg">
          <h2 class="text-lg text-primary-light dark:text-primary-light font-medium text-primary-light dark:text-primary-light mb-2">Probleme Serveur web.</h2>
          <button class="flex mx-auto mt-6 text-primary-light dark:text-primary-light mb-5 bg-black border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"> <NuxtLink to="/pedro/serveur">Go!</NuxtLink></button>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4 text-center">
        <div class="border border-gray-200 p-6 rounded-lg">
          <h2 class="text-lg text-primary-light dark:text-primary-light font-medium text-primary-light dark:text-primary-light mb-2">Probleme Interface.</h2>
          <button class="flex mx-auto mt-6 text-primary-light dark:text-primary-light mb-5 bg-black border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"> <NuxtLink to="/pedro/interface/">Go!</NuxtLink></button>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4 text-center">
        <div class="border border-gray-200 p-6 rounded-lg">
          <h2 class="text-lg text-primary-light dark:text-primary-light font-medium text-primary-light dark:text-primary-light mb-2">Probleme Server IA.</h2>
          <button class="flex mx-auto mt-6 text-primary-light dark:text-primary-light mb-5 bg-black border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"> <NuxtLink to="/pedro/ia">Go!</NuxtLink></button>
        </div>
      </div>
    </div>
  </div>
</section>
</template>