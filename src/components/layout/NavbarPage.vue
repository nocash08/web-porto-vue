<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-indigo-950 shadow-md">
    <div
      class="flex justify-between items-center py-4 px-6 lg:px-12 relative z-20 border-b border-black/100 dark:border-white/100"
    >
      <div class="text-3xl font-bold dark:text-white">PORTOFOLIO</div>

      <!-- Desktop Navbar Links -->
      <nav class="hidden md:flex space-x-8 items-center">
        <ul class="flex space-x-6">
          <li v-for="item in menu" :key="item.name">
            <a
              :href="item.href"
              :class="[
                'text-xl font-bold hover:text-yellow-300',
                isDarkMode ? 'text-white' : 'text-blue-900',
              ]"
              @click="scrollToSection(item.href)"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>

        <!-- Dark Mode Button -->
        <button @click="toggleDarkMode" class="ml-4 focus:outline-none">
          <Icon v-if="!isDarkMode" icon="line-md:moon-filled" class="text-3xl text-blue-900" />
          <Icon v-else icon="line-md:sunny-outline" class="text-3xl text-yellow-300" />
        </button>
      </nav>

      <!-- Mobile Menu Button -->
      <div class="md:hidden z-30 flex space-x-2 items-center">
        <button @click="toggleDarkMode" class="focus:outline-none">
          <Icon v-if="!isDarkMode" icon="line-md:moon-filled" class="text-3xl text-blue-900" />
          <Icon v-else icon="line-md:sunny-outline" class="text-3xl text-yellow-300" />
        </button>
        <button @click="isMenuOpen = !isMenuOpen" class="focus:outline-none">
          <Icon
            v-if="isMenuOpen"
            icon="material-symbols:close-rounded"
            class="text-4xl text-blue-900 dark:text-white"
          />
          <Icon
            v-else
            icon="material-symbols:menu-rounded"
            class="text-4xl text-blue-900 dark:text-white"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Navbar Links -->
    <nav
      :class="[
        'md:hidden fixed top-16 right-4 w-48 rounded-lg shadow-lg p-4 space-y-4 z-40',
        isMenuOpen ? 'block' : 'hidden',
        isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-blue-900',
      ]"
    >
      <ul class="flex flex-col items-center space-y-6">
        <li v-for="item in menu" :key="item.name">
          <a
            :href="item.href"
            :class="[
              'text-xl font-bold hover:text-yellow-300',
              isDarkMode ? 'text-white' : 'text-blue-900',
            ]"
            @click="scrollToSection(item.href)"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue"

const isMenuOpen = ref(false)

const menu = ref([
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
])

const scrollToSection = (href) => {
  isMenuOpen.value = false

  if (href === "#home") {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setTimeout(() => window.scrollTo({ top: 1, behavior: "smooth" }), 100)
    return
  }

  const section = document.querySelector(href)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

const isDarkMode = ref(localStorage.getItem("theme") === "dark")

const toggleDarkMode = () => {
  const html = document.documentElement
  if (isDarkMode.value) {
    html.classList.remove("dark")
    localStorage.setItem("theme", "light")
  } else {
    html.classList.add("dark")
    localStorage.setItem("theme", "dark")
  }

  isDarkMode.value = !isDarkMode.value
}
</script>
