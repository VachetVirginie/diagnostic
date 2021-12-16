<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="sm:text-3xl text-2xl text-red tracking-widest font-medium title-font mb-1">{{$t('_pedro.problems.interface.title')}}</h2>
      </div>
      <div class="flex flex-wrap -m-4">
          <section-card filename="page.png" :h2="$t('_pedro.problems.interface.white_page.title')" :p="$t('_pedro.problems.interface.white_page.text')" link="/pedro/interface/pageBlanche" :linkText="$t('_commons.learn_more')"/>
          <section-card filename="error.png" :h2="$t('_pedro.problems.interface.non_validate_goal.title')" :p="$t('_pedro.problems.interface.non_validate_goal.text')" link="/pedro/interface/butNonValide" :linkText="$t('_commons.learn_more')"/>
      </div>
    </div>
  </section>
</template>
