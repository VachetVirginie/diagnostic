<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="sm:text-3xl text-2xl text-red tracking-widest font-medium title-font mb-1">{{$t('_five.title')}}</h2>
      </div>
      <div class="flex flex-wrap -m-4">
          <section-card filename="cadenas.png" :h2="$t('_five.loader.title')" :p="$t('_five.loader.text')" :link="localePath('')" :linkText="$t('_commons.learn_more')"/>
          <section-card filename="tablet.png" :h2="$t('_five.tablet.title')" :p="$t('_five.tablet.text')" link="/five/tablet" :linkText="$t('_commons.learn_more')"/>
          <section-card filename="loupe.png" :h2="$t('_commons.session.find_session.title')" :p="$t('_commons.session.find_session.text')" :link="localePath('')" :linkText="$t('_commons.learn_more')"/>
      </div>
    </div>
  </section>
</template>
