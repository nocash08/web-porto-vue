<template>
  <section class="mt-10" id="contact">
    <SectionHeader title="Contact Me" />
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <form
        @submit="sendEmail"
        class="space-y-8 border-4 border-gray-500 dark:border-gray-500 rounded-2xl p-8 -mt-10"
      >
        <div v-for="(item, index) in inputs" :key="index">
          <Input
            v-model="formData[item.id]"
            :id="item.id"
            :label="item.label"
            :type="item.type"
            :placeholder="item.placeholder"
            :rows="item.rows"
          />
        </div>
        <div class="flex justify-between">
          <button
            type="submit"
            class="font-semibold text-lg w-[8rem] h-[55px] group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-lg duration-300 hover:shadow-purple-300 dark:from-yellow-400 dark:to-pink-500 dark:hover:from-yellow-500 dark:hover:to-pink-600 dark:text-white"
          >
            <span class="ml-1">Send</span>
          </button>
          <div class="mt-2 flex justify-center space-x-3 md:space-x-8">
            <a
              href="https://www.linkedin.com/in/muhamad-tabina-widyatna-1148ba27a/"
              class="text-gray-600 hover:text-blue-500"
              target="_blank"
            >
              <Icon icon="fa-brands:linkedin" style="font-size: 2rem" />
            </a>
            <a
              href="https://github.com/nocash08"
              class="text-gray-600 hover:text-gray-500"
              target="_blank"
            >
              <Icon icon="fa-brands:github" style="font-size: 2rem" />
            </a>
            <a
              href="https://wa.me/081280218224"
              class="text-gray-600 hover:text-green-500"
              target="_blank"
            >
              <Icon icon="fa-brands:whatsapp" style="font-size: 2rem" />
            </a>
            <a
              href="https://www.instagram.com/muhamadtabina"
              class="text-gray-600 hover:text-pink-500"
              target="_blank"
            >
              <Icon icon="fa-brands:instagram" style="font-size: 2rem" />
            </a>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import emailjs from "emailjs-com"
import { ref } from "vue"
import SectionHeader from "@/components/UI/SectionHeader.vue"
import Input from "@/components/UI/ContactInput.vue"
import { Icon } from "@iconify/vue"

const inputs = ref([
  {
    id: "email",
    label: "Your email",
    type: "email",
    placeholder: "email@example.com",
    rows: undefined,
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Let me know how i can help you",
    rows: undefined,
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Leave a message",
    rows: 6,
  },
])

const formData = ref({
  email: "",
  subject: "",
  message: "",
})

const sendEmail = (e) => {
  e.preventDefault()
  emailjs
    .send(
      "service_8yclost",
      "template_rkgjltf",
      {
        from_email: formData.value.email,
        subject: formData.value.subject,
        message: formData.value.message,
        to_email: "muhamadtabina12@gmail.com",
      },
      "Alf6Th_ijTRIbyNKf",
    )
    .then(
      () => {
        alert("Email sent successfully!")
        formData.value = { email: "", subject: "", message: "" }
      },
      (error) => {
        alert("Failed to send email: " + error.text)
      },
    )
}
</script>
