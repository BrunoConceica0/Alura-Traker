<template>
  <header class="header">
    <h1>
      <img
        src="../assets/logo.png"
        class="w-full block object-cover object-center"
        alt="Logo da Alura Tracker"
      />
    </h1>
    <button @click="toggleDarkMode" class="btnBox btn-toggle-theme">
      {{ isDarkMode }}
    </button>

    <nav class="w-full max-w-md rounded bg-[#0d3b66] shadow-lg text-white">
      <ul class="flex flex-col divide-y divide-white/10">
        <li>
          <router-link :to="{ path: '/' }" class="link">
            <font-awesome-icon icon="fa-list-check" />
            <span class="text-sm font-medium">Tarefas</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/projects' }" class="link">
            <font-awesome-icon icon="fa-laptop-code" />
            <span class="text-sm font-medium">Projetos</span>
          </router-link>
        </li>
      </ul>
    </nav>
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

<style scoped>
.router-link-exact-active {
  background: #faf0ca;
  color: #0d3b66;
  font-weight: semibold;
}
</style>
