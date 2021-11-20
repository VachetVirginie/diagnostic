<template>
    <section class="text-gray-600 body-font text-center dark:text-primary-light">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20 flex-col items-center ">
      <h1 class="sm:text-3xl text-2xl font-medium title-font">Probleme sur Boo.</h1>
    </div>
    <div class="flex flex-wrap -m-4 text-center">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="border border-gray-400 p-6 rounded-lg">
          <p class="leading-relaxed">Competition.</p>
          <button class="flex text-primary-light dark:text-primary-light  mx-auto mt-6 mb-5 bg-black border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"> <NuxtLink to="/pedro/serveur">Go!</NuxtLink></button>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4 text-center">
        <div class="border border-gray-400 p-6 rounded-lg">
          <p class="leading-relaxed">Droits des utilisateurs.</p>
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

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="sm:text-3xl text-2xl text-indigo-500 tracking-widest font-medium title-font mb-1">Problemes sur Boo.</h2>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">Les competitions.</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">Vous rencontrez un probleme relatif aux competitions.</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center"> <NuxtLink to="/boo">Learn More</NuxtLink>
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
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">Droits des utilisateurs.</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">Vous rencontrez un probleme relatif au droit d'un utilisateur.</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center"><NuxtLink to="/boo">Learn More</NuxtLink>
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
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">Trouver une session.</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">Vous n'arrivez pas a trouver une session.</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center"><NuxtLink to="/boo">Learn More</NuxtLink>
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
