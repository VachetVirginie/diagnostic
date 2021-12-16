<template>
           <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" :src="require(`~/static/images/${filename}`)">
        </div>
                <h2 class="title-font text-2xl font-medium text-primary-dark dark:text-primary-light mt-6 mb-3">{{ h2 }}</h2>
                <p class="leading-relaxed text-primary-dark dark:text-primary-light text-primary-light dark:text-primary-light">{{ p }}</p>
        <button class="flex mx-auto mt-6 text-primary-light dark:text-primary-light mb-5 bg-purple-600 border-0 py-2 px-5 focus:outline-none hover:bg-purple-600 rounded"> <NuxtLink :to="link">{{ linkText }}</NuxtLink></button>
      </div>
</template>

<script>
export default {
 props: {
    filename: {
      type: String,
      required: true
    },
    h2: {
      type: String,
      required: true
    },
    p: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true 
    },
    linkText: {
        type: String,
        required: true 
    }
  },   
}
</script>