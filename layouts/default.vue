<template>
  <div class="bg-secondary-light dark:bg-primary-dark">
    <AppHeader />
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>
    <AppFooter />
  </div>
</template>

<script>
import feather from "feather-icons";
export default {
  data: () => {
    return {
      // Todo
    };
  },
  mounted() {
    feather.replace();
  },
};
</script>

<style>
.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
