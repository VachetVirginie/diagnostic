<template>
  <div class="container mx-auto">
    <div class="innercontent pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-red dark:border-red">
      <div class="flex flex-col justify-center items-center mb-12 sm:mb-28">
        <p class="text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5">
          {{ $t('_commons.resources')}}
        </p>
        <ul class="flex gap-4 sm:gap-8">
          <a href="https://lacefor.netlify.app." class="text-white hover:text-red dark:hover:text-red cursor-pointer rounded-lg bg-red dark:red hover:bg-gray-100 shadow-sm∫ p-4">
           FAQ
          </a>
        </ul>
      </div>
      <div class="flex justify-center items-center text-center">
        <div class="text-lg text-ternary-dark dark:text-ternary-light">
          &copy; Copyright {{ copyrightDate }} ❤️
          <a class="text-secondary-dark dark:text-secondary-light font-medium hover:underline">
            Diagnostic Tool
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import feather from "feather-icons";
export default {
  data: () => {
    return {
      // Todo
    };
  },
  computed: {
    ...mapState(["copyrightDate", "socialProfiles"]),
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style scoped></style>
