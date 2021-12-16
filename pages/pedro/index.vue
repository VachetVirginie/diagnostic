<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="sm:text-3xl text-2xl text-red tracking-widest font-medium title-font mb-1">{{$t('_pedro.title')}}</h2>
      </div>
      <div class="flex flex-wrap -m-4">
          <section-card filename="serveur.png" :h2="$t('_pedro.web_server.title')" :p="$t('_pedro.web_server.text')" link="" :linkText="$t('_commons.learn_more')"/>
          <section-card filename="ecran.png" :h2="$t('_pedro.interface.title')" :p="$t('_pedro.interface.text')" link="/pedro/interface/" :linkText="$t('_commons.learn_more')"/>
          <section-card filename="ia.png" :h2="$t('_pedro.ia_server.title')" :p="$t('_pedro.ia_server.text')" :link="localePath('')" :linkText="$t('_commons.learn_more')"/>
          
          <section-card filename="loupe.png" :h2="$t('_commons.session.find_session.title')" :p="$t('_commons.session.find_session.text')" :link="localePath('')" :linkText="$t('_commons.learn_more')"/>
          <section-card filename="camera.png" :h2="$t('_pedro.camera.title')" :p="$t('_pedro.camera.text')" link="/pedro/camera/" :linkText="$t('_commons.learn_more')"/>
          <section-card filename="live.png" :h2="$t('_pedro.live.title')" :p="$t('_pedro.live.text')" link="/pedro/live/" :linkText="$t('_commons.learn_more')"/>
      </div>
    </div>
  </section>
</template>
