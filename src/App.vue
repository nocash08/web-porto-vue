<template>
  <h1 class="bg-[#D4EBF8] dark:bg-[#080326] min-h-screen">
    <Navbar />
    <HeroSection />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </h1>
</template>

<script setup>
import { defineAsyncComponent } from "vue"
const Navbar = defineAsyncComponent(() => import("@/components/layout/NavbarPage.vue"))
const HeroSection = defineAsyncComponent(() => import("@/components/layout/HeroSection.vue"))
const Skills = defineAsyncComponent(() => import("@/components/layout/SkillsPage.vue"))
const Projects = defineAsyncComponent(() => import("@/components/layout/ProjectsPage.vue"))
const Contact = defineAsyncComponent(() => import("@/components/layout/ContactPage.vue"))
const Footer = defineAsyncComponent(() => import("@/components/layout/FooterPage.vue"))
</script>
