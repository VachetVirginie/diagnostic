<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="sm:text-3xl text-2xl text-red tracking-widest font-medium title-font mb-1">{{$t('_pedro.problems.camera.title')}}</h2>
      </div>
      <div class="flex flex-wrap -m-4">
          <section-card filename="off.png" :h2="$t('_pedro.problems.camera.camera_down.title')" :p="$t('_pedro.problems.camera.camera_down.text')" link="/pedro/camera/cameradown" :linkText="$t('_commons.learn_more')"/>
      </div>
    </div>
  </section>
</template>

