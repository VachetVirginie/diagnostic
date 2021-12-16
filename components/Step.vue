<template>
    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-red pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red text-white relative z-10 title-font font-medium text-sm">{{ stepNumber }}</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <p class="leading-relaxed">{{text}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
 props: {
    text: {
      type: String,
      required: true
    },
    stepNumber: {
      type: String,
      required: true
    },
  },   
}
</script>