<template>
  <nav id="nav" class="sm:container sm:mx-auto">
    <!-- Header start -->
    <div class="z-10 max-w-screen-lg xl:max-w-screen-xl block flex justify-between sm:items-center py-6">
      <a class="text-indigo-500 inline-flex items-center text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
        <NuxtLink to="/">Home</NuxtLink>
      </a>
  <div class="title-font text-xl font-medium text-primary-dark dark:text-primary-light">
      <nuxt-link :to="switchLocalePath('fr')">Francais</nuxt-link>
      <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
  </div>
      <!-- Header right section buttons start -->
        <button
          @click="themeSwticher"
          class="
            ml-8
            bg-primary-light
            dark:bg-ternary-dark
            px-3
            py-2
            shadow-sm
            rounded-xl
            cursor-pointer
          "
        >
          <i
            v-if="$colorMode.value == 'dark'"
            v-html="iconSvg"
            class="text-gray-200 hover:text-gray-400 w-5"
          ></i>
          <i
            v-else
            v-html="iconSvg"
            class="
              text-liText-ternary-dark
              hover:text-gray-400
              dark:text-liText-ternary-light
              dark:hover:text-liBorder-primary-light
              w-5
            "
          ></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import feather from "feather-icons";

export default {
  data: () => {
    return {
      isOpen: false,
      modal: false,
      icon: "moon",
    };
  },

  computed: {
    ...mapState(["categories"]),
    iconSvg() {
      return feather.toSvg(this.icon);
    },
  },
  methods: {
    themeSwticher() {
      this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";

      if (this.icon == "moon") {
        this.icon = "sun";
      } else {
        this.icon = "moon";
      }
    },
    showModal() {
      if (this.modal) {
        // Stop screen scrolling
        document
          .getElementsByTagName("html")[0]
          .classList.remove("overflow-y-hidden");
        this.modal = false;
      } else {
        document
          .getElementsByTagName("html")[0]
          .classList.add("overflow-y-hidden");
        this.modal = true;
      }
    },
  },
};
</script>

<style></style>
