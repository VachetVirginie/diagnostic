<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="sm:text-3xl text-2xl text-red tracking-widest font-medium title-font mb-1">{{$t('_boo.title')}}</h2>
      </div>
      <div class="flex flex-wrap -m-4">
          <section-card filename="competition.png" :h2="$t('_boo.competition.title')" :p="$t('_home.boo.text')" :link="localePath('')" l:inkText="$t('_commons.learn_more')"/>
          <section-card filename="users.png" :h2="$t('_boo.user_rights.title')" :p="$t('_boo.user_rights.text')" :link="localePath('')" l:inkText="$t('_commons.learn_more')"/>
          <section-card filename="loupe.png" :h2="$t('_commons.session.find_session.title')" :p="$t('_commons.session.find_session.text')" :link="localePath('')" l:inkText="$t('_commons.learn_more')"/>
      </div>
    </div>
  </section>
</template>
