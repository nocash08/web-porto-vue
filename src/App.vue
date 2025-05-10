<template>
  <h1 class="bg-[#D4EBF8] dark:bg-[#080326] min-h-screen">
    <Navbar />
  </h1>
</template>

<script setup>
import { defineAsyncComponent } from "vue"
const Navbar = defineAsyncComponent(() => import("@/components/layout/NavbarPage.vue"))
</script>
