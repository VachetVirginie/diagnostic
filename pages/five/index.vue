<template>
    <section class="text-gray-600 body-font text-center dark:text-primary-light">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20 flex-col items-center ">
      <h1 class="sm:text-3xl text-2xl font-medium title-font">Probleme sur le Five.</h1>
    </div>
    <div class="flex flex-wrap -m-4 text-center">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-400 p-6 rounded-lg">
          <p class="leading-relaxed">Le loader tourne en boucle.</p>
          <button class="flex text-primary-light dark:text-primary-light  mx-auto mt-6 mb-5 bg-black border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"> <NuxtLink to="/pedro/serveur">Go!</NuxtLink></button>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4 text-center">
        <div class="border border-gray-400 p-6 rounded-lg">
          <p class="leading-relaxed">HightLight Tv.</p>
          <button class="flex text-primary-light dark:text-primary-light mx-auto mt-6 mb-5 bg-black border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"> <NuxtLink to="/pedro/interface/">Go!</NuxtLink></button>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4 text-center">
        <div class="border border-gray-400 p-6 rounded-lg">
          <p class="leading-relaxed">Trouver une session.</p>
          <button class="flex mx-auto mt-6 text-primary-light dark:text-primary-light mb-5 bg-black border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"> <NuxtLink to="/pedro/ia">Go!</NuxtLink></button>
        </div>
      </div>
    </div>
  </div>
</section>
</template>