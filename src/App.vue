<template>
  <div id="app">
    <main
      class="flex flex-wrap gap-0"
      :class="{ 'theme-dark': themeDarkActive }"
    >
      <div class="flex w-1/4 h-screen">
        <Sidebar @theme-changed="themeChanged" />
      </div>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Sidebar from "./components/Sidebar.vue";

export default defineComponent({
  name: "App",
  components: { Sidebar },

  setup() {
    const themeDarkActive = ref(false);

    const themeChanged = (isDarkMode: boolean) => {
      themeDarkActive.value = isDarkMode;
    };

    return { themeChanged, themeDarkActive };
  },
});
</script>

<style scoped></style>
