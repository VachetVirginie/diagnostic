<template>
</template>

<script>
export default {
  props: ["isOpen", "showModal", "modal", "categories"],
};
</script>

<style>
#nav .nuxt-link-exact-active,
#nav .nuxt-link-active {
  @apply text-indigo-700 dark:text-indigo-400;
  @apply font-medium;
}
</style>
