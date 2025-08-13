<template>
  <div class="mb-4 relative">
    <label :for="props.id" :id="props.id" class="">
      {{ props.text }}
    </label>
    <input
      :type="text"
      :id="props.id"
      :placeholder="props.subtlite"
      v-model="props.modalValue"
      :value="props.modalValue"
      class="project-input"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  subtlite: string;
  text: string;
  id: string;
  modalValue: string;
}>();
</script>
