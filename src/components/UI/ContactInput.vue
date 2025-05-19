<template>
  <div class="relative z-10">
    <label :for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      {{ label }}
    </label>
    <component
      :is="type === 'textarea' ? 'textarea' : 'input'"
      :v-model="modelValue"
      :id="id"
      :rows="type === 'textarea' ? rows : undefined"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="shadow-sm text-white text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 dark:bg-[#ffffff29] bg-gray-500"
    />
  </div>
</template>

<script setup>
defineProps(["id", "label", "type", "placeholder", "rows", "modelValue"])
defineEmits(["update:modelValue"])
</script>
