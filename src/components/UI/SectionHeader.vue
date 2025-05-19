<template>
  <div class="relative flex justify-center items-center min-h-[200px]">
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-yellow-300 opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block"
    ></header>
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-yellow-300 opacity-30 dark:opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
    ></header>

    <!-- Title -->
    <h2
      class="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-300 stroke-text inline-block border-b-3 border-blue-900 dark:border-yellow-300 pb-2"
      data-aos="fade-up"
    >
      {{ title }}
    </h2>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
