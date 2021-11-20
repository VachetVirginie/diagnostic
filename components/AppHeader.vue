<template>
  <nav id="nav" class="sm:container sm:mx-auto">
    <!-- Header start -->
    <div
      class="
        z-10
        max-w-screen-lg
        xl:max-w-screen-xl
        block
        sm:flex sm:justify-between sm:items-center
        py-6
      "
    >
      <!-- Header menu links and small screen humberger menu start -->
      <div class="flex justify-between items-center px-6 sm:px-0">
        <!-- Header logos start -->
        <div>
        </div>
        <!-- Header logos end -->

        <!-- Theme switcher small screen start -->
        <button
          @click="themeSwticher"
          class="
            sm:hidden
            ml-8
            bg-primary-light
            dark:bg-ternary-dark
            px-2
            py-1.5
            sm:px-3 sm:py-2
            shadow-sm
            rounded-xl
            cursor-pointer
          "
        >
          <i
            v-if="$colorMode.value == 'dark'"
            v-html="iconSvg"
            class="text-gray-200 hover:text-gray-50 w-5"
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
        <!-- Theme switcher small screen end -->

        <!-- Small screen humberger menu start -->
        <div class="sm:hidden">
        </div>
        <!-- Small screen humberger menu end -->
      </div>
      <!-- Header menu links and small screen humberger menu end -->

      <!-- Header links start -->
      <AppNavigation
        :isOpen="isOpen"
        :showModal="showModal"
        :modal="modal"
        :categories="categories"
      />
      <!-- Header links end -->

      <!-- Header right section buttons start -->
      <div
        class="hidden sm:flex justify-between items-center flex-col md:flex-row"
      >
        <!-- Hire me button start -->
        <div>
        </div>
        <!-- Hire me button end -->

        <!-- Theme switcher largr screen start -->
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
