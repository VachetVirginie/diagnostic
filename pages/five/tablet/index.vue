<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="sm:text-3xl text-2xl text-red tracking-widest font-medium title-font mb-1">{{$t('_five.tablet.problems.title')}}</h2>
      </div>
      <div class="flex flex-wrap -m-4">
          <section-card filename="off.png" :h2="$t('_five.tablet.problems.tablet.title')" :p="$t('_five.tablet.problems.tablet.text')" link="/five/tablet/tabletcode" :linkText="$t('_commons.learn_more')"/>
      </div>
    </div>
  </section>
</template>