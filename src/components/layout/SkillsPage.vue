<template>
  <section id="skills" class="-mt-20 px-4 sm:px-6 lg:px-0">
    <SectionHeader title="My Skills" />
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Kiri: Deskripsi -->
      <div>
        <div class="border rounded-lg p-6 shadow-md bg-white dark:bg-[#1f1e1c]">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get to know me!</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            I hold a Bachelor's degree in Informatics Engineering, with expertise in building and
            managing websites applications that drive product success. Additionally, I specialize in
            software development passionate about building efficient and reliable software, with
            proven teamwork skills and a deep commitment to continuous learning. Specializing as a
            full-stack developer using JavaScript in professional settings. Eager to contribute
            technical expertise and collaborative abilities to support your organization's success
            while continuing to grow professionally.
          </p>
        </div>
      </div>

      <!-- Kanan: Daftar Skill -->
      <div>
        <ul class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-3 justify-items-center">
          <li
            v-for="(element, index) in skills"
            :key="index"
            :ref="(el) => (skillRefs[index] = el)"
            :class="[
              'h-24 w-24 sm:h-28 sm:w-28 flex flex-col justify-center items-center',
              'rounded-lg p-2 shadow-md border border-transparent hover:border-teal-400',
              'bg-white dark:bg-[#1f1e1c] text-center transition-all duration-700 ease-out transform',
              visibleItems[index]
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-6 scale-95',
            ]"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <Icon
              :icon="element.icon"
              class="text-xl sm:text-2xl text-teal-500 dark:text-teal-300 mb-1"
            />
            <p class="text-xs sm:text-sm font-medium text-gray-800 dark:text-white text-center">
              {{ element.title }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue"
import SectionHeader from "../UI/SectionHeader.vue"
import { Icon } from "@iconify/vue"

const skills = ref([
  { title: "HTML", icon: "fa6-brands:html5" },
  { title: "CSS", icon: "fa6-brands:css3-alt" },
  { title: "JavaScript", icon: "fa6-brands:js" },
  { title: "Golang", icon: "devicon:go" },
  { title: "PHP", icon: "fa6-brands:php" },
  { title: "Vue", icon: "fa6-brands:vuejs" },
  { title: "React", icon: "fa6-brands:react" },
  { title: "Express", icon: "simple-icons:express" },
  { title: "Laravel", icon: "fa6-brands:laravel" },
  { title: "MySQL", icon: "cib:mysql" },
  { title: "PostgreSQL", icon: "cib:postgresql" },
  { title: "MongoDB", icon: "cib:mongodb" },
  { title: "Tailwind", icon: "simple-icons:tailwindcss" },
  { title: "Git", icon: "fa6-brands:git-alt" },
  { title: "Docker", icon: "fa6-brands:docker" },
])

const visibleItems = ref(skills.value.map(() => false))
const skillRefs = ref([])

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = skillRefs.value.indexOf(entry.target)
          if (index !== -1) visibleItems.value[index] = true
        }
      })
    },
    { threshold: 0.3 },
  )

  skillRefs.value.forEach((el) => {
    if (el) observer.observe(el)
  })
})
</script>
