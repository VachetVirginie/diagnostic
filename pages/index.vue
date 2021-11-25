<template>
  <div class="container mx-auto">
    <section class="text-gray-600 body-font">
      {{ $t("hello")}}
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="~/static/images/background.jpg">
        </div>
        <h2 class="title-font text-2xl font-medium text-primary-dark dark:text-primary-light mt-6 mb-3">Boo</h2>
                <p class="leading-relaxed  text-primary-dark dark:text-primary-light text-primary-light dark:text-primary-light">{{ $t('_home.boo.text') }}</p>
        <button class="flex mx-auto mt-6 text-primary-light dark:text-primary-light bg-indigo-600 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-700 rounded"> <NuxtLink :to="localePath('/boo')">Boo</NuxtLink></button>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://www.sportmag.fr/wp-content/uploads/2018/09/Logo-le-Five-1.png">
        </div>
                <h2 class="title-font text-2xl font-medium text-primary-dark dark:text-primary-light mt-6 mb-3">Le Five</h2>
                <p class="leading-relaxed text-primary-dark dark:text-primary-light text-primary-light dark:text-primary-light">{{ $t('_home.five.text') }}</p>
        <button class="flex mx-auto mt-6 text-primary-light dark:text-primary-light mb-5 bg-indigo-600 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-700 rounded"> <NuxtLink :to="localePath('/five')">Five</NuxtLink></button>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="~/static/images/default.jpg">
        </div>
                <h2 class="title-font text-2xl font-medium text-primary-dark dark:text-primary-light mt-6 mb-3">Pedro</h2>
                <p class="leading-relaxed text-primary-dark dark:text-primary-light text-primary-light dark:text-primary-light">{{ $t('_home.pedro.text') }}</p>
        <button class="flex mx-auto mt-6 text-primary-light dark:text-primary-light mb-5 bg-indigo-600 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"> <NuxtLink :to="localePath('/pedro')">Pedro</NuxtLink></button>
      </div>
            <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/249376087_264124625722698_1600200859363254924_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=Pew2P4IhcaQAX9Lejrd&_nc_ht=scontent-cdt1-1.xx&oh=6e16abda8b01be54b9157f2a3809e448&oe=619FD453">
        </div>
                <h2 class="title-font text-2xl font-medium text-primary-dark dark:text-primary-light mt-6 mb-3">Mobile</h2>
                <p class="leading-relaxed text-primary-dark dark:text-primary-light text-primary-light dark:text-primary-light">{{ $t('_home.mobile.text') }}</p>
        <button class="flex mx-auto mt-6 text-primary-light dark:text-primary-light mb-5 bg-indigo-600 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"> <NuxtLink :to="localePath('/mobile')">Mobile</NuxtLink></button>
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
