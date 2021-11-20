<template>
  <div class="container mx-auto">
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://raw.githubusercontent.com/ngtvexperience/ApiPlatform/master/boo/static/img/background.jpg?token=AGJJEPY2NEW2G27LA2RV7RTBT6M7I">
        </div>
        <h2 class="title-font text-2xl font-medium text-primary-dark dark:text-primary-light mt-6 mb-3">Boo</h2>
                <p class="leading-relaxed  text-primary-dark dark:text-primary-light text-primary-light dark:text-primary-light">Vous rencontrez un probleme avec l'application gèrant?</p>
        <button class="flex mx-auto mt-6 text-primary-light dark:text-primary-light bg-indigo-600 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-700 rounded"> <NuxtLink to="/boo">Boo</NuxtLink></button>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="data:image/png;base64,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">
        </div>
                <h2 class="title-font text-2xl font-medium text-primary-dark dark:text-primary-light mt-6 mb-3">Le Five</h2>
                <p class="leading-relaxed text-primary-dark dark:text-primary-light text-primary-light dark:text-primary-light">Vous rencontrez un probleme avec le Five?</p>
        <button class="flex mx-auto mt-6 text-primary-light dark:text-primary-light mb-5 bg-indigo-600 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-700 rounded"> <NuxtLink to="/five">Five</NuxtLink></button>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://raw.githubusercontent.com/ngtvexperience/Pedro/master/frontend/static/img/background/default.jpg?token=AGJJEP4SBXPFDIRGQV7YGY3BT6M4W">
        </div>
                <h2 class="title-font text-2xl font-medium text-primary-dark dark:text-primary-light mt-6 mb-3">Pedro</h2>
                <p class="leading-relaxed text-primary-dark dark:text-primary-light text-primary-light dark:text-primary-light">Vous rencontrez un probleme avec l'application du centre?</p>
        <button class="flex mx-auto mt-6 text-primary-light dark:text-primary-light mb-5 bg-indigo-600 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"> <NuxtLink to="/pedro">Pedro</NuxtLink></button>
      </div>
    </div>
  </div>
</section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
