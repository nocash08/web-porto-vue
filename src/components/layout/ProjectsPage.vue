<template>
  <section id="projects" class="relative mx-auto mt-20">
    <SectionHeader title="My Projects" />

    <!-- Custom Navigation Buttons -->
    <button
      class="swiper-prev absolute top-2/3 left-4 transform -translate-y-1/2 z-10 text-white dark:bg-yellow-600 bg-blue-900 p-4 rounded-full"
    >
      <Icon icon="line-md:arrow-left" class="font-bold text-3xl" />
    </button>
    <button
      class="swiper-next absolute top-2/3 right-4 transform -translate-y-1/2 z-10 text-white dark:bg-yellow-600 bg-blue-900 p-4 rounded-full"
    >
      <Icon icon="line-md:arrow-right" class="font-bold text-3xl" />
    </button>

    <!-- Swiper Component -->
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :navigation="navigationOptions"
      :loop="true"
      :pagination="true"
      :modules="[EffectCoverflow, Navigation]"
      class="max-w-full mt-10"
    >
      <swiper-slide class="max-w-[300px]" v-for="(project, index) in projects" :key="index">
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :image="'src/assets/images/' + project.image"
          :tags="project.tags"
          :liveLink="project.liveLink"
          :codeLink="project.codeLink"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import SectionHeader from "../UI/SectionHeader.vue"
import ProjectCard from "../UI/ProjectCard.vue"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/vue"
import { EffectCoverflow, Navigation } from "swiper/modules"
import { ref } from "vue"

// Define navigation options
const navigationOptions = {
  prevEl: ".swiper-prev",
  nextEl: ".swiper-next",
}

const projects = ref([
  {
    title: "UAV Flight Management",
    description:
      "UAV Flight Management is a system for recording and managing UAV missions, including UAV details to ensure efficient and well-documented flight operations.",
    image: "uav.png",
    tags: ["JavaScript", "Express", "PostgreSQL", "RestAPI"],
    liveLink: "/",
    codeLink: "https://github.com/nocash08/UAV-Flight-Management-Express",
  },
  {
    title: "Booking Hotel",
    description:
      "A hotel booking app is a digital platform that lets users search, select, and book hotel rooms online and also supports online payments.",
    image: "booking-hotel.png",
    tags: ["HTML", "CSS", "TypeScript", "NextJS", "Prisma", "PostgreSQL"],
    liveLink: "/",
    codeLink: "https://github.com/nocash08/booking-hotel-next",
  },
  {
    title: "Employee Management System KSP",
    description:
      "EMS application featuring document management, employee directory, and performance tracking for the company.",
    image: "EMS.png",
    tags: ["HTML", "CSS", "PHP", "Laravel", "MySQL"],
    liveLink: "/",
    codeLink: "/",
  },
])
</script>

<style>
.swiper-button-prev,
.swiper-button-next {
  cursor: pointer;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
