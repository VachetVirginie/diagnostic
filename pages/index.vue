<template>
  <div class="container mx-auto">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <home-card filename="background.jpg" h2="Boo" :p="$t('_home.boo.text')" :link="localePath('/boo')" linkText="Boo"/>
      <home-card filename="five.png" h2="Le Five" :p="$t('_home.five.text')" :link="localePath('/five')" linkText="Five"/>
      <home-card filename="default.jpg" h2="Pedro" :p="$t('_home.pedro.text')" :link="localePath('/pedro')" linkText="Pedro"/>
      <home-card filename="mobile.jpg" h2="Mobile" :p="$t('_home.mobile.text')" :link="localePath('/mobile')" linkText="Mobile"/>
    </div>
  </div>
  </div>
</template>

<script>
import HomeCard from '../components/HomeCard.vue';
export default {
  components: { HomeCard }
};
</script>

<style scoped></style>
