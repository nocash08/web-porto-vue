<template>
  <section
    id="home"
    data-aos="zoom-in"
    class="flex justify-center items-start dark:text-white min-h-screen mt-0 lg:mt-0"
  >
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-yellow-300 opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block"
    ></header>
    <header
      class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-yellow-300 opacity-30 dark:opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"
    ></header>
    <main class="absolute grid grid-cols-1 lg:grid-cols-2 items-start p-2 lg:p-30">
      <header class="order-2 lg:order-1 text-center lg:text-left mt-5 lg:mt-15">
        <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
          👋 Hi, i'm
          <span class="stroke-text dark:stroke-text">Tabina</span>
        </h1>
        <p class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold">
          Hello! I'm an Informatics Engineering graduate and a passionate software developer. I
          specialize in building responsive, user-friendly software applications and am committed to
          continuously improving my skills in front-end and back-end development.
        </p>
        <div class="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <a
            href="#contact"
            class="font-semibold text-lg w-full sm:w-[10rem] h-[55px] group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-lg duration-300 hover:shadow-purple-300 dark:from-yellow-400 dark:to-pink-500 dark:hover:from-yellow-500 dark:hover:to-pink-600 dark:text-white"
          >
            <span class="ml-1">Contact Me</span>
          </a>
          <a
            href="/Tabina_CV.pdf"
            download="Tabina_CV.pdf"
            class="font-semibold text-lg w-full sm:w-[10rem] h-[55px] dark:text-yellow-300 rounded-full border-2 dark:border-yellow-300 hover:scale-105 bg-white dark:bg-transparent flex justify-center items-center text-blue-900 border-blue-900"
          >
            <Icon icon="line-md:download-loop" />
            <span class="ml-1">Download CV</span>
          </a>
        </div>
      </header>
      <aside
        class="order-1 lg:order-2 flex justify-center lg:justify-end items-start mt-10 lg:-mt-5"
      >
        <div class="photo-container relative w-[280px] h-[350px] md:w-[420px] md:h-[420px]">
          <div class="absolute inset-0 rounded-xl shadow-2xl"></div>
          <div
            class="absolute -inset-1 rounded-xl bg-gradient-to-br from-yellow-300 via-purple-400 to-blue-500 opacity-30 blur-md"
          ></div>
          <div
            class="relative w-full h-full rounded-xl overflow-hidden shadow-lg border-4 border-white/5"
          >
            <img
              src="@/assets/images/photo-port.jpg"
              alt="Hero picture"
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <div class="absolute inset-0 shadow-inner pointer-events-none"></div>
          </div>
          <div
            class="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-yellow-300 via-purple-400 to-blue-500 opacity-30 blur-2xl"
          ></div>
        </div>
      </aside>
    </main>
    <svg class="hidden">
      <filter id="wavy1">
        <feTurbulence x="0" y="0" baseFrequency="0.2" numOctaves="5" seed="1"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
      </filter>
    </svg>
  </section>
</template>

<style scoped>
.container .card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: transparent;
}

.container .card:nth-of-type(1)::before {
  filter: url(#wavy1);
}

.photo-container {
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
}

.photo-container::after {
  content: "";
  position: absolute;
  inset: -3px;
  background: linear-gradient(45deg, #00c6cc, #785ae4, #fde047);
  z-index: -2;
  border-radius: 1rem;
  opacity: 0.7;
}
</style>
