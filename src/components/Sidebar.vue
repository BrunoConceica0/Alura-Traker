<template>
  <header class="header">
    <h1>
      <img
        src="../assets/logo.png"
        class="w-full h-full block object-cover object-center"
        alt="Logo da Alura Tracker"
      />
    </h1>
    <button @click="toggleDarkMode" class="btnBox btn-toggle-theme">
      {{ isDarkMode }}
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  name: "Sidebar",
  emits: ["theme-changed"],
  setup(_, { emit }) {
    const themeDarkActive = ref(false);
    const toggleDarkMode = () => {
      themeDarkActive.value = !themeDarkActive.value;
      emit("theme-changed", themeDarkActive.value);
    };
    const isDarkMode = computed(() =>
      themeDarkActive.value ? "Desativa modo escuro" : "Ativa modo escuro"
    );
    return { toggleDarkMode, isDarkMode, themeDarkActive };
  },
});
</script>

<style scoped></style>
