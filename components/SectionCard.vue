<template>
<div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-11 h-11 mr-3 inline-flex items-center justify-center rounded-full bg-red text-white flex-shrink-0">
                <img alt="icon" :src="require(`~/static/icons/${filename}`)">
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">{{ h2 }}</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">{{ p }}</p>
              <a class="mt-3 text-red inline-flex items-center"> <NuxtLink :to="localePath('')">{{$t('_commons.learn_more')}}</NuxtLink>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
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